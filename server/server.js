const express = require('express');
const app = express();
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '12345',
        database: 'Biblio'
    }
});

// Получение списка манги
app.get('/manga', (req, res) => {
    knex.select().from('manga')
        .then((manga) => {
            res.json(manga);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to retrieve manga'});
        });
});

// Получение манги по id
app.get('/manga/:id', (req, res) => {
    knex.select().from('manga').where('id', req.params.id)
        .then((manga) => {
            if (manga.length) {
                res.json(manga[0]);
            } else {
                res.status(404).json({error: `Manga with id ${req.params.id} not found`});
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to retrieve manga'});
        });
});

// Добавление манги
app.post('/manga', (req, res) => {
    knex('manga').insert(req.body)
        .then(() => {
            res.status(201).send('Manga added');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to add manga'});
        });
});

// Получение списка пользователей
app.get('/user', (req, res) => {
    knex.select().from('user')
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to retrieve users'});
        });
});

// Получение пользователя по id
app.get('/user/:id', (req, res) => {
    knex.select().from('user').where('id', req.params.id)
        .then((user) => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(404).json({error: `User with id ${req.params.id} not found`});
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to retrieve user'});
        });
});

// Добавление пользователя
app.post('/user', (req, res) => {
    knex('user').insert(req.body)
        .then(() => {
            res.status(201).send('User added');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: 'Failed to add user'});
        });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
