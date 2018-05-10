// See http://brunch.io for documentation.

exports.config = {
  files: {
      javascripts: {
          joinTo: {
              'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
              'app.js': /^app/
          },
      },
      stylesheets: {joinTo: 'app.css'},
  },
  plugins: {
      babel: {presets: ['latest']},
  },
};
