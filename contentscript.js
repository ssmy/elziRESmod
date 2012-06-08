$(document).ready(function() {
	$("#header-bottom-left ul.tabmenu").append('<li><a href="javascript:$(\'body,html\').animate({scrollTop:0},800);">back to top</a></li>');
	$("#header-bottom-left ul.tabmenu").append('<li><a href="javascript:$(\'div.content\').css({\'margin-left\':\'343px\'});$(\'div.side\').css({\'visibility\':\'visible\'});">show sb</a></li>');
	$("#header-bottom-left ul.tabmenu").append('<li><a href="javascript:$(\'div.content\').css({\'margin-left\':\'15px\'});$(\'div.side\').css({\'visibility\':\'hidden\'});">hide sb</a></li>');
	$("p.tagline").contents().filter(function(){return this.nodeType === 3;}).remove();
	$("span.user").contents().filter(function(){return this.nodeType === 3;}).remove();
	$("time").append(' ');
	$('div.comment').attr('style', 'border-top:none !important;border-right:none !important;border-bottom:none !important;border-left:1px solid #999 !important;background-color:transparent !important;border-radius:0px !important;');     /* Remove RES borders on comments */ 
	$('#header-img').remove();
	$('#srLeftContainer').attr('style','float: right !important;margin-right: 16px !important;');
	$('#modmail').attr('style','position: absolute !important;top: 1px !important;left: 80px !important;');
	$(document).ready(function () {
	                if(window.location.href.indexOf("cripplingalcoholism") >= 0) 
	                {
	                	$('div.content').attr('style','background: url(\'http://drg.nerdi.net/caheader/caheader.png\') no-repeat fixed;background-size: 500px 200px; background-position:50% 120px;');

	                }
	            });
	$("#header-bottom-left").append('<span class="rname"> <a style="color:#FF5737" href="http://reddit.com">/r/</a><a style="color:#e8e8e8 !important;" href="' + $('h1.redditname a').attr("href") + '">' + $('h1.redditname a').text() + '</a></span>');
	$('div.link').attr('style','margin-bottom:0px !important;');
	$('#header').append('<div class="head-shadow"></div>');
	$('#srDropdownContainer a').text('SUBREDDIT LIST');
})();

