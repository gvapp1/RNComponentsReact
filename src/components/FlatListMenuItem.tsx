import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../interface/appInterface";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/Navigator";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../context/themeContext/ThemeContext";

export type navigationPropList = StackNavigationProp<RootStackParamList>;

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation<navigationPropList>();
    const { theme: { colors } } = useContext(ThemeContext);
    //const { colors } = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={23} color={colors.primary} />
                {/* <Text style={{ ...styles.itemText, color: colors.text }}> */}
                <Text style={{
                    ...styles.itemText,
                    color: colors.text,
                }}>
                    {menuItem.name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19
    }
});
