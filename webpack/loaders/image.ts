import { RuleSetRule } from 'webpack';

import { IS_DEV,IMAGES_STATIC_CONTENT_PATH } from '../constants';
import { TLoader } from '../types';

const imageRegex: RegExp = /\.(png|jpg|jpeg|gif)$/;

const universalLoader: RuleSetRule = {
  test: imageRegex,
  type: 'asset/resource',
  generator: {
    filename: `${IMAGES_STATIC_CONTENT_PATH}/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`,
  },
};

export const imageLoader: TLoader = {
  client: universalLoader,
  server: universalLoader,
};
