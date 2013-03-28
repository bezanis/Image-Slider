Image Slider is a sliding image menu plugin for jQuery. Images slide according to the mouse x-position. Images grow and shrink according to their distance to the mouse. A reflection can be cast by the images. 

It takes an unordered list and transforms into a sliding image menu. The unordered list should be placed into a div with an id or class to reference it by. Images can have links. Take a look at some of the examples to get an idea of how to make the container cross-browser compatible. Reflections are disabled in IE versions older than 9, and a less cpu intense version of the class is used for mobile devices. 

Customizable Input Parameters: 
easing - Time for the slider to achieve its final position. A higher number moves the slider slower. 
padding - The amount of padding between each image. 
reflectionheight - The height of the reflections. Enter 0 to disable reflections. 
minheight - Minimum height of each image. Images will gradually shrink to this height as they move away from the mouse x-position. 
growthspread - The higher this number, the more gradually each image decreases in size as it moves away from the mouse. 
reflectionopacity - The initial opacity of the reflection. 

<a href="http://bezzmedia.com/imageslider">View the Image Slider Main Page for more examples</a>

Simple instantiation of the class:
<script type="text/javascript">
var instance;
$(function() {
    instance = $('#productslider').ImageSlider({
        reflectionheight : 30
    });
});
</script>