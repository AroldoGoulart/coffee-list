import BottomSheet from "@/components/BottomSheet";
import { HelloWave } from "@/components/HelloWave";
import { Loading } from "@/components/Loading";
import { useCoffee } from "@/services/coffee";
import { Box, Container, Text, Image, Divider, Button, FlatList, Card, useColorMode, Pressable, View } from "native-base";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
export interface CoffeeItem {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}

function ProductItem(props: {
  item: CoffeeItem,
  setCoffee?: (item: CoffeeItem) => void

}) {
  const { item } = props;
  const {
    colorMode,
  } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Pressable
      bg={isDark ? 'gray.700' : 'gray.100'}
      px={`4`}
      py={`2.5`}
      rounded={10}
      onPress={() => props.setCoffee && props.setCoffee(item)}
      _pressed={{
        bg: isDark ? 'gray.800' : 'gray.200',
      }}
    >
      <Image
        source={{ uri: item.image }}
        alt={item.title}
        width={`100%`}
        height={200}
        roundedTopRight={10}
        roundedTopLeft={10}
      />
      <Text fontSize="xl" bold>{item.title}</Text>
      <Text>{item.description || 'No description'}</Text>
    </Pressable>
  );
}

function ProductList(props: { data: CoffeeItem[], setCoffee: (item: CoffeeItem) => void }) {
  const { data, setCoffee } = props;
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }: { item: CoffeeItem }) => <ProductItem
        setCoffee={setCoffee}
        item={item} />}
      keyExtractor={(item: CoffeeItem) => item.id.toString()}
      ItemSeparatorComponent={() => <Box my={`2`} />}
      mt={`4`}
    />
  )
}

export default function HomeScreen() {
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
          variant={`subtle`}
        >
          <Text
            backgroundColor={`red`}
          >Try again</Text>
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
        <ProductList data={data}
          setCoffee={toggleCoffee} />
      </Box>
      <BottomSheet
        height={300}
        isOpen={isOpen} toggleSheet={toggleSheet}>
        <Box p={4}>
          <Text fontSize="xl" bold>{currentCoffee?.title}</Text>
          <Text>{currentCoffee?.description}</Text>
          <Divider my={2} />
          <Text bold>Ingredients:</Text>
          <Box flex={1} flexDirection={`row`} flexWrap={`wrap`}>
          {
            currentCoffee?.ingredients?.length ? currentCoffee?.ingredients.map((item, index) => (
              <Text mr={`2`} key={index}>{item}</Text> 
            ))
            : <Text>No ingredients</Text>
          }
          </Box>
        </Box>
      </BottomSheet>
    </>
  );
}