<template>
    <div>
        <h2 class="pizza-form__title">Choose Your Pizza</h2>
        <div class="pizza-form__pizzas">
            <PizzaCard
            v-for="pizza in pizzas"
            :key="pizza.id"
            :pizza="pizza"
            :isSelected="selectedPizza?.id === pizza.id"
            @select="onSelect(pizza)"
        />
        </div>
    </div>
</template>

<script setup lang="ts">
import PizzaCard from './PizzaCard.vue'
import type { Pizza } from '../types/type'

defineProps<{
    pizzas: Pizza[]
    selectedPizza: Pizza | null
}>()

const emit = defineEmits<{
    (e: 'select', pizza: Pizza): void
}>()

function onSelect(pizza: Pizza) {
    emit('select', pizza)
}
</script>
