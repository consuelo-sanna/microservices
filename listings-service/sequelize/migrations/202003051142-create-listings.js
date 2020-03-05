//crea la tabella e spiega il tipo di dati di ogni campo

module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        'listings',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            description: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updateAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE,
            },
        },
        {
            charset: 'utf8',
        }
    );
};

module.exports.down = queryInterface =>
    queryInterface.dropTable('listings');
