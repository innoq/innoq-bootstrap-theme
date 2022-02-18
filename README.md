# INNOQ Bootstrap 5 Theme

[![npm version](https://badge.fury.io/js/innoq-bootstrap-theme.svg)](https://www.npmjs.com/package/innoq-bootstrap-theme)

## Usage

This theme is a complete replacement for Bootstrap 5. You do not need to include
both, `bootstrap.css` and `innoq-bootstrap-theme.css`. The latter is sufficient.

To use the compiled theme in your webapp, you can either link to our CDN

  https://bootstrap.assets.innoq.com/css/X.X.X/innoq-bootstrap-theme.css

(replace x.x.x by your desired version) or copy the contents of a certain
[release][theme-release] to your designated asset folder or use NPM to install this theme as a dependency.

    npm install innoq-bootstrap-theme --save

If you like to use this theme in your own Sass code and installed this theme
with NPM you can import the source files to your manifest (e.g. `index.scss`)
as well.

```scss
@import "innoq-bootstrap-theme/src/styles/innoq-bootstrap-theme.scss";
```

**Please note:** This theme styles _all_ default Bootstrap components compliant
to the new [INNOQ corporate design](https://innoq.style).
If you need documentation or help with Bootstrap or its components in general,
please head over to

<https://getbootstrap.com>

**Important:** If you are currently using Bootstrap 4 you should be aware that
version 5 brings some _breaking changes_. Do not update to the new theme without
updating your webapp's views as well. If you need help with that check out this
[official migration guide][bootstrap-migration].

If you need the according JavaScript bundle from Bootstrap, please use either the Bootstraps CDN link
or the files that the bootstrap npm package provides. See more details [here][bootstrap-getting-started].


## Development

Contribution is always welcome. Please use pull requests, if you want to
incorporate changes or new components. For development purposes of this theme,
we use the official Bootstrap documentation pages and apply the styles of this
theme to it. Therefore this repository uses a submodule to link the official
Bootstrap repository and a build script to generate and serve the documentation
pages locally.

### Setup

* Install node v12 or higher

* Clone project `git clone git@github.com:innoq/innoq-bootstrap-theme.git`
* Go into the project folder `cd innoq-bootstrap-theme`
* Init the Bootstrap submodule `git submodule update --init` (only needed the
  very first time)
* Compile styles and serve documentation `npm start`

Now you should see the Bootstrap documentation pages with INNOQ styling applied.
`npm start` incorporates a watcher, so you can write code and see your
changes immediately in the browser.

[theme-release]: https://github.com/innoq/innoq-bootstrap-theme/releases
[bootstrap-migration]: https://getbootstrap.com/docs/5.1/migration/
[bootstrap-getting-started]: https://getbootstrap.com/docs/5.1/getting-started/javascript/