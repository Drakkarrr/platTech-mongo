import express from 'express'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

//! CONTROLLER TO HANDLE REGISTERING USERS 
export const register = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            department,
        } = req.body


        //! ENCRYPTING USER'S PASSWORD & GENERATING A SALT
        const salt: string = await bcrypt.genSalt()
        const passwordHash: string = await bcrypt.hash(password, salt)


        //! CREATING NEW USER
        const newUser: any = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            department,

            viewedProfile: Math.floor(Math.random() * 1000), //! For development purposes only
            impressions: Math.floor(Math.random() * 1000),   //! For development purposes only
        });
        const savedUser: any = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}

//! HANDLER ON LOGGING IN USERS
export const login = async (req: express.Request, res: express.Response): Promise<unknown> => {
    try {
        const { email, password } = req.body as { email: string; password: string }
        const user: unknown | any = await User.findOne({ email: email })
        if (!user) return res.status(400).json({ msg: "User does not exist. " }) //! THROW ERROR IF USER DOES NOT EXIST

        const isMatch: boolean = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." })

        const token: string = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string)
        delete user.password
        res.status(200).json({ token, user })

    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}