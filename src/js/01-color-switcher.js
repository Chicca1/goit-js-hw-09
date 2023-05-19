
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  
  let intervalId = null; 
 
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
 
  function handleStartButtonClick() {
   
    startButton.disabled = true;
    stopButton.disabled = false;
  
  
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
  
 
  function handleStopButtonClick() {
    
    stopButton.disabled = true;
    startButton.disabled = false;
  
   
    clearInterval(intervalId);
  }
  
 
  startButton.addEventListener('click', handleStartButtonClick);
  stopButton.addEventListener('click', handleStopButtonClick);
  