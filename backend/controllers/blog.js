export const time = (req, res) => {
  res.json({ currentTime: Date().toString() });
};
