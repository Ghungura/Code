import {Config} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import * as reporter from 'cucumber-html-reporter';
export let config: Config = {
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    onComplete:()=>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './report.json',
        output: './report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
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
        cucumberOpts:
        {//require step definition file
          format:"json:./report.json",
        tags:"@smoke",
        require:['./Stepdefinition/*.js']
    
    },

        jasmineNodeOpts:{showColors:true,}
        
    }
    
    
    
    /*seleniumAddress: This the address where selenium server is running,run the command 
    webdriver manager start and take the port number.*/