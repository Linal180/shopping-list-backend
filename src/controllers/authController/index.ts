import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import AuthService from "../../services/authService";
import UserService from "../../services/userService";
import User from "../../models/userModel";

const authService = new AuthService(User);
const userService = new UserService(User);

export default class UserController {
  private userService: UserService; // Declare the userService property

  constructor() {
    this.userService = new UserService(User); // Initialize userService in the constructor
  }
  
  async signup(req: Request, res: Response) {
    try {
      const userExist = await userService.findUserByEmail(req.body.email);
      if (userExist) {
        res.status(403).json({
          data: null,
          message: "User already exists",
        });
      } else {
        const user = await authService.createUser(req.body);
        console.log("User Created!");
        res.status(201).json({
          data: user,
          message: "User created!",
        });
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error",
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const user = await userService.findUserByEmail(req.body.email);
      if (!user) {
        res.status(401).json({
          data: null,
          message: "User not found",
        });
      } else {
        const isPasswordMatch = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!isPasswordMatch) {
          res.status(401).json({
            data: null,
            message: "Incorrect password",
          });
        } else {
          const secret: string | undefined = process.env.JWT_SECRET || "secret";
          let token;
          
          if (secret) {
            token = jwt.sign({ id: user.id }, secret, { expiresIn: "1d" });
            res.status(200).json({
              data: {
                user,
                token,
              },
              message: "Login successful",
            });
          } else {
            res.status(401).json({
              data: null,
              message: "JWT secret required!",
            });
          }
        }
      }
    } catch (e) {
      console.log("ERROR: ", e);
      res.status(500).json({
        data: null,
        message: "Internal server error",
      });
    }
  }
}