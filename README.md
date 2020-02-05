# arm-templator (prototype)
Generate ARM templates programmatically by writing Typescript.

## Using this repo

### Authoring and generating a template
1. Clone this repo
2. Run `npm install` to install dependencies.
3. Create a Typescript file which calls the `renderTemplate()` function and exports the result (see [examples/basic/input.ts](./examples/basic/input.ts) for an example).
4. Create a Typescript deployment file (see [examples/basic/deployment.ts](./examples/basic/deployment.ts)
5. Run `npm run display -- --path {your_deployment_file.ts}` to generate the ARM template output. To write to a JSON file, use `npm run display -- --path {your_deployment_file.ts} --silent > {your_output.json}`.

### Deploying a template
1. Run `npm run deploy -- --path {your_deployment_file.ts}`.
2. Follow the login instructions in the command-line prompt and provide your device code.

### Running tests
Tests can be executed by running `npm test`. The tests simply execute a named `input.ts` file in subdirectories of the [examples](./examples/) directory, and compare the generated output to the `output.json` template file.

### Examples
#### [Basic](./examples/basic/input.ts)
A basic example of template generation with little fancy Typescript syntax.

#### [Modularity](./examples/modularity/input.ts)
An example to show how script files can be simplified by modularizing the resource generation logic.

#### [Scripts](./examples/scripts/input.ts)
An example to demonstrate pulling in an external PowerShell script and running it as part of a deployment.

## Contributing
Feel free to contribute via Pull Requests or the Issue tracker!