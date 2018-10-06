
// user = {user: {
//   username: "goose",
//   password: "starwars"
// }}

export const ajaxSignup = (user) => {
  return $.ajax({
    url: "/api/user",
    method: 'POST',
    data: {
      user
    }
  });
};

export const ajaxLogin = (user) => {
  return $.ajax({
    url: "/api/session",
    method: 'POST',
    data: {
      user
    }
  });
};

export const ajaxLogout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
