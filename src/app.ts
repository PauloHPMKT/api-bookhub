import express from 'express';

export class App {
  constructor(public app: express.Application = express()) {
    this.app = app;
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  }
}
