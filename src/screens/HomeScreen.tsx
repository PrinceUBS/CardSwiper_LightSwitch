import React, { useRef } from 'react'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import { CommonStyle } from '../common/styles';
import { DiscoverFooter } from '../components';
import CardsSwipe from 'react-native-cards-swipe';
import FastImage from 'react-native-fast-image';
import { AboutStyle } from '../common/styles/screenStyles/AboutStyles';
import { ScrRes, COLORS } from '../config/Constant';

const cardDs = [
    { src: require("../common/assets/1.jpg") },
    { src: require("../common/assets/2.jpg") },
    { src: require("../common/assets/3.jpg") },
    { src: require("../common/assets/4.jpg") },
];

interface CardsSwipeRefObjecta {
    swipeLeft: () => void;
    swipeRight: () => void;
}

const HomeScreen = ({ navigation }: any) => {

    const aspectRatio = 700 / 368;
    const swiper = useRef<CardsSwipeRefObjecta>();

    return (
        <SafeAreaView style={CommonStyle.SafeAr}>
            <View style={CommonStyle.MainContainer}>
                <CardsSwipe
                    ref={swiper}
                    cards={cardDs}
                    cardContainerStyle={styles.cardContainer}
                    renderCard={(card) => (
                        <FastImage
                            source={card.src}
                            style={{
                                width: ScrRes.SCR_WIDTH * .85,
                                height: ScrRes.SCR_WIDTH * aspectRatio - ScrRes.SCR_HEIGHT * .25,
                                overflow: 'hidden',
                                backgroundColor: COLORS.WHITE,
                                borderRadius: 20,
                            }}
                        >
                            <Text style={[AboutStyle.PostTXT, { backgroundColor: '#fff', }]}>card.src: {JSON.stringify(card.src)}</Text>
                        </FastImage>
                    )}

                />
                <DiscoverFooter
                    onCancel={() => swiper.current?.swipeLeft()}
                    onStar={() => swiper.current?.swipeRight()}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: '92%',
        height: '70%',
    },
    card: {
        width: '100%',
        height: '100%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.07,
        shadowRadius: 3.3,
    },
    cardImg: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    },
});


export default HomeScreen;