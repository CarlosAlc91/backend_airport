import { Router } from "express"

import {
  findAllPassengers,
  createPassesnger,
  findPassengerById,
  updatePassenger,
  deletePassenger,
} from "./passenger.controller.js"

export const router = Router()

router
  .route("/passengers")
  .get(findAllPassengers)
  .post(createPassesnger)

router
  .route("/passengers/:id/")
  .get(findPassengerById)
  .patch(updatePassenger)
  .delete(deletePassenger);

/* router.get("/passengers", findAllPassengers);

router.post("/passengers", createPassesnger); */

/* router.get("/passengers/:id/", finsPassengerById);

router.patch("/passengers/:id", updatePassenger);

router.delete("/passengers/:id", deletePassenger); */
