# SVGO Website

A site powered by Docusaurus to host the SVGO documentation.

This repository contains source code for everything except the documentation itself. The documentation is pulled from [svg/svgo](https://github.com/svg/svgo) via Git submodules.

## Contributing

Clone the repository:

```sh
# If you're doing a fresh clone:
git clone --recurse-submodules https://github.com/svg/svgo.dev.git
# or with SSH if you've set that up:
git clone --recurse-submodules git@github.com:svg/svgo.dev.git

# Or… if you've already cloned without submodules and need to initialize them:
git submodule update --init --recursive
```

Then install dependencies:

```sh
corepack enable
yarn install
```

Once you have the project setup, you can run the development server:

```sh
yarn run start
```
