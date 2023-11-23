"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class LanceServices {
    constructor() { }
    async listarLance() {
        try {
            const lance = await prisma.lance.findMany();
            return lance;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarLance(newLance) {
        try {
            const lance = await prisma.lance.create({
                data: newLance,
            });
            return lance;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarLance(upLance) {
        try {
            const { id, ...rest } = upLance;
            const lance = await prisma.lance.update({
                where: { id: id },
                data: { ...rest },
            });
            return lance;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarLance(id) {
        try {
            await prisma.lance.delete({
                where: { id: id },
            });
            return console.log('lance Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new LanceServices();
