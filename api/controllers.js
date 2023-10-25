const UserModel = require('./model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const generateToken = (user) => jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

const cookieOptions = {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    sameSite: 'none',
    secure: true
}

class testController {
    async register (req, res) {
        const hasedPassword = await bcrypt.hash(req.body.password, 10)
        try {
            const user = await UserModel.create({ ...req.body, password: hasedPassword })
            const token = generateToken(user)
            res.status(200).cookie('token', token).json({ user, token })
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async login(req, res) {
        const { username, password } = req.body
        try {
            const user = await UserModel.findOne({ username })
            const token = generateToken(user)
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                return res
                    .status(200)
                    .cookie('token', token, cookieOptions)
                    .json({ user, token })
            } else {
                return res.status(400).json({ success: false })
            }
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async getTasks(req, res) {
        const tasks = [
            { taskId: 1, text: 'test task 1' },
            { taskId: 2, text: 'test task 2' },
            { taskId: 3, text: 'test task 3' }
        ]
        res.json({ user: req.user, tasks })
    }
}

module.exports = new testController()