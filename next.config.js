/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextWebpackConfig = {
  webpack: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    prefixIds: false
                  },
                  {
                    removeViewBox: false
                  },
                  {
                    cleanupIDs: false
                  }
                ]
              }
            }
          }
        ]
      }
    ]
    return config
  }
  // assetPrefix: 'https://cdn.parrotsec.org'
}

const imagesConfig = {
  images: {
    disableStaticImages: false,
    unoptimized: true
  }
}

const plugins = [
  [
    optimizedImages(imagesConfig),
    {
      handleImages: ['jpeg', 'png']
    }
  ],
  {
    trailingSlash: true
  },
  nextWebpackConfig
]

/*
   This configuration adds a new Webpack rule to handle SVG files using the
   @svgr/webpack package. Additionally, it uses the next-optimized-images
   plugin to optimize JPEG and PNG images and adds an option to handle
   trailing slashes in URLs.
*/
/** @type {import('next').NextConfig} */
const nextConfig = async (phase, { defaultConfig }) => {
  return withPlugins(plugins)(phase, { ...defaultConfig })
}

module.exports = nextConfig
