<template>
    <div id="app">
        <LayoutDefault />
    </div>
</template>

<script>
import LayoutDefault from '@/layouts/default.vue';

export default {
    name: 'TheApp',

    components: {
        LayoutDefault,
    },
};
</script>

<style lang="scss">
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #f8f4f4;
}
</style>
