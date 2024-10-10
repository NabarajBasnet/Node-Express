//@desc GET all users
//@route GET /api/users
//@access public
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

const getUsers = (req, res) => {
    res.status(200).json(users)
}

//@desc POST users
//@route POST /api/users
//@access public

const postUsers = (req, res) => {
    console.log("Request Body is :",req.body)
    const {name} = req.body;
    if(!name){
        res.status(400);
        throw new Error('Body is empty!')
    }
    res.status(200).json(users);
}


const putUser = (req, res) => {
    res.status(200).json(users);
}

const deleteUser = (req, res) => {
    res.status(200).json(users)
}

module.exports = { getUsers, postUsers, putUser, deleteUser };
