let arr = //array of numbers from 1 to 100 

for (let i = 1; i <= 100; i++) {
  if (!arr.includes(i)) {
    console.log(i);
    break;
  }
}
