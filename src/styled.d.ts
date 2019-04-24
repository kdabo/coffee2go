import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string,

        colors: {
            black: string
            white: string
        },

        space: number[],
    }
}