import { Image, Pressable, Text, useColorMode } from "native-base";
import { ProductItemType } from "./types";

function ProductItem(props: ProductItemType) {
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

export default ProductItem;