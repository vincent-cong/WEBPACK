var webpack = require('webpack');
    var htmlWebpackPlugin = require('html-webpack-plugin');
    var path = require('path');
    module.exports={
        entry:{
            a:'./src/js/a.js',
            b:'./src/js/b.js',
            c:'./src/js/c.js',
            app:'./src/js/app.js'
        },
        output:{
            path:path.resolve(__dirname,'./dist'),
            filename:'js/[name]-[chunkhash].js'
            //publicPath:'https://www.zuihuibao.com'
        },
        module: {
            loaders: [    //加载器
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname,'src'),
                    exclude: path.resolve(__dirname,'node_modules'),
                    loader: "babel-loader",
                    query:{
                        "presets": ["latest"]
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style!css?importLoaders=1!postcss"
                },
                {
                    test: /\.less$/,
                    loader: "style!css!postcss!less"
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    loaders:[
                        'url-loader?limit=10000&name=images/[name]-[hash:5].[ext]',
                        'image-webpack-loader'
                    ]

                }
            ]
        },
        postcss:[
          require('autoprefixer')({
              broswers:['last 5 versions']
          })
        ],
       plugins: [
           new htmlWebpackPlugin({
               filename:'a.html',
               template:'index.html',
               title:'this is a ',
               inject:'body',
               chunks:['main','a']
           }),
           new htmlWebpackPlugin({
               filename:'b.html',
               template:'index.html',
               title:'this is b ',
               inject:'body',
               chunks:['main','b']
           }),
           new htmlWebpackPlugin({
               filename:'c.html',
               template:'index.html',
               title:'this is c',
               inject:'body',
               chunks:['c']
           }),
           new htmlWebpackPlugin({
               filename:'app.html',
               template:'index.html',
               title:'this is app',
               inject:'body',
               chunks:['app']
           }),
		   new webpack.optimize.UglifyJsPlugin({
               compress: {
                   warnings: false
               }
           })
       ]


    }