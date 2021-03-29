const level = 5

for (let i = 1; i <= level ; i++) {
    //* 초기화
    let result = ''
    // 공백 만드는 for문
    for (let k = 1; k <=level-i ; k++) {
        result = result + ' '
    }

    // * 찍는 for
    for (let j = 1; j <= i*2-1; j++) {
        result = result + '*'
    }
    console.log(result)
}