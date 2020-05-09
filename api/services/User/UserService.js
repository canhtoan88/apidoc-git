const Utils = require('../../Utils');

const UserService = {
    getListUser: async () => {

    },
    createUser: async (input) => {
        // With server
        //const index = sails.config.custom.users.findIndex(value => value.username === username);
        const user = await User.findOne({username: input.username});
        if (user) {
            return {code: 203, message: 'username already exist', data: null};
        }
        // With server
        // sails.config.custom.users.push({fullname, username, password});
        if (input.username === 'auto') {
            let i = -9;
            let indexAble = 1;
            while(indexAble) {
                indexAble = await User.findOne({username: `auto_user${i=i+10}`});
            }
            const users = [];
            const n = i + 10;
            for (i; i < n; i++) {
                users.push({fullname: `auto_name${i}`, username: `auto_user${i}`, password: '123'});
            }
            await User.createEach(users);
            return {code: 200, message: 'Created 10 account automatic', data: null};
        }
        return new Promise((response, reject) => {
            User.create(input).exec(error => {
                if (error) {
                    return reject({code: 201, message: error, data: null});
                }
                // Verify id
                const token = Utils.encrypt({id: input._id}, '10 min');
                return response({code: 200, message: 'Created', data: token});
            });
        });
    },
    login: async (input) => {
        // Check user already existing on server
        // const user = sails.config.custom.users.find(value => value.username === username);

        // Check user already existing on db
        const user = await User.findOne({username: input.username});

        if  (!user) {
            return {code: 201, message: 'Username is not match with any account', data: null};
        }
        if (Utils.comparePass(input.password, user.password)) {
            return {code: 201, message: 'Password is incorrect', data: null};
        }

        const token = await Utils.encrypt({id: user.id});
        return {code: 200, message: 'ok', data: {fullname: user.fullname, username: input.username, token: token}};
    },
    removeUser: async (input) => {
        const id        = input.id       ? input.id         : [];
        const username  = input.username ? input.username   : [];
        //const db = sails.getDatastore().manager;
        //const result = await db.collection('user').remove({'$in': {condition}});
        if (id[0] && id[0] === 'all') {
            await User.destroy({id: {'!=': id[0]}});
            return {code: 200, message: 'Deleted all user\' account', data: null};
        }
        return new Promise(async (response, reject) => {
            const users = await User.find({or: [
                {id: {in: id}},
                {username: {in: username}}
            ]});
            const usernames = await users.map(value => {
                return value.username;
            });
            User.destroy({username: {in: usernames}}).exec(error => {
                if (error) {
                    return reject({code: 200, message: error, data: null});
                }
                return response({code: 200, message: `Deleted ${usernames.length} account(s)`, data: usernames});
            });
        });
    }
};

module.exports = UserService;
