import ToggleDarkMode from "@/components/ToggleDarkMode";
import { Box, Container, Text } from "native-base";

export default function HomeScreen() {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Text fontSize="xl" bold>Welcome to Tanstack!</Text>
      <ToggleDarkMode/>
    </Box>
  );
}