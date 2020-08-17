// let's go!
require('dotenv').config({ path: 'variables.env' });

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();



server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    deets => {
        console.log('%s\x1b[31m%s\x1b[0m%s\x1b[31m%s\x1b[0m',
            '\nServer running @', ` http://localhost:${deets.port} `, '& playground @', ` http://localhost:${process.env.PORT} `);
        console.log(`${new Date()}`)
    }
);
