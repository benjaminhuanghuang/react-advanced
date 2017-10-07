To support react server side rendering, using jsx syntax and babel at server side

## Dependency
  "babel-cli": "~6.24.1",
  "babel-preset-es2015":"~6.24.1",
  "babel-preset-react":"~6.24.1",
  "babel-preset-env"
  "babel-preset-stage-2"

## Add babel config into package.json
  "babel": {
    "presets": ["react", "dev", "stage-2"]
  }

## Use babel-node instead of node as the interpreter
  "scripts": {
    "dev": "pm2 start server.js --watch --interpreter babel-node"
  },

## Change require to import
