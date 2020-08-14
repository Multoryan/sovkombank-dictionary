module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/apix': {
                target: process.env.VUE_APP_URL,
                pathRewrite: { '^/apix': '' },
                changeOrigin: true,
                secure: false,
            },
        },
    },

    /*
        Загрузка иконок. В виде вставки svg в html
        Нужно сначала очистить правилка обработки svg по умолчанию
        https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
    */
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('html-loader')
            .loader('html-loader')
            .tap((options) => ({
                ...options,
                minimize: true,
            }));
    },
};
