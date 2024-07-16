import { CoffeeItem } from "@/services/coffee/types";
import { Button, FlatList, Text } from "native-base";
import Box from "../Box";
import ProductItem from "../ProductItem";
import { ProductListType } from "./types";

function ProductList(props: ProductListType) {
  const { data, setCoffee, cleanSearch } = props;
  
  if (data.length === 0) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="xl" bold>No coffee found!</Text>
        <Text fontSize="md">Oh no.. I can't find the coffee!</Text>
        <Button onPress={cleanSearch} mt={4}>
          Clean search
        </Button>
      </Box>
    )
  }

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