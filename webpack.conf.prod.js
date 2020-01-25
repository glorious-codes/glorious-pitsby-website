const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const project = require('./project.json');

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    filename: project.scripts.dist.filename.prod
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false,
          },
          sourceMap: true
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.prod
    }),
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/${project.scripts.dist.root}`,
      // Include here static routes that you wish pre compile.
      routes: [
        '/' // Home
      ],
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      renderer: new Renderer({
        headless: true,
        args: ['–no-sandbox', '–disable-setuid-sandbox']
      })
    })
  ]
}
