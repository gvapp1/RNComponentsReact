import { createContext, useContext, useEffect, useReducer } from "react";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';
import { useColorScheme, AppState, Appearance } from 'react-native';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

//CREAMOS EL CONTEXT
export const ThemeContext = createContext({} as ThemeContextProps);

//CREAMOS EL PROVEEDOR DEL CONTEXT PARA QUE TODOS LOS HIJOS PUEDAN ACCEDER A EL
export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme); //TODO: leer el tema global del dispositivo
    // const [theme, dispatch] = useReducer(
    //     themeReducer,
    //     (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme); //TODO: leer el tema global del dispositivo

    useEffect(() => {
        (colorScheme === 'dark')
            ? setDarkTheme()
            : setLightTheme();
    }, [colorScheme])

    // useEffect(() => {
    //     AppState.addEventListener('change', (status) => {
    //         if (status === 'active') {
    //             (Appearance.getColorScheme() === 'dark')
    //                 ? setDarkTheme()
    //                 : setLightTheme();
    //         }
    //     });
    // }, [])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};