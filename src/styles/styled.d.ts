
import { lightTheme } from './theme';

type Theme = typeof lightTheme;

declare module "styled-components" {
    interface DefaultTheme {
        white: string;
        white_100: string;
        white_200: string;
        white_300: string;
        gray_100: string;
        gray_200: string;
        gray: string;
        purple: string;
        pink: string;
        red: string;
    }
}