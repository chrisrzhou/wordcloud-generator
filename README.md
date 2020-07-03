# Wordcloud Generator

A modern wordcloud generator based on the [original wordcloud generator][original-wordcloud-generator] by Jason Davies.

Built using the [`react-wordcloud`][react-wordcloud] and [`react-unified-doc`][react-unified-doc] packages.

## Run

Run locally with
```sh
yarn && yarn start
```

#### Run locally using Docker

Both Production ready sample dockerfile and Development version of dockers files were included.

Production ready sample of docker file includes nginx server as a proxy layer.

Simply run the production ready by execution below and you should be able to access the application by http://localhost (As nginx server defaul port was set to serve on 80) 

```
docker-compose  up -d --build
```

For just development version without including nginx etc.. server , pls use below commands and you would be able access application using http://localhost:3000/

```
$ docker build -f Dockerfile.Dev . -t sdontireddy/worldcloud-generator

$ docker run -it -p 3000:3000 sdontireddy/worldcloud-generator
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
