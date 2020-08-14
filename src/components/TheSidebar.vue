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
    padding: 16px;
    border-radius: 4px;
}
</style>
