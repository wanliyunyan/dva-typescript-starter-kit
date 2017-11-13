"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dva_1 = require("dva");
const count_1 = require("./models/count");
const router_1 = require("./router");
const app = dva_1.default();
app.model(count_1.default);
app.router(router_1.default);
app.start('#root');
//# sourceMappingURL=index.jsx.map