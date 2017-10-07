import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();  // return initialData and initialMarkup
  res.render('index', { ...initialContent });
});

// expose data to client /data
app.get('/data', (req, res) => {
  res.send(data);
});


app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});