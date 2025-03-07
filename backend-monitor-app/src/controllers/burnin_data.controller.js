import { BurninDataModel } from "../models/burnin_data.model.js";


export class BurninDataController {
    static async getAll(req, res) {
        try {
            const data = await BurninDataModel.getAll();
            return res.status(200).send(data)
        } catch (error) {
            console.error('Error in BurninDataController.getAll', error)
            throw error
        }
    }
}