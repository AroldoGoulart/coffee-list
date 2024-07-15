import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { Pressable, Text } from 'native-base';
import { View } from '../View';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Pressable
        //style={styles.heading}
        flexDir={'row'}
        alignItems={'center'}
        onPress={() => setIsOpen((value) => !value)}
      >
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
        />
        <Text>{title}</Text>
      </Pressable>
      {isOpen && <View marginTop={'1'} marginLeft={'1.5'} >{children}</View>}
    </View>
  );
}