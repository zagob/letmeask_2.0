import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useDarkMode } from "./hooks/useDarkMode";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const { toggle } = useDarkMode();
  return (
    <AuthContextProvider>
      <ThemeProvider theme={toggle === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
