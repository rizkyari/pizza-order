<template>
    <teleport to="body">
        <div class="modal-backdrop" @click.self="onClose">
            <div class="modal-content">
                <slot />
                <button class="modal-close" @click="onClose">Close</button>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
defineProps<{
    onClose: () => void
}>()
</script>

<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: $color-pure-white;
    border-radius: $radius-md;
    padding: $space-lg;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-width: 360px;
    width: 90%;
    animation: fadeIn 0.2s ease;
}

.modal-close {
    margin-top: $space-md;
    padding: $space-sm $space-md;
    background-color: $color-primary;
    border: none;
    color: white;
    border-radius: $radius-pill;
    font-weight: bold;
    cursor: pointer;
    width: 100%;

  &:hover {
    background-color: $color-primary-darken;
  }
}

@keyframes fadeIn {
    from {
        transform: scale(0.95);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
