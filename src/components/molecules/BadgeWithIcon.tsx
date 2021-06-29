import { string } from 'prop-types';
import React, { memo } from 'react'
import { ImageSourcePropType, ImageStyle } from 'react-native';
import { ImageProps, StyleSheet } from 'react-native';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { fonts, images, metrics } from '../../themes';
import { scaleSize } from '../../themes/mixins';
import { Badge, Icon } from '../atoms';

interface BadgeWithIconProps {
    number: number;
    badgeStyle?: StyleProp<ViewStyle>;
    icon: ImageSourcePropType
    iconStyle?: ImageStyle,
    size: number
    containerStyle?: StyleProp<ViewStyle>
}

const BadgeWithIcon: React.FC<BadgeWithIconProps> = ({
    number,
    badgeStyle,
    icon,
    iconStyle,
    size,
    containerStyle
}) => {
    return (
        <View style={StyleSheet.flatten([styles.container, containerStyle]) }>
            <Icon source={icon} style={StyleSheet.flatten([{ width: size, height: size }, iconStyle])} />
            <Badge number={number} badgeStyle={StyleSheet.flatten([styles.containerBadge, { width: size / 2, height: size / 2, borderRadius: size / 4 }, badgeStyle])} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon: {
        width: scaleSize(40),
        height: scaleSize(40)
    },
    containerBadge: {
        width: scaleSize(24),
        height: scaleSize(24),
        position: 'absolute',
        right: 0,
        borderRadius: scaleSize(24) / 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default memo(BadgeWithIcon)