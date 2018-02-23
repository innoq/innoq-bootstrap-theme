# ⚠️ WORK IN PROGRESS! DO NOT USE THIS THEME YET! ⚠️


## Usage

This theme is a complete replacement for Bootstrap. You do not need to include
both, `bootstrap.css` and `innoq-bootstrap-theme.css`. The latter is sufficient.

To use this theme in your webapp you can either copy the contents of `dist/` to
your designated asset folder or use NPM to install this theme as a dependency.

    npm install innoq-bootstrap-theme --save

This theme styles all default Bootstrap components compliant to the new INNOQ
corporate design. If you need documentation or help on how to use Bootstrap
components in general please head over to <https://getbootstrap.com>.


## Development

Contribution is always welcome. Please use pull requests, if you want to
incorperate your changes. For development purposes of this theme, we use the
official Bootstrap documentation pages. Therefore this repository uses a
submodule to link the official Bootstrap repository and a build script to generate
and serve the documentation pages locally.

### Setup

* Install ruby 2.3 or higher
* Install node v8.9 or higher

* Clone project `git clone git@github.com:innoq/innoq-bootstrap-theme.git`
* Go into project `cd innoq-bootstrap-theme`
* Init Bootstrap submodule `git submodule update --init` (only needed the first time)
* ...
