const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Token = require("../models/Token");
dotenv.config();

class TokenService {
  generate(payload) {
    const accessToken = jwt.sign(payload, process.env.accessSecret, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign(payload, process.env.refreshSecret);
    return { accessToken, refreshToken, expiresIn: 3600 };
  }

  async save(userId, refreshToken) {
    const data = await Token.findOne({ user: userId });
    if (data) {
      data.refreshToken = refreshToken;
      return data.save();
    }
    const token = await Token.create({ user: userId, refreshToken });
    return token;
  }

  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, process.env.refreshSecret);
    } catch (error) {
      return null;
    }
  }

  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, process.env.accessSecret);
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken });
    } catch (error) {
      return null;
    }
  }
}

module.exports = new TokenService();
