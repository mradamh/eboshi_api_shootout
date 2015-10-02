import 'babel/polyfill';
import * as Hapi from 'hapi';

import * as bookshelfSerializer from 'hapi-bookshelf-serializer'
import { bookshelfModelPlugin } from './plugins';

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 6969
});

server.register(
    [bookshelfModelPlugin, bookshelfSerializer],
    (err) => console.log('registered bookshelf plugins')
);

server.route({
    method: 'GET',
    path: '/api/test',
    handler: (request, reply) => reply('Hello world')
});

server.route({
    method: 'GET',
    path: '/api/clients',
    handler: async (request, reply) => {
        const clients = await server.plugins.bookshelf.model('Client').fetchAll();
        reply(clients);
    }
});

server.start(() => console.log('Hapi server started'));
