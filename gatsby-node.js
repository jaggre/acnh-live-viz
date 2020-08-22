/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};

const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: require.resolve('bootstrap'),
            use: loaders.null()
          },
          {
            test: require.resolve('jquery'),
            use: loaders.null()
          }
        ]
      }
    })
  }
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: 'popper.js',
        Bootstrap: 'bootstrap.js'
      })
    ]
  })
}