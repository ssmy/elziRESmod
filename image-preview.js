/* Image Preview */
 
this.imagePreview = function(){	

	$('#ca-header-everywhere').hover(function(){
		this.t = this.title;
		this.title = "";	
		c = (document.title);
		imgUrl = $('#ca-header-everywhere').attr('src');
		$('body').append('<div id="preview-box"><img src=http://drg.nerdi.net/caheader/caheader.png">'); /* "+ c +" */								 
						
    },
	function(){
		this.title = this.t;	
		$("#preview-box").remove();
    });			
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});