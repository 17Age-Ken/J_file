// JavaScript Document
$(function(){
	$('.text').each(function() {
        var va=this.value;
		$(this).focus(function(){
			if(this.value==va){
				this.value="";
			}
			});
		$(this).blur(function(){
			if(this.value==""){
				this.value=va;
			}
			});	
    });	
	
	$("input[type='button']").click(function(){
		var name=$("input[name]").val();
		var con=$("textarea").val();
		if(name!="你的昵称"&&con!="你要说的话"){
			var msg="<li><span>"+name+"</span><p>"+con+"</p></li>";
			$('ul').append(msg);
			$('input[name]').val("你的昵称");
			$('textarea').val("你要说的话");
		}
	});
});