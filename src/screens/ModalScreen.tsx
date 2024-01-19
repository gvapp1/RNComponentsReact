import React, { useContext, useState } from "react";
import { View, Button, Modal, Text } from "react-native";
import { HeaderTitle } from "../components/headerTitle";
import { styles } from "../theme/appTheme";
import { ThemeContext } from "../context/themeContext/ThemeContext";

export const ModalScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abrir modal"
                onPress={() => setIsVisible(true)}
                color={colors.primary}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                {/*Background negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* contenido del modal */}
                    <View style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 5

                    }}>
                        <HeaderTitle title="Modal" />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.background }}>Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={() => setIsVisible(false)}
                            color={colors.primary} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}