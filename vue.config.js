module.exports = {
    lintOnSave: false,

    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/styles/variables.scss";',
            },
        },
    },

    devServer: {
        proxy: {
            '/oxford-api': {
                target: process.env.VUE_APP_URL,
                pathRewrite: { '^/oxford-api': '' },
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
