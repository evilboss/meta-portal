import {app} from './app';

const {PORT} = process.env;
app.listen(PORT, (err) => {
    if (err) {
        return console.error('Error:', err);
    }
    console.info('Listening on port %d', PORT);
});
