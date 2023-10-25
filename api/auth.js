const passport = require('passport')
const passportJWT = require("passport-jwt");
const UserModel = require('./model.js')
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt; 


passport.use(
    new JWTStrategy(
        {
            // jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            jwtFromRequest: (req) => req.cookies.token,
            secretOrKey: process.env.JWT_SECRET
        },
        async (jwtPayload, done) => {
            try {
                const user = await UserModel.findById(jwtPayload.userId)
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (error) {
                return done(error, false);
            }
        }
    )
)

