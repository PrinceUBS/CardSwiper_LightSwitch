import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/Constant';

const CommonStyle = StyleSheet.create({
    SafeAr: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerViewW100: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerViewW100Row: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    justifyCenter: {
        flex: 1,
        justifyCenter: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Line: {
        height: 2,
        width: '100%',
        backgroundColor: COLORS.PRIMARY,
        marginBottom: '5%',
    }
});

export { CommonStyle };