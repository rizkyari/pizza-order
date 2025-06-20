<template>
  <section class="pizza-form">
    <div class="pizza-form__content">
      <div class="pizza-form__main">
        <!-- Selection -->
        <PizzaSelection
          :pizzas="pizzas"
          :selectedPizza="selectedPizza"
          @select="onPizzaSelect"
        />
        <!-- Size -->
        <PizzaSize
        :sizes="sizes"
        v-model:selectedSize="selectedSize"
        :selectedPizza="selectedPizza"
        />

        <!-- Toppings -->
        <PizzaTopping
        :toppings="toppings"
        v-model:selectedToppings="selectedToppings"
        :selectedPizza="selectedPizza"
        />
      </div>

      <div>
        <!-- Summary -->
        <PizzaSummary
        v-if="selectedPizza"
        :selectedPizza="selectedPizza"
        :selectedSize="selectedSize"
        :selectedToppings="selectedToppings"
        :basePrice="basePrice"
        :sizePrice="sizePrice"
        :totalPrice="totalPrice"
        :getToppingName="getToppingName"
        :getToppingPrice="getToppingPrice"
        @order="handleOrder"
        />
      </div>
    </div>
    <BaseModal v-if="showModal" :onClose="() => (showModal = false)">
      <img src="@/assets/img/icons/success-icon.svg" alt="Success" width="80" />
      <h2>Order Success</h2>
      <p>Thank you, we have received your order successfully.</p>
    </BaseModal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Pizza, Topping, Size } from '../types/type'
import BaseModal from './BaseModal.vue'
import PizzaSelection from './PizzaSelection.vue'
import PizzaSize from './PizzaSize.vue'
import PizzaTopping from './PizzaTopping.vue'
import PizzaSummary from './PizzaSummary.vue'

// JSON & pizza images
import pizzaList from '../assets/json/pizza-list.json'
import sizeList from '../assets/json/size-list.json'
import toppingList from '../assets/json/topping-list.json'
import pizza1Img from '../assets/img/pizza/cheese.png'
import pizza2Img from '../assets/img/pizza/veggie.png'
import pizza3Img from '../assets/img/pizza/classic.png'

const sizes = (sizeList as { data: Size[] }).data
const toppings = (toppingList as { data: Topping[] }).data
const imageMap: Record<number, string> = {
  1: pizza1Img,
  2: pizza2Img,
  3: pizza3Img
}
const selectedPizza = ref<Pizza | null>(null)
const selectedSize = ref<string>('Small')
const selectedToppings = ref<number[]>([])
const pizzas = ((pizzaList as { data: Pizza[] }).data).map((pizza) => ({
  ...pizza,
  image: imageMap[pizza.id] ?? ''
}))
const showModal = ref(false)

function handleOrder() {
  showModal.value = true
}

function onPizzaSelect(pizza: Pizza) {
  selectedPizza.value = pizza
  selectedSize.value = 'Small'
  selectedToppings.value = []
}

function getSizePrice(): number {
  const size = sizes.find((s) => s.name === selectedSize.value)
  return size?.extra_price ?? 0
}

function getToppingPrice(toppingId: number): number {
  const topping = toppings.find((t) => t.id === toppingId)
  return topping?.price ?? 0
}

const totalPrice = computed(() => {
  if (!selectedPizza.value) return 0

  const base = selectedPizza.value.price
  const sizeExtra = getSizePrice()
  const toppingsTotal = selectedToppings.value.reduce((sum, id) => {
    return sum + getToppingPrice(id)
  }, 0)

  return base + sizeExtra + toppingsTotal
})

const basePrice = computed(() =>
  selectedPizza.value?.discount?.is_active
    ? selectedPizza.value.discount.final_price
    : selectedPizza.value?.price ?? 0
)

const sizePrice = computed(() => getSizePrice())

function getToppingName(id: number): string {
  return toppings.find((t) => t.id === id)?.name ?? ''
}
</script>

<style lang="scss">
.pizza-form {
  background-color: $color-white;

  &__title {
    font-size: $font-h1;
    font-weight: 700;
    margin-bottom: $space-md;
    color: $color-primary;
  }

  &__pizzas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: $space-md;
    margin-bottom: $space-lg;

     @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    } 

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__subtitle {
    font-size: $font-subtitle-md;
  }

  &__sizes,
  &__toppings {
    margin-bottom: $space-lg;
  }

  &__size {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    gap: 8px;
    margin-right: $space-lg;
    cursor: pointer;

    input[type='radio'] {
      display: none;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid $color-gray;
      border-radius: 50%;
      background-color: white;
      transition: all 0.2s ease;
    }

    &--active {
      &::before {
        background-color: $color-primary;
        border-color: $color-primary;
        box-shadow: inset 0 0 0 4px white;
      }
    }
  }
  
  &__extra-price {
    color: $color-gray;
  }

  &__topping {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin: $space-xs;
    padding: $space-sm $space-md;
    border-radius: $radius-pill;
    border: 1px solid $color-black-50;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s ease;
    background-color: $color-white;
    color: $color-black;

    input {
      display: none;
    }

    span {
      font-size: 13px;
      color: $color-link;
    }

    &--active {
      background-color: $color-primary-30;
      color: $color-primary;
      border-color: $color-primary;

      span {
        color: white;
      }
    }

    &--disabled {
      background-color: $color-disabled;
      color: $color-text-disabled;
      cursor: not-allowed;
      border: none;
    }

    &:not(&--disabled):hover {
      border-color: $color-primary;
      color: $color-primary;
    }
  }

  &__content {
    display: flex;
    gap: $space-xl;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__main {
    flex: 3;
  }

  &__sidebar {
    flex: 1;
    position: sticky;
    top: $space-lg;
    align-self: flex-start;
    background-color: $color-white;
  }

  &__summary {
    padding: $space-lg;
    background-color: $color-pure-white;
    border-radius: $radius-md;
    box-shadow: $shadow-medium;
    min-width: 220px;

    .summary__title {
      color: $color-primary;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: $space-md;
    }

    .summary__list {
      list-style: none;
      padding: 0;
      margin: 0 0 $space-md 0;
    }

    .summary__item {
      display: flex;
      justify-content: space-between;
      margin-bottom: $space-xs;
      color: $color-neutral;
      font-size: 15px;

      &-price {
        color: $color-black;
      }
    }

    .summary__divider {
      border: none;
      border-top: 1px solid $color-disabled;
      margin: $space-md 0;
    }

    .summary__total {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      font-size: 16px;
      margin-bottom: $space-md;
    }

    .summary__total-amount {
      color: $color-primary;
      font-weight: 700;
    }

    .summary__button {
      width: 100%;
      padding: $space-sm $space-md;
      background-color: $color-primary;
      color: white;
      border: none;
      border-radius: $radius-pill;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $color-primary-darken;
        color: $color-white;
      }
    }
  }
}
</style>