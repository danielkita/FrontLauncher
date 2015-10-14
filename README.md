# FrontLauncher
## Installation:
<p>To install run
<code>npm install && bower install</code><br>

## Features
- **CSS:** [Sass](http://sass-lang.com/) (scss)
  - Libsass (node-sass) for ultra light compiles
  - CSS globbing import for Sass partials
  - [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) included
- **JS:**
  - Uglify and minify scripts
- **HTML:**
  - Templates are compiled with [Nunjucks](https://mozilla.github.io/nunjucks/)
  - Wiredep - install [Bower](http://bower.io/) packages
  - Concat and uglify vendor's assets
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
| watch(default) | Watch for changes assets files and run BrowserSync server                                                                       |
| wiredep        | Inject bower packages into all html files                                                                                       |
| build          | Concat, minify all assets                                                                                                       |