import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Wick',
        email: 'john@example.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name: 'Jane',
        email: 'jane@example.com',
        password: bcryptjs.hashSync('123456', 10),
    },
]

export default users