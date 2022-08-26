module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      default: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      default: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  });

  Tweet.associate = (models) => {
    Tweet.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Tweet;
};
