import BottomSheet from "@/components/BottomSheet";
import Box from "@/components/Box";
import Filter from "@/components/Filter";
import { HelloWave } from "@/components/HelloWave";
import { Loading } from "@/components/Loading";
import ProductList from "@/components/ProductList";
import { useCoffee } from "@/services/coffee";
import { CoffeeItem } from "@/services/coffee/types";
import { Button, Divider, Text } from "native-base";

import { useCallback, useMemo, useState } from "react";
import { Keyboard } from "react-native";
import { useSharedValue } from 'react-native-reanimated';

function HomeScreen() {
  const { isLoading, data, refetch } = useCoffee();
  const [currentCoffee, setCurrentCoffee] = useState<CoffeeItem | null>(null);
  const [searchParams, setSearchParams] = useState<string>('');
  const isOpen = useSharedValue(false);

  const toggleSheet = useCallback(() => {
    isOpen.value = !isOpen.value;
  }, [isOpen]);

  const toggleCoffee = useCallback((item: CoffeeItem) => {
    setCurrentCoffee(item);
    toggleSheet();
  }, []);
  
  const cleanFilter = useCallback(() => {
    setSearchParams(``);
    Keyboard.dismiss();
  }, []);

  const filteredData = useMemo(() => {
    if(!data) return [];
    return data.filter((item) => item.title.toLowerCase().includes(searchParams.toLowerCase()));
  }, [data, searchParams]);

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
        <Box mb={'4'}>
          <Filter  searchParams={searchParams} setSearchParams={setSearchParams} />
        </Box>
        <Box flexDirection={`row`}>
          <Text fontSize="xl" bold>Hey Cofffe Lovers!</Text>
          <HelloWave />
        </Box>
        <ProductList data={filteredData} setCoffee={toggleCoffee} cleanSearch={cleanFilter} />
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