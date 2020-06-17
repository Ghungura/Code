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
var cucumber_1 = require("cucumber");
var objects_1 = require("../PageObject/objects");
var protractor_1 = require("protractor");
var calc = new objects_1.objects();
//var expect=chai.expect;
cucumber_1.Given('I will navigate to {string} Site', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(string = "calc")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
// Given('I will navigate to {string} page', async (string)=> {
// Write code here that turns the phrase above into concrete actions
/* if(string=="calc")
 {
   await browser.get('http://juliemr.github.io/protractor-demo/');
 }*/
//});
cucumber_1.When('I add two numbers {string} and {string}', function (string, string2) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, calc.firstEditBox.sendKeys(string)];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [4 /*yield*/, calc.secondEditBox.sendKeys(string2)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('the output displayed should be {string}', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // Write code here that turns the phrase above into concrete actions
            return [4 /*yield*/, calc.goButton.click()];
            case 1:
                // Write code here that turns the phrase above into concrete actions
                _a.sent();
                return [4 /*yield*/, calc.results.getText().then(function (text) {
                        console.log(text);
                        //expect(text).to.equal(string);
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwZGVmaW5pdGlvbi9TdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE0QztBQUM1QyxpREFBZ0Q7QUFDaEQseUNBQXFDO0FBR3JDLElBQUksSUFBSSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQ3pCLHlCQUF5QjtBQUVoQixnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLFVBQU8sTUFBTTs7OztxQkFFbEQsQ0FBQSxNQUFNLEdBQUMsTUFBTSxDQUFBLEVBQWIsd0JBQWE7Z0JBQ2hCLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQUE7O2dCQUE5RCxTQUE4RCxDQUFDOzs7OztLQUMvRCxDQUFDLENBQUM7QUFDSiwrREFBK0Q7QUFDNUQsb0VBQW9FO0FBQ3ZFOzs7SUFHSTtBQUVILEtBQUs7QUFHTCxlQUFJLENBQUMseUNBQXlDLEVBQUcsVUFBTSxNQUFNLEVBQUUsT0FBTzs7OztZQUNyRSxvRUFBb0U7WUFHcEUscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUh4QyxvRUFBb0U7Z0JBR3BFLFNBQXdDLENBQUM7Z0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBMUMsU0FBMEMsQ0FBQzs7OztLQUM1QyxDQUFDLENBQUM7QUFHWCxlQUFJLENBQUMseUNBQXlDLEVBQUUsVUFBTyxNQUFNOzs7O1lBQ25ELG9FQUFvRTtZQUNwRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFBOztnQkFEM0Isb0VBQW9FO2dCQUNwRSxTQUEyQixDQUFDO2dCQUM3QixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7d0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25CLGdDQUFnQztvQkFDcEMsQ0FBQyxDQUFDLEVBQUE7O2dCQUhGLFNBR0UsQ0FBQTs7OztLQUNGLENBQUMsQ0FBQyJ9