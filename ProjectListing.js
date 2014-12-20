var myBtn = document.getElementById("button");
myBtn.addEventListener('click', function(event) {
	redirectTemp();
}, false);

function redirectTemp(){
	var client = $("#dropdown").val();
	var project = $("#project").val();
	if(client=="Verizon" && project=="Schaumburg"){
		var newURL = "Verizon_Schaumburg.html"
		window.location.href = newURL;
	}
	if(client=="Verizon" && project=="Orlando"){
		var newURL = "Verizon_Orlando.html"
		window.location.href = newURL;
	}
	if(client=="Verizon" && project=="Edison"){
		var newURL = "Verizon_Edison.html"
		window.location.href = newURL;
	}
	if(client=="TMobile" && project=="San Fransisco"){
		var newURL = "Tmobile_SanFran.html"
		window.location.href = newURL;
	}
	if(client=="TMobile" && project=="Olympia"){
	var newURL = "Tmobile_Olympia.html"
	window.location.href = newURL;
	}
	if(client=="Sprint" && project=="Austin"){
	var newURL = "Sprint_Austin.html"
	window.location.href = newURL;
	}
};

jQuery(function($) {
    var locations = {
        'Verizon': ['Orlando', 'Schaumburg', 'Edison'],
        'TMobile': ['San Fransisco', 'Olympia'],
        'Sprint': ['Austin'],
    }
    
    var $projects = $('#project');
    $('#dropdown').change(function () {
        var client = $(this).val(), prjct = locations[client] || [];
        
        var html = $.map(prjct, function(prjct){
            return '<option value="' + prjct + '">' + prjct + '</option>'
        }).join('');
        $projects.html(html)
    });
});
