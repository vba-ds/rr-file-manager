import webpack from 'webpack';
import path from 'path';

const nodeEnv = process.env.NODE_ENV;
const DEBUG = nodeEnv !== 'production';

export default {
    entry: './src/app.js',

    output: {
        path: path.join(__dirname, 'build'),
        filename: DEBUG ? '[name].js' : '[name].min.js',
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint',
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
        }),
    ],
};
