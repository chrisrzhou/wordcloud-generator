# Wordcloud Generator

A modern wordcloud generator based on the [original wordcloud generator][original-wordcloud-generator] by Jason Davies.

Built using the [`react-wordcloud`][react-wordcloud] and [`react-unified-doc`][react-unified-doc] packages.

## Run

Run locally with
```sh
yarn && yarn start
```

Deploy your own Netlify instance and configure your forked repo with the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chrisrzhou/wordcloud-generator)

## Features
* Edit content or upload a text file in the **Content** section.
* Preview content with associated content type renderers (`html`, `markdown`, `text`).
* Configure wordcloud and content tokenizers using the **Settings** button.
* Select words from the wordcloud to preview them in the document.
* Save the wordcloud as an image.

<!-- Links -->
[original-wordcloud-generator]: https://www.jasondavies.com/wordcloud/
[react-unified-doc]: https://github.com/chrisrzhou/unified-doc/tree/master/packages/react-unified-doc
[react-wordcloud]: https://github.com/chrisrzhou/react-wordcloud
