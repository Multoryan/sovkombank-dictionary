<template>
    <div class="word">
        Word: {{ word[0].word }}
    </div>
</template>

<script>
export default {
    name: 'Word',

    async mounted() {
        const { results } = await this.$store.dispatch('getWordInfo', { id: this.$route.params.id });
        this.word = { ...results };
    },

    data: () => ({
        word: {},
    }),
};
</script>
