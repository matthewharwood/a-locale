"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var build_locale_1 = require("./build-locale");
var _angular_cli_v1_4_1 = require("./fixtures/.angular-cli-v1.4");
var classInstance = new build_locale_1.BuildLocale();
describe(classInstance.constructor['name'], function () {
    var MOCK_ANGULAR_JSON;
    beforeEach(function () {
        MOCK_ANGULAR_JSON = _angular_cli_v1_4_1.cliJson1_4;
    });
    describe(build_locale_1.BuildLocale.mapAppNames['name'], function () {
        it('should make an array of values when apps are present', function () {
            expect(build_locale_1.BuildLocale.mapAppNames(MOCK_ANGULAR_JSON.apps))
                .toEqual(['wtf', 'wow']);
        });
    });
    describe(build_locale_1.BuildLocale.getAngularJSON['name'], function () {
        it('should take test presents of angular-cli.json', function () { return __awaiter(_this, void 0, void 0, function () {
            var PATH, angularAppPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PATH = './.angular-cli.json';
                        return [4 /*yield*/, build_locale_1.BuildLocale.getAngularJSON()];
                    case 1:
                        angularAppPath = _a.sent();
                        expect(angularAppPath).toBeDefined();
                        expect(angularAppPath).toBe(PATH);
                        return [4 /*yield*/, build_locale_1.BuildLocale.getAngularJSON(PATH)];
                    case 2:
                        angularAppPath = _a.sent();
                        expect(angularAppPath).toBeDefined();
                        expect(angularAppPath).toBe(PATH);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if angular-cli.json is missing', function () {
            var PATH = './.angular-cli2.json';
            build_locale_1.BuildLocale.getAngularJSON(PATH).catch(function (e) {
                expect(e).toBeDefined();
            });
        });
    });
    describe(build_locale_1.BuildLocale.getAngularApps['name'], function () {
        it('should get and read cli.json', function () { return __awaiter(_this, void 0, void 0, function () {
            var angularAppPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build_locale_1.BuildLocale.getAngularApps()];
                    case 1:
                        angularAppPath = _a.sent();
                        expect(angularAppPath.apps).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should throw if angular-cli.json is not json', function () {
            var PATH = './.angular-cli.json';
            build_locale_1.BuildLocale.getAngularApps(PATH).catch(function (e) {
                expect(e).toBeDefined();
            });
        });
    });
});
//# sourceMappingURL=build-locale.test.js.map