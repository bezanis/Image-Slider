<div id="content">
			<div style="display:block;margin-left:200px;">
				<h1 style="margin:0px;padding:0px;display:block;font-size:60px">Image Slider</h1>
				<h2 style="color:#999999;display:block;margin-top:-25px; margin-left:210px;font-size:20px">a jQuery plugin</h2>
			</div>
			Author: <a href="https://plus.google.com/u/0/107133375302618109356/">John Bezanis</a>
			<hr/>
			<div style="display: block; height: 120px;">
				<div id="productslider5" style="height: 197px; display: block; overflow: hidden; text-align: left;">
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
			Image Slider is a sliding image menu plugin for <a href="http://www.jquery.com">jQuery</a>. Images slide according to the mouse x-position. Images grow and shrink according to their distance to the mouse. A reflection can be cast by the images.
			 <br/><br/>It takes an unordered list and transforms into a sliding image menu. The unordered list should be placed into a div with an id or class to reference it by. Images can have links. Take a look at some of the examples to get an idea of how to make the container cross-browser compatible. Reflections are disabled in IE versions older than 9, and a less cpu intense version of the class is used for mobile devices.
			<br/><br/>
			Customizable Input Parameters:

<br/><strong>easing</strong> - Time for the slider to achieve its final position. A higher number moves the slider slower.
<br/><strong>padding</strong> - The amount of padding between each image.
<br/><strong>reflectionheight</strong> - The height of the reflections. Enter 0 to disable reflections.
<br/><strong>minheight</strong> - Minimum height of each image. Images will gradually shrink to this height as they move away from the mouse x-position.
<br/><strong>growthspread</strong> - The higher this number, the more gradually each image decreases in size as it moves away from the mouse.
<br/><strong>reflectionopacity</strong> - The initial opacity of the reflection.
<br/><br/>		
			
			<code style="height:auto">
				Simple instantiation of the class:<br/>
				&lt;script type=&quot;text/javascript&quot;&gt;<br>
  var instance;<br>
  $(function() {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;instance = $('#productslider').ImageSlider({<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reflectionheight : 30<br>
  &nbsp;&nbsp;&nbsp;&nbsp;});<br>
  });<br/>
&lt;/script&gt;

			</code>
			
			
			
			<br/><br/>
			<a href="js/imageslider.js" style="font-weight:bold;font-size:18px;">Download this plugin</a>
			<br/><br/>
			<a href="http://code.google.com/p/imageslider/">View this project on Google Code</a>
			
			<hr/>
			Examples:
			<br/><br/>
			
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
			Code:
			<code>
				&lt;div style=&quot;display: block; height: 120px;&quot;&gt;
				<br/>
				&lt;div id=&quot;productslider3&quot; style=&quot;height: 197px; display: block; overflow: hidden; text-align: left;&quot;&gt;
				<br/>
				&lt;ul&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;/ul&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;/div&gt;<br/>

				&lt;script type=&quot;text/javascript&quot; src=&quot;js/imageslider.js&quot;&gt;&lt;/script&gt;
				<br/>
				&lt;script type=&quot;text/javascript&quot;&gt;
				<br/>
				var instance3;
				<br/>
				$(function() {
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;instance3 = $('#productslider3').ImageSlider({
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;easing : 300,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding : 30,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reflectionheight : 20,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minheight : 30,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;growthspread : 30,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reflectionopacity : 30,
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height : 100
				<br/>
				&nbsp;&nbsp;&nbsp;&nbsp;});
				<br/>
				});
				<br/>
				&lt;/script&gt;
			</code>
			<hr/>
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
			Code:
			<code>
				&lt;div style=&quot;display: block; height: 105px;&quot;&gt;
				<br/>
				&lt;img src=&quot;images/productsleftarrow.png&quot; style=&quot;float:left; padding-left:15px; padding-right:10px&quot; alt=&quot;&quot; id=&quot;productsleftarrow&quot;/&gt;
				<br/>
				&lt;img src=&quot;images/productsrightarrow.png&quot; style=&quot;float:right; padding-right:15px; padding-left:10px&quot; alt=&quot;&quot; id=&quot;productsrightarrow&quot;/&gt;
				<br/>
				&lt;div id=&quot;productslider&quot; style=&quot;height: 105px; display: block; overflow: hidden; text-align: left;&quot;&gt;
				<br/>
				&lt;ul&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;/ul&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;div style=&quot;clear:both&quot;/&gt;<br/>

				&lt;script type=&quot;text/javascript&quot; src=&quot;js/imageslider.js&quot;&gt;&lt;/script&gt;
				<br/>
				&lt;script type=&quot;text/javascript&quot;&gt;
				<br/>
				var instance;
				<br/>
				$(function() {
				<br/>
				instance = $('#productslider').ImageSlider({
				<br/>
				easing : 300,
				<br/>
				padding : 0,
				<br/>
				reflectionheight : 30,
				<br/>
				minheight : 30,
				<br/>
				growthspread : 30,
				<br/>
				reflectionopacity : 30
				<br/>
				});
				<br/>
				$(&quot;#productsleftarrow&quot;).click(function() {
				<br/>
				instance.movemouseposition(-50);
				<br/>
				});
				<br/>
				$(&quot;#productsrightarrow&quot;).click(function() {
				<br/>
				instance.movemouseposition(50);
				<br/>
				});
				<br/>
				<br/>
				});
				&lt;/script&gt;
			</code>
			<hr/>
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
			Code:
			<code>
				&lt;div style=&quot;display: block; height: 100px;&quot;&gt;
				<br/>
				&lt;img src=&quot;images/productsleftarrow.png&quot; style=&quot;float:left; padding-left:15px; padding-right:10px&quot; alt=&quot;&quot; id=&quot;products2leftarrow&quot;/&gt;
				<br/>
				&lt;img src=&quot;images/productsrightarrow.png&quot; style=&quot;float:right; padding-right:15px; padding-left:10px&quot; alt=&quot;&quot; id=&quot;products2rightarrow&quot;/&gt;
				<br/>
				&lt;div id=&quot;productslider2&quot; style=&quot;height: 100px; display: block; overflow: hidden; text-align: left;&quot;&gt;
				<br/>
				&lt;ul&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;/ul&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;div style=&quot;clear:both&quot;/&gt;<br/>

				&lt;script type=&quot;text/javascript&quot; src=&quot;js/imageslider.js&quot;&gt;&lt;/script&gt;
				<br/>
				&lt;script type=&quot;text/javascript&quot;&gt;
				<br/>
				var instance2;
				<br/>
				$(function() {
				<br/>
				instance2 = $('#productslider2').ImageSlider({
				<br/>
				easing : 300,
				<br/>
				padding : 30,
				<br/>
				reflectionheight : 40,
				<br/>
				minheight : 50,
				<br/>
				growthspread : 30,
				<br/>
				reflectionopacity : 30,
				<br/>
				height : 120
				<br/>
				});
				<br/>
				$(&quot;#products2leftarrow&quot;).click(function() {
				<br/>
				instance2.movemouseposition(-50);
				<br/>
				});
				<br/>
				$(&quot;#products2rightarrow&quot;).click(function() {
				<br/>
				instance2.movemouseposition(50);
				<br/>
				});
				<br/>
				<br/>
				});
				&lt;/script&gt;
			</code>
			<hr/>
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
			Code:
			<code>
				&lt;div style=&quot;display: block; height: 150px;&quot;&gt;
				<br/>
				&lt;div id=&quot;productslider4&quot; style=&quot;height: 197px; display: block; overflow: hidden; text-align: left;&quot;&gt;
				<br/>
				&lt;ul&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-1.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-2.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-3.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-4.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-5.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-6.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-7.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-8.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-9.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-10.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-11.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;li&gt;
				<br/>
				&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;/imageslider/images/mariotiles/mariotiles-12.png&quot; alt=&quot;Mario Bros&quot;/&gt;&lt;span&gt;Mario Bros&lt;/span&gt;&lt;/a&gt;
				<br/>
				&lt;/li&gt;
				<br/>
				&lt;/ul&gt;
				<br/>
				&lt;/div&gt;
				<br/>
				&lt;/div&gt;<br/>

				&lt;script type=&quot;text/javascript&quot; src=&quot;js/imageslider.js&quot;&gt;&lt;/script&gt;
				<br/>
				&lt;script type=&quot;text/javascript&quot;&gt;
				<br/>
				var instance4;
				<br/>
				$(function() {
				<br/>
				instance4 = $('#productslider4').ImageSlider({
				<br/>
				easing : 300,
				<br/>
				padding : 30,
				<br/>
				reflectionheight : 80,
				<br/>
				minheight : 60,
				<br/>
				growthspread : 30,
				<br/>
				reflectionopacity : 20,
				<br/>
				height : 160
				<br/>
				});
				<br/>
				});
				<br/>
				&lt;/script&gt;
			</code>
			<hr/>
			<script type="text/javascript" src="js/imageslider.js"></script>
			<script type="text/javascript">
				var instance;
				var instance2;
				var instance3;
				var instance4;
				var instance5;
				$(function() {
					instance = $('#productslider').ImageSlider({
						easing : 300,
						padding : 0,
						reflectionheight : 30,
						minheight : 30,
						growthspread : 30,
						reflectionopacity : 30
					});
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
					instance3 = $('#productslider3').ImageSlider({
						easing : 300,
						padding : 30,
						reflectionheight : 20,
						minheight : 30,
						growthspread : 30,
						reflectionopacity : 30,
						height : 100
					});
					$("#productsleftarrow").click(function() {
						instance.movemouseposition(-50);
					});
					$("#productsrightarrow").click(function() {
						instance.movemouseposition(50);
					});
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
				instance5 = $('#productslider5').ImageSlider({
						easing : 300,
						padding : 30,
						reflectionheight : 20,
						minheight : 30,
						growthspread : 30,
						reflectionopacity : 30,
						height : 100
					});
			</script>

		</div>