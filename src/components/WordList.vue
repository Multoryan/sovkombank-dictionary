<template>
    <div
        class="word-list"
        :is="isDraggable && words.length > 1 ? 'draggable' : 'div'"
        v-model="wordSort"
    >
        <Word
            v-for="word in words"
            :key="word.id"
            :word="word"
            :isDraggable="isDraggable && words.length > 1"
        />
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import Word from '@/components/Word.vue';

export default {
    name: 'WordList',

    components: {
        Word,
        draggable,
    },

    props: {
        words: {
            type: Array,
            default: () => [],
        },

        isDraggable: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        wordSort: {
            get() {
                return this.words;
            },
            set(val) {
                this.$emit('updateSort', val);
            },
        },
    },
};
</script>

<style lang="scss">
.word-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
}
</style>
