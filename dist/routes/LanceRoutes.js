"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LanceController_1 = __importDefault(require("../controllers/LanceController"));
const LanceRouter = (0, express_1.Router)();
LanceRouter.get('/lance', LanceController_1.default.listarLance);
LanceRouter.get('/lance/:id', LanceController_1.default.listarLance);
LanceRouter.post('/lance', LanceController_1.default.criarLance);
LanceRouter.patch('/lance/:id', LanceController_1.default.atualizarLance);
LanceRouter.delete('/lance/:id', LanceController_1.default.deletarLance);
exports.default = LanceRouter;
