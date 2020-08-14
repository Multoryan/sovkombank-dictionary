<template>
    <div class="word">
        <span>Здесь может быть более детальная информация о слове из параметра word</span>
        <span>Word: <b>{{ word[0].word }}</b></span>
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

<style lang="scss">
.word {
    display: flex;
    flex-direction: column;
}
</style>
