import { pool } from "../config/config.js";
import bcrypt from "bcrypt";

// Function to get all users
export const getAllUsers = async () => {
try {
const [rows] = await pool.query("SELECT * FROM users");
return rows;
} catch (error) {
throw error;
}
};
// Function to get a user by user_id
export const getUserById = async (user_id) => {
try {
const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
return rows.length > 0 ? rows[0] : null;
} catch (error) {
throw error;
}
};
export const signUpUser = async (username, email, phone_number, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (username, password_hash, email, phone_number, user_role) VALUES (?, ?, ?, ?, ?)";
    const user_role = email.endsWith("@StreamX.com") ? "admin" : "user";

    const [result] = await pool.query(query, [username, hashedPassword, email, phone_number, user_role]);

    if (result.affectedRows === 0) {
      throw new Error("User signup failed.");
    }

    return { user_id: result.insertId, username, email, phone_number, user_role };
  } catch (error) {
    throw error;
  }
};


//Login Code
// Function to authenticate a user (for login)
export const authUser = async (email, password) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      throw new Error("User not found");
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    throw error;
  }
};