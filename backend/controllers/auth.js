export const signup = (req, res) => {
  const { name, email, password } = req.body;

  res.json({ user: { name: name, email: email, password: password } });
};
