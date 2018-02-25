# Wordcloud Generator

This is a modernized React + Redux wordcloud generator inspired by the original wordcloud generator created by [Jason Davies](https://www.jasondavies.com/wordcloud/).

## Run

Run locally

```
yarn install
yarn start
```

Run in production

```
yarn install
yarn build
# serve /build folder in production
```

## Generator Features

* Copy/paste/edit text or upload a text file in the **Text Panel**.
* Tweak the wordcloud using the **Properties Panel**.
* Click on the wordcloud words to highlight words in the text input.
* Save or share the wordcloud with your friends!

## Word Cloud Features

[Github](https://github.com/chrisrzhou/react-wordcloud)

* Control orientations of words by setting min/max angles.
* Inherits parent node's height/width or accepts explicit values.
* Customize colors by passing an array of colors or callback.
* Customize font family.
* Customize layout/placement of words.
* Customize tooltips using callback.
* Customize click actions on words using callback.
* Set limit of maximum words displayed.

## Personal Motivations

I built this app to practice using the following libraries in building canonical web applications:

* `react`
* `react-router`
* `redux`
* `reselect`
* `antd`

I also wanted to test out component and redux file/folder organization. I was pretty happy with this folder organization that treated `components` and `store` (data/state) as first class citizens for building React web applications

```
/components
  /layout
  /shared
  /...
/constants
/routes
  index.js
  paths.js
/store
  /modules
    /module-1
      index.js
      actions.js
      constants.js
      reducer.js
      selectors.js
    /module-2
      ...
    ...
  index.js
  reducer.js
/styles
  colors.js
  margins.js
  ...
/util
/views
  Main.js
  NotFound.js
  ...
index.css
index.js
LICENSE
README.md
package.json
.env
.editorconfig
.eslintrc
.gitignore
```
