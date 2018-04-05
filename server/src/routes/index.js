import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import statusRouter from './status';
import igdbRouter from "./games"; 
import ImageUploadRouter from './ImageUploaded';
import relationshipsRouter from './relationships';
import profileRouter from "./profiles";
import forumsRouter from "./forum";
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/status', statusRouter);
router.use("/games", igdbRouter);
router.use("/ImageUploaded", ImageUploadRouter);
router.use('/relationships', relationshipsRouter);
router.use("/profile", profileRouter);
router.use("/forums", forumsRouter);

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

export default router;