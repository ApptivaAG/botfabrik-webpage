import {
  CSSProp,
  DefaultTheme,
  StyledComponent,
  ThemedStyledProps,
} from 'styled-components'
// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    white: string
    text: string
    lightText: string
    lightBg: string
    darkBg: string
    primarySave: string
    lightPrimary: string
  }
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme>
  }
}
