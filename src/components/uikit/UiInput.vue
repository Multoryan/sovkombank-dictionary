<template>
    <div class="ui-input">
        <input
            v-bind="$attrs"
            class="ui-input__input"
            :style="paddingRight"
            @input="input"
        />

        <div class="ui-input__append">
            <slot name="append" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UiInput',

    computed: {
        paddingRight() {
            if (!this.$slots.append) {
                return {};
            }

            return { paddingRight: '10px' };
        },
    },

    methods: {
        input(event) {
            this.$emit('input', event.target.value);
        },
    },
};
</script>

<style lang="scss">
.ui-input {
    position: relative;

    &__input {
        box-sizing: border-box;
        border: 1px solid #cee7fa;
        border-radius: $defaultBorderRadius;
        padding: 8px 12px;
        font-size: 16px;
        width: 100%;

        &:focus {
            outline: none;
            border-width: 2px;
            padding: 7px 11px;
        }
    }

    &__append {
        position: absolute;
        transform: translateY(-50%);
        right: 8px;
        top: 50%;
    }
}
</style>
