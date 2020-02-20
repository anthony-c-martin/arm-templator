import { resourceGroupLocation, buildTemplate } from '../../lib/template';
import { default as builder } from './nestedTemplate';

interface Params {
  namePrefix: string,
  subnetResourceId: string,
}

interface Outputs {
}

export default buildTemplate<Params, Outputs>(template => {
  const location = resourceGroupLocation();
  const namePrefix = template.getParam('string', 'namePrefix');
  const subnetResourceId = template.getParam('string', 'subnetResourceId');

  for (let i = 0; i < 3; i++) {
    const result = template.deployNested(
      `nested${i}`,
      location,
      builder,
      {
        index: i.toString(),
        namePrefix,
        subnetResourceId,
      });
  }
});