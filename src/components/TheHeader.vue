<template>
    <header class="the-header">
        <TheLogo />

        <TheMenu />
    </header>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import TheMenu from '@/components/TheMenu.vue';

export default {
    name: 'TheHeader',

    components: {
        TheLogo,
        TheMenu,
    },
};
</script>

<style lang="scss">
.the-header {
    display: flex;
    justify-content: space-between;
    padding: 4*$grid-gap;
    border-radius: $defaultBorderRadius;
    background-color: $colorPrimary;
}
</style>
