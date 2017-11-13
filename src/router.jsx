"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const router_1 = require("dva/router");
const HomePage_1 = require("./routes/HomePage");
const NotFound_1 = require("./routes/NotFound");
function default_1({ history }) {
    return (<router_1.Router history={history}>
      <router_1.Switch>
        <router_1.Route path="/" component={HomePage_1.default}/>
        <router_1.Route path="/*" component={NotFound_1.default}/>
      </router_1.Switch>
    </router_1.Router>);
}
exports.default = default_1;
//# sourceMappingURL=router.jsx.map