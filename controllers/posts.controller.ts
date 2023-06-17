import express from 'express'
import Post from "../models/post.model.js"
import User from "../models/user.model.js"

//! CREATING A NEW POST FROM USER 
export const createPost = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { userId, description, picturePath } = req.body as any;
        const user = await User.findById(userId)
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })
        await newPost.save()

        const post = await Post.find()
        res.status(201).json(post)
    } catch (err: any) {
        res.status(409).json({ message: err.message })
    }
};

//! GETTING ALL POSTS FROM ALL USERS
export const getFeedPosts = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}

//! GETTING ALL POSTS FROM A SPECIFIC USER
export const getUserPosts = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { userId } = req.params as any
        const post = await Post.find({ userId })
        res.status(200).json(post)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}

//! HANDLER TO LIKE A POST
export const likePost = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const { id } = req.params
        const { userId } = req.body
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost)
    } catch (err: any) {
        res.status(404).json({ message: err.message })
    }
}