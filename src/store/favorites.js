export default {
    namespaced: true,

    state: {
        search: '', // Поисковая фраза
        list: [], // Список добавленных слов
        categoriesFitler: [], // Примененные фильтры категорий
    },

    mutations: {
        putCategoryFilter(state, id) {
            if (state.categoriesFitler.includes(id)) {
                const index = state.categoriesFitler.findIndex((cat) => cat === id);
                state.categoriesFitler.splice(index, 1);
            } else {
                state.categoriesFitler.push(id);
            }
        },

        setSearch(state, search) {
            state.search = search;
        },

        uploadStorage(state) {
            state.list = JSON.parse(localStorage.getItem('dictionary')) || [];
        },

        /** private Не использовать вне Vuex модуля. Использовать action putWord */
        updateStorage(state) {
            localStorage.setItem('dictionary', JSON.stringify(state.list));
        },

        /** private Не использовать вне Vuex модуля. Использовать action putWord */
        addWord(state, word) {
            state.list.push(word);
        },

        /** private Не использовать вне Vuex модуля. Использовать action putWord */
        removeWord(state, id) {
            const index = state.list.findIndex((word) => word.id === id);
            state.list.splice(index, 1);
        },

        changeList(state, list) {
            state.list = list.slice();
        },
    },

    actions: {
        putWord({ getters, commit }, word) {
            if (getters.hasId(word.id)) {
                commit('removeWord', word.id);
            } else {
                commit('addWord', word);
            }

            commit('updateStorage');
        },

        changeList({ commit }, list) {
            commit('changeList', list);
            commit('updateStorage');
        },
    },

    getters: {
        hasId: (state) => (id) => Boolean(state.list.find((word) => word.id === id)),

        hasFilter: (state) => (filterId) => state.categoriesFitler.includes(filterId),

        // eslint-disable-next-line arrow-body-style
        getSearchList: (state, getters) => getters.getFilteredList.filter(({ word }) => {
            return word.toLowerCase().includes(state.search.toLowerCase());
        }),

        getFilteredList: (state) => {
            if (!state.categoriesFitler.length) {
                return state.list;
            }
            return state.list.filter(({ category }) => {
                const ids = category.map(({ id }) => id);
                return ids.some((id) => state.categoriesFitler.includes(id));
            });
        },

        availableForms: (state) => state.list.reduce((res, { category }) => {
            category.forEach((cat) => {
                // eslint-disable-next-line no-param-reassign
                res[cat.id] = cat.text;
            });
            return res;
        }, {}),
    },
};
