# Wordcloud Generator

A modernized wordcloud generator based on the original wordcloud generator by [Jason Davies][original-wordcloud-generator].  It is a simple [React app][create-react-app] built with the [`react-wordcloud`][react-wordcloud] package.

## Run

Run locally with
```
yarn && yarn start
```

Deploy your own Netlify instance and configure your forked repo with the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrisrzhou/wordcloud-generator)

## Features

* Copy/paste/edit text or upload a text file in the **Text Panel**.
* Tweak the wordcloud using the **Properties Panel**.
* Click on the wordcloud words to highlight words in the text input.
* Exclude words from the wordcloud.
* Save and share the wordcloud with your friends!

* Control orientations of words by setting min/max angles.
* Inherits parent node's height/width or accepts explicit values.
* Customize colors by passing an array of colors or callback.
* Customize font family.
* Customize layout/placement of words.
* Customize tooltips using callback.
* Customize click actions on words using callback.
* Set limit of maximum words displayed.

<!-- Links -->
[original-wordcloud-generator]: https://www.jasondavies.com/wordcloud/
[create-react-app]: https://github.com/facebook/create-react-app
[react-wordcloud]: https://github.com/chrisrzhou/react-wordcloud
