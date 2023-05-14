const knex = require('./DB/DB.JS');
const jwt = require('jsonwebtoken')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, 'bTgdJJweLYmqNrMf', {expiresIn: '1h'})
        const refreshToken = jwt.sign(payload, 'CrYSNePNYUjxMDye', {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userid, refreshToken) {
        const tokens = await knex
            .select('*')
            .from('reader')
            .joinRaw('left join tokens ON tokens.user_id = reader.usid', [])
            .where('user_id', userid);

        await tokens.some(async function(currentObject) {
            if (currentObject.token !== 0 || currentObject.token !== undefined || currentObject.token !== '') {
                await knex
                    .select('*')
                    .from('tokens')
                    .where('user_id', userid)
                    .update('token', refreshToken);
                return null;
            }
        });

        await knex('tokens').insert({
            user_id: userid,
            token: refreshToken,
        });
    }


    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token,'bTgdJJweLYmqNrMf')
            return userData
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, 'CrYSNePNYUjxMDye')
            return userData
        } catch (e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        const tokenData = await knex
            .select('*')
            .from('tokens')
            .where('token', refreshToken)
            .del()

        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await knex
            .select('token')
            .from('tokens')
            .where('token', refreshToken)

        return tokenData
    }
}

module.exports = new TokenService()
