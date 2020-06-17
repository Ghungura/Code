"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var objects_1 = require("./PageObject/objects");
describe('Chain locators demo', function () {
    var _this = this;
    it('Open Angular js website', function () { return __awaiter(_this, void 0, void 0, function () {
        var calc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    calc = new objects_1.objects();
                    protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
                    //repeater ,  chain locators, And css for identical tags
                    return [4 /*yield*/, calc.firstEditBox.sendKeys("3")];
                case 1:
                    //repeater ,  chain locators, And css for identical tags
                    _a.sent();
                    return [4 /*yield*/, calc.secondEditBox.sendKeys("5")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, calc.goButton.click()];
                case 3:
                    _a.sent();
                    calc.results.getText().then(function (text) {
                        console.log(text);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFdpdGhQYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVGVzdFdpdGhQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWlGO0FBQ2pGLGdEQUErQztBQUMvQyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFBQSxpQkFtQi9CO0lBaEJHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTs7Ozs7b0JBQ3RCLElBQUksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDekIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDekQsd0RBQXdEO29CQUN4RCxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQTs7b0JBRHJDLHdEQUF3RDtvQkFDeEQsU0FBcUMsQ0FBQztvQkFDdEMscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUE7O29CQUF0QyxTQUFzQyxDQUFDO29CQUN2QyxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBM0IsU0FBMkIsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO3dCQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixDQUFDLENBQUMsQ0FBQTs7OztTQUlQLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQyxDQUFBIn0=