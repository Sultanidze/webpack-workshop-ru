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
            }
        ]
    }
};