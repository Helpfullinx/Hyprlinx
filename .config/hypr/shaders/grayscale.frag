// fragment shader
//
// RGBA color to RGBA greyscale
//
// smooth transition based on u_colorFactor: 0.0 = original, 1.0 = greyscale
//
// http://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/
// "The luminosity method is a more sophisticated version of the average method.
// It also averages the values, but it forms a weighted average to account for human perception.
// We’re more sensitive to green than other colors, so green is weighted most heavily. The formula
// for luminosity is 0.21 R + 0.72 G + 0.07 B."

precision mediump float;
varying vec2 v_texcoord;												
uniform sampler2D tex;

void main()																
{
	vec3 u_colorFactor = vec3(0.0, 0.0, 0.0);
	vec3 tint = vec3(1.0, 0.92, 0.75);
	vec4 sample =  texture2D(tex, v_texcoord);
	float grey = 0.21 * sample.r + 0.72 * sample.g + 0.33 * sample.b;
	
	gl_FragColor = vec4(
		(sample.r * u_colorFactor.r + grey * (1.0 - u_colorFactor.r)) * tint.r,
		(sample.g * u_colorFactor.g + grey * (1.0 - u_colorFactor.g)) * tint.g,
		(sample.b * u_colorFactor.b + grey * (1.0 - u_colorFactor.b)) * tint.b,
		1.0
	);
}