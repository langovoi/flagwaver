const compatibility = [
  'last 2 versions',
  'ie >= 9',
  'ios >= 7'
];

export default {
  app: {
    PUBLIC_URL: 'https://krikienoid.github.io/flagwaver'
  },
  server: {
    root: 'dist',
    port: 8000
  },
  paths: {
    src: {
      root:   'src',
      html:   'src/index.html',
      sass:   'src/assets/scss/**/*.scss',
      js:     'src/assets/js',
      img:    'src/assets/img/**/*',
      static: 'src/static/**/*'
    },
    dest: {
      root:   'dist',
      html:   'dist',
      css:    'dist/assets/css',
      js:     'dist/assets/js',
      img:    'dist/assets/img',
      static: 'dist'
    },
    deps: {
      js: [
        'node_modules/three/three.min.js',
        'node_modules/stats.js/build/stats.min.js'
      ]
    }
  },
  compatibility: compatibility,
  settings: {
    autoprefixer: {
      browsers: compatibility
    },
    cleanCss: {
      compatibility: 'ie9'
    },
    modernizr: {
      // https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
      'feature-detects': [
        'canvas',
        'css/flexbox',
        'css/flexboxtweener',
        'svg',
        'svg/asimg',
        'svg/inline',
        'webgl'
      ],
      options: [
        'html5shiv',
        'setClasses'
      ]
    }
  },
  init: function () {
    return this;
  }
}.init();
