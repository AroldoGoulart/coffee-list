import { Link, Stack } from 'expo-router';
import { Box, Pressable, Text } from 'native-base';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box flex={1} alignItems="center" justifyContent="center" p={5}>
        <Text fontSize="xl" bold>This screen doesn't exist.</Text>
        <Link href="/">
          <Pressable mt={4} py={4}>
            <Text color="blue.500" underline>Go to home screen!</Text>
          </Pressable>
        </Link>
      </Box>
    </>
  );
}
