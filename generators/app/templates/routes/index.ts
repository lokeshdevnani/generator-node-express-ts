import * as express from 'express';
export let router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.render('index', { title: 'Express' });
});
