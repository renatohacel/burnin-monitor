import { Router } from 'express'
import { BurninDataController } from '../controllers/burnin_data.controller.js'

export const burninRouter = Router()

//get data
burninRouter.get('/', BurninDataController.getAll)