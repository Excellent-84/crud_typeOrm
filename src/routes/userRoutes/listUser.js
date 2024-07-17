import db from '../../data/data.js';

export default async (req, res) => {
  res.json(await db.getUsers());
};
