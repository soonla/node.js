function work(sec, callback) {
  setTimeout(function () {
    callback(new Date().toISOString);
  }, sec);
}
/*
work(1000, function (result) {
  console.log("첫번째 작업", result);
});
work(2000, function (result) {
  console.log("두번째 작업", result);
});
work(3000, function (result) {
  console.log("세번째 작업", result);
});
*/
// 콜백지옥 Promise resolve, reject
// 운동화 open run
work(1000, function (result) {
  console.log("첫번째 작업", result);
  work(1000, function (result) {
    console.log("두번째 작업", result);
    work(1000, function (result) {
      console.log("세번째 작업", result);
    });
  });
});
