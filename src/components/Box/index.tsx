import { Colors } from '@/providers/lib/theme/colors';
import { Box as BoxNative } from 'native-base';

function Box(props: React.ComponentProps<typeof BoxNative>) {
    return (
    <BoxNative 
        {...props} 
        _dark={{
            bg: Colors.bgDark
        }} 
        _light={{
            bg: Colors.bgLight
        }} 
    />);
}

export default Box;