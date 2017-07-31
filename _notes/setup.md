$ yarn init
$ yarn add --dev eslint
$ yarn eslint -- --init
$ yarn add --dev eslint-plugin-react babel-eslint
$ yarn add express ejs
$ yarn add pm2



# Run
  Terminal 1 :
    $ yarn dev   # start pm2
    $ yarn pm2 logs    # watch the lg

  Terminal 2:
    $ yarn build  # build js

  Terminal 3:
    $ yarn test