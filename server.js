const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: dev ? `${__dirname}/../client` : `${__dirname}/../build` });