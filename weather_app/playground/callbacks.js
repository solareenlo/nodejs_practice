let getUser = (id, callback) => {
  let user = {
    id,
    name: 'solareenlo'
  };
  callback(user);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
