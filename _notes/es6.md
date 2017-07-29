## Dependency
  "babel-cli": "~6.24.1",
  "babel-preset-es2015":"~6.24.1",
  "babel-preset-react":"~6.24.1",

## Add babel config into package.json
  "babel": {
    "presets": ["react", "es2015"]
  }

## Add interpreter to npm script
  "scripts": {
    "dev": "pm2 start server/server.js --watch --interpreter babel-node"
  },