import { GlobalStyle } from './styles/global'
import { SignIn } from './pages/SignIn '
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignIn />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
