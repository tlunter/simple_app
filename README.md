# Simple App

This is a very simple example of a website that uses the [Aviator](https://github.com/swipely/aviator) front-end router, and [ReactJS](https://github.com/facebook/react) view system.

[Demo](http://simple_app.tlunter.com/)

## Tools

1.  NPM - gets all of the build tools
2.  grunt - compiles all vendored and local assets for use by the website
3.  bower - pulls down assets (Aviator, React, ...)
4.  bundler - pulls down Ruby plugins (gems)
5.  rack - Ruby webserver

## How to get started

### Things to install

1.  Ruby - Recommended install through rbenv and `rbenv install` ([rbenv](https://github.com/sstephenson/rbenv) and [ruby-build for rbenv](https://github.com/sstephenson/ruby-build))
2.  Node - Recommended install through package manager (pacman, brew, apt-get, yum)

### Building environment

1.  Installing grunt and bower

        sudo npm install -g grunt-cli bower

2.  Installing bundler

        gem install bundler

3.  Installing Ruby gems

        bundle install

4.  Installing node modules

        npm install

5.  Getting assets

        bower install

6.  Compiling assets

        grunt

7.  Enabling rackup (only needed if using rbenv once)

        rbenv rehash

## Running application

In this directory, run:

    rackup

Now: visit [http://localhost:9292/](http://localhost:9292/)

## Continuing development

If you want to rebuild the JS/JSX files, run `grunt` again.  To do this automatically while writing and saving files, run `grunt watch`.

If you add new gems to your Gemfile, run `bundle install` again to include them.

Adding routes is as simple as extending the list in `config.ru`.
