 $(function(){
 	$('.content ul').isotope({
 		itemSelector: 'li'
 	});
 	// phan tim kiem 
 	$('.tukhoa').keypress(function(event) {
 		/* Act on the event */
 		if(event.keyCode == '13'){
 			var tu1 = $('.tukhoa').val();
 			tu1 = "." + tu1;
 			$('.content ul').isotope({filter: tu1});
 		}
 	});
 	// quick
 	var thoigian = setInterval(function(){
 		var tu1 = $('.tukhoa').val();
 			tu1 = "." + tu1;
 			$('.content ul').isotope({filter: tu1});
 	},200)




 	// code cho phan nut 
 	$('nav li a').click(function(event) {
 		/* Act on the event */
 		var ten = $(this).text();
 		var danhmuc = $(this).data('class');
 		danhmuc = "." + danhmuc;
 		if(danhmuc == '.all'){
 			$('section h1').text('Tat ca anh');
 			$('.content ul').isotope({filter: '*'});
 		}else {
 			$('section h1').text(ten);
 			$('.content ul').isotope({filter: danhmuc});
 		}
 		
 		return false;
 	});
})  
 