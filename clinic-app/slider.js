$(window).load(function() {
	var imgs = $(".slideshow").children("img");
	var nums = imgs.length;
	var count = 0;
	var sec = 6000;

	$(".slideshow img").eq(count).fadeIn(1000);
	setInterval(slide, sec);

	function slide(){
		if(count >= (nums-1)){
			count = 0;
			$(".slideshow img").eq(count).fadeIn(1000);
			$(".slideshow img").eq(nums-1).fadeOut(1000);
		}else{
			$(".slideshow img").eq(count).fadeOut(1000);
			$(".slideshow img").eq(count +1).fadeIn(1000);
			count = count + 1;
		}
	}
});

