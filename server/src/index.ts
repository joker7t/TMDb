import 'reflect-metadata';
import { app } from './app';
import fetchMoviesJob from './jobs/fetch-movies';
import { createConnection } from 'typeorm';
const amqp = require('amqplib/callback_api');

require('dotenv').config();

createConnection().then(() => {
    console.log('Connect to MySQL...');
    const start = async () => {
        await fetchMoviesJob.start();
    };

    start();

    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}!!!`);
    });
});
