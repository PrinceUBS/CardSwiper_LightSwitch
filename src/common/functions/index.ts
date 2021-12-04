import { Platform } from "react-native";
import { COLORS } from "../../config/Constant";

const BTNp01 = (pressed: boolean) => { return Platform.OS === 'ios' ? pressed ? COLORS.PRIMARY_DARK_01 : COLORS.WHITE : COLORS.WHITE }
const BTNp07 = (pressed: boolean) => { return Platform.OS === 'ios' ? pressed ? COLORS.PRIMARY_DARK07 : COLORS.BLACK03 : COLORS.BLACK03 }


export {
    BTNp01,
    BTNp07
};