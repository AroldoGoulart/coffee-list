import BottomSheet from "@/components/BottomSheet";
import { HelloWave } from "@/components/HelloWave";
import { Loading } from "@/components/Loading";
import ProductList from "@/components/ProductList";
import { useCoffee } from "@/services/coffee";
import { CoffeeItem } from "@/services/coffee/types";
import { Box, Button, Divider, Text } from "native-base";

import { useState } from "react";
import {
  useSharedValue,
} from 'react-native-reanimated';

function HomeScreen() {
  const { isLoading, data, refetch } = useCoffee();
  const [currentCoffee, setCurrentCoffee] = useState<CoffeeItem | null>(null);

  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const toggleCoffee = (item: CoffeeItem) => {
    setCurrentCoffee(item);
    toggleSheet();
  }

  if (isLoading) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <Loading />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="xl" bold>Something went wrong!</Text>
        <Text fontSize="md">Oh god.. I can't find the coffee!</Text>
        <Button onPress={() => refetch()} mt={4}
          variant={'subtle'}
        >
          <Text>
            Try again
          </Text>
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box
        flex={1}
        px={'5'}
      >
        <Box flexDirection={`row`}>
          <Text fontSize="xl" bold>Hey Cofffe Lovers!</Text>
          <HelloWave />
        </Box>
        <ProductList data={data} setCoffee={toggleCoffee} />
      </Box>
      <BottomSheet
        height={300}
        isOpen={isOpen} toggleSheet={toggleSheet}>
        <Box p={'4'}>
          <Text fontSize="xl" bold>{currentCoffee?.title}</Text>
          <Text>{currentCoffee?.description}</Text>
          <Divider my={2} />
          <Text bold>Ingredients:</Text>
          <Box flex={1} flexDirection={`row`} flexWrap={`wrap`}>
          {
            currentCoffee?.ingredients?.length ? currentCoffee?.ingredients.map((item, index) => (
              <Text mr={'2'} key={index}>{item}</Text> 
            ))
            : <Text>No ingredients</Text>
          }
          </Box>
        </Box>
      </BottomSheet>
    </>
  );
}

export default HomeScreen;