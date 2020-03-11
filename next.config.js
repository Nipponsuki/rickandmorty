const path = require('path');
const withImages = require('next-images')

module.exports = withImages({
  webpack: config => {
    config.resolve.alias['src'] = path.resolve(__dirname);
    return config;
  }
});
