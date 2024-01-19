import { Header } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView } from "react-native";
import { HeaderTitle } from "../components/headerTitle";
import { styles } from '../theme/appTheme';
import { useForm } from "../hooks/useForm";
import { CustomSwitch } from "../components/CustomSwitch";
import { ThemeContext } from "../context/themeContext/ThemeContext";

interface Form {
    name: string;
    email: string;
    phone: string;
    isSubscribed: boolean;
}

export const TextInputScreen = () => {
    const { theme } = useContext(ThemeContext);
    const { form, onChange, isSubscribed } = useForm<Form>({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <ScrollView>
            <View style={styles.globalMargin}>
                <HeaderTitle title="TextInputs" />
                <TextInput
                    style={{
                        ...stylesScreen.inputStyle,
                        borderColor: theme.dividerColor,
                        color: theme.colors.text
                    }}
                    placeholder="Ingrese su nombre"
                    placeholderTextColor={theme.dividerColor}
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={(value) => onChange(value, 'name')}
                />

                <TextInput
                    style={{
                        ...stylesScreen.inputStyle,
                        borderColor: theme.dividerColor,
                        color: theme.colors.text
                    }}
                    placeholder="Ingrese su email"
                    placeholderTextColor={theme.dividerColor}
                    autoCorrect={false}
                    autoComplete="off"
                    onChangeText={(value) => onChange(value, 'email')}
                    keyboardType="email-address"
                    keyboardAppearance="dark"
                />
                <View style={stylesScreen.switchRow}>
                    <Text style={{ ...stylesScreen.switchText, color: theme.colors.text }}>Suscribirse:</Text>
                    <CustomSwitch
                        isOn={isSubscribed}
                        onChange={(value) => onChange(value, 'isSubscribed')} />
                </View>

                <HeaderTitle title={JSON.stringify(form, null, 3)} />
                <View style={{ height: 250 }} />
                <TextInput
                    style={{
                        ...stylesScreen.inputStyle,
                        borderColor: theme.dividerColor,
                        color: theme.colors.text
                    }}
                    placeholder="Ingrese su teléfono"
                    placeholderTextColor={theme.dividerColor}
                    onChangeText={(value) => onChange(value, 'phone')}
                    keyboardType="number-pad"
                />

                <View style={{ height: 100 }} />
            </View>
        </ScrollView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
});
