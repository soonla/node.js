// node js 비동기 처리
// 음식점 (서버 10 서버1, 서버2, 서버3)
//토요일에 외출하면서 빨래돌리고, 청소하고, 강아지목욕
// call back

setTimeout(function () {
  console.log("todo : first working");
}, 3000);
setTimeout(function () {
  console.log("todo : second working");
}, 2000);

//callback은 함수 의 매개변수로 주로 쓰인다.
const second = function () {
  console.log("todo : second working");
};
const first = function () {
  console.log("todo : second working");
};

setTimeout(() => {
  setTimeout(second, 2000);
  console.log("todo : first working");
}, 3000);

//for (let i = 0; i < 10000; i++) {
//console.log("todo :" + i + " working");
//}
