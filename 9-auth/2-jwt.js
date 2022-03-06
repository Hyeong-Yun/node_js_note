const jwt = requir('jsonwebtoken');
const token = jwt.sign({
  id: 'userId',
  isAdmit: true,

}, 'dafadfasdgads');