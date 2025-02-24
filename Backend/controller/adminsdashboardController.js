import { getAlladmins } from '../model/adminsdashboardModal.js';

export const getAdmins = async (req, res) => {
  try {
    const admins = await getAlladmins();
    res.status(200).json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
