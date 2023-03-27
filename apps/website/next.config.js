/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')
const { join } = require('path')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'
process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD = '1'

const plugins = [
  withTamagui({
    config: './tamagui.config.ts',
    components: [
      // fixme?: works without it
      // '@status-im/components',
      // './node_modules/@status-im/components/packages/components/dist',
    ],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction: true,
    // experiment - reduced bundle size react-native-web
    useReactNativeWebLite: false,
    shouldExtract: path => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
  }),
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      disableStaticImages: true,
    },
    transpilePackages: [
      'react-native',
      'react-native-web',
      'expo-modules-core',
      '@status-im/components',
    ],
    experimental: {
      legacyBrowsers: false,
      // esmExternals: 'loose',
    },

    reactStrictMode: false,
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
