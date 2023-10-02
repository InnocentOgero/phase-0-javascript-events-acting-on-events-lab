// Your code herefunction moveDodgerLeft() {
    function moveDodgerLeft() {
      const leftnumbers=dodger.style.left.replace('px','')
      const leftPosition = parseInt(leftnumbers,10)
      if (leftPosition > 0) {
          dodger.style.left = `${leftPosition - 1}px`;
        }
      }

function moveDodgerRight() {
  const leftnumbers= dodger.style.left.replace('px','')
  const leftPosition=parseInt(leftnumbers,10)
  const gameFieldWidth=document.documentElement.clientWidth;
  let dodgerWidth=40;
  const maxLeftPosition = gameFieldWidth - dodgerWidth;
  dodger.style.left = `${leftPosition + 1}px`;
  
}

