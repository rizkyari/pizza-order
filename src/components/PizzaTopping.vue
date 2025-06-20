<template>
    <div v-if="selectedPizza" class="pizza-form__toppings">
        <h3 class="pizza-form__subtitle">Toppings</h3>
            <label
            v-for="topping in toppings"
            :key="topping.id"
            class="pizza-form__topping"
            :class="{
                'pizza-form__topping--disabled': !isToppingAllowed(topping.id),
                'pizza-form__topping--active': model.includes(topping.id)
            }"
            >
                <input
                type="checkbox"
                :value="topping.id"
                v-model="model"
                :disabled="!isToppingAllowed(topping.id)"
                />
                {{ topping.name }} (+${{ topping.price }})
            </label>
    </div>
</template>

<script lang="ts" setup>
import type { Pizza, Topping } from '../types/type'
import { computed } from 'vue'

const props = defineProps<{
  toppings: Topping[]
  selectedToppings: number[]
  selectedPizza: Pizza | null
}>()

const emit = defineEmits<{
  (e: 'update:selectedToppings', value: number[]): void
}>()

const model = computed({
  get: () => props.selectedToppings,
  set: (val) => emit('update:selectedToppings', val),
})

function isToppingAllowed(id: number): boolean {
  return props.selectedPizza?.toppings.includes(id) ?? false
}
</script>