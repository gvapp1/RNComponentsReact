import React, { useContext, useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { HeaderTitle } from "../components/headerTitle";
import { CustomSwitch } from "../components/CustomSwitch";
import { ThemeContext } from "../context/themeContext/ThemeContext";

interface StateSwitch {
    isActive: boolean,
    isHungry: boolean,
    isHappy: boolean
}

export const SwitchScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [state, setState] = useState<StateSwitch>({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHungry, isHappy } = state;

    //e utiliza para actualizar una propiedad específica del estado del componente en React, basándose en el field y value que se pasan a la función.
    const onChangeScreen = (value: boolean, field: string) => {
        setState({
            ...state,//Esto es una operación de propagación (spread operation). Toma todas las propiedades existentes del objeto state y las propaga en un nuevo objeto. Esto se hace para mantener las otras propiedades del estado que no están siendo actualizadas en esta función.
            [field]: value //si field es "isSwitchOn" y value es true, entonces esta línea actualizará el estado para que isSwitchOn sea true.
        });
    }


    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />
            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
                <CustomSwitch
                    isOn={isActive}
                    onChange={(value) => onChangeScreen(value, 'isActive')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
                <CustomSwitch
                    isOn={isHungry}
                    onChange={(value) => onChangeScreen(value, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
                <CustomSwitch
                    isOn={isHappy}
                    onChange={(value) => onChangeScreen(value, 'isHappy')} />
            </View>

            <Text style={{ fontSize: 25, color: colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
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