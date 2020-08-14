<template>
    <aside class="the-sidebar">
        <TheSearch />
    </aside>
</template>

<script>
import TheSearch from '@/components/TheSearch.vue';

export default {
    name: 'TheSidebar',

    components: {
        TheSearch,
    },
};
</script>

<style lang="scss">
.the-sidebar {
    padding: 2*$grid-gap;
    border-radius: $defaultBorderRadius;
}
</style>
