import { ContentView } from 'ui/content-view';

declare class PassportScannerController extends UIViewController implements G8TesseractDelegate { }
declare var UIView;
declare class MRZ extends NSObject;

/*
class MySwifty extends PassportScannerController { 

  viewDidLoad() {
    super.viewDidLoad();
    // you can add swifty buttons here
  }
}*/

export class SwiftyCam extends ContentView {
  private _ios: UIView;

  constructor() {
    super();
    this._ios = new UIView();
  }  
  public get ios() {
    return this._ios;
  }

  public get _nativeView() {
    return this._ios;
  }

  public onLoaded() {
    var self = this;
    console.log("loafing..."),
    let swifty = PassportScannerController.alloc().StartScanWithSender(this);
    this._ios.addSubview(swifty.view);
  }
}