[![Netlify Status](https://api.netlify.com/api/v1/badges/7da1014a-313e-4dc9-87ca-daaa5394fc49/deploy-status)](https://app.netlify.com/sites/jeniusgolang/deploys)

# Website

Buku Bersumber dari judul buku [Belajar Jenius Golang](https://github.com/gungunfebrianza/Belajar-Dengan-Jenius-Golang.git).

### Installation

```
$ yarn
$ yarn start
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Searching Build

```
$ yarn build
$ node build-search-data.js
```

Update your index of searching using lunr.js!

### Netlify

```
https://jeniusgolang.netlify.app/
```
