'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const loadJSON = (filepath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, content) => {
            if (err) {
                reject(err);
            }
            else {
                try {
                    resolve(JSON.parse(content));
                }
                catch (err) {
                    reject(err);
                }
            }
        });
    });
};
loadJSON(`${__dirname}/test.json`)
    .then(console.log)
    .catch(console.log);
//# sourceMappingURL=loadjson.js.map