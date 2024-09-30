const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// es un get para la pagina principa(menu.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

// iniciador del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// no mover nada si no es necesario