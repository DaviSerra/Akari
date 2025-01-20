import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { GlobalStyles } from "./global"
import { defaultTheme } from "./styles/themes/default"
import MainSection from "./components/MainSection"

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} >
        <GlobalStyles />
        <Header />
        <MainSection/>
      </ThemeProvider>
    </>
  )
}

export default App
