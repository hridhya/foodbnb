/**Build system
 Like browserify and Webpack
 **/


/**
 *
 * If not, then we would have to manually include all these <script> tags in a specific order,
 * because one file may depend on another file which depends on another file.
 * Additionally, we cannot use ECMAScript 6 directly in the browsers yet.
 * Our code needs to be transformed by Babel into ECMAScript 5 before it can be served and interpreted by the browsers.
 *
 */

/**
 * Gulp + browserify is my build system
  * @type {Gulp|*|exports|module.exports}
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var dependencies = [
  'alt',
  'react',
  'react-dom',
  'react-router',
  'underscore'
];
