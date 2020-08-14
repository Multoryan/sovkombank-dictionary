<template>
    <nav class="the-menu">
        <router-link :to="{ name: 'Favorites' }" class="the-menu__link">
            <UiIcon
                name="star"
                :size="24"
            />

            <span class="the-menu__link-text">
                Starred words
            </span>
        </router-link>
    </nav>
</template>

<script>
import UiIcon from '@/components/uikit/UiIcon.vue';

export default {
    name: 'TheMenu',

    components: {
        UiIcon,
    },
};
</script>

<style lang="scss">
.the-menu {
    &__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
        font-size: 18px;

        &-text {
            margin-left: 8px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
