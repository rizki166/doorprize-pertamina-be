import { Request, Response } from "express";
import * as userService from "../service/user";

// Controller untuk registrasi
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await userService.register(email, password);

    if (!result) {
      return res.status(500).json({
        status: false,
        message: "Failed to register user",
      });
    }

    res.json({
      status: true,
      message: "Registration successful",
      data: result,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const user = await userService.createUser(name);
    res.json({
      status: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to create user",
      error: error,
    });
  }
};

// Controller untuk login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body; // Ganti 'username' dengan 'email'

    const token = await userService.login(email, password);

    res.json({
      status: true,
      message: "Login successful",
      data: token,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err);

    res.status(401).json({
      // Ganti status menjadi 401 untuk kesalahan otentikasi
      status: false,
      message: err.message,
    });
  }
};

// Controller untuk mendapatkan semua pengguna
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();

    res.json({
      status: true,
      message: "Success",
      data: users,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

// Controller untuk mendapatkan pengguna lain
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; // Ambil ID pengguna dari parameter URL
    const payload = req.body; // Ambil data yang akan diperbarui dari body request

    const updatedUser = await userService.updateUser(Number(userId), payload); // Pastikan untuk mengkonversi ID ke Number

    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "User not found or update failed",
      });
    }

    res.json({
      status: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; // Ambil ID pengguna dari parameter URL

    const deletedUser = await userService.deleteUser(Number(userId)); // Pastikan untuk mengkonversi ID ke Number

    if (!deletedUser) {
      return res.status(404).json({
        status: false,
        message: "User not found or deletion failed",
      });
    }

    res.json({
      status: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    const err = error as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
