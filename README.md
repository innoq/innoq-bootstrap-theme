# INNOQ Bootstrap 4 Theme

[![Build Status](https://travis-ci.org/innoq/innoq-bootstrap-theme.svg?branch=master)](https://travis-ci.org/innoq/innoq-bootstrap-theme)
[![npm version](https://badge.fury.io/js/innoq-bootstrap-theme.svg)](https://www.npmjs.com/package/innoq-bootstrap-theme)

## Usage

This theme is a complete replacement for Bootstrap 4. You do not need to include
both, `bootstrap.css` and `innoq-bootstrap-theme.css`. The latter is sufficient.

To use the compiled theme in your webapp, you can either link to our CDN 

  https://bootstrap.assets.innoq.com/css/X.X.X/innoq-bootstrap-theme.css

(replace x.x.x by your desired version) or copy the contents of a certain 
[release](https://github.com/innoq/innoq-bootstrap-theme/releases) to your 
designated asset folder or use NPM to install this theme as a dependency.

    npm install innoq-bootstrap-theme --save

If you like to use this theme in your own Sass code and installed this theme
with NPM you can import the source files to your manifest (e.g. `index.scss`)
as well.

```scss
@import "innoq-bootstrap-theme/src/styles/index.scss";
```

**Please note:** This theme styles _all_ default Bootstrap components compliant
to the new [INNOQ corporate design](https://innoq.style).
If you need documentation or help with Bootstrap or its components in general,
please head over to

<https://getbootstrap.com>

**Important:** If you are currently using Bootstrap 3 you should be aware that
version 4 brings some *breaking changes*. Do not update to the new theme without
updating your webapp's views as well. If you need help with that check out this
[official migration guide](https://getbootstrap.com/docs/4.0/migration/).


## Development

Contribution is always welcome. Please use pull requests, if you want to
incorporate changes or new components. For development purposes of this theme,
we use the official Bootstrap documentation pages and apply the styles of this
theme to it. Therefore this repository uses a submodule to link the official
Bootstrap repository and a build script to generate and serve the documentation
pages locally.

### Setup

* Install ruby 2.3 or higher
* Install node v8.9 or higher

* Clone project `git clone git@github.com:innoq/innoq-bootstrap-theme.git`
* Go into the project folder `cd innoq-bootstrap-theme`
* Init the Bootstrap submodule `git submodule update --init` (only needed the
  very first time)
* Install Bootstap's documentation pages `npm run install-docs`
* Compile styles and serve documentation `npm start`

Now you should see the Bootstrap documentation pages with INNOQ styling applied.
`npm start` incorporates a watcher, so you can write code and see your
changes immediately in the browser.
