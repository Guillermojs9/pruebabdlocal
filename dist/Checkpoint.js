"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkpoint = void 0;
const realm_1 = __importDefault(require("realm"));
class Checkpoint extends realm_1.default.Object {
}
exports.Checkpoint = Checkpoint;
Checkpoint.schema = {
    name: 'Checkpoint',
    properties: {
        id: 'int',
        latitud: 'string',
        longitud: 'string',
        esTesoro: 'bool',
    },
    primaryKey: 'id',
};
