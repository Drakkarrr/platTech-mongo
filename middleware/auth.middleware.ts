import express, { Response } from 'express'
import jwt from "jsonwebtoken"

/**
 *! It takes a token from the header, verifies it, and then adds the user to the request object
 *! @param {any} req - any -&gt; the request object
 *! @param {Response} res - Response - This is the response object that will be sent back to the client.
 *! @param next - express.NextFunction - This is a function that is called when the middleware is done.
 *! @returns The token is being returned.
 */
export const verifyToken = async (req: any, res: Response, next: express.NextFunction) => {
    try {
        let token = req.header("Authorization")

        if (!token) {
            return res.status(403).send("Access Denied")
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimStart();
        }

        const verified: string | jwt.JwtPayload = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = verified;
        next()
    } catch (err: any) {
        res.status(500).json({ error: err.message })
    }
}