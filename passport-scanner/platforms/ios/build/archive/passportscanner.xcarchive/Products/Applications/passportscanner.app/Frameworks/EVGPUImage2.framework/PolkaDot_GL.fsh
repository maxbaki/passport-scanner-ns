varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;

uniform float fractionalWidthOfPixel;
uniform float aspectRatio;
uniform float dotScaling;

void main()
{
    vec2 sampleDivisor = vec2(fractionalWidthOfPixel, fractionalWidthOfPixel / aspectRatio);
    
    vec2 samplePos = textureCoordinate - mod(textureCoordinate, sampleDivisor) + 0.5 * sampleDivisor;
    vec2 textureCoordinateToUse = vec2(textureCoordinate.x, (textureCoordinate.y * aspectRatio + 0.5 - 0.5 * aspectRatio));
    vec2 adjustedSamplePos = vec2(samplePos.x, (samplePos.y * aspectRatio + 0.5 - 0.5 * aspectRatio));
    float distanceFromSamplePoint = distance(adjustedSamplePos, textureCoordinateToUse);
    float checkForPresenceWithinDot = step(distanceFromSamplePoint, (fractionalWidthOfPixel * 0.5) * dotScaling);
    
    vec4 inputColor = texture2D(inputImageTexture, samplePos);

    gl_FragColor = vec4(inputColor.rgb * checkForPresenceWithinDot, inputColor.a);
}