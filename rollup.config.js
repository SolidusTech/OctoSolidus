import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/lib/components/index.ts',
    output: {
      name: 'Components',
      file: './dist/components/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      url(),
      nodeResolve(),
      typescript(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: 'src/lib/functions/index.ts',
    output: {
      name: 'Functions',
      file: './dist/functions/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      url(),
      nodeResolve(),
      typescript(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
];
