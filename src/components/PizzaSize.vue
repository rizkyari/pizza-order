<template>
  <div v-if="selectedPizza" class="pizza-form__sizes">
    <h2 class="pizza-form__title">Custom Pizza</h2>
    <h3 class="pizza-form__subtitle">Size</h3>
    <div class="pizza-form__size-options">
      <label
        v-for="size in sizes"
        :key="size.name"
        class="pizza-form__size"
        :class="{ 'pizza-form__size--active': selectedSize === size.name }"
      >
        <input
          type="radio"
          :id="size.name"
          :value="size.name"
          v-model="model"
        />
        {{ size.name }}
        <span v-if="size.extra_price" class="pizza-form__extra-price">
          (+{{ size.extra_price }}$)
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Pizza, Size } from '../types/type'
const props = defineProps<{
  sizes: Size[]
  selectedSize: string
  selectedPizza: Pizza | null
}>()
const emit = defineEmits<{
  (e: 'update:selectedSize', value: string): void
}>()
const model = computed({
  get: () => props.selectedSize,
  set: (val) => emit('update:selectedSize', val),
})
</script>
