/*
 * Image Slider jQuery plugin v1.0
 * Written at Arkitech - arkitech.net
 * By John Bezanis - bezzmedia.com/imageslider
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
	$.fn.ImageSlider = function(options) {
		var defaults = {
			easing : 500,
			padding : 30,
			reflectionheight : 20,
			minheight : 50,
			growthspread : 30,
			reflectionopacity : 30
		};
		var options = $.extend({}, defaults, options);
		var ua = navigator.userAgent.toLowerCase();
		var isMobile = (ua.indexOf("android") > -1 || ua.indexOf("iphone") > -1 || ua.indexOf("ipod") > -1 || ua.indexOf("webos") > -1);
		var startTime = (new Date()).getTime();
		var imageSlider = this;
		if(options.height) {
			imageSlider.css('height', options.height + 'px');
		}
		if(options.width) {
			imageSlider.css('width', options.width + 'px');
		}
		if(msielt8()) {
			var tempIEWidth = imageSlider.width();
			imageSlider.css('position', 'absolute');
			imageSlider.css('width', tempIEWidth);
			imageSlider.css('display', 'block');
		}
		if(options.reflectionheight > 0) {
			var reflection = document.createElement('canvas');
			if(reflection && reflection.getContext && !msielt9() && !isMobile) {
				reflection.setAttribute('height', options.reflectionheight);
				reflection.setAttribute('width', imageSlider.css('width'));
				var reflectionCanvas = reflection.getContext('2d');
				reflectionCanvas.scale(1, -1);
				imageSlider.append(reflection);
				$(reflection).css('position', 'relative');
				$(reflection).css('padding', '0px');
				$(reflection).css('margin', '0px');
				$(reflection).css('-webkit-mask-image', '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,' + (options.reflectionopacity / 100) + ')), to(rgba(0,0,0,0)))');
			}
		}
		var touchStartPos;
		var touchStartCursor;
		var xpercentbuffer = 0.0;
		var cursorPos = imageSlider.width() / 2;
		var moving;
		imageSlider.css('overflow', 'hidden');
		imageSlider.css('white-space', 'nowrap');
		var list = imageSlider.children('ul');
		list.html(list.html().replace(/\t|\n|\r|\r\n/g, '').replace(/>\s/g, '>'));
		list.css('height', (imageSlider.height() - options.reflectionheight) + 'px');
		list.css('margin', '0px');
		list.css('padding', '0px');
		list.css('position', 'relative');
		list.css('list-style-type', 'none');
		var listItem = list.children('li');
		listItem.css('height', (imageSlider.height() - options.reflectionheight) + 'px');
		listItem.css('padding-left', options.padding + 'px');
		listItem.css('padding-right', options.padding + 'px');
		listItem.css('padding-bottom', '0px');
		listItem.css('margin', '0px');
		listItem.css('display', 'inline-block');
		if(msielt8()) {
			listItem.css('float', 'left');
		}
		listItem.children('a').children('span').hide();
		listItem.children('span').hide();
		if(isMobile){
			list.children('li').each(function() {
					computedheight = Math.round(imageSlider.height() - options.reflectionheight);
					var imageTopMargin = (imageSlider.height() - options.reflectionheight - computedheight);
					$(this).children('a').children('img').css('height', computedheight + 'px');
					$(this).children('a').children('img').css('margin-top', imageTopMargin + 'px');
					$(this).children('img').css('height', computedheight + 'px');
					$(this).children('img').css('margin-top', imageTopMargin + 'px');
			});
		}
		this.move = function() {
			if(reflectionCanvas) {
				reflectionCanvas.clearRect(0, -options.reflectionheight, imageSlider.width(), options.reflectionheight);

			}
			var newTime = (new Date()).getTime();
			var timeDelta = newTime - startTime;
			startTime = newTime;
			var cursorPercentage = cursorPos / this.width();
			xpercentbuffer = (options.easing * xpercentbuffer / timeDelta + cursorPercentage) / (options.easing / timeDelta + 1);
			var sliderOverflow = (this.width() - this.fullwidth());
			var sliderLeft = (Math.round((this.width() - this.fullwidth()) * (xpercentbuffer)));
			list.css('left', sliderLeft + 'px');
			list.children('li').each(function() {
				if(!isMobile){
					var mouseDistance = Math.abs(cursorPos - (sliderLeft + this.offsetLeft + $(this).width() * .5 + options.padding));
					var growthPercent = 1 - (mouseDistance / (imageSlider.width() * options.growthspread * .01));
					var computedheight;
					if(growthPercent > 0) {
						computedheight = Math.round(options.minheight + (imageSlider.height() - options.reflectionheight - options.minheight) * growthPercent);
					}else{
						computedheight = options.minheight;
					}
					var imageTopMargin = (imageSlider.height() - options.reflectionheight - computedheight);
					$(this).children('a').children('img').css('height', computedheight + 'px');
					$(this).children('a').children('img').css('margin-top', imageTopMargin + 'px');
					$(this).children('img').css('height', computedheight + 'px');
					$(this).children('img').css('margin-top', imageTopMargin + 'px');
				}
				sliderLeft = (Math.round((imageSlider.width() - imageSlider.fullwidth()) * (xpercentbuffer)));
			});
			if(reflectionCanvas) {
				list.children('li').each(function() {
					var mouseDistance = Math.abs(cursorPos - (sliderLeft + this.offsetLeft + $(this).width() * .5 + options.padding));
					var growthPercent = 1 - (mouseDistance / (imageSlider.width() * options.growthspread * .01));
					var computedheight;
					if(growthPercent > 0) {
						computedheight = Math.round(options.minheight + (imageSlider.height() - options.reflectionheight - options.minheight) * growthPercent);
					}else{
						computedheight = options.minheight;
					}
					var reflectedImage;
					if($(this).children('a').children('img').get(0)) {
						reflectedImage = $(this).children('a').children('img').get(0);
					} else if($(this).children('img').get(0)) {
						reflectedImage = $(this).children('img').get(0);
					}
					if(reflectedImage && options.padding + this.offsetLeft + sliderLeft + $(reflectedImage).width() > 0 && this.offsetLeft + sliderLeft < imageSlider.width()) {
						reflectionCanvas.drawImage(reflectedImage, options.padding + this.offsetLeft + sliderLeft, -(options.reflectionheight * ((computedheight + options.reflectionheight) / (imageSlider.height() + options.reflectionheight))  ), $(reflectedImage).width(), options.reflectionheight * ((computedheight + options.reflectionheight) / (imageSlider.height() + options.reflectionheight)));
					}
				});
			}
			list.css('left', sliderLeft + 'px');
			if(reflectionCanvas) {
				if(!$(reflection).css('-webkit-mask-image')||isMobile) {
					reflectionCanvas.save();
					reflectionCanvas.globalCompositeOperation = 'destination-in';
					reflectionCanvas.beginPath();
					var grad = reflectionCanvas.createLinearGradient(0, 0, 0, -options.reflectionheight);
					grad.addColorStop(0, 'rgba(0,0,0,' + (options.reflectionopacity * .01) + ')');
					grad.addColorStop(.5, 'rgba(0,0,0,' + (options.reflectionopacity * .005) + ')');
					grad.addColorStop(1, 'rgba(0,0,0,0)');
					reflectionCanvas.fillStyle = grad;
					reflectionCanvas.moveTo(0, -options.reflectionheight);
					reflectionCanvas.lineTo(0, 0);
					reflectionCanvas.lineTo(imageSlider.width(), 0);
					reflectionCanvas.lineTo(imageSlider.width(), -options.reflectionheight);
					reflectionCanvas.lineTo(0, -options.reflectionheight);
					reflectionCanvas.fill();
					reflectionCanvas.restore();
				}
			}
			if(msielt9()) {
				list.css('width', (this.fullwidth() + 1000) + 'px');
			}
			if(Math.abs(xpercentbuffer - cursorPercentage) < .001) {
				moving = clearInterval(moving);
			}
		};
		$(this).bind("touchstart", function(e) {
			touchStartPos = e.originalEvent.touches[0].pageX;
			touchStartCursor = cursorPos;
		});
		$(this).bind("touchmove", function(e) {
			cursorPos = Math.min(imageSlider.width(), Math.max(0, touchStartCursor + (touchStartPos - e.originalEvent.changedTouches[0].pageX)));
			if(!moving) {
				moving = imageSlider.resumemovement();
			}
			return false;
		});
		this.mousemove(function(e) {
			cursorPos = e.pageX - this.offsetLeft;
			if(!moving) {
				moving = imageSlider.resumemovement();
			}
		});
		this.movemouseposition = function(pixels) {
			cursorPos = Math.min(imageSlider.width(), Math.max(0, cursorPos + pixels));
			if(!moving) {
				moving = this.resumemovement();
			}
		}
		this.fullwidth = function() {
			var totalWidth = 0;
			list.children('li').each(function() {
				totalWidth += this.clientWidth;
			});
			return totalWidth;
		}
		this.resumemovement = function() {
			startTime = (new Date()).getTime();
			return (setInterval(function() {
					imageSlider.move();
				}, 30));
		}
		moving = this.resumemovement();
		return this;
	}
	function msielt9() {
		if($.browser.msie && parseFloat($.browser.version) < 9) {
			return true;
		}
		return false;
	}
	function msielt8() {
		if($.browser.msie && parseFloat($.browser.version) < 8) {
			return true;
		}
		return false;
	}
})(jQuery);
