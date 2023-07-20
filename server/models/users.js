"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bycrpt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Username is required.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Invalid email format.",
          },
          notEmpty: {
            msg: "Email is required.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, Infinity],
            msg: "Password must be at least 5 characters long.",
          },
          notEmpty: {
            msg: "Password is required.",
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Phone number is required.",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Address is required.",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
