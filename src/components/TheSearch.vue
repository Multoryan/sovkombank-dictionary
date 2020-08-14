<template>
    <form class="the-search" @submit.prevent="search">
        <UiInput
            v-model="textSearch"
        >
            <UiIcon
                slot="append"
                class="the-search__icon"
                name="magnify"
                :size="24"
            />
        </UiInput>
    </form>
</template>

<script>
import UiInput from '@/components/uikit/UiInput.vue';
import UiIcon from '@/components/uikit/UiIcon.vue';

export default {
    name: 'TheSearch',

    components: {
        UiInput,
        UiIcon,
    },

    computed: {
        textSearch: {
            get() {
                return this.$store.state.search;
            },
            set(val) {
                this.$store.commit('setSearch', val);
            },
        },
    },

    methods: {
        async search() {
            await this.$store.dispatch('searchWords', {});
        },
    },
};
</script>

<style lang="scss">
.the-search {
    &__icon {
        color: #dddddd;
    }
}
</style>
