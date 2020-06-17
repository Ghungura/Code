import {Config} from 'protractor';
export let config: Config = {
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    directConnect:true,
    //execute in firefox
    
    /*capabilities: {
        browserName: 'firefox'
      },*/
      
     //execute in IE
      
      /*capabilities: {
            browserName: 'internet explorer'
          },*/
    
        //specs: ['Asynchronus.js'],
        specs: ['test.js'],
        jasmineNodeOpts:{showColors:true,}
        
        
        
        
     
    }
    
    
    
    /*seleniumAddress: This the address where selenium server is running,run the command 
    webdriver manager start and take the port number.*/