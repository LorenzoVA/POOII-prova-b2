"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UsuarioServices {
    constructor() { }
    async listarUsuario() {
        try {
            const usuario = await prisma.usuario.findMany();
            return usuario;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarUsuario(newUsuario) {
        try {
            const usuario = await prisma.usuario.create({
                data: newUsuario,
            });
            return usuario;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarUsuario(upUsuario) {
        try {
            const { id, ...rest } = upUsuario;
            const usuario = await prisma.usuario.update({
                where: { id: id },
                data: { ...rest },
            });
            return usuario;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarUsuario(id) {
        try {
            await prisma.usuario.delete({
                where: { id: id },
            });
            return console.log('usuario Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new UsuarioServices();
