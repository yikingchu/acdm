$('.navimg_circle span.mui-icon-extra,.navimg_circle span.mui-icon,.navimg_circlefill span.mui-icon-extra,.navimg_circlefill span.mui-icon').each(function(index, element) {
	orgheigt=parseFloat($(this).css('font-size').replace('px',''))*1.8;
	$(this).css('line-height',orgheigt+'px');
	$(this).css('height',orgheigt+'px');
	$(this).css('width',orgheigt+'px');
	var thiscolor=$(this).css('color');	
});

$('.navbar').each(function(){
	var vj_curmaxcol=$(this).attr('data-col');
	var temp$=this;
	var rewritenav=function(domquery){		
		var vj_tatolcol=$(temp$).find( domquery).length;
		if (vj_tatolcol>vj_curmaxcol){
			var vjoldnavbarhtml=$(temp$).html();
			var vjnewnavbarhtml='<ul><li>';
			var vj_curcol=0;
			var timestamp = 'vjtempid'+Date.parse(new Date()).toString()+parseInt(100*Math.random());
			
			$(temp$).find( domquery).each(function(){
				//console.log($(this).);
				if(vj_curcol==vj_curmaxcol){
					vj_curcol=0;
					vjnewnavbarhtml=vjnewnavbarhtml+'</li><li>'
				}			
				var temp=$(this)[0];	
										
				vjnewnavbarhtml=vjnewnavbarhtml+temp.outerHTML;	
				vj_curcol++;
			});
			vjnewnavbarhtml=vjnewnavbarhtml+'</li></ul>';
			$(temp$).html(vjnewnavbarhtml);			
		}
		mui('.navbar '+domquery).each(function(){
			var vjf_href=this.getAttribute("href");
			if (vjf_href.length>0){
				this.addEventListener("tap",function () {
				 window.location.href=vjf_href;
				});			
			}	
		});
	}
	rewritenav('a.vj-tablecell');	
	rewritenav('a.mui-control-item');
});
