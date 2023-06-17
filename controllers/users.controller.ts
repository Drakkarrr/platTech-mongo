import express from 'express'
import User from "../models/user.model.js"

//! GETTING ALL USERS FROM THE DATABASE
export const getUser = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}

//! GETTING ALL USERS'S FRIEND LIST FROM THE DATABASE
export const getUserFriends = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { id } = req.params as { id: string }
        const user = await User.findById(id)

        const friends = await Promise.all(
            user.friends.map(id => User.findById(id))
        )
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, department, location, picturePath }) => {
                return { _id, firstName, lastName, department, location, picturePath }
            }
        )
        res.status(200).json(formattedFriends)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}

//! HANDLER TO ADD OR REMOVE A FRIEND OF A USER
export const addRemoveFriend = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { id, friendId } = req.params
        const user = await User.findById(id)
        const friend = await User.findById(friendId)

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id)
        } else {
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, department, location, picturePath }) => {
                return { _id, firstName, lastName, department, location, picturePath }
            }
        )

        res.status(200).json(formattedFriends)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}