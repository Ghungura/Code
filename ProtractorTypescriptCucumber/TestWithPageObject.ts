import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { objects } from './PageObject/objects';
describe('Chain locators demo', function () {


    it('Open Angular js website', async () => {
        let calc = new objects();
        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.goButton.click();
        calc.results.getText().then(function (text) {

            console.log(text);
        })


        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
  })

})
