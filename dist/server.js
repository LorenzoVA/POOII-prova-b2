"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LanceRoutes_1 = __importDefault(require("./routes/LanceRoutes"));
const LeilaoRoutes_1 = __importDefault(require("./routes/LeilaoRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', LanceRoutes_1.default);
app.use('/api', LeilaoRoutes_1.default);
app.use('/api', UsuarioRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Prova - Lorenzo Venturini');
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
