import express from "express";

const app = express();

app.get('/', (req, res)  => {
    res.send('Server is Serving');
});


app.get('/jokes', (req, res)  => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke :->'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke :->'
        },
        {
            id: 3,
            title: 'A different',
            content: 'This is a different joke :->'
        },
        {
            id: 4,
            title: 'A good joke',
            content: 'This is a good joke :->'
        },
        {
            id: 5,
            title: 'A nice joke',
            content: 'This is a nice joke :->'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serve at http://localhost:${port}')
})
