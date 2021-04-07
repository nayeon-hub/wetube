import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";

const globalRouter = express.Router();

//Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

//Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

//Home
globalRouter.get(routes.home, home);

//Logout
globalRouter.get(routes.logout, onlyPrivate, logout);

//Search
globalRouter.get(routes.search, search);

export default globalRouter;
