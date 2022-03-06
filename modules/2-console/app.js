console.log('logging...');
console.clear();

// log level
console.log('log') // 개발
console.info('info') // 정보
console.warn('warn') // 경보
console.error('error') // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not Same');
const student = {name : 'ellie', age : 20, company: {name : 'AC'}};
console.table(student);
console.dir(student, {})

// counting
function a(){
  console.count('a function');
}

a();
console.countRe()