import passport from "passport";
import User from "./models/User";

//passport가 사용자 인증을 처리할 수 있도록 설정됨!
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
