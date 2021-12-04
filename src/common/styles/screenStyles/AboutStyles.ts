import { StyleSheet } from 'react-native';
import { COLORS, FONT, ScrRes } from '../../../config/Constant';

const AboutStyle = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
    },
    TitleTXT: {
        fontSize: 24,
        color: COLORS.BLACK,
        fontFamily: FONT.BOLD
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        width: '70%',
        marginTop: 10,
    },
    EditTXT: {
        fontSize: 24,
        color: COLORS.BLACK07,
        fontFamily: FONT.BOLD,
    },
    ViewTXT: {
        fontSize: 24,
        color: COLORS.LIGHT_BLUE,
        fontFamily: FONT.BOLD,
    },
    SubTXT: {
        fontSize: 20,
        color: COLORS.LIGHT_BLUE,
        fontFamily: FONT.MEDIUM,
    },
    /*---- View Styles ---*/
    Profile: {
        borderColor: COLORS.LIGHT_BLUE,
        borderWidth: 2,
        borderRadius: 15,
        marginHorizontal: '7%',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        marginTop: '7%',
        overflow: 'hidden',
    },
    ProfileImg: {
        height: ScrRes.SCR_WIDTH * 0.25,
        width: ScrRes.SCR_WIDTH * 0.25,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 15,
    },
    NameTXT: {
        fontSize: 20,
        color: COLORS.LIGHT_BLUE,
        marginTop: '5%',
        fontFamily: FONT.MEDIUM,
    },
    PostTXT: {
        fontSize: 20,
        color: COLORS.BLACK,
        marginTop: '3%',
        fontFamily: FONT.MEDIUM,
    },
    linkTXT: {
        fontSize: 16,
        color: COLORS.LINK,
        marginTop: '2%',
        marginBottom: '5%',
        fontFamily: FONT.ITALIC,
    },
    SkillTXT: {
        fontSize: 11,
        color: COLORS.WHITE,
        fontWeight: '500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.LIGHT_BLUE,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
        flex: 1,
    },
    /*---- Edit Styles ---*/
    Edit: {
        flex: 1,
        justifyContent: 'center',
        marginTop: '7%',
        overflow: 'hidden',
    },
    EditProfile: {
        width: ScrRes.SCR_WIDTH * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    EditProfileImg: {
        right: 0,
        bottom: 0,
        padding: 10,
        position: 'absolute',
        backgroundColor: COLORS.WHITE05,
        borderRadius: ScrRes.SCR_WIDTH * 0.2
    },
    saveBTN: {
        position: 'absolute',
        top: ScrRes.SCR_WIDTH * 0.01,
        right: '5%',
        backgroundColor: COLORS.PRIMARY,
        borderRadius: ScrRes.SCR_WIDTH * 0.2,
        paddingVertical: 5,
        paddingHorizontal: 30,
    },
    SaveTXT: {
        color: COLORS.WHITE,
        fontSize: 14,
    },
});

export { AboutStyle };