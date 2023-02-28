import express from 'Express'
import { createUser, getAllUsers, getUserInfoByID } from "../controllers/user.controller.js";
// import all the controllers

const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').get(getUserInfoByID)

export default router 

