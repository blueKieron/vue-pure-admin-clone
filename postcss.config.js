// @ts-check

/** @type {import('postcss-loading-config').Config}  */
export default {
  plugins: {
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  }
};
