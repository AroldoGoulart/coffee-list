import { CoffeeItem } from "@/services/coffee/types"

export type ProductItemType = {
    item: CoffeeItem,
    setCoffee?: (item: CoffeeItem) => void
}