import { RuleSetRule } from 'webpack';

import { IS_DEV,IMAGES_STATIC_CONTENT_PATH } from '../constants';
import { TLoader } from '../types';

const svgRegex: RegExp = /\.svg$/;

const universalLoader: RuleSetRule = {
  test: svgRegex,
  oneOf: [
    {
      type: 'asset/resource',
      resourceQuery: /url/,
    },
    {
      type: 'asset/inline',
      resourceQuery: /base64/,
    },
    {
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },
  ],
  generator: {
    filename: `${IMAGES_STATIC_CONTENT_PATH}/${IS_DEV ? '[name][ext]' : '[name]-[hash][ext]'}`,
  },
};

export const svgLoader: TLoader = {
  client: universalLoader,
  server: universalLoader,
};
