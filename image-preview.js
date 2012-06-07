/* Image Preview */
 
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 40;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("img.preview").hover(function(e){
		this.t = this.title;
		this.title = "";	
		c = (document.title);
		imgUrl = $("#ca-header-everywhere").attr('src');
		$("body").append("<p id='preview-box'><img src='"+ imgUrl +"' class='preview-box-img' alt='Image preview'/></p>"); /* "+ c +" */								 
		$("#preview-box")
			.css("top",(e.pageY + yOffset) + "px")
			.css("left",(e.pageX + xOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#preview-box").remove();
    });	
	$("a.preview").mousemove(function(e){
		$("#preview-box")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});