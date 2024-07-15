import { CoffeeItem } from "@/services/coffee/types"

export type ProductListType = {
    data: CoffeeItem[],
    setCoffee: (item: CoffeeItem) => void
}