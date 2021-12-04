import { StyleSheet } from 'react-native';
import { COLORS, FONT, ScrRes } from '../../../config/Constant';

const CompSty = StyleSheet.create({
    TitleTXT: {
        width: '100%',
        color: COLORS.PRIMARY,
        fontSize: 18,
        fontFamily: FONT.MEDIUM,
        padding: 5,
        marginTop: 10,
        paddingStart: '5%',
    },
    tInput: {
        width: '100%',
        borderColor: COLORS.LIGHT_GRAY2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingStart: '5%',
        fontFamily: FONT.REGULAR,
        fontSize: 14,
        color: COLORS.BLACK,
        padding: 5,
    },
    SkilTitle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingEnd: '7%',
        alignItems: 'center',
    },
    SkilList: {
        /* width: '100%', */
        flexWrap: "wrap",
        justifyContent: 'space-between',
    },
    SkillComp: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
    },
    SkillsTXT: {
        fontSize: 11,
        color: COLORS.WHITE,
        fontFamily: FONT.REGULAR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.LIGHT_BLUE,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
        flex: 1,
        width: ScrRes.SCR_WIDTH / 3,
    },
    closeBTN: {
        padding: 2,
        position: 'absolute',
        right: - ScrRes.SCR_WIDTH * .02,
        top: - ScrRes.SCR_WIDTH * .02,
        borderRadius: ScrRes.SCR_WIDTH * .04,
    },
    /*---  ---*/
    RefInput: {
        width: '100%',
        borderColor: COLORS.LIGHT_GRAY2,
        borderWidth: 1,
        paddingStart: '5%',
        fontFamily: FONT.REGULAR,
        fontSize: 14,
        color: COLORS.BLACK,
        padding: 5,
        borderRadius: 15,
        paddingVertical: 15,
    },
    ReferBTN: {
        backgroundColor: COLORS.PRIMARY,
        borderRadius: ScrRes.SCR_WIDTH * 0.2,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginVertical: '5%',
        alignSelf: "flex-end",
        marginEnd: "7%"
    },
});

export { CompSty };