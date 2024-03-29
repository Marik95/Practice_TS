import { Router, Request, Response, NextFunction } from "express";


interface RequestWithBody extends Request {
    body: {[key: string]: string | undefined};
}

function requireAuth(req: Request, res: Response, next: NextFunction){
    if(req.session && req.session.loggedIn){
        next();
        return;
    }

    res.status(403);
    res.send('Access is denied!');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} =  req.body;

    
    if(email && password && email === "admin@admin.com" && password === "password"){
        //show that user is logged in
        req.session = { loggedIn: true};

        // Redirect to the root route
        res.redirect('/');

    }else {
        res.send('Invalid email or password');
    }

})

router.get('/', (req: RequestWithBody, res: Response) => {
    // req.session
    if(req.session && req.session.loggedIn){
        res.send(
            `<div>
                <div>You are logged in!</div>
                <a href="/logout">Logout</a>
            </div>`
        );
    } else {
        res.send(
            `<div>
                <div>You are not logged in!</div>
                <a href="/login">Login</a>
            </div>`
        );
    }
})
router.get('/logout', (req: RequestWithBody, res: Response) =>{
    req.session = undefined;
    res.redirect('/');
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) =>{
    res.send('Welcomr to protected route, Logged in user!');
});

export {router};