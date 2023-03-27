import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { Children } from 'react'
import { AppRegistry } from 'react-native'

import Tamagui from '../tamagui.config'

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('app', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('app')

    const page = await renderPage()

    const styles = [getStyleElement()]

    return { ...page, styles: Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
