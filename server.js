const app = next({
  dev,
  conf: {distDir: `${path.relative(process.cwd(), __dirname)}/../next`},
});