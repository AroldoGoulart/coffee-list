import Box from "@/components/Box";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import { Text } from "native-base";

export default function TabTwoScreen() {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Text fontSize="xl" bold>
        DarkMode Toggle
      </Text>
      <ToggleDarkMode />
    </Box>
  );
}
