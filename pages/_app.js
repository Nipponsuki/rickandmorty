import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import withApollo from 'src/utils/withApollo';
import { theme } from 'src/theme/theme';
import GlobalStyle from 'src/theme/GlobalStyles';

import Header from 'src/components/Header';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>R&M</title>
          </Head>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
