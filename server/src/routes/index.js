import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import statusRouter from './status';
import igdbRouter from "./games"; 
import ImageUploadRouter from './ImageUploaded';
import relationshipsRouter from './relationships';
<<<<<<< HEAD
import profileRouter from "./profiles";
import forumsRouter from "./forum";
import smRouter from './socialmedia';
=======
import profileRouter from './profiles';
import forumsRouter from './forum';
>>>>>>> 722ad11048287f8790f9cf95651234ea772bc049
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/status', statusRouter);
router.use("/games", igdbRouter);
<<<<<<< HEAD
router.use("/ImageUploaded", ImageUploadRouter);
=======
>>>>>>> 722ad11048287f8790f9cf95651234ea772bc049
router.use('/relationships', relationshipsRouter);
router.use("/profile", profileRouter);
router.use("/forums", forumsRouter);
router.use('/social', smRouter);

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

export default router;