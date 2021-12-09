import * as express from 'express';

const app = express();
const PORT = process.env.PORT? process.env.PORT: 8000;

// @ts-ignore
app.get('/', (req: express.Request, res: express.Response) => res.send('Hello World'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});