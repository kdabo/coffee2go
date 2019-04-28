import {DefaultTheme} from 'styled-components'

const theme: DefaultTheme = {
    borderRadius: '2px',
    boxShadow: '5px 5px 8px -6px rgba(13,36,129,1)',

    colors: {
        black: '#000',
        white: '#fff',

        gray30: '#3D464D',
        gray20: '#47525D',
        gray10: '#7B8994',
        gray5: '#D4d4D4',

        nude30: '#FFAFA2',
        nude20: '#ffbeb3',
        nude10: '#ffccc4',
        nude5: '#FFDBD5',

        red30: '#D5001F',
        red20: '#e60021',
        red10: '#f70024',
        red5: '#D5001F',

        yellow30: '#ffdb30',
        yellow20: '#ffde41',
        yellow10: '#ffe152',
        yellow5: '#ffe463',

        green30: '#005744',
        green20: '#006851',
        green10: '#00795f',
        green5: '#009b79',

        darkBlue30: '#0d2481',
        darkBlue20: '#0f2890',
        darkBlue10: '#102da0',
        darkBlue5: '#1231af',

        lightBlue30: '#b4d0e7',
        lightBlue20: '#c1d8eb',
        lightBlue10: '#cee0ef',
        lightBlue5: '#dbe8f3',
    },

    typography: {
        fontFamilyPrimary: "\'Rubik\', sans-serif'",
        fontFamilySecondary: '\'Roboto Mono\', monospace',
        lineHeight: '1.5',
        h1: '1.75rem',
        h2: '1.5rem',
        h3: '1.25rem',
        p: '1rem',
        span: '0.75rem'
    },

    space: [
        0, 4, 8, 16, 32, 64, 128, 256, 512
    ],

    breakpoints: [
        '576px',
        '768px',
        '992px',
        '1200px',
    ],

    mediaQueries: {
        small: '',
        medium: '',
        large: '',
        extraLarge: ''
    }

};

theme.mediaQueries = {
    small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
    medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
    large: `@media screen and (min-width: ${theme.breakpoints[2]})`,
    extraLarge: `@media screen and (min-width: ${theme.breakpoints[3]})`,
};

export default theme
