//import { Status } from "cucumber";
import { browser } from "protractor";
import {After,Before, Status} from "cucumber";

//var {After, Before} = require('cucumber');

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@smoke"}, function () {
  // This hook will be executed before scenarios tagged with @smoke4
  console.log("before tag");

});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});

After(async function(scenario) {
  // This hook will be executed after all scenarios
  if(scenario.result.status===Status.FAILED)
 
  {

    //code to take screenshot
   const sc= await browser.takeScreenshot();
   this.attach(sc,"image/png");
    //this.attach(sc,"image/png");
  }

});
