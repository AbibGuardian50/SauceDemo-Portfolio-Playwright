const loginData = {
    validUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    },

    invalidPassword: {
        username: 'standard_user',
        password: 'SauceKetchup'
    },

    invalidUsername: {
        username: 'notstandard',
        password: 'secret_sauce'
    },

    invalidCredentials: {
        username: 'notstandard',
        password: 'SauceKetchup'
    },

    lockedOutUser: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },

    usernameEmpty: {
        username: '',
        password: 'secret_sauce'
    },
    passwordEmpty: {
        username: 'standard_user',
        password: ''
    },
};

module.exports = { loginData };