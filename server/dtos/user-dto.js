module.exports = class userDTO {
    email;
    id;
    login;

    constructor(model) {
        this.email = model.email;
        this.id = model.usid;
        this.login = model.login;
    }
}
