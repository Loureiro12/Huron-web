import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { ListClinics } from './pages/ListClinics'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ListClinics />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
