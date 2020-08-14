<template>
    <div class="ui-checkbox">
        <label>
            <input
                v-on="$listeners"
                v-bind="$attrs"
                type="checkbox"
            />

            <slot />
        </label>
    </div>
</template>

<script>
export default {
    name: 'UiCheckbox',
};
</script>
