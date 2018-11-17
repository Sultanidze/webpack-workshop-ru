const path = require('path');

module.exports = {
    entry: './src/Feed/index.js',
    output: {
//        path: './public/feed',
        path: path.resolve(__dirname, 'public/feed'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                "targets": {
                                    "browsers": ['last 10 major versions', "Firefox > 20", '> 0.1%', 'ie 10-11']
                                }
                            }]
                        ]
                    }
                }]
            }
        ]
    }
};