import express from 'express';
import morgan from 'morgan';
import { CTX } from './config';

export const main = () => {
    const app = express();
    
    CTX === 'dev' && app.use( morgan( 'dev' ) );
    app.use( express.json() );
    app.use( express.urlencoded( { extended: true } ) );
    
    // for (const element of Routes) {
    //     app.use(`/api${element.prefix}`, element.router);
    // }

    app.get('/ping', (_req, res) => {
        res.send('pong');
    });

    return app;
}

