"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var page_1 = require("tns-core-modules/ui/page/page");
var nativescript_angular_1 = require("nativescript-angular");
nativescript_angular_1.registerElement('SwiftyCam', function () { return require('my-plugin').SwiftyCam; });
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, page) {
        this.itemService = itemService;
        this.page = page;
        //page.actionBarHidden = true;        
        this.ipage = page;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.startScanbyCardIO = function () {
        var uiView = this.ipage.ios; // Get the underlying iOS native Control
        //this.cardio = new CardIO();
        //this.cardio.scanCard(uiView);
        //alert(this.cardio);
        //cardio.show(uiView);
        var successCallback = function () { };
        var failureCallback = function () { };
        try {
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
        catch (failureCallback) {
            console.log('error: ' + failureCallback);
        }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUU3QyxzREFBdUU7QUFFdkUsNkRBQXVEO0FBQ3ZELHNDQUFlLENBQUMsV0FBVyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUE5QixDQUE4QixDQUFDLENBQUM7QUFPbkU7SUFJSSw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUNoQyxJQUFVO1FBREYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUVkLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBR0wsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sMENBQWlCLEdBQXhCO1FBRVEsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBRyx3Q0FBd0M7UUFFdkUsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBRXRCLElBQUksZUFBZSxHQUFHLGNBQVcsQ0FBQyxDQUFDO1FBQ25DLElBQUksZUFBZSxHQUFHLGNBQVcsQ0FBQyxDQUFDO1FBRW5DLElBQ0EsQ0FBQztZQUNHLDRCQUE0QjtZQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBNENRO1FBQ1osQ0FBQztRQUNELEtBQUssQ0FBQSxDQUFDLGVBQWUsQ0FBQyxDQUN0QixDQUFDO1lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNULENBQUM7SUFuRlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPbUMsMEJBQVc7WUFDMUIsV0FBSTtPQVBiLGNBQWMsQ0FvRjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFBhZ2UsIGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbnJlZ2lzdGVyRWxlbWVudCgnU3dpZnR5Q2FtJywgKCkgPT4gcmVxdWlyZSgnbXktcGx1Z2luJykuU3dpZnR5Q2FtKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgcHJpdmF0ZSBpcGFnZTogUGFnZTsgIFxuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICAgICAgICkge1xuICAgICAgICAgICAgLy9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXBhZ2UgPSBwYWdlO1xuICAgICAgICB9XG4gICAgXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRTY2FuYnlDYXJkSU8oKVxuICAgIHtcbiAgICAgICAgICAgIHZhciB1aVZpZXcgPSB0aGlzLmlwYWdlLmlvczsgICAvLyBHZXQgdGhlIHVuZGVybHlpbmcgaU9TIG5hdGl2ZSBDb250cm9sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vdGhpcy5jYXJkaW8gPSBuZXcgQ2FyZElPKCk7XG4gICAgICAgICAgICAvL3RoaXMuY2FyZGlvLnNjYW5DYXJkKHVpVmlldyk7XG4gICAgICAgICAgICAvL2FsZXJ0KHRoaXMuY2FyZGlvKTtcbiAgICAgICAgICAgIC8vY2FyZGlvLnNob3codWlWaWV3KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICAgICAgIHZhciBmYWlsdXJlQ2FsbGJhY2sgPSBmdW5jdGlvbigpe307XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRyeSAgICAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vVE5TUGFzc3BvcnRTY2FubmVyLlNjYW4oKTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQYXNzcG9ydFNjYW5uZXJOUy5TdGFydFNjYW4odWlWaWV3KVxuICAgICAgICAgICAgICAgIC50aGVuKChzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihzdWNjZXNzQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJkID0gc3VjY2Vzc0NhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luZm8gPT4gJyArIGNhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tWaXNhIOKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAojExMTE7IGV4cGlyeTogOS8yMDIzOyBjdnY6IDIyM30gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJkSG9sZGVyID0+XCIgKyB0aGlzLmNhcmRIb2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJkID0+XCIgKyBjYXJkLmNhcmROdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeHBpcnkgPT5cIiArIGNhcmQuZXhwaXJ5WWVhciArIGNhcmQuZXhwaXJ5TW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdnYgPT5cIiArIGNhcmQuY3Z2KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gY2FyZC5leHBpcnlZZWFyLnRvU3RyaW5nKCkgKyBjYXJkLmV4cGlyeU1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkbnVtYmVyID0gY2FyZC5jYXJkTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdnYgPSBjYXJkLmN2di50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNhcmRIb2xkZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRIb2xkZXIgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkaG9sZGVyID0gdGhpcy5jYXJkSG9sZGVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhwaXJ5IHBhcmFtID0+XCIgKyBleHBpcnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWRkLWNhcmQvY2FyZC1kZXRhaWxzXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkaG9sZGVyXCI6IGNhcmRob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwaXJ5XCI6IGV4cGlyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJkbnVtYmVyXCI6IGNhcmRudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3Z2XCI6IGN2dixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogdGhpcy5hZGRQYXltZW50TWV0aG9kRmxvdyA/ICdhZGRQYXltZW50TWV0aG9kJyA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9uYW1lOiBcImZsaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgICAqLyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChmYWlsdXJlQ2FsbGJhY2spXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgZmFpbHVyZUNhbGxiYWNrKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICB9XG59Il19