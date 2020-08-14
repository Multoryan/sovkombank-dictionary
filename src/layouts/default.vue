<template>
    <div class="layout-default">
        <div class="layout-default__header">
            <TheHeader />
        </div>

        <div
            v-if="$route.meta.title"
            class="layout-default__title"
        >
            <h1>{{ $route.meta.title }}</h1>
        </div>

        <div class="layout-default__sidebar">
            <router-view name="sidebar" />
        </div>

        <div class="layout-default__content">
            <router-view />
        </div>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
    name: 'LayoutDefault',

    components: {
        TheHeader,
    },

    mounted() {
        this.$store.commit('favorites/uploadStorage');
    },
};
</script>

<style lang="scss">
.layout-default {
    display: grid;
    grid-template-areas:
        'header header'
        'title title'
        'sidebar content';
    grid-template-columns: 30% 1fr;
    grid-gap: 3*$grid-gap;
    max-width: $maxWidthContent;
    margin: 0 auto;

    &__header {
        grid-area: header;
    }

    &__title {
        grid-area: title;
        color: $colorHeader;
        text-align: left;
    }

    &__sidebar {
        grid-area: sidebar;
        background-color: $colorSidebar;
    }

    &__content {
        grid-area: content;
    }
}
</style>
