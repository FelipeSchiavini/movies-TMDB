import { ThemeProvider } from 'styled-components'
import { Button } from './components/mol.button/button.component'
import { darkTheme } from './style/theme'

const App: React.FunctionComponent = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      
    </ThemeProvider>
  )
}

export default App
