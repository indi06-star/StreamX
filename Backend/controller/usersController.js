import { getAllUsers, getUserById as findUserById, signUpUser as signUpSingleUser, authUser} from "../model/usersModal.js";
import bcrypt from "bcrypt";
import { pool } from "../config/config.js";

// Fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// Fetch a single user by ID
export const getUserById = async (req, res) => {
  const user = await findUserById(req.params.user_id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const userRole = user.email.endsWith("@StreamX.com") ? "admin" : "user";
  res.json({ ...user, user_role: userRole });
};


// Sign up a new user
export const signUpUser = async (req, res) => {
  try {
    const { username, email, phone_number, password } = req.body;

    if (!username || !email || !phone_number || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newUser = await signUpSingleUser(username, email, phone_number, password);
    res.json({
      message: "User signed up successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Signup failed. Please try again." });
  }
};

// Reset password functionality
export const resetPassword = async (req, res) => {
const { email, newPassword } = req.body;

if (!email || !newPassword) {
return res.status(400).json({ error: "Email and new password are required" });
}

const hashedPassword = await bcrypt.hash(newPassword, 10);
const query = "UPDATE users SET password_hash = ? WHERE email = ?";
const [result] = await pool.query(query, [hashedPassword, email]);

if (result.affectedRows === 0) {
return res.status(404).json({ error: "User not found" });
}

res.json({ message: "Password reset successfully" });
};
// Login code
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await authUser(email, password); // Use the authUser function
    const userRole = email.endsWith("@StreamX.com") ? "admin" : "user"; // Determine user role

    res.json({
      message: "User logged in successfully",
      user: { ...user, user_role: userRole },
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid email or password" });
  }
};
