import express from 'express';

export class App {
    constructor(public app: express.Application = express()) {
        this.app = app;
    }

    listen() {
        this.app.listen(3000, () => {
            console.log('Server listening on port 3000');
        });
    }
}
