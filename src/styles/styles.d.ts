import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            quinary: string;
            senary: string;       
        },
        scroll: {
            track: string;
            thumb: string;
        }
    }
}