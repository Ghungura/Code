"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onComplete: function () {
        var options = {
            theme: 'bootstrap',
            jsonFile: './report.json',
            output: './report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    //execute in firefox
    /*capabilities: {
        browserName: 'firefox'
      },*/
    //execute in IE
    /*capabilities: {
          browserName: 'internet explorer'
        },*/
    //specs: ['Asynchronus.js'],
    specs: ['../Features/calculator.feature'],
    cucumberOpts: {
        format: "json:./report.json",
        tags: "@smoke",
        require: ['./Stepdefinition/*.js']
    },
    jasmineNodeOpts: { showColors: true, }
};
/*seleniumAddress: This the address where selenium server is running,run the command
webdriver manager start and take the port number.*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0RBQW1EO0FBQ3hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUM5RCxVQUFVLEVBQUM7UUFDVCxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0JBQW9CO0lBRXBCOztVQUVNO0lBRUwsZUFBZTtJQUVkOztZQUVRO0lBRU4sNEJBQTRCO0lBQzVCLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDO0lBQ3pDLFlBQVksRUFDWjtRQUNFLE1BQU0sRUFBQyxvQkFBb0I7UUFDN0IsSUFBSSxFQUFDLFFBQVE7UUFDYixPQUFPLEVBQUMsQ0FBQyx1QkFBdUIsQ0FBQztLQUVwQztJQUVHLGVBQWUsRUFBQyxFQUFDLFVBQVUsRUFBQyxJQUFJLEdBQUU7Q0FFckMsQ0FBQTtBQUlEO21EQUNtRCJ9