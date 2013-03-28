Image Slider is a sliding image menu plugin for jQuery. Images slide according to the mouse x-position. Images grow and shrink according to their distance to the mouse. A reflection can be cast by the images. 

It takes an unordered list and transforms into a sliding image menu. The unordered list should be placed into a div with an id or class to reference it by. Images can have links. Take a look at some of the examples to get an idea of how to make the container cross-browser compatible. Reflections are disabled in IE versions older than 9, and a less cpu intense version of the class is used for mobile devices. 

Customizable Input Parameters: 
easing - Time for the slider to achieve its final position. A higher number moves the slider slower. 
padding - The amount of padding between each image. 
reflectionheight - The height of the reflections. Enter 0 to disable reflections. 
minheight - Minimum height of each image. Images will gradually shrink to this height as they move away from the mouse x-position. 
growthspread - The higher this number, the more gradually each image decreases in size as it moves away from the mouse. 
reflectionopacity - The initial opacity of the reflection. 

Simple instantiation of the class:
<script type="text/javascript">
var instance;
$(function() {
    instance = $('#productslider').ImageSlider({
        reflectionheight : 30
    });
});
</script>


Example 1:
<div style="display: block; height: 120px;"> 
<div id="productslider3" style="height: 197px; display: block; overflow: hidden; text-align: left;"> 
<ul> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
</ul> 
</div> 
</div>
<script type="text/javascript" src="js/imageslider.js"></script> 
<script type="text/javascript"> 
var instance3; 
$(function() { 
    instance3 = $('#productslider3').ImageSlider({ 
        easing : 300, 
        padding : 30, 
        reflectionheight : 20, 
        minheight : 30, 
        growthspread : 30, 
        reflectionopacity : 30, 
        height : 100 
    }); 
}); 
</script>


Example 2:
<div style="display: block; height: 105px;"> 
<img src="images/productsleftarrow.png" style="float:left; padding-left:15px; padding-right:10px" alt="" id="productsleftarrow"/> 
<img src="images/productsrightarrow.png" style="float:right; padding-right:15px; padding-left:10px" alt="" id="productsrightarrow"/> 
<div id="productslider" style="height: 105px; display: block; overflow: hidden; text-align: left;"> 
<ul> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
</ul> 
</div> 
</div> 
<div style="clear:both"/>
<script type="text/javascript" src="js/imageslider.js"></script> 
<script type="text/javascript"> 
var instance; 
$(function() { 
instance = $('#productslider').ImageSlider({ 
easing : 300, 
padding : 0, 
reflectionheight : 30, 
minheight : 30, 
growthspread : 30, 
reflectionopacity : 30 
}); 
$("#productsleftarrow").click(function() { 
instance.movemouseposition(-50); 
}); 
$("#productsrightarrow").click(function() { 
instance.movemouseposition(50); 
}); 

}); </script>


Example 3:
<div style="display: block; height: 100px;"> 
<img src="images/productsleftarrow.png" style="float:left; padding-left:15px; padding-right:10px" alt="" id="products2leftarrow"/> 
<img src="images/productsrightarrow.png" style="float:right; padding-right:15px; padding-left:10px" alt="" id="products2rightarrow"/> 
<div id="productslider2" style="height: 100px; display: block; overflow: hidden; text-align: left;"> 
<ul> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
</ul> 
</div> 
</div> 
<div style="clear:both"/>
<script type="text/javascript" src="js/imageslider.js"></script> 
<script type="text/javascript"> 
var instance2; 
$(function() { 
instance2 = $('#productslider2').ImageSlider({ 
easing : 300, 
padding : 30, 
reflectionheight : 40, 
minheight : 50, 
growthspread : 30, 
reflectionopacity : 30, 
height : 120 
}); 
$("#products2leftarrow").click(function() { 
instance2.movemouseposition(-50); 
}); 
$("#products2rightarrow").click(function() { 
instance2.movemouseposition(50); 
}); 

}); </script>


Example 4:
<div style="display: block; height: 150px;"> 
<div id="productslider4" style="height: 197px; display: block; overflow: hidden; text-align: left;"> 
<ul> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-1.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-2.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-3.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-4.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-5.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-6.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-7.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-8.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-9.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-10.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-11.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
<li> 
<a href="#"><img src="http://bezzmedia.com/imageslider/images/mariotiles/mariotiles-12.png" alt="Mario Bros"/><span>Mario Bros</span></a> 
</li> 
</ul> 
</div> 
</div>
<script type="text/javascript" src="js/imageslider.js"></script> 
<script type="text/javascript"> 
var instance4; 
$(function() { 
instance4 = $('#productslider4').ImageSlider({ 
easing : 300, 
padding : 30, 
reflectionheight : 80, 
minheight : 60, 
growthspread : 30, 
reflectionopacity : 20, 
height : 160 
}); 
}); 
</script>