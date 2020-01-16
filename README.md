# arm-templator (prototype)
Generate ARM templates programatically by writing Typescript.

## Using this repo

### Authoring and generating a template
1. Clone this repo
2. Run `npm install` to install dependencies.
3. Create a Typescript file implementing the `execute()` function (see [tests/basic.ts](./tests/basic.ts) for an example).
4. Run `npm start {path_to_ts_file.ts}` to generate the ARM template output. To generate a JSON file, use `npm start {path_to_ts_file.ts} --silent > {path_to_json_file.json}`.

### Running tests
Tests can be executed by running `npm test`. The tests simply execute a named `.ts` file in the [tests](./tests/) directory, and compare the output to the `.json` file with the same name.

## Contributing
Feel free to contribute via Pull Requests or the Issue tracker!