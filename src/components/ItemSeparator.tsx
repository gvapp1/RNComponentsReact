import React from "react";
import { View, Text } from "react-native";
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const { theme: { dividerColor } } = useContext(ThemeContext);
    return (
        <View style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            marginVertical: 8,
            borderBottomColor: dividerColor
        }} />
    )
}