"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const react_1 = require("@headlessui/react");
function Test() {
    return <react_1.Switch checked onChange={console.log}></react_1.Switch>;
}
exports.Test = Test;
