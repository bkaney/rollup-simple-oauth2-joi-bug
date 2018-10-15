import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve({ main: false, jsnext: false }),
    commonjs({ ignore: [ 'conditional-runtime-dependency' ] }),
    json()
  ]
};
