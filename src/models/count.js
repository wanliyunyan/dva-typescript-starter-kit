"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("dva/router");
const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
exports.default = {
    namespace: 'count',
    state: 0,
    reducers: {
        add(state) { return state + 1; },
        minus(state) { return state - 1; },
    },
    effects: {
        *addWithDelay(action, { call, put }) {
            yield call(delay, 500);
            yield put({ type: 'add' });
        },
        *redirect(action, { put }) {
            yield put(router_1.routerRedux.push('/abc'));
        },
    },
};
//# sourceMappingURL=count.js.map