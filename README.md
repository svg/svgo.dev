# SVGO Website

A site powered by Docusaurus, featuring documentation for SVGO.

This repository contains source code for everything except the documentation itself, as the documentation is pulled from [svg/svgo](https://github.com/svg/svgo) during deployment.

Docusaurus is configured to read documentation from the `.svgo/docs` directory instead of the root `docs/` directory. Before running locally, you must install dependencies and obtain a copy of the documentation:

```sh
yarn install

# You only need to do one of the following!

# Requires git, clones svg/svgo to .svgo
yarn run svgo:clone

# Assumes svg/svgo was cloned next to svg/svgo.dev, copies svg/svgo to .svgo
yarn run svgo:copy
```

## Running Locally

Once you have the project setup, you can run the development server:

```sh
yarn run start
```
