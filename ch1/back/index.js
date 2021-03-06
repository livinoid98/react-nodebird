const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const { MemoryStore } = require('express-session');
const app = express();

dotenv.config();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave : false,
    saveUninitialized : false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure: false,
    },
    name : 'rcbcok',
    store : MemoryStore,
}));

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
// backend 코드인데 frontend에서 요청을 보내면 이 부분이 실행
app.use('api/user', userAPIRouter);
app.use('api/post', postAPIRouter);
app.use('api/posts', postsAPIRouter);

app.listen(3065, () => {
    console.log('server start on localhost:3065');
})