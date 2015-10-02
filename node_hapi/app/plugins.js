import * as bookshelfModels from 'hapi-bookshelf-models';

export const bookshelfModelPlugin = {
    register: bookshelfModels,
    options: {
        knex: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'eboshi_test',
            }
        },
        plugins: ['registry'],
        models: `${__dirname}/models`,
    }
};