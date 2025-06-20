export interface Pizza {
  id: number
  name: string
  price: number
  discount: {
    is_active: boolean
    final_price: number
  }
  toppings: number[]
}

export interface Size {
  id: number
  name: string
  extra_price: number
}

export interface Topping {
  id: number
  name: string
  price: number
}