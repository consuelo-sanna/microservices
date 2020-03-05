//dato che hai messo quell url, devi mettere su docker compose la variabile d ambiente

module.exports.development = {
    dialect: 'mysql',
    seederStorage: 'sequelize',
    url: process.env.DB_URI,
};
