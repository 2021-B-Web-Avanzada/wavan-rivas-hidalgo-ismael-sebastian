const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('public'));

server.listen(3000, () => console.log('server started'));

const connections = [null, null];

// Manejamos una conexión de socket desde el cliente web
io.on('connection', function (socket) {
  
  // Le asignamos un número al jugador que se une a la partida
  let playerIndex = -1;
  for (var i in connections) {
    if (connections[i] === null) {
      playerIndex = i;
    }
  }
  
  // Emitimos el número del seleccionado anteriormente jugador
  socket.emit('player-number', playerIndex);

  if (playerIndex == -1) return;
  
  connections[playerIndex] = socket;
  
  // Hacemos un broadcast donde avisamos que un jugador se ha conectado
  socket.broadcast.emit('player-connect', playerIndex);

  //Manejo de los movimientos
  socket.on('actuate', function (data) {
    const { grid, metadata } = data;

    //Objeto del movimiento
    const move = {
      playerIndex,
      grid,
      metadata,
    };

    // Hacemos un broadcast para avisar del movimiento del jugador
    socket.broadcast.emit('move', move);
  });

  // Podemos identificar cuando un usuario se desconecta
  socket.on('disconnect', function() {
    console.log(`Player ${playerIndex} Disconnected`);
    connections[playerIndex] = null;
  });

});

