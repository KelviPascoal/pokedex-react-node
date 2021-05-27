import { Request, Response } from 'express';
import { TypeModel } from '../models/Types';

export async function findAllTypes(request: Request, response: Response) {
    const typeList = await TypeModel.find().sort({ label: "asc" })
    response.status(200).json(typeList)
}
