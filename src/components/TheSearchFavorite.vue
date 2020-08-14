<template>
    <form class="the-search">
        <UiInput
            v-model.trim="textSearch"
        >
            <UiIcon
                slot="append"
                class="the-search__icon"
                name="magnify"
                :size="24"
            />
        </UiInput>

        <UiCheckbox
            v-for="filter in availableFilters"
            :key="filter.id"
            :value="hasFilter(filter.id)"
            @change="changeFilter(filter.id)"
        >
            {{ filter.text }}
        </UiCheckbox>
    </form>
</template>

<script>
import UiInput from '@/components/uikit/UiInput.vue';
import UiIcon from '@/components/uikit/UiIcon.vue';
import UiCheckbox from '@/components/uikit/UiCheckbox.vue';

export default {
    name: 'TheSearch',

    components: {
        UiInput,
        UiIcon,
        UiCheckbox,
    },

    computed: {
        availableFilters() {
            return Object.entries(this.$store.getters['favorites/availableForms']).map(([key, value]) => ({
                id: key,
                text: value,
            }));
        },

        textSearch: {
            get() {
                return this.$store.state.favorites.search;
            },
            set(val) {
                this.$store.commit('favorites/setSearch', val);
            },
        },
    },

    methods: {
        hasFilter(id) {
            return this.$store.getters['favorites/hasFilter'](id);
        },

        changeFilter(id) {
            this.$store.commit('favorites/putCategoryFilter', id);
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
