// 계획
// 1. 사용자가 원하는 폴더의 이름ㅇ르 받아온다
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
// 3 폴더 안에 있는 파일들ㅇ을 다 돌면서 해당하는

const folder = process.argv[2]

if(!folder){
  console.log('Please chekc the folder')
}