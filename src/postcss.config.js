const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      resolve: function (id, basedir, importOptions) {
        if (id.split('/')[0] === '@') {
          return path.join(__dirname, id.slice(2));
        }
        return path.resolve(basedir, id);
      },
    }),
    require('postcss-cssnext')(),
  ],
};
