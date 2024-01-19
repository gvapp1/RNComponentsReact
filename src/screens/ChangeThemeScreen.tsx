import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from '../theme/appTheme';
import { HeaderTitle } from "../components/headerTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeContext } from '../context/themeContext/ThemeContext';
export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 22,
                            textAlign: 'center',
                        }} >Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 22,
                            textAlign: 'center',
                        }} >Light</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
