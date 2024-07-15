import Animated from 'react-native-reanimated';

export type BottomSheetProps = {
    isOpen: Animated.SharedValue<boolean>;
    toggleSheet: () => void;
    duration?: number;
    children: React.ReactNode;
    height?: number;
};