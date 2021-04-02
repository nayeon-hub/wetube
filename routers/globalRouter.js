import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";

const globalRouter = express.Router();

//Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

//Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

//Home
globalRouter.get(routes.home, home);

//Logout
globalRouter.get(routes.logout, logout);

//Search
globalRouter.get(routes.search, search);

export default globalRouter;
