import { StyleSheet } from 'react-native';
import { COLORS, FONT, ScrRes } from '../../../config/Constant';

const DiscoverSty = StyleSheet.create({
    Header: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: '5%',
        flexDirection: 'row',
    },
    StarIcon: {
        padding: 10,
        borderRadius: 50,
        shadowColor: COLORS.BLACK03,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        /* elevation: 2, */
        backgroundColor: COLORS.WHITE,
    },
    HeaderText: {
        fontSize: 24,
        color: COLORS.BLACK,
        fontFamily: FONT.BOLD,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 14,
        marginBottom: '8%',
        color: COLORS.BLACK,
        fontFamily: FONT.MEDIUM,
        textAlign: 'center',
    },
    clearTXT:{
        fontSize: 16,
        color: COLORS.PRIMARY2,
        fontFamily: FONT.MEDIUM,
        textAlign: 'right',
        flex: 1,
    }
});

export { DiscoverSty };