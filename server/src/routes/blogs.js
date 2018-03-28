import { Router } from 'express';

let blogs= [
    {
        name: 'Jackson',
        age: 25
    },
    {
        name: 'Matt',
        age: 40
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(blogs);
});

export default router;