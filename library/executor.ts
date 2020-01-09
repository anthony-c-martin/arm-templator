import { Template, Resource } from "./language";

class ConcreteTemplate implements Template {
  resources: Resource<any>[];
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]) {
    this.resources.push(resource);
  }
}