<template>
    <div class="logo">
        <router-link to="/" class="logo__link">Word Keeper</router-link>
    </div>
</template>

<script>
export default {
    name: 'TheLogo',
};
</script>

<style lang="scss">
.logo {
    &__link {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 24px;
    }
}
</style>
