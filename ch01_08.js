const date = new Date();

if (date.getHours() < 12) {
  console.log(`오전입니다 : ${date.getHours()}시`);
} else if (date.getHours() >= 12) {
  console.log(`오후입니다 : ${date.getHours()}시`);
} else {
  console.log(`나머지 : ${date.getHours()}시`);
}
