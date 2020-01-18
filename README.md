# arm-templator (prototype)
Generate ARM templates programmatically by writing Typescript.

## Using this repo

### Authoring and generating a template
1. Clone this repo
2. Run `npm install` to install dependencies.
3. Create a Typescript file implementing the `execute()` function (see [examples/basic/input.ts](./examples/basic/input.ts) for an example).
4. Run `npm start {path_to_ts_file.ts}` to generate the ARM template output. To generate a JSON file, use `npm start {path_to_ts_file.ts} --silent > {path_to_json_file.json}`.

### Running tests
Tests can be executed by running `npm test`. The tests simply execute a named `input.ts` file in subdirectories of the [examples](./examples/) directory, and compare the generated output to the `output.json` template file.

### Examples
#### Basic
A basic example of template generation with little fancy Typescript syntax.

#### Modularity
An example to show how script files can be simplified by modularizing the resource generation logic.

#### Scripts
An example to demonstrate pulling in an external PowerShell script and running it as part of a deployment.

## Contributing
Feel free to contribute via Pull Requests or the Issue tracker!