## Project structure
  - /lib                # shared between client and server, server side rending.
  - /public/index.ejs   # main page of client side
  - /lib/server.js      # node server
  - /lib/components     # client side app


## Setup
$ yarn init
$ yarn add --dev eslint    # add eslint to dev dependency
$ yarn eslint -- --init    # create eslint config .eslintrc.js
$ yarn add --dev eslint-plugin-react babel-eslint
$ yarn add express ejs     # use ejs view engine
$ yarn add pm2

## pm2
  pm2 start lib/server.js --watch

## Run
  Terminal 1 for the server side
    $ yarn dev   # start pm2
    $ yarn pm2 logs    # watch the lg

  Terminal 2:
    $ yarn build  # build js

  Terminal 3:
    $ yarn test

