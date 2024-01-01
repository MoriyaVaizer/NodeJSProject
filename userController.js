const usersModule = require('./users');

const createUser = (req, res) => {
  const { name, email, phoneNumber } = req.body;

  const user = usersModule.createUser(name, email, phoneNumber);

  res.json(user);
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  const { name, email, phoneNumber } = req.body;

  const updatedUser = usersModule.updateUser(parseInt(userId), name, email, phoneNumber);

  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const deleteUser = (req, res) => {
  const { userId } = req.params;

  usersModule.deleteUser(parseInt(userId));

  res.json({ message: 'User deleted successfully' });
};

const getUserById = (req, res) => {
  const { userId } = req.params;

  const user = usersModule.getUserById(parseInt(userId));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById
};
