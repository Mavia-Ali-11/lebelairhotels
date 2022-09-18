const webpack = require("webpack");
module.exports = {
    webpack: (config, {webpack}) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        );
        return config;
    },
    future: { webpack5: true }
}