$( function() {
	
	var dialog, form, name = $( "#form-name" );
	

	function processUserInput() {							
																	
			// dialog.dialog( "close" );				
			
			$("#divMain").removeClass("transparent");
			$("#divMain").addClass("fullyVisible");															
	
			// ------- budget 
			var selectedBudget = "";	
			if ($("#budget-low").hasClass("ui-selected"))
				selectedBudget = "low";
			else if ($("#budget-mid").hasClass("ui-selected"))
				selectedBudget = "mid";
			else if ($("#budget-high").hasClass("ui-selected"))
				selectedBudget = "high";
											
			// update to top panel
			$("#budget").val(selectedBudget);
			
			// ------- density
			var selectedDensity = "";	
			if ($("#density-low").hasClass("ui-selected"))
				selectedDensity = "low";
			else if ($("#density-mid").hasClass("ui-selected"))
				selectedDensity = "mid";
			else if ($("#density-high").hasClass("ui-selected"))
				selectedDensity = "high";
											
			// update to top panel
			$("#density").val(selectedDensity);



			budgetinput = $("#selectbudgetperday").val();
			$("#selectbudgetperday").val(budgetinput);
			//colourisemap()
			
			d3.csv("./data/budget_country.csv", function(error, data) {
				data.forEach(function(d){
					d.country_code = d.country_code;
					d.budget = +d.budget;
					d.midrange = +d.midrange;
					d.luxury = +d.luxury;
				});
				data.forEach(function(d){
					if (budgetinput >= d.luxury){
						var temp = {};
						temp[d.country_code] = "#1a5276";
						map.updateChoropleth(temp);
						//console.log(temp);
						return
					}
					else if (budgetinput >= d.midrange){
						var temp = {};
						temp[d.country_code] = "#5dade2";
						map.updateChoropleth(temp);
						//console.log(temp);
						return
					}
					else if (budgetinput >= d.budget){
						var temp = {};
						temp[d.country_code] = "#aed6f1";
						map.updateChoropleth(temp);
						//console.log(temp);
						return
					}
					else if (budgetinput < d.budget){
						var temp = {};
    					temp[d.country_code] = "grey";
    					map.updateChoropleth(temp);
    					return
    				}
    				else {return}
    			})
			})
			map.mylegend({legendTitle: "Travel Style Given Budget"})
			dialog.dialog( "close" );
			// call to rerun analyze
			
			dialog.dialog( "close" );
			analyze();
		}

	dialog = $("#inputDialog").dialog({
		autoOpen: false,
		height: 430,
		width: 600,
		modal: true,
		buttons: {
			"Submit": processUserInput
		},
		close: function() {
			form[0].reset();					
		}
	});

	form = dialog.find( "form" ).on( "submit", function( event ) {
		event.preventDefault();				
		processUserInput();
	});

	$(document).ready(function(){ 
		dialog.dialog( "open" );
	})

} );		