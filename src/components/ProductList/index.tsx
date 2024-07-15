import { CoffeeItem } from "@/services/coffee/types";
import { Box, FlatList } from "native-base";
import ProductItem from "../ProductItem";
import { ProductListType } from "./types";

function ProductList(props: ProductListType) {
  const { data, setCoffee } = props;
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }: { item: CoffeeItem }) => <ProductItem setCoffee={setCoffee} item={item} />}
      keyExtractor={(item: CoffeeItem) => item.id.toString()}
      ItemSeparatorComponent={() => <Box my={'2'} />}
      mt={'4'}
    />
  )
}

export default ProductList;