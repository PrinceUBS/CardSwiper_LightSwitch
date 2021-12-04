import { Dimensions } from 'react-native';

const COLORS = {
    PRIMARY: '#7165FF',
    PRIMARY2: '#5D5FEF',
    WHITE: '#ffffff',
    BLACK: '#000000',
    BG: '#F3F3F3',
    PALE: '#feeede',
    LIGHT_GRAY: '#f2f2f2',
    DUSTY_ORANGE: '#ff782d',
    PALE_GREY: '#f5f8ff',
    VERY_LIGHT_BLUE: '#d7e2fc',
    OFF_WHITE: 'rgb(248, 248, 248)',
    OFF_WHITE2: '#f9fdf5',
    EGG_SHELL: '#eafade',
    ICE_BLUE: '#f6ffff',
    PALE_BLUE: '#d7f4f4',
    PALE_MAUVE: '#fdf5fc',
    LIGHT_PERIWINKLE: "#d6e0f7",
    CLOUDY_BLUE: '#adbddd',
    LINK: "#0F87FF",
    BROWN_GRAY: '#9a9a9a',
    LIGHT_TEAL: "#9ddfdf",
    LIGHT_PINK: '#f3dfe6',
    LIGHT_GREEN: '#a2cf6e',
    LIGHT_BLUE: '#7265FF',
    LIGHT_GRAY2: '#CDCDCD',
    VERY_LIGHT_GREEN: "#dfefd1",
    DUCK_EGG_BLUE: '#ccf4f4',
    DARK_NAVY_BLUE: '#000018',
    SHORT_FILTER_BG: '#FAFBFB',
    EXTRA_LITE_ORANGE: '#F6E4C3',
    GRAY66: '#666666',
    RED: '#FF0000',
    DARK_RED: '#BB251B',
    LIGHT_RED: '#FCE2E6',
    TRANSPARENT: "transparent",
    BLACK01: "rgba(0,0,0,0.1)",
    BLACK02: "rgba(0,0,0,0.2)",
    BLACK03: "rgba(0,0,0,0.3)",
    BLACK04: "rgba(0,0,0,0.4)",
    BLACK05: "rgba(0,0,0,0.5)",
    BLACK06: "rgba(0,0,0,0.6)",
    BLACK07: "rgba(0,0,0,0.7)",
    BLACK08: "rgba(0,0,0,0.8)",
    BLACK09: "rgba(0,0,0,0.9)",
    WHITE01: "rgba(256,256,256,0.1)",
    WHITE02: "rgba(256,256,256,0.2)",
    WHITE03: "rgba(256,256,256,0.3)",
    WHITE04: "rgba(256,256,256,0.4)",
    WHITE05: "rgba(256,256,256,0.5)",
    WHITE06: "rgba(256,256,256,0.6)",
    WHITE07: "rgba(256,256,256,0.7)",
    WHITE08: "rgba(256,256,256,0.8)",
    WHITE09: "rgba(256,256,256,0.9)",
    PRIMARY01: 'rgba(113,101,255,.1)',
    PRIMARY02: 'rgba(113,101,255,.2)',
    PRIMARY03: 'rgba(113,101,255,.3)',
    PRIMARY04: 'rgba(113,101,255,.4)',
    PRIMARY05: 'rgba(113,101,255,.5)',
    PRIMARY06: 'rgba(113,101,255,.6)',
    PRIMARY07: 'rgba(113,101,255,.7)',
    PRIMARY08: 'rgba(113,101,255,.8)',
    PRIMARY09: 'rgba(113,101,255,.9)',
    PRIMARY_DARK: '#5a50cc',
    PRIMARY_DARK2: '#5148b7',
    PRIMARY_DARK_01: '#EAEAF4',
    PRIMARY_DARK01: 'rgba(72,64,164,.1)',
    PRIMARY_DARK02: 'rgba(72,64,164,.2)',
    PRIMARY_DARK03: 'rgba(72,64,164,.3)',
    PRIMARY_DARK04: 'rgba(72,64,164,.4)',
    PRIMARY_DARK05: 'rgba(72,64,164,.5)',
    PRIMARY_DARK06: 'rgba(72,64,164,.6)',
    PRIMARY_DARK07: 'rgba(72,64,164,.7)',
    PRIMARY_DARK08: 'rgba(72,64,164,.8)',
    PRIMARY_DARK09: 'rgba(72,64,164,.9)',
};

const ScrRes = {
    SCR_WIDTH: Dimensions.get('window').width,
    SCR_HEIGHT: Dimensions.get('window').height,
}

const FONT = {
    REGULAR: 'Roboto-Regular',
    MEDIUM: 'Roboto-Medium',
    MEDIUM_ITALIC: 'Roboto-MediumItalic',
    BOLD: 'Roboto-Bold',
    BOLD_ITALIC: 'Roboto-BoldItalic',
    LIGHT: 'Roboto-Light',
    LIGHT_ITALIC: 'Roboto-LightItalic',
    BLACK: 'Roboto-Black',
    BLACK_ITALIC: 'Roboto-BlackItalic',
    THIN: 'Roboto-Thin',
    THIN_ITALIC: 'Roboto-ThinItalic',
    ITALIC: 'Roboto-Italic',
}

export { COLORS, ScrRes, FONT };