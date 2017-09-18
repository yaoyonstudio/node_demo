module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    user_nickname: DataTypes.STRING,
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      required: true
    }
  })
}
