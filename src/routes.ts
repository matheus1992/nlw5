import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();
const settingsController = new SettingsController;

/**
 * Tipos de Parâmetros
 * Route Params => Parâmetros de rotas
 * Query Params => Filtros e buscas
 * Body Params => Objeto enviado na request {}
 */
routes.post("/settings", settingsController.create);

export { routes };