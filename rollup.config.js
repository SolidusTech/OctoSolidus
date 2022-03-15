import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';

const pastas = ['components', 'modules', 'utils', 'styles'];

const config = pastas.map((pasta) => {
  return {
    input: `src/${pasta}/index.ts`,
    output: [
      {
        file: `./${pasta}/index.js`,
        format: 'esm',
      },
      {
        file: `./${pasta}/index.cjs.js`,
        format: 'cjs',
      },
    ],
    plugins: [
      nodeResolve(),
      babel({ presets: ['@babel/preset-env'], exclude: 'node_modules/**' }),
      url(),
      typescript(),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': ['isValidElementType'],
        },
      }),
    ],
    external: ['react', 'react-dom', 'styled-components'],
    globals: { 'styled-components': 'styled' },
  };
});

const configTypes = pastas.map((pasta) => {
  return {
    input: `./src/${pasta}/index.ts`,
    output: [{ file: `${pasta}/index.d.ts`, format: 'es' }],
    plugins: [dts()],
  };
});

export default [...config, ...configTypes];
