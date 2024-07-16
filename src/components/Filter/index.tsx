import Ionicons from '@expo/vector-icons/Ionicons';
import { Input } from 'native-base';
import Box from "../Box";
import { FilterType } from "./types";

function Filter(props: FilterType) {
    const { searchParams, setSearchParams } = props;

    return (
        <Box alignItems="center" flexDirection="row">
            <Input
                flex={0.9}
                placeholder="Search coffee"
                value={searchParams}
                onChangeText={setSearchParams}
            />
            <Box flex={0.1} alignItems="center" justifyContent="center">
                <Ionicons name="search" size={24} color="black" />
            </Box>
        </Box>
    )
}

export default Filter;