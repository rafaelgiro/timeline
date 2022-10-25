const withTM = require("next-transpile-modules")(["@5pots/timeline"]);

module.exports = withTM({
  reactStrictMode: true,
});
