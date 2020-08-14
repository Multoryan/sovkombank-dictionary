<template>
    <div
        v-on="$listeners"
        class="ui-icon"
        v-html="require(`@/assets/icons/${name}.svg`)"
        :style="style"
    >
    </div>
</template>

<script>
export default {
    name: 'UiIcon',

    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 24,
        },
    },

    computed: {
        style() {
            if (this.size === null) {
                return {};
            }

            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
            };
        },
    },
};
</script>
