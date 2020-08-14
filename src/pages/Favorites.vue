<template>
    <div class="page-favorites">
        <WordList
            isDraggable
            :words="favorites"
            @updateSort="updateSort"
        />
    </div>
</template>

<script>
import WordList from '@/components/WordList.vue';

export default {
    name: 'PageFavorites',

    components: {
        WordList,
    },

    computed: {
        favorites() {
            return this.$store.getters['favorites/getSearchList'];
        },
    },

    methods: {
        updateSort(arr) {
            this.$store.dispatch('favorites/changeList', arr);
        },
    },
};
</script>
