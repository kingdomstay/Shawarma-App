import { DefaultTheme } from '@react-navigation/native';

export const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'red', // основной цвет (используется по умолчанию для заголовков и акцентных элементов)
        background: 'white', // фоновый цвет
        card: 'white', // цвет карточек (например, для Stack Navigator)
        text: 'black', // цвет текста
        border: 'lightgray', // цвет границ
        notification: 'red', // цвет уведомлений
    },
    // Дополнительные настройки, если нужны
};
