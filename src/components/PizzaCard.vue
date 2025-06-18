<template>
  <div
    class="pizza-card"
    :class="{ 'pizza-card--selected': isSelected }"
    @click="$emit('select', pizza)"
  >
    <div>
      <img
      v-if="pizza.discount?.is_active"
      :src="ribbonImg"
      alt="Offer"
      class="pizza-card__badge"
    />

    <img
      class="pizza-card__image"
      :src="pizza.image"
      :alt="pizza.name"
    />
    </div>

    <div class="pizza-card__info">
      <h3 class="pizza-card__name">{{ pizza.name }}</h3>
      <div class="pizza-card__price">
        ${{ pizza.discount?.final_price < pizza.price ? pizza.discount?.final_price.toFixed(2) : pizza.price.toFixed(2) }}
        <span
          v-if="pizza.discount?.final_price < pizza.price"
          class="pizza-card__price--old"
        >
          ${{ pizza.price.toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ribbonImg from '@/assets/img/ribbon.svg'
defineProps<{
  pizza: {
    id: number
    name: string
    image?: string
    price: number
    discount: {
      is_active: boolean
      final_price: number
    }
  }
  isSelected: boolean
}>()

defineEmits<{
  (e: 'select', pizza: any): void
}>()
</script>

<style scoped lang="scss">
.pizza-card {
  position: relative;
  width: 90%;
  padding: $space-md;
  border-radius: $radius-md;
  background-color: $color-white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
  box-shadow: $shadow-soft;

  &--selected {
    background-color: $color-primary;
    color: $color-white;

    .pizza-card__name,
    .pizza-card__price {
      color: $color-white;
    }
  }

  &__badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: auto;
  }

  &__image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: $space-sm;
    transition: transform 0.6s ease;
  }

  &:not(&--selected):hover {
    background-color: $color-primary-30;

    .pizza-card__image {
      transform: rotate(20deg);
    }
  }

  &__name {
    font-size: $font-card-title;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0;
  }

  &__price {
    font-size: 16px;
    font-weight: 500;

    &--old {
      text-decoration: line-through;
      opacity: 0.6;
      margin-left: 6px;
      font-size: 14px;
    }
  }

  &__info {
    margin-left: 20px;
  }
}
</style>
