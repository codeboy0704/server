import jwt from "jsonwebtoken";
import User from "./user/user.model.js"
import config from "./config.js";
import bcrypt from "bcrypt"

export function verifyPassword(password, hashPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashPassword, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
}

export const newToken = (user) => {
  return jwt.sign({ id: user.id, user: user.name }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

export const signup = async (req, res, next) => {
  const { name, password, email } = req.body;
  const userData = {
    name: name,
    password: password,
    email: email,
  };
  if (!name && !password) {
    return res.status(400).json({
      message: "User, password & email require",
      sta: { user: false, password: false, email: false },
    });
  } else if (!name) {
    return res.status(400).send({
      message: "User require",
      sta: { user: false, password: true },
    });
  } else if (!password) {
    return res.status(400).send({
      message: "Password Require",
      sta: { user: true, password: false },
    });
  } else if (!email) {
    return res.status(400).send({
      message: "Email Require",
      sta: { user: true, password: true, email: false },
    });
  }

  try {
    const user = await User.create(userData);
    const token = newToken(user);
    res.status(201).json({ token });
  } catch (e) {
    console.error(e);
    const err = {
      status: e.status,
      message: "User Already Exist",
    };
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { name, password } = req.body;
  console.log(req.body)
  if (!name || !password) {
    return res.status(400).send({
      message: "User and password require",
      sta: { name: false, password: false },
    });
  } else if (!name) {
    return res.status(400).send({
      message: "User require",
      sta: { name: false, password: true },
    });
  } else if (!password) {
    return res.status(400).send({
      message: "Password require",
      sta: { name: true, password: false },
    });
  }

  const user = await User.findOne({ name: name }).exec();
  if (!user) {
    return res.status(401).send({
      message: "The user don't exist",
      sta: { name: false, password: true },
    });
  }
  try {
    const match = await verifyPassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        message: "Incorrect password",
        sta: { name: true, password: false },
      });
    }
    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (e) {
    console.error(e)
    const error = { status: 401, message: "Not Auth" };
    next(error);
  }
};

export const verifyUser = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).send({ message: "Not auth" });
  }
  try {
    const payload = await verifyToken(token);
    return res.status(200).json({ data: payload })
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError)
      res.status(401).send('Token has expired');
    else if (e instanceof jwt.JsonWebTokenError)
      res.status(401).send('Invalid token');
    else
      next(e);
  }
};


