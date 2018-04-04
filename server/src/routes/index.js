import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import statusRouter from './status';
import igdbRouter from "./games"; 
<<<<<<< HEAD
import ImageUploadRouter from './ImageUploaded';
=======
import relationshipsRouter from './relationships';
import profileRouter from "./profiles";
import forumsRouter from "./forum";
>>>>>>> 74a2dcfa7c84c26d5b86d5c22614300fa659745c
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/status', statusRouter);
router.use("/games", igdbRouter);
<<<<<<< HEAD
router.use("/ImageUploaded", ImageUploadRouter);
=======
router.use('/relationships', relationshipsRouter);
router.use("/profile", profileRouter);
router.use("/forums", forumsRouter);

>>>>>>> 74a2dcfa7c84c26d5b86d5c22614300fa659745c
router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

export default router;