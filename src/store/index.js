import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/helpers/api';
import favorites from '@/store/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        search: '', // Поисковое слово
        searchResults: [],
    },
    mutations: {
        setSearch(state, text = '') {
            state.search = text;
        },

        setTransformResults(state, results) {
            state.searchResults = results.map((word) => {
                // Для некоторых слов приходят ссылки на другие слова,
                // от которых оно было образовано.
                // Искомое слово стоит первым, ссылка нам не нужна по задаче.
                const [firstWord] = word;

                // Очень шаткая строка. Надо детальнее изучить API, чтобы понимать в каких случаях
                // вдруг может придти пустой массив или что то еще.
                // Также понять нужны ли несколько записей
                const text = firstWord.lexicalEntries[0].entries[0].senses[0].definitions.join('. ');

                return {
                    id: firstWord.id,
                    word: firstWord.word,
                    category: firstWord.lexicalEntries.map((lex) => lex.lexicalCategory),
                    text,
                };
            });
        },
    },
    actions: {
        async searchWords({ state, commit, dispatch }, { limit = 10, prefix = true }) {
            const { data } = await api.get('/apix/search/thesaurus/en', {
                params: {
                    q: state.search,
                    limit,
                    prefix,
                    lexicalCategory: 'noun,adjective,verb',
                },
                headers: {
                    'X-Request-Id': Math.random().toString().slice(2),
                },
            });

            // В идеале конечно этого не делать.
            // Желательно чтобы поиск уже возращал необходимые параметры.
            // Из-за того что данных не хватает, приходится делать
            // дополнительно 10 запросов
            const datas = await Promise.all(data.results.map(async (item) => {
                try {
                    const { results } = await dispatch('getWordInfo', item);
                    return results;
                } catch (e) {
                    // Если что то пошло не так с одним из запросов, то он будет null
                    // Пример: Вызвать этот запрос с параметром `fre`, один из элементов вернет 404
                    return null;
                }
            }));

            commit('setTransformResults', datas.filter(Boolean));
        },

        async getWordInfo(_ctx, { id }) {
            const { data } = await api.get('/apix/words/en-gb', {
                params: {
                    q: id,
                },
            });
            return data;
        },
    },

    modules: {
        favorites,
    },
});
