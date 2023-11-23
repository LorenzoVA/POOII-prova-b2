"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeilaoServices_1 = __importDefault(require("../services/LeilaoServices"));
class LeilaoController {
    constructor() { }
    async listarLeilao(req, res) {
        const result = await LeilaoServices_1.default.listarLeilao();
        if (result) {
            res.status(200).json({
                status: 'Leilao listado com sucesso',
                leilao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarLeilao(req, res) {
        const leilao = req.body;
        const result = await LeilaoServices_1.default.atualizarLeilao(leilao);
        if (result) {
            res.status(200).json({
                status: 'Leilao atualizado com sucesso',
                leilao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarLeilao(req, res) {
        const newLeilao = req.body;
        const result = await LeilaoServices_1.default.criarLeilao(newLeilao);
        if (result) {
            res.status(200).json({
                status: 'Leilao criado com sucesso',
                leilao: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarLeilao(req, res) {
        const id = req.params.id;
        await LeilaoServices_1.default.deletarLeilao(id);
        try {
            res.status(200).json({
                status: 'Leilao deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new LeilaoController();
