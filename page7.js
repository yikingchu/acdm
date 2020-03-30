	
	mui.init({
		gestureConfig:{
			tap: true,
			doubletap: true,
			longtap: true,
			hold: true,
			drag: true,
			swipe: true,
			release: true
		}
	});
	
	function showTimeSelect(stype,objid,sign){
		var timeSelect = new mui.DtPicker({
			type: stype
		});
		timeSelect.show(function(rs){
			if (objid != ''){
				if (sign == 'input'){
					mui('#' + objid + ' input')[0].value=rs.text;
				} else {
					document.getElementById(objid).innerText = rs.text;
				}
			}
		});
	}
	
	mui('#page7_jEdit1')[0].addEventListener('tap', function(e) {
		showTimeSelect('datetime','page7_jEdit1','input');
	})
