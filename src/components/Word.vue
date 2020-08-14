<template>
<div class="word">
    <div class="word__content">
        <UiIcon
            v-if="isDraggable"
            class="word__icon-drag"
            name="drag-horizontal-variant"
            :size="24"
        />

        <router-link :to="{ name: 'Word', params: { id: word.id } }" class="word__text">
            <b>{{ word.word | firstLetterUppercase }}</b>

            <i class="word__space">{{ categories }}</i>

            <span>{{ word.text }}</span>
        </router-link>
    </div>

    <FavoriteButton
        :word="word"
    />
</div>
</template>

<script>
import UiIcon from '@/components/uikit/UiIcon.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import firstLetterUppercase from '@/helpers/firstLetterUppercase';

export default {
    name: 'Word',

    components: {
        FavoriteButton,
        UiIcon,
    },

    filters: {
        firstLetterUppercase,
    },

    props: {
        word: {
            type: Object,
            required: true,
        },

        isDraggable: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        categories() {
            return this.word.category.map((lex) => lex.text).join(', ');
        },
    },
};
</script>

<style lang="scss">
.word {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $colorWhite;
    border-radius: $defaultBorderRadius;
    padding: $grid-gap 1.5*$grid-gap;

    &__content {
        display: flex;
        align-items: center;
    }

    &__icon-drag {
        margin-right: 8px;
    }

    &__text {
        max-width: 700px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
        color: inherit;
    }

    &__space {
        display: inline-block;
        margin: 0 2*$grid-gap;
    }
}
</style>
