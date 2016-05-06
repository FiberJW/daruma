"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  content: "var path = require('path');\nvar libraryName = require('./.daruma.json').name;\nvar outputFile = libraryName + '.js';\n\nvar config = {\n  entry: __dirname + '/src/index.js',\n  devtool: 'source-map',\n  output: {\n    path: __dirname + '/dist',\n    filename: outputFile\n  },\n  module: {\n    loaders: [\n      {\n        test: /(.jsx|.js)$/,\n        loader: 'babel',\n        exclude: /(node_modules|bower_components)/,\n        query: {\n          presets: ['es2015', 'stage-0']\n        }\n      },\n      {\n        test: /.json$/,\n        loader: 'json'\n      }\n    ]\n  },\n  resolve: {\n    root: path.resolve('./src'),\n    extensions: ['', '.js', '.json']\n  }\n};\n\nmodule.exports = config;\n"
};