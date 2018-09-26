
declare class MRZ extends NSObject {

	static alloc(): MRZ; // inherited from NSObject

	static new(): MRZ; // inherited from NSObject
}

declare class PassportScannerController extends UIViewController implements G8TesseractDelegate {

	static alloc(): PassportScannerController; // inherited from NSObject

	static new(): PassportScannerController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	StartScanWithSender(sender: any): void;

	StopScanWithSender(sender: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	preprocessedImageForTesseractSourceImage(tesseract: G8Tesseract, sourceImage: UIImage): UIImage;

	progressImageRecognitionForTesseract(tesseract: G8Tesseract): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldCancelImageRecognitionForTesseract(tesseract: G8Tesseract): boolean;
}

declare var PassportScannerNsVersionNumber: number;

declare var PassportScannerNsVersionString: interop.Reference<number>;
