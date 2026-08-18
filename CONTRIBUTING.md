# Contribution Guide

Thank you very much for contributing to SVGO.dev!

## Development

### Requirements

- [Git](https://git-scm.com)
- [Node.js >=24](https://nodejs.org)

### Getting Started

Clone the repository with Git.

```sh
# If you're doing a fresh clone:
git clone --recurse-submodules https://github.com/svg/svgo.dev.git
# or with SSH if you've set that up:
git clone --recurse-submodules git@github.com:svg/svgo.dev.git

# Or… if you've already cloned without submodules and need to initialize them:
git submodule update --init --recursive
```

As this is a Node.js project and uses pnpm for package management, install pnpm and the dependencies.

```sh
corepack enable
pnpm install
```

Finally, make sure the development server actually works before making changes. (So that if something goes wrong later, you know if it's actually your fault!)

```sh
pnpm run start
```

## Localization

The website and documentation is available in multiple languages. When translating, keep in mind the following:

### Message Values

Do not translate anything between curly braces (`{}`), these are references to variables that will replace them.

```
Translate this! Please don't translate {variables}.
```

In some languages you may need to restructure the whole sentence. You can still move the variable around anywhere in the message, but you must keep the curly braces and its contents intact.

### HTML and SVG Code

Do not modify HTML tags, IDs, classes, or attributes, etc. For example:

```html
Translate this! <div id="…" class="…" attribute="…">You can translate this too!</div>
```

In the example above, both of these should be translated, but the rest must be ignored:

- _"Translate this!"_
- _"You can translate this too!"_

## Documentation

Our documentation is maintained in [svg/svgo](https://github.com/svg/svgo). This repository pulls the documentation from there and adds some orchestration around it.

See [SVGO's Contribution Guide](https://github.com/svg/svgo/blob/main/CONTRIBUTING.md) for how to contribute to the documentation.

To preview your changes, you can either:

- Push to your fork and then update the reference of the `svgo` git submodule to point to your fork/branch.
- Make the change directly to the copy of SVGO in the `svgo` submodule.

## Funding

Sponsoring the project helps keep it sustainable for current maintainers.

See: [SVGO on Open Collective](https://opencollective.com/svgo)
