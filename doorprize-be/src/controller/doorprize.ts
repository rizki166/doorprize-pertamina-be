import { Request, Response } from "express";
import * as doorprizeService from "../service/doorprize";
export const getDoorprize = async (req: Request, res: Response) => {
    try {

        const getDoorprize = await doorprizeService.getDoorprize()

        res.status(200).json({
            status: true,
            message: "success",
            data: getDoorprize
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'failed',
        })
    }
}

export const createDoorprize = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const createDoorprize = await doorprizeService.createDoorprize(name)
        res.status(200).json({
            status: true,
            message: "success",
            data: createDoorprize
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'failed',
        })
    }
}

export const updateDoorprize = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const updateDoorprize = await doorprizeService.updateDoorprize(Number(id), name)
        res.status(200).json({
            status: true,
            message: "success",
            data: updateDoorprize
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'failed',
        })
    }
}

export const deleteDoorprize = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteDoorprize = await doorprizeService.deleteDoorprize(Number(id))
        res.status(200).json({
            status: true,
            message: "success",
            data: deleteDoorprize
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'failed',
        })
    }
}