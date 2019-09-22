import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    boxShadow: string,
    
    colors: {
      black: string
      white: string
      
      gray30: string,
      gray20: string,
      gray10: string,
      gray5: string,
      
      nude30: string,
      nude20: string,
      nude10: string,
      nude5: string,
      
      red30: string,
      red20: string,
      red10: string,
      red5: string,
      
      yellow30: string,
      yellow20: string,
      yellow10: string,
      yellow5: string,
      
      green30: string,
      green20: string,
      green10: string,
      green5: string,
      
      darkBlue30: string,
      darkBlue20: string,
      darkBlue10: string,
      darkBlue5: string,
      
      lightBlue30: string,
      lightBlue20: string,
      lightBlue10: string,
      lightBlue5: string,
    },
    
    typography: {
      fontFamilyPrimary: string,
      fontFamilySecondary: string,
      lineHeight: string,
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      p: string,
      span: string,
      fontWeightLight: string,
      fontWeightRegular: string,
      fontWeightBlack: string
      // h1: string,
      // h2: string,
      // h3: string,
      // p: string,
      // label: string,
      // span: string,
      // quote: string,
      // anchor: string
    }
    
    maxWidth: string,
    space: number[],
    
    breakpoints: string[],
    
    mediaQueries: {
      xs: string,
      small: string,
      medium: string,
      large: string,
      extraLarge: string,
    }
  }
}
