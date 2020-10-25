import {app} from './app';

const {PORT} = process.env;
app.listen(PORT, (err) => {
    if (err) {
        return console.log('Error:', err);
    }
    console.log('Listening on port %d', PORT);
});
