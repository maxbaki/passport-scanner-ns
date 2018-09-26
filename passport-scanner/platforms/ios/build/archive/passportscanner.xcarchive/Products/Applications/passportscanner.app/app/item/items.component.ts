import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Page, isIOS, isAndroid } from 'tns-core-modules/ui/page/page';

import { registerElement } from 'nativescript-angular';
registerElement('SwiftyCam', () => require('my-plugin').PassportScannerNS);

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    private ipage: Page;  

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService,
        private page: Page
        ) {
            //page.actionBarHidden = true;        
            this.ipage = page;
        }
    

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public startScanbyCardIO()
    {
            var uiView = this.ipage.ios;   // Get the underlying iOS native Control
            
            //this.cardio = new CardIO();
            //this.cardio.scanCard(uiView);
            //alert(this.cardio);
            //cardio.show(uiView);
            
            var successCallback = function(){};
            var failureCallback = function(){};
            
            try            
            {
                //TNSPassportScanner.Scan();
                /*
                const promise = PassportScannerNS.StartScan(uiView)
                .then((successCallback, failureCallback) => {
                
                    if(successCallback)
                    {
                        var card = successCallback;
                        console.log('info => ' + card);
                        
                        //{Visa ••••••••••••1111; expiry: 9/2023; cvv: 223}                    

                        /*
                        console.log("CardHolder =>" + this.cardHolder);
                        console.log("Card =>" + card.cardNumber);
                        console.log("Expiry =>" + card.expiryYear + card.expiryMonth);
                        console.log("Cvv =>" + card.cvv);

                        const expiry = card.expiryYear.toString() + card.expiryMonth.toString();
                        const cardnumber = card.cardNumber.toString();
                        const cvv = card.cvv.toString();
                        
                        if(this.cardHolder == null)
                            this.cardHolder = "";

                        const cardholder = this.cardHolder.toString();

                        console.log("Expiry param =>" + expiry);

                        this.routerExtensions.navigate(["add-card/card-details"], {
                            queryParams: {
                                "cardholder": cardholder,
                                "expiry": expiry,
                                "cardnumber": cardnumber,
                                "cvv": cvv,
                                "action": this.addPaymentMethodFlow ? 'addPaymentMethod' : null
                            },
                            transition: {
                                //name: "flip",
                                duration: 1000,
                                curve: "linear",
                                clearHistory: true
                            }
                        });
                     }
                });   */  
            }
            catch(failureCallback)
            {
                console.log('error: ' + failureCallback);            
            }
    }
}