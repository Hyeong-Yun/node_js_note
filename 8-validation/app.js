import express from 'express';
import {body, validationResult, param} from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) =>{
  const errors = validationResult(req);
  if(errors.isEmpty()){
    return next();
  }

  return res.status(400).json({message: errors.array()[0].msg})
}

app.post('/users', 
[
body('name')
.trim()
.notEmpty()
.withMessage('이름을 입력해')
.isLength({min:2})
.withMessage('이름은 두글자 이상!'),
body('age').notEmpty().isInt().withMessage('숫자를 입력해'),
body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(),
body('job.name').notEmpty(),
validate
],
(req, res, next)=>{
  console.log(req.body);
  res.sendStatus(201);
  
})

app.get('/:email', [
  param('email').isEmail().withMessage('이메일 입력해요'),
  validate
],(req, res, next)=>{
  console.log(req.body);
  res.sendStatus(201);
  res.send('Hello email')
})

app.listen(8080)