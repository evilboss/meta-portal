import {app} from './app';
app.listen(3000, (err) => {
    if (err) { return console.log('Error:', err); }
    console.log('Listening on port %d', 3000);
});
