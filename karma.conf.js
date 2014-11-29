// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-*/angular-*.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/modernizr/modernizr.js',
      'src/*.js',
      'src/**/*.js',
      'tests/*.js',
      'tests/**/*.spec.js'
    ],
    
    exclude: [
      'bower_components/angular/*.min.js',
      'bower_components/angular-*/angular-*.min.js'
    ],
    
    autoWatch: true,
    
    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'log/unit.xml',
      suite: 'unit'
    }
  });
};
