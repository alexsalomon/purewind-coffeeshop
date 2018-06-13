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
            siteUrl: "http://purewind.alexsalomon.me",
            siteImage: "http://purewind.alexsalomon.me/images/home/home-mobile-01.jpg",
            pageTitle: 'The Pure Wind Coffee',
            siteDescription: "Pure Wind is a website for a fictional coffeehouse made by Alex Salomon.",
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
