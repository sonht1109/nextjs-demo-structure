import { ThemeProvider } from "styled-components";
import Layout from "../src/components/Layout";
import GlobalStyle from "../src/styles/globalStyle";
import theme from "../src/styles/theme";
import "../src/styles/fonts.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../src/apollo";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import LanguageProvider from "../src/languages/LanguageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <LanguageProvider>
            <Layout>
              <Component {...pageProps} />
              <GlobalStyle />
            </Layout>
          </LanguageProvider>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
