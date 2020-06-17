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
//import { Status } from "cucumber";
var protractor_1 = require("protractor");
var cucumber_1 = require("cucumber");
//var {After, Before} = require('cucumber');
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@smoke" }, function () {
    // This hook will be executed before scenarios tagged with @smoke4
    console.log("before tag");
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var sc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(scenario.result.status === cucumber_1.Status.FAILED)) return [3 /*break*/, 2];
                    return [4 /*yield*/, protractor_1.browser.takeScreenshot()];
                case 1:
                    sc = _a.sent();
                    this.attach(sc, "image/png");
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBkZWZpbml0aW9uL2hvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMseUNBQXFDO0FBQ3JDLHFDQUE4QztBQUU5Qyw0Q0FBNEM7QUFFNUMsaUJBQU0sQ0FBQztJQUNMLGtEQUFrRDtBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUU7SUFDdkIsa0VBQWtFO0lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFNUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQyxFQUFFO0lBQzlCLHdFQUF3RTtBQUMxRSxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQUU7SUFDN0IsdUVBQXVFO0FBQ3pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0VBQWdFO0FBQ2hFLGlCQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2IsK0RBQStEO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFlLFFBQVE7Ozs7Ozt5QkFFeEIsQ0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBRyxpQkFBTSxDQUFDLE1BQU0sQ0FBQSxFQUF0Qyx3QkFBc0M7b0JBSzlCLHFCQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUFsQyxFQUFFLEdBQUUsU0FBOEI7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7Q0FJOUIsQ0FBQyxDQUFDIn0=