"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("ui/content-view");
var MySwifty = /** @class */ (function (_super) {
    __extends(MySwifty, _super);
    function MySwifty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySwifty.prototype.viewDidAppear = function (animated) {
        _super.prototype.viewDidAppear.call(this, animated);
        //super.viewDidLoad();
        // you can add swifty buttons here
        var self = this;
        self.debug = true; // So that we can see what's going on (scan text and quality indicator)
        self.accuracy = 1; // 1 = all checksums should pass (is the default so we could skip this line)
        console.log("before...");
        self.StartScan(self);
        console.log("later...");
    };
    return MySwifty;
}(PassportScannerController));
var SwiftyCam = /** @class */ (function (_super) {
    __extends(SwiftyCam, _super);
    function SwiftyCam() {
        var _this = _super.call(this) || this;
        _this._ios = new UIView();
        return _this;
    }
    Object.defineProperty(SwiftyCam.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftyCam.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    SwiftyCam.prototype.onLoaded = function () {
        var swifty = MySwifty.new();
        this._ios.addSubview(swifty.view);
    };
    return SwiftyCam;
}(content_view_1.ContentView));
exports.SwiftyCam = SwiftyCam;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThDO0FBSzlDO0lBQXVCLDRCQUF5QjtJQUFoRDs7SUFjQSxDQUFDO0lBWkcsZ0NBQWEsR0FBYixVQUFjLFFBQWlCO1FBQy9CLGlCQUFNLGFBQWEsWUFBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixzQkFBc0I7UUFDdEIsa0NBQWtDO1FBRWxDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLHVFQUF1RTtRQUMxRixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFFLDRFQUE0RTtRQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFkRCxDQUF1Qix5QkFBeUIsR0FjL0M7QUFFRDtJQUErQiw2QkFBVztJQUd4QztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQzs7SUFDM0IsQ0FBQztJQUNELHNCQUFXLDBCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGtDQUFXO2FBQXRCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFTSw0QkFBUSxHQUFmO1FBQ0UsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBbkJELENBQStCLDBCQUFXLEdBbUJ6QztBQW5CWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRWaWV3IH0gZnJvbSAndWkvY29udGVudC12aWV3JztcblxuZGVjbGFyZSB2YXIgVUlWaWV3O1xuZGVjbGFyZSB2YXIgUGFzc3BvcnRTY2FubmVyQ29udHJvbGxlcjtcblxuY2xhc3MgTXlTd2lmdHkgZXh0ZW5kcyBQYXNzcG9ydFNjYW5uZXJDb250cm9sbGVyIHsgXG5cbiAgICB2aWV3RGlkQXBwZWFyKGFuaW1hdGVkOiBib29sZWFuKSB7XG4gICAgc3VwZXIudmlld0RpZEFwcGVhcihhbmltYXRlZCk7XG4gICAgLy9zdXBlci52aWV3RGlkTG9hZCgpO1xuICAgIC8vIHlvdSBjYW4gYWRkIHN3aWZ0eSBidXR0b25zIGhlcmVcbiAgICBcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5kZWJ1ZyA9IHRydWU7IC8vIFNvIHRoYXQgd2UgY2FuIHNlZSB3aGF0J3MgZ29pbmcgb24gKHNjYW4gdGV4dCBhbmQgcXVhbGl0eSBpbmRpY2F0b3IpXG4gICAgc2VsZi5hY2N1cmFjeSA9IDE7ICAvLyAxID0gYWxsIGNoZWNrc3VtcyBzaG91bGQgcGFzcyAoaXMgdGhlIGRlZmF1bHQgc28gd2UgY291bGQgc2tpcCB0aGlzIGxpbmUpXG4gICAgY29uc29sZS5sb2coXCJiZWZvcmUuLi5cIik7XG4gICAgc2VsZi5TdGFydFNjYW4oc2VsZik7XG4gICAgY29uc29sZS5sb2coXCJsYXRlci4uLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3dpZnR5Q2FtIGV4dGVuZHMgQ29udGVudFZpZXcge1xuICBwcml2YXRlIF9pb3M6IFVJVmlldztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2lvcyA9IG5ldyBVSVZpZXcoKTtcbiAgfSAgXG4gIHB1YmxpYyBnZXQgaW9zKCkge1xuICAgIHJldHVybiB0aGlzLl9pb3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IF9uYXRpdmVWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9pb3M7XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkZWQoKSB7XG4gICAgbGV0IHN3aWZ0eSA9IE15U3dpZnR5Lm5ldygpO1xuICAgIHRoaXMuX2lvcy5hZGRTdWJ2aWV3KHN3aWZ0eS52aWV3KTtcbiAgfVxufSJdfQ==