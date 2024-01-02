import express from 'express'
import { register } from '../controllers/register.js';
import { login } from '../controllers/login.js';
import { account } from '../controllers/account.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.get("/myAccount",isAuthenticated,account);

export default router;
