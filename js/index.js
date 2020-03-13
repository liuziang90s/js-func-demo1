effectsHtml={};
function saveHtml(id){
	effectsHtml[id]=$("#"+id).parent().html();
}
$(document).ready(function(){

	layui.use('layer', function(){ //独立版的layer无需执行这一句
		layer = layui.layer; //独立版的layer无需执行这一句
	})
	$(".copy-btn").click(function(){
		var effectId=$(this).parent().parent().find(".u-show").children().attr("id");
		// var effectHtml="<html>"+$(this).parent().parent().find(".u-show").html()+"</html>\n";
		var effectHtml="<html>"+effectsHtml[effectId]+"</html>\n";
		var effectStyle="<style>"+$(this).parent().parent().find("style").html()+"</style>\n";
		var effectScript="<script>"+$(this).parent().parent().find("script").html()+"</script>\n";
		var effectStr=effectStyle+effectHtml+effectScript;


		var container = document.getElementById("container");
		container.value=effectStr;
		container.select();
		document.execCommand("copy");
		layer.msg('复制成功!');
	})
})

