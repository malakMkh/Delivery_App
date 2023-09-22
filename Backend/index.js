const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./Models/user');
const Order = require('./Models/order');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Hezli', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Création du serveur HTTP
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Gestion des connexions socket.io
io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('chat-message', data);
  });

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`);
  });

  socket.on('feedback', (data) => {
    socket.broadcast.emit('feedback', data);
  });
});

// Routes

// Route pour obtenir la liste des utilisateurs
app.get('/', (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get('/estimation', (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.json(err));
});
app.post('/connexion', (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      {
        prenom: req.body.prenom,
        nom: req.body.nom,
        phone: req.body.phone,
        email: req.body.email,
        passwod: req.body.password,
      }
    )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  Order.findByIdAndDelete({ _id: id }) // Spécifiez l'ID à supprimer ici
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

app.post('/payement', async (req, res) => {
  try {
    const { Data, Data_a, Data_o, totale, payement, userId } = req.body;
    const newOrder = new Order({
      Data,
      Data_a,
      Data_o,
      totale,
      payement,
      status: 'En attente de traitement',
      userId: userId,
    });
    await newOrder.save();
    res.json({ message: 'Commande créée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
