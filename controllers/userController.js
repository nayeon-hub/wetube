import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400); //bed request
  } else {
    console.log(name, email, password, password2);
    res.redirect(routes.home);
    //To Do: Resiter User
    //To DO: Log user in
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do: Process Log Out
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
