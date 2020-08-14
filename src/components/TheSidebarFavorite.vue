<template>
    <aside class="the-sidebar">
        <TheSearchFavorite />
    </aside>
</template>

<script>
import TheSearchFavorite from '@/components/TheSearchFavorite.vue';

export default {
    name: 'TheSidebar',

    components: {
        TheSearchFavorite,
    },
};
</script>

<style lang="scss">
.the-sidebar {
    padding: 2*$grid-gap;
    border-radius: $defaultBorderRadius;
}
</style>
