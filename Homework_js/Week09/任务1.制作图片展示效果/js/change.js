// JavaScript Document

$(function (){
	$('div img').addClass('alpha');
	$('div img :eq(0)').removeClass('alpha');
	$('div img').mouseover(function(){
			var pic=$(this).attr("src");
			$('#test').attr('src',pic);
			$(this).removeClass('alpha').siblings().addClass('alpha');
		});
});

/*
window.onload=function(){
	var a=document.getElementsByTagName('div');
	var g=document.getElementById('test');
	var child=a[0].childNodes;
	for(var i=0;i<child.length;i++){
		child[i].onmouseover=function(){
				this.className='alpha';
				var s=this.getAttribute("src");
				g.setAttribute('src',s);
				
			}
		child[i].onmouseout=function(){
			this.removeAttribute('style');
		}
	}
}
*/