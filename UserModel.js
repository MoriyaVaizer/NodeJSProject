let users = [];

class User {
  constructor(name, email, phoneNumber) {
    this.id = users.length + 1;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

function createUser(name, email, phoneNumber) {
  const user = new User(name, email, phoneNumber);
  users.push(user);
  return user;
}

function updateUser(userId, name, email, phoneNumber) {
  const user = users.find(user => user.id === userId);
  if (user) {
    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;
    return user;
  }
  return null;
}

function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
}

function getUserById(userId) {
  return users.find(user => user.id === userId);
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById
};