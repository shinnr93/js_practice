console.log("나리");
const a = "선우";
console.log(a);
const b = "커피빈";
console.log(b);
console.log(a + " " + b);
console.log(`${a} ${b}`);
console.log(`${a}가 ${b}에 있다`);
console.log(`${a}가 ${b}에 있다`);
const c = 1;
console.log(c + 5);
console.log(c * 3);
console.log(c ** 2);

// i 는 i에 2를 더한 값이다
// for (let i = 0; i < 5; i++) {
//   console.log(a);
// }

for (let i = 1; i <= 5; i++) {
  console.log(a);
  if (i % 2 === 0) {
    console.log(b);
  }
}

const f = [0, 1, 0, 2, 0, 1, 8, 2, 0, 3, 4];
console.log(f);

// 이 배열의 홀수 인덱스에는 숫자 3을 더하고, 짝수 인덱스는 숫자 1을
// 더해서 배열을 만들고, 그 배열을 합쳐서 하나의 문자열로 만들어라
// 만약에 숫자가 5 이상이라면, 0으로 바꿔라
// [1, 2] -> [2, 5] -> "25"

const answer = [];

for (let i = 0; i < f.length; i++) {
  console.log(f[i]);
  if (i % 2 !== 0) {
    if (f[i] + 3 >= 5) {
      answer.push(0);
    } else {
      answer.push(f[i] + 3);
    }
  }
  if (i % 2 === 0) {
    if (f[i] + 1 >= 5) {
      answer.push(0);
    } else {
      answer.push(f[i] + 1);
    }
  }
}
console.log(answer);
console.log(answer.join(""));

// 배열에 과일이름
const q = ["사과", "배", "바나나"];

for (let i = 0; i < 3; i++) {
  if (q[i].length >= 2) {
    console.log(q[i]);
  }
}

function plusNari(name) {
  return `${name}은(는) 나리꺼!`;
}

console.log(plusNari("맥북"));

// 함수에 문자열을 넣었을때, 그 문자열의 길이가 3 이상이면
// true, 아니면 false를 반환하는 함수 만들기

function aaa(name) {
  if (name.length >= 3) {
    return true;
  } else {
    return false;
  }
}

console.log(aaa("나리"));
console.log(aaa("강선우"));
