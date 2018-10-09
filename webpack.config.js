// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: ['node_modules']
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {
            config$: './configs/app-config.js',
            react: './vendor/react-master',
        },
        extensions: ['', 'js', 'jsx'],
        modules: [
            'node_modules',
            'bower_components',
            'shared',
            '/shared/vendor/modules',
        ],
    },
};