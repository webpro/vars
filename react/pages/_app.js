import React from 'react';
import App, { Container } from 'next/app';
import Nav from '../components/Nav';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <style jsx>{`
          main {
            position: relative;
            max-width: 56em;
            background-color: white;
            padding: 2em;
            margin: 0 auto;
            box-sizing: border-box;
          }
        `}</style>

        <Nav route={router.route} />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}

export default MyApp;
