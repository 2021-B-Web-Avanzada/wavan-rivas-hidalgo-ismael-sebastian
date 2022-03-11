let remoteGame = null;
let localGame = null;

function startGame() {
  let seconds = 4;
  

  const intervalId = setInterval(function() {
    //Cuenta hacia atrás para inciar el juego
    seconds--;
    countdownMessage(true, seconds);
    
    if (seconds == 0) {
      clearInterval(intervalId);
      countdownMessage(false, 0);
      
      if (remoteGame != null && localGame != null) {
        localGame.restart();
      } else {

        remoteGame.setup();
        localGame.setup();
      }
      
    }
  }, 1000);
}

function waitingPlayerTwo(show) {
  const messageContainer = document.querySelector('.waiting-message');
  messageContainer.style.display = show ? 'block' : 'none';
}

function countdownMessage(show, number) {
  const messageContainer = document.querySelector('.countdown-message');
  const countdownNumber = document.querySelector('.countdown-number');
  
  messageContainer.style.display = show ? 'block' : 'none';
  countdownNumber.textContent = number;
}


// Se espera al navegador para evitar bugs
window.requestAnimationFrame(function () {

  //Hacemos la conexión con nuestro server local
  const socket = io.connect(window.location.origin);
  
  remoteGame = new GameManager(socket, true, 4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  localGame = new GameManager(socket, false, 4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  
  // Agregamos un listener
  socket.on('player-number', function (playerNumber) {
    if (playerNumber == 1) {
      waitingPlayerTwo(true); // Cuando se conecta el player 1, esperamos al player 2
      
      // Cuando se conecta el player 2 empezamos la cuenta atrás
      socket.on('player-connect', function() {
        waitingPlayerTwo(false);
        startGame();
      });
    } else { // En el caso de que seamos el jugador 2, empezamos inmediatamente la cuenta atrás
      startGame();
    }
  });
});
