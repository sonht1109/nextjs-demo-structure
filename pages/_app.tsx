import { ThemeProvider } from "styled-components";
import Layout from "../src/components/Layout";
import GlobalStyle from "../src/styles/globalStyle";
import theme from "../src/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
