<template>
    <button
        class="favorite-button"
        :title="title"
        @click="toggleFavorite"
    >
        <UiIcon
            :name="iconName"
            :size="24"
        />
    </button>
</template>

<script>
import UiIcon from '@/components/uikit/UiIcon.vue';

const ICON_FAVORITE = 'star';
const ICON_UNFAVORITE = 'star-outline';

const TITLE_FAVORITE = 'Remove from favorite';
const TITLE_UNFAVORITE = 'Add to favorite';

export default {
    name: 'FavoriteButton',

    components: {
        UiIcon,
    },

    props: {
        word: {
            type: Object,
            required: true,
        },
    },

    computed: {
        isFavorite() {
            return this.$store.getters['favorites/hasId'](this.word.id);
        },

        iconName() {
            return this.isFavorite ? ICON_FAVORITE : ICON_UNFAVORITE;
        },

        title() {
            return this.isFavorite ? TITLE_FAVORITE : TITLE_UNFAVORITE;
        },
    },

    methods: {
        toggleFavorite() {
            this.$store.dispatch('favorites/putWord', this.word);
        },
    },
};
</script>

<style lang="scss">
.favorite-button {
    border: none;
    background-color: inherit;
    color: #6ebffb;
    cursor: pointer;
    transition: opacity .2s ease-in-out;
    padding: 0;
    outline: none;

    &:hover {
        opacity: .8;
    }
}
</style>
