// const http = require('http')
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//   const url = req.url;
//   res.setHeader('Content-Type', 'text/html');

//   if(url === '/'){
//    fs.createReadStream('./html/index.html').pipe(res)
//   }else if(url === '/courses'){
//     fs.createReadStream('./html/courses.html').pipe(res)
//   }else{
//     fs.createReadStream('./html/not-found.html').pipe(res)
//   }
// })

// server.listen(8080);

//http 모듈 가져오기
const http = require('http');

// 파일 모듈 fs가져오기
const fs = require('fs');

// createServer메소드로 서버 만들기
// createServer인자값에 콜백함수를 전달하여 HTTP requset가 들어올 때마다 어떻게 동작할 지 명시한다.
const server = http.createServer((req, res) =>{
  
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');

  if(url === '/'){
    fs.createReadStream('./index.html').pipe(res)
  }
})

//8080포트에 서버 실행
server.listen(8080)