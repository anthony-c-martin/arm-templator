import execute from "./template";
import { renderJson, ConcreteTemplate } from "./library/executor";

const template = new ConcreteTemplate();
execute(template);
const json = renderJson(template);

console.log(JSON.stringify(json, null, 2));