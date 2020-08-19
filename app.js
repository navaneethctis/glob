const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routers/post');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/posts', postRouter);
app.get('/', (request, response) => response.redirect('/posts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('✅ Server'));
