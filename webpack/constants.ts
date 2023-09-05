import path from 'path';

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development';

const IS_SWC: boolean = true;
const DEV_SERVER_PORT: number = 8040;
const DEV_SERVER_HTTPS_PORT: number = 8050;

const SRC_DIR: string = path.join(__dirname, '../src');
const DIST_DIR: string = path.join(__dirname, '../travel-status-v2');
const SERVER_SRC_DIR: string = path.join(__dirname, '../src/server');

const SERVER_BUNDLE_NAME: string = 'server';
const STATIC_CONTENT_PATH = 'travel-status-v2/'
const BASE_PATH = '/travel-status-v2';
const HEALTH_CHECK = '/travel-status-v2/healthCheck';
const IMAGES_STATIC_CONTENT_PATH = 'travel-status-v2/images';


const ALIAS: Record<string, string> = {
  api: `${SRC_DIR}/api`,
  assets: `${SRC_DIR}/assets`,
  components: `${SRC_DIR}/components`,
  constants: `${SRC_DIR}/constants`,
  images: `${SRC_DIR}/assets/images`,
  hocs: `${SRC_DIR}/hocs`,
  hooks: `${SRC_DIR}/hooks`,
  pages: `${SRC_DIR}/pages`,
  router: `${SRC_DIR}/router`,
  server: `${SRC_DIR}/server`,
  src: `${SRC_DIR}`,
  style: `${SRC_DIR}/style`,
  store: `${SRC_DIR}/store`,
  types: `${SRC_DIR}/types`,
  utils: `${SRC_DIR}/utils`,
  _webpack: path.join(__dirname, '../webpack'),

};

export {
  ALIAS,
  DEV_SERVER_PORT,
  DEV_SERVER_HTTPS_PORT,
  DIST_DIR,
  IS_DEV,
  IS_SWC,
  SERVER_BUNDLE_NAME,
  SERVER_SRC_DIR,
  SRC_DIR,
  BASE_PATH,
  HEALTH_CHECK,
  STATIC_CONTENT_PATH,
  IMAGES_STATIC_CONTENT_PATH
};
