<template>
    <svg
        v-if="!isOpen"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        @click="emit('toggle')"
    >
        <path d="M4 18L20 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="M4 6L20 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <svg
        v-else
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
        fill="currentColor"
        @click="emit('toggle')"
    >
        <g transform="translate(91.52, 91.52)">
            <polygon points="328.96 30.2933333 298.666667 0 164.48 134.4 30.2933333 0 0 30.2933333 134.4 164.48 0 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48" />
        </g>
  </svg>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggle'])
defineProps<{
    isOpen: boolean
}>()
</script>

<style scoped lang="scss">
.icon {
    width: 24px;
    height: 24px;
    color: $color-pure-white;

    &:hover {
        color: $color-primary;
    }
}
</style>
