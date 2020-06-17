import { Given,When, Then } from "cucumber";
import { objects } from "../PageObject/objects";
import { browser } from "protractor";
import {chai} from "chai";

let calc = new objects();
//var expect=chai.expect;

         Given('I will navigate to {string} Site', async (string)=> {
            // Write code here that turns the phrase above into concrete actions
           if(string="calc"){
           await browser.get('http://juliemr.github.io/protractor-demo/');}
          });
         // Given('I will navigate to {string} page', async (string)=> {
            // Write code here that turns the phrase above into concrete actions
         /* if(string=="calc")
          {
            await browser.get('http://juliemr.github.io/protractor-demo/'); 
          }*/
          
          //});

          
          When('I add two numbers {string} and {string}',  async(string, string2)=> {
           // Write code here that turns the phrase above into concrete actions
           
     
           await calc.firstEditBox.sendKeys(string);
           await calc.secondEditBox.sendKeys(string2);
         });  


 Then('the output displayed should be {string}', async (string) =>{
           // Write code here that turns the phrase above into concrete actions
           await calc.goButton.click();
          await calc.results.getText().then(function (text) {
               console.log(text);
              //expect(text).to.equal(string);
          })
         });
 