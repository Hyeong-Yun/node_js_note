import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-errors'
import postRouter from './router/post.js'
import userRouter from './router/user.js'

const app = express();

app.use(express.json()); // Rest API, Body
app.use(express.urlencoded()); // HTML FORM

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);