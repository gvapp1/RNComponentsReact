import React, { useContext } from "react";
import { RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderTitle } from "../components/headerTitle";
import { styles } from "../theme/appTheme";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from "../context/themeContext/ThemeContext";

export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets();
    const { theme: { colors, dark } } = useContext(ThemeContext);
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        console.log('Refreshing');

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 3000);
    }

    return (
        <ScrollView
            style={{
                //marginTop: refreshing ? top : 0,        
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.primary}
                    colors={[colors.text]}
                    style={{ backgroundColor: '#5856D6' }} // iOS
                    tintColor={'white'}// iOS
                    title="Refreshing" // iOS
                    titleColor={dark ? 'white' : 'black'} // iOS
                />

            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />

                {
                    data && <HeaderTitle title={data} />
                }
                <Text>Pull to Refresh Screen</Text>
            </View>
        </ScrollView>

    )
}