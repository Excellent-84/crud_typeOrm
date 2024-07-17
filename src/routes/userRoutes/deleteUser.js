import db from '../../data/data.js';

export default async (req, res) => {
  const id = parseInt(req.params.id);
  const success = await db.deleteUser(id);

  if (success) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
