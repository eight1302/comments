//评论提交
$(".btn_send").on('click',function(){
	function time(s) {
	    return s < 10 ? '0' + s: s;
	}

	var myDate = new Date();
	//获取当前年
	var year=myDate.getFullYear();
	//获取当前月
	var month=myDate.getMonth()+1;
	//获取当前日
	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();  
	var now=year+'-'+time(month)+"-"+time(date)+" "+time(h)+':'+time(m)+":"+time(s);
	//获取评论信息
	var text_send = $("#text_send").val();
	if(text_send == ""){
		return false;
	}
	var html;
	html = '<div class="col-md-12 col-sm-12 col-xl-12 one cont">'+
				'<div class="col-md-2 col-sm-2 col-xl-12 one img">'+
					'<img src="../img/timg.jpg">'+
				'</div>'+
				'<div class="col-md-10 col-sm-10 col-xl-12 one content">'+
				'<div class="comment-right">'+
					'<h4>匿名</h4>'+
					'<div class="comment-content-header three">'+
						'<span><i class="glyphicon glyphicon-time two"></i>'+now+'</span>&nbsp;&nbsp;&nbsp;&nbsp;'+
						'<span><i class="glyphicon glyphicon-map-marker two"></i>北京</span>'+
					'</div>'+
					'<p class="tent">'+text_send+'</p>'+
					'<div class="comment-content-footer">'+
						'<div class="row">'+
							'<div class="col-md-12 col-sm-12 col-xl-12 three">'+
								'<span><i class="glyphicon glyphicon-globe two"></i> 谷歌</span>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="reply-list three">'+
						
					'</div>'+
					'<div class="col-md-12 col-sm-12 col-xl-12 content_text one three">'+
						'<textarea class="col-md-10 col-sm-10 col-xl-10 con_back" id="con_back"></textarea>'+
						'<div class="col-md-2 col-sm-2 col-xl-2 btn btn_back">提交</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	$(".tent_info").append(html);
	$(".text_send").val("");
})

$(".content_text").show();
$(".tent_info").on('click','.btn_back',function(){
	function time(s) {
	    return s < 10 ? '0' + s: s;
	}

	var myDate = new Date();
	//获取当前年
	var year=myDate.getFullYear();
	//获取当前月
	var month=myDate.getMonth()+1;
	//获取当前日
	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();  
	var back_time=year+'-'+time(month)+"-"+time(date)+" "+time(h)+':'+time(m)+":"+time(s);
	//获取评论信息
	var con_back = $(this).parent().parent().parent().find("#con_back").val();
	if(con_back == ""){
		return false;
	}
	var html_back;
	html_back = '<div class="reply">'+
					'<div class="three">'+
						'<a class="replyname">匿名</a>:<span >@brother</span><span>'+back_time+'</span>'+
					'</div>'+
				'</div>'+
				'<p><span>'+con_back+'</span></p>';
	$(this).parent().parent().parent().find(".reply-list").append(html_back);
	$(this).parent().parent().parent().find("#con_back").val("");
})