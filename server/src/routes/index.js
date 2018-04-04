import { Router } from 'express';
import peopleRouter from './people';
// import usersRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import igdbRouter from "./games"; 
import ImageUploadRouter from './ImageUploaded';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use("/games", igdbRouter);
router.use("/ImageUploaded", ImageUploadRouter);
router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/people', peopleRouter);
// router.use('/users', usersRouter);

export default router;