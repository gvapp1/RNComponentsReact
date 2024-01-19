import React from "react";
import { FlatList, View } from "react-native";
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from "../components/FlatListMenuItem";
import { menuItems } from "../data/menuItems";
import { HeaderTitle } from "../components/headerTitle";
import { ItemSeparator } from "../components/ItemSeparator";
export const HomeScreen = () => {
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title="Opciones del menú" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />

        </View>
    );


};
