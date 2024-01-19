import React, { useContext } from "react";
import { View, Text, Alert, Button } from "react-native";
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from "../components/headerTitle";
import { styles } from "../theme/appTheme";
import { ThemeContext } from "../context/themeContext/ThemeContext";

export const AlertScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const showAlert = () => {
        Alert.alert('Título', 'Este es el mensaje de la alerta',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ], {
            cancelable: true,
            onDismiss: () => console.log('onDismiss')
        }
        );
    }

    const showPromptIos = () => {
        Alert.prompt('¿Está seguro?', 'Esta acción no se puede deshacer',
            (valor: string) => console.log('info', valor),
            'plain-text',
            'Hola mundo',
            'number-pad'
        );
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />
            <Button title="Mostrar alerta" onPress={showAlert} color={colors.primary} />
            <View style={{ height: 10 }} />
            <Button title="Mostrar alerta" onPress={showPrompt} color={colors.primary} />
            <View style={{ height: 10 }} />
            <Button title="Mostrar alerta" onPress={showPromptIos} color={colors.primary} />
        </View>
    )
}
