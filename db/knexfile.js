module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'toDoApp',
      user: 'postgres',
      password: '123456',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};