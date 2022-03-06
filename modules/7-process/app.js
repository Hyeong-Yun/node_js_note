const process = require('process')

setTimeout(() =>{
  console.log('setTimeout');
}, 0)

//task queue 제일 앞부분에 위치시킴
process.nexdtTick(() =>{
  console.log('nextTick')
})

