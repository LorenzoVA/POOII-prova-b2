"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LanceServices_1 = __importDefault(require("../services/LanceServices"));
class LanceController {
    constructor() { }
    async listarLance(req, res) {
        const result = await LanceServices_1.default.listarLance();
        if (result) {
            res.status(200).json({
                status: 'Lance listado com sucesso',
                lance: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarLance(req, res) {
        const lance = req.body;
        const result = await LanceServices_1.default.atualizarLance(lance);
        if (result) {
            res.status(200).json({
                status: 'Lance atualizado com sucesso',
                lance: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarLance(req, res) {
        const newLance = req.body;
        const result = await LanceServices_1.default.criarLance(newLance);
        if (result) {
            res.status(200).json({
                status: 'Lance criado com sucesso',
                lance: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarLance(req, res) {
        const id = req.params.id;
        await LanceServices_1.default.deletarLance(id);
        try {
            res.status(200).json({
                status: 'Lance deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new LanceController();
