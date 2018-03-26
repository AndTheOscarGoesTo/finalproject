import { Router } from 'express';
import peopleRouter from './people';
import usersRouter from './classes';
import authRouter from './auth';
// import usersRouter from './users;'
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();
router.use('/users', usersRouter);
router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/people', peopleRouter);
// router.use('/usererer', usersRouter);

export default router;