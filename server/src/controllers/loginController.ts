import { Router, Request, Response, NextFunction } from "express";


class loginController {

getLogin(req: Request, res: Response): void{
        res.send(`
            <form method="POST">
            <div>
                <label>Email</label>
                <input name="email">
            </div>
            <br>
            <div>
                <label>Password</label>
                <input name="password" type="password">
            </div>
            <button>Submit</button>
            </form>
        `);
    };
}