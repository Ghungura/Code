import { ElementFinder ,element,by} from "protractor";

export class objects{

firstEditBox:ElementFinder;
secondEditBox:ElementFinder;
goButton:ElementFinder;
results:ElementFinder;
constructor()
{

    this.firstEditBox=element(by.model("first"));
    this.secondEditBox=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.results= element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
}

}