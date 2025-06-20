<template>
    <div class="pizza-form__sidebar" v-if="selectedPizza">
        <div class="pizza-form__summary">
            <h3 class="summary__title">Payment Summary</h3>
            <ul class="summary__list">
                <li class="summary__item">
                    <span>{{ selectedPizza?.name }}</span>
                    <span class="summary__item-price">{{ basePrice.toFixed(2) }}$</span>
                </li>
                <li class="summary__item">
                    <span>Size - {{ selectedSize }}</span>
                    <span class="summary__item-price">{{ sizePrice.toFixed(2) }}$</span>
                </li>
                <li class="summary__item" v-for="id in selectedToppings" :key="id">
                    <span>{{ getToppingName(id) }}</span>
                    <span class="summary__item-price">{{ getToppingPrice(id).toFixed(2) }}$</span>
                </li>
            </ul>

            <hr class="summary__divider" />

            <div class="summary__total">
                <span>Total Price</span>
                <span class="summary__total-amount">${{ totalPrice.toFixed(2) }}</span>
            </div>

            <button class="summary__button" @click="handleOrder">Order Now</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Pizza } from '../types/type'

defineProps<{
    selectedPizza: Pizza | null
    selectedSize: string
    selectedToppings: number[]
    basePrice: number
    sizePrice: number
    totalPrice: number
    getToppingName: (id: number) => string
    getToppingPrice: (id: number) => number
}>()

const emit = defineEmits<{
    (e: 'order'): void
}>()

function handleOrder() {
    emit('order')
}
</script>
