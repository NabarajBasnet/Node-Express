const express = require('express')
const router = express.Router();
const { getUsers, postUsers, putUser, deleteUser } = require('../controllers/users')

const users = {
    message: 'Users found',
    users: [
        { name: 'Ronie Coleomon' },
        { name: 'Phill Heath' },
        { name: 'Jay Cutlar' },
        { name: 'Lee Hany' },
        { name: 'Dorian Yates' },
    ]
}

router.route('/').get(getUsers);

router.route('/').post(postUsers);

router.route('/').put(putUser);

router.route('/').delete(deleteUser)

module.exports = router
