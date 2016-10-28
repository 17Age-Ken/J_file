function $(Element){
	return document.getElementById(Element);
}

//用户名验证
function checkName(){
	var value=$("name").value;
	var reg=/^[a-zA-Z]\D{2,}$/;
	if(reg.test(value)==false){
		$("name_prompt").innerHTML="用户名错误，请重新输入";
		$("name_prompt").style.color="red";
		$("name").value="";
		return false;
	}else{
	     $("name_prompt").innerHTML="right";
		 $("name_prompt").style.color="green";
	}
	return true;
}

//密码验证
function checkPwd(){
	var pwd=$("pwd").value;
	var reg=/^\w{6,}$/;
	if(reg.test(pwd)==false){
		$("pwd_prompt").innerHTML="密码格式错误，请重新输入";
		$("pwd_prompt").style.color="red";
		$("pwd").value="";
		return false;
	}else{
	   	$("pwd_prompt").innerHTML="right";
		$("pwd_prompt").style.color="green";
	}
	return true;
}

//重新验证密码
function checkRepwd(){
	var repwd=$("repwd").value;
	var pwd=$("pwd").value;
	if(repwd!=pwd){
		$("repwd_prompt").innerHTML="密码与上面不一致";
		$("repwd_prompt").style.color="red";
		$("repwd").value="";
		return false
	}else{
		$("repwd_prompt").innerHTML="right";
		$("repwd_prompt").style.color="green";
	}
	return true;
}

//验证邮箱
function checkEmail(){
	var email=$("email").value;
	var reg=/^[a-zA-Z]\D+@\w{3,}\.\w+[(com)|(cn)]$/;
	if(reg.test(email)==false){
		$("email_prompt").innerHTML="邮箱格式不对，请重新输入";
		$("email_prompt").style.color="red";
		
		return false;
	}else{
		$("email_prompt").innerHTML="right";
		$("email_prompt").style.color="green";
	}
	return true;
}
//出生日期
var mydate=new Date();
window.onload=function(){
		var year=document.getElementById("year");
		var month=document.getElementById("month");
		var day=document.getElementById("day");
		for(var y=mydate.getFullYear();y>=1970;y--){
			year.add(new Option(y,y));	
		}
		for(var m=1;m<=12;m++){
			if (m-1==mydate.getMonth())
			month.add(new Option(m,m,true,true));	
			else month.add(new Option(m,m));
		}
		fetchDay(0);
	}
	function fetchDay(i){
		var monthdays=new Date(year.value,month.value,0).getDate();
		day.innerHTML="";
		for(var d=1;d<=monthdays;d++){	
		if(d==mydate.getDate()&&i==0)		
			day.add(new Option(d,d,true,true));
			else day.add(new Option(d,d));
		}
	}

//重填
function Clear(){
	
	var strname=document.getElementsByName("hobby");
	for(var a=0;a<strname.length;a++){
		strname[a].checked=false;
	}
	$("name").value="";
	$("email").value="";
	$("repwd").value="";
	$("pwd").value="";
}