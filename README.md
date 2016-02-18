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
  - [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) included
- **JS:**
  - Uglify and minify scripts
  - [Webpack](https://webpack.github.io/) as a module bundler
- **HTML:**
  - Templates are compiled with [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Images:**
  - Compress images from assets/img
- **Livereload:**
  - Livereloading after css, js or html change with [BrowserSync](http://www.browsersync.io/)
  - Run server on port 3000 (default) developers tools - port 3001
- **Notify:**
  - Notify about error in watch tasks (working on Windows 8 or higher)


## Usage

| Command        | Description                                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------------------------------|
| watch(default) | Run build, start watch for changes assets files and run BrowserSync server                                                      |
| build          | Build public views with assets and components                                                                                   |
| production     | Build public views with minified assets and components to production                                                            |

<p>
   Bower and wiredep is deprecated and will be removed in future version
</p>

