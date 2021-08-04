let threeCount = 3;

let timer = setInterval(() => {
  if (threeCount !== 0) {
    console.log(threeCount);
    threeCount--;
  } else {
    console.log('Blast off!')
    clearInterval(timer);
  }
}, 1000);
