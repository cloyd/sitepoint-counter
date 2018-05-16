import App, {Container} from 'next/app'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  /* quicksand-regular - latin */
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/quicksand-v7-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Quicksand Regular'), local('Quicksand-Regular'),
        url('../static/fonts/quicksand-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/quicksand-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/quicksand-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/quicksand-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/quicksand-v7-latin-regular.svg#Quicksand') format('svg'); /* Legacy iOS */
  }
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html, body {
    background:#f7f1f1;
    font-size:1.1rem;
    font-family:'Quicksand', sans-serif;
    height:100%;
  }
`

export default class AppContainer extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}