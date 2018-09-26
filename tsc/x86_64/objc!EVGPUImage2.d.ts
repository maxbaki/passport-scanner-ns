
declare class Camera extends NSObject implements AVCaptureAudioDataOutputSampleBufferDelegate, AVCaptureVideoDataOutputSampleBufferDelegate {

	static alloc(): Camera; // inherited from NSObject

	static new(): Camera; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var EVGPUImage2VersionNumber: number;

declare var EVGPUImage2VersionString: interop.Reference<number>;

declare class RenderView extends UIView {

	static alloc(): RenderView; // inherited from NSObject

	static appearance(): RenderView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RenderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RenderView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): RenderView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RenderView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): RenderView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): RenderView; // inherited from NSObject
}
