import React, { memo } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { colors, fonts } from '../../themes'
import { scaleSize } from '../../themes/mixins'

interface DividerProps {
    height?: number,
    color?: string,
    style?: ViewStyle
}

const Divider: React.FC<DividerProps> = ({
    height = scaleSize(1),
    color = colors.borderGray,
    style,
}) => {
    return (
        <View style={{ ...style, height, backgroundColor: color }} />
    )
}

export default memo(Divider)

