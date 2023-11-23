import { PrismaClient, Lance } from '@prisma/client';

const prisma = new PrismaClient();

class LanceServices {
  constructor() {}

  async listarLance() {
    try {
      const lance = await prisma.lance.findMany();
      return lance;
    } catch (error) {
      console.log(error);
    }
  }

  async criarLance(newLance: Lance) {
    try {
      const lance = await prisma.lance.create({
        data: newLance,
      });
      return lance;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarLance(upLance: Lance) {
    try {
      const { id, ...rest } = upLance;
      const lance = await prisma.lance.update({
        where: { id: id },
        data: { ...rest },
      });
      return lance;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarLance(id: string) {
    try {
      await prisma.lance.delete({
        where: { id: id },
      });
      return console.log('lance Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LanceServices();
