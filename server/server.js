const express = require('express');
const app = express();
const knex = require('./DB/DB.js')
const bcrypt = require('bcrypt')
const {body, validationResult} = require('express-validator')
const tokenService = require('./token-service')
const userDTO = require('./dtos/user-dto')
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000')
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept')
    next();
})
app.use(express.json())
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
    knex.select().from('reader')
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
    knex.select().from('reader').where('id', req.params.id)
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
app.post("/registration", body('email').isEmail(), body('password').isLength({min: 6, max: 36}),
    async (req, res, next) => {
        const users = await knex
            .select('email')
            .from("reader")
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(console.log("ошибка валидации!", errors.array()))
            }
            const hasDuplicates = await users.some(function (currentObject) {
                return currentObject.email.toLowerCase() === req.body.email;

            })
            if (hasDuplicates) {
                throw new Error(400, 'Ошибка, такой аккаунт уже есть')
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            await knex('reader').insert({
                email: req.body.email,
                password: hashedPassword,
                login: req.body.login
            })
            const currentUser = await knex
                .select('email', 'usid')
                .from('reader')
                .where('email', req.body.email)
            const userdto = new userDTO(currentUser[0])
            const tokens = tokenService.generateTokens({...userdto})
            await tokenService.saveToken(userdto.id, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.send({...tokens, user: {...userdto}})
        } catch (e) {
            next(e)
        }
    }
)
app.post("/login", async (req, res, next) => {
    try {
        const user = await knex
            .select("*")
            .from("reader")
            .where("email", req.body.email)

        if (!user[0]) {
            console.log('пользователь не найден!')
        }
        const PassCompare = await bcrypt.compare(req.body.password, user[0].password)
        if (!PassCompare) {
            console.log('неверный пароль')
        }
        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)
        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})

app.listen(3001, () => {
    console.log('Server running on port 3001');
});


