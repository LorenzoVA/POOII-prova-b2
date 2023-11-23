"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioServices_1 = __importDefault(require("../services/UsuarioServices"));
class UsuarioController {
    constructor() { }
    async listarUsuario(req, res) {
        const result = await UsuarioServices_1.default.listarUsuario();
        if (result) {
            res.status(200).json({
                status: 'Usuario listado com sucesso',
                usuario: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async atualizarUsuario(req, res) {
        const usuario = req.body;
        const result = await UsuarioServices_1.default.atualizarUsuario(usuario);
        if (result) {
            res.status(200).json({
                status: 'Usuario atualizado com sucesso',
                usuario: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async criarUsuario(req, res) {
        const newUsuario = req.body;
        const result = await UsuarioServices_1.default.criarUsuario(newUsuario);
        if (result) {
            res.status(200).json({
                status: 'Usuario criado com sucesso',
                usuario: result,
            });
        }
        else {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
    async deletarUsuario(req, res) {
        const id = req.params.id;
        await UsuarioServices_1.default.deletarUsuario(id);
        try {
            res.status(200).json({
                status: 'Usuario deletado com sucesso',
            });
        }
        catch (error) {
            res.status(500).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new UsuarioController();
