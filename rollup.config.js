require('shelljs/global');
import vue from 'rollup-plugin-vue2';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

rm('-rf', 'dist');
mkdir('-p', 'dist');

var entry = 'src/directives/index.js';

export default {
    entry: entry,
    dest: 'dist/wii.static.js',
    format: 'cjs',
    sourceMap: true,
    plugins: [
        vue(),
        buble({
            objectAssign: 'Object.assign',
            exclude: 'node_modules/**' // only transpile our source code
        }),
        nodeResolve({
            browser: true,
            jsnext: true,
            main: true,
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        uglify(),
        replace({
          'process.env.NODE_ENV': JSON.stringify( 'production' )
        })
    ],
    external: ['vue','mta-h5-analysis']
}
