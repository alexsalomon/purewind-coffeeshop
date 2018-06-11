// See http://brunch.io for documentation.

exports.config = {
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
                'js/app.js': /^app\/js/
            },
        },
        stylesheets: {joinTo: 'styles/app.css'},
    },
    npm: {
        enabled: true,
        globals: {
            $: 'jquery',
            alertify: 'alertifyjs',
            parsley: 'parsleyjs'
        },
        styles: {
            'bulma': ['css/bulma.css'],
            'alertifyjs': ['build/css/alertify.css'],
            'parsleyjs': ['src/parsley.css']
        }
    },
    plugins: {
        babel: { presets: ['latest'] },
        nunjucks: {
            pageTitle: 'The Pure Wind Coffee'
        },
        eslint: {
            config: {
                rules: {
                    semi: 2,
                },
            },
            pattern: /^src\/.*\.jsx?$/,
            warnOnly: false,
            formatter: 'table',
        },
    },
};
