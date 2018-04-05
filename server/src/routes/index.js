import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import statusRouter from './status';
import igdbRouter from "./games"; 
import ImageUploadRouter from './ImageUploaded';
import relationshipsRouter from './relationships';
<<<<<<< HEAD
import profileRouter from './profiles';
import forumsRouter from './forum';
=======
import profileRouter from "./profiles";
import forumsRouter from "./forum";
>>>>>>> 67f167ad5ffd1dafba27b792509f5f841ffbf2c1
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/status', statusRouter);
router.use("/games", igdbRouter);
<<<<<<< HEAD
=======
router.use("/ImageUploaded", ImageUploadRouter);
>>>>>>> 67f167ad5ffd1dafba27b792509f5f841ffbf2c1
router.use('/relationships', relationshipsRouter);
router.use("/profile", profileRouter);
router.use("/forums", forumsRouter);

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

export default router;