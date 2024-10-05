import defaultConfig from './jest.config';

export default {
  ...defaultConfig,
  testMatch: ['**/?(*.)+(alt-spec|alt-test).[jt]s?(x)'],
};
