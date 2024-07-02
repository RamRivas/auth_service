import { main } from './src';
import { PORT } from './src/config';

const app = main();

app.listen( PORT, () => {
    console.log( `Server running on port ${ PORT }` );
} );
