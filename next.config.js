const withImages = require('next-images');

module.exports = withImages({
    env: {
      baseUrl: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master',
    },
});

