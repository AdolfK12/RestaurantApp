const { verifyToken } = require("../helpers/jwt");
const { User, Item, Ingredient, Category } = require("../models/index");

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: "Unauthorized", message: "Access token is required." };
    }

    const payload = verifyToken(access_token);

    const user = await User.findOne({ where: { id: payload.id } });

    if (!user) throw { name: "Unauthorized", message: "User not found." };

    req.user = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      role: user.role,
      phoneNumber: user.phoneNumber,
      address: user.address,
    };

    next();
  } catch (error) {
    console.log(error);
    let statusCode = 500;
    let errMsg = "Internal Server Error";

    if (error.name === "Unauthorized") {
      statusCode = 401;
      errMsg = error.message;
    } else if (error.name === "JsonWebTokenError") {
      statusCode = 401;
      errMsg = "Invalid token.";
    }

    res.status(statusCode).json({ error: errMsg });
  }
};

const authorizeAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      throw {
        name: "Unauthorized",
        message: "Only admin can perform this action.",
      };
    }

    next();
  } catch (error) {
    console.log(error);
    let statusCode = 500;
    let errMsg = "Internal Server Error";

    if (error.name === "Unauthorized") {
      statusCode = 401;
      errMsg = error.message;
    }

    res.status(statusCode).json({ error: errMsg });
  }
};

module.exports = { authorizeAdmin, authenticate };
