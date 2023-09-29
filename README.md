# SVGO Website

A site powered by Docusaurus, mostly featuring documentation for SVGO.

This repository contains source code for the landing page, custom components, and pretty much everything except the documentation itself. The documentation is pulled from [svg/svgo](https://github.com/svg/svgo) during deployment.

In order to run or deploy the site, you'll first need to fetch the documentation. You can do this by cloning [svg/svgo](https://github.com/svg/svgo) to the `.svgo` directory in the workspace.

```sh
git clone https://github.com/svg/svgo.git .svgo --depth 1
```

Docusaurus is configured to read documents from the `.svgo/docs` directory instead of the root `docs/` directory.

## Running Locally

Once you have the project setup, you can run the development server:

```sh
yarn install
yarn run start
```
