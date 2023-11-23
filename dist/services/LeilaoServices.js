"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class LeilaoServices {
    constructor() { }
    async listarLeilao() {
        try {
            const leilao = await prisma.leilao.findMany();
            return leilao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarLeilao(newLeilao) {
        try {
            const leilao = await prisma.leilao.create({
                data: newLeilao,
            });
            return leilao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarLeilao(upLeilao) {
        try {
            const { id, ...rest } = upLeilao;
            const leilao = await prisma.leilao.update({
                where: { id: id },
                data: { ...rest },
            });
            return leilao;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarLeilao(id) {
        try {
            await prisma.leilao.delete({
                where: { id: id },
            });
            return console.log('leilao Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new LeilaoServices();
