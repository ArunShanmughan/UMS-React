import Router from 'express'
import { Signup,Login,Profile,Images} from '../Controller/AuthController.js'
import AuthenticateToken from '../MiddleWare/AuthToken.js'


const authRoutes=Router()

authRoutes.post('/signup',Signup)
authRoutes.post('/login',Login)
authRoutes.patch('/Images',AuthenticateToken,Images)
authRoutes.get('/profile',AuthenticateToken,Profile)


export default authRoutes;