require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const leaderBoardRoutes = require('./routes/leaderboardRoutes');
const forgotPasswordRoutes = require('./routes/forgotPasswordRoutes');

app.use('/user' , userRoutes);
app.use('/expense' , expenseRoutes);
app.use('/purchase' , purchaseRoutes);
app.use('/premium' , leaderBoardRoutes);
app.use('/password' , forgotPasswordRoutes);


mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => {
      app.listen( process.env.PORT || 8000 , () => {
         console.log('8000 started working')
      })
   })
   .catch(err => console.log(err));