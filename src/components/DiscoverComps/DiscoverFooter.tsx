import React from 'react'
import { View, Pressable } from 'react-native'
import { CLOSE_SAMLL_IC, STAR_IC } from '../../common/assets/SVG';
import { BTNp01, BTNp07 } from '../../common/functions';
import { CommonStyle } from '../../common/styles';
import { DiscoverSty } from '../../common/styles/screenStyles/DiscoverStyles';
import { COLORS } from '../../config/Constant';

interface Props {
    onCancel?: () => void | any;
    onStar?: () => void | any;
}

const DiscoverFooter = ({ onCancel, onStar }: Props) => {
    return (
        <View style={[CommonStyle.centerViewW100Row, { marginVertical: '3%', justifyContent: "space-evenly", width: '50%' }]}>
            <Pressable
                onPress={onCancel}
                style={({ pressed }) => [DiscoverSty.StarIcon, {
                    backgroundColor: BTNp01(pressed),
                    shadowColor: BTNp07(pressed),
                    overflow: 'hidden',
                }]}
                android_ripple={{ color: COLORS.PRIMARY_DARK_01, radius: 30, borderless: true }}
            >
                <CLOSE_SAMLL_IC width={20} height={20} />
            </Pressable>
            <Pressable
                onPress={onStar}
                style={({ pressed }) => [DiscoverSty.StarIcon, {
                    backgroundColor: BTNp01(pressed),
                    shadowColor: BTNp07(pressed)
                }]}
                android_ripple={{ color: COLORS.PRIMARY_DARK_01, radius: 30, borderless: true }}
            >
                <STAR_IC width={20} height={20} />
            </Pressable>
        </View>
    )
}

export default DiscoverFooter;