# FrontLauncher
## Installation:

Make sure that you have latest node.js version
<p>To install run just
  <code>npm i</code>
</p>


## Features
- **CSS:** [Sass](http://sass-lang.com/) (scss)
  - Libsass (node-sass) for ultra light compiles
  - CSS globbing import for Sass partials
  - Autoprefixer
  - [Foundation 6](http://foundation.zurb.com/sites/docs/) included
- **JS:**
  - Uglify and minify scripts
  - [Webpack](https://webpack.github.io/) as a module bundler
- **HTML:**
  - Templates are compiled with [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Images:**
  - Compress images from assets/img
- **Webfont:**
  - Generate webfont from SVG
  - Generate sass file for webfont and html demo preview 
- **Livereload:**
  - Livereloading after css, js or html change with [BrowserSync](http://www.browsersync.io/)
  - Run server on port 3000 (default) developers tools - port 3001
- **Notify:**
  - Notify about error in watch tasks (working on Windows 8 or higher)


## Usage

| Command          | Description                                                                                                                     |
|------------------|---------------------------------------------------------------------------------------------------------------------------------|
| gulp             | Run build, start watch for changes assets files and run BrowserSync server                                                      |
| gulp build       | Build public views with assets and components                                                                                   |
| gulp production  | Build public views with minified assets and components to production                                                            |
