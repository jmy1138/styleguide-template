module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/build/style.css': 'sass/style.scss'
    }
  }
}