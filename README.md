# arm-templator

> Generate ARM templates programmatically by writing Typescript.

[![NPM Version][npm-image]][npm-url]
[![Build Status][status-image]][status-image]

## Installing

```bash
npm i -S arm-templator
```

## Examples
See the [arm-templator-usage][usage-repo] repo for some usage examples.

## Type Definitions
See the [arm-templator-types][types-repo] repo for resource type definitions. 

## Running tests
Tests can be executed by running `npm test`. The tests simply execute a named `input.ts` file in subdirectories of the [tests](./tests/) directory, and compare the generated output to the `output.json` template file.

## Contributing
Please feel free to contribute via Pull Requests or the Issue tracker!

[npm-image]: https://img.shields.io/npm/v/arm-templator.svg
[npm-url]: https://npmjs.org/package/arm-templator
[status-image]: https://img.shields.io/github/workflow/status/anthony-c-martin/arm-templator/CI
[usage-repo]: https://github.com/anthony-c-martin/arm-templator-usage
[types-repo]: https://github.com/anthony-c-martin/arm-templator-types