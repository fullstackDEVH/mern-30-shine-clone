import express from 'express';

const router = express.Router();

router.get('/test', async (req, res) => {
    res.send('hello huy')
});

export default router;
