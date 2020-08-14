<template>
    <div class="page-home">
        <WordList
            :words="words"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import WordList from '@/components/WordList.vue';

export default {
    name: 'PageHome',

    components: {
        WordList,
    },

    computed: {
        ...mapState({
            words: 'searchResults',
            search: 'search',
        }),
    },
};
</script>
