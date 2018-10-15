import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      externalHelpers: true,
      exclude: 'node_modules/**'
    }),
    json(),
    nodeResolve({ main: false, jsnext: false }),
    commonjs({ ignore: [ 'conditional-runtime-dependency' ] })
  ]
};
