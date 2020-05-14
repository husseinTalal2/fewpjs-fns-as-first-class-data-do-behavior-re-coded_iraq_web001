/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  timeDivide = time.splite(":");
  if (timeDivide[0].parseInt()<12) {
    return "Good Morning";
  } else if(timeDivide[0].parseInt()<17 && timeDivide[0]>=12) {
    return "Good Afternoon";
  }
  else if (timeDivide[0].parseInt()>=17) {
    return "Good Evening";
  } 
}
/* Write your implementation of displayMessage() */

function displayMessage(greetMsg){
  greetMsg = greet()
  let greeting = document.getElementById('greeting');
  greeting.textContent = greetMsg;
}
