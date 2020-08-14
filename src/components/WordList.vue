<template>
    <div
        v-model="wordSort"
        class="word-list"
        :is="draggable ? 'draggable' : 'div'"
    >
        <Word
            v-for="word in words"
            :key="word.id"
            :word="word"
            :isDraggable="draggable"
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

        draggable() {
            return this.isDraggable && this.words.length > 1;
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
