import { Router } from "express";
import userRoutes from "./usersRoutes";
import appointmentRoutes from "./appointmentsRoutes";
const router: Router = Router();

router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);


export default router;