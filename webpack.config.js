const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
//        path: './public/feed',
        path: path.resolve(__dirname, 'public/feed'),
        filename: 'index.js'
    }
};