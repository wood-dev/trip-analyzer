//basic map config with custom fills
var map = new Datamap({

	scope: 'world',
	element: document.getElementById('divMap'),			
	height: 600,
			
	fills: {
		defaultFill: '#eeeeee',
		"No Data": '#eeeeee',
		colorRank0: 'rgba(0,128,0,1)',
		colorRank1: 'rgba(32,135,0,0.98)',
		colorRank2: 'rgba(51,141,0,0.96)',
		colorRank3: 'rgba(65,148,0,0.94)',
		colorRank4: 'rgba(79,154,0,0.92)',
		colorRank5: 'rgba(91,161,0,0.90)',
		colorRank6: 'rgba(104,168,0,0.88)',
		colorRank7: 'rgba(116,174,0,0.86)',
		colorRank8: 'rgba(127,181,0,0.84)',
		colorRank9: 'rgba(139,187,0,0.82)',
		colorRank10: 'rgba(151,194,0,80)',
		colorRank11: 'rgba(162,201,0,0.78)',
		colorRank12: 'rgba(174,208,0,0.76)',
		colorRank13: 'rgba(185,214,0,0.74)',
		colorRank14: 'rgba(197,221,0,0.72)',
		colorRank15: 'rgba(208,228,0,0.70)',
		colorRank16: 'rgba(220,235,0,0.68)',
		colorRank17: 'rgba(232,241,0,0.66)',
		colorRank18: 'rgba(243,248,0,0.64)',
		colorRank19: 'rgba(255,255,0,0.62)',
		colorRed: 'red',
		colorGreen: 'green',
		colorYellow: 'yellow',
		colorPink: 'pink',
		colorBrown: 'brown',
		colorBlack: 'black',
		Budget: '#aed6f1',
		Midrange: '#5dade2',
		Luxury: '#1a5276',
		"Not Affordable": 'grey',
	}
	,
	bubblesConfig: {
        borderWidth: 0,
        borderOpacity: 0,
        borderColor: '#FFFFFF',
        popupOnHover: true, // True to show the popup while hovering        
        popupTemplate: function(geography, data) { // This function should just return a string
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        },
        fillOpacity: 0.9,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 0,
        highlightFillOpacity: 0.85,
        exitDelay: 1000, // Milliseconds
        key: JSON.stringify
    }
	

	// data: {
		// USA: {fillKey: 'lt50' },
		// RUS: {fillKey: 'lt50' },
		// CAN: {fillKey: 'lt50' },
		// BRA: {fillKey: 'gt50' },
		// ARG: {fillKey: 'gt50'},
		// COL: {fillKey: 'gt50' },
		// AUS: {fillKey: 'gt50' },
		// ZAF: {fillKey: 'gt50' },
		// MAD: {fillKey: 'gt50' }       
	// }
})
  


  
//sample of the arc plugin
// map.arc([
	// {
	// origin: {
		// latitude: 40.639722,
		// longitude: 73.778889
	// },
	// destination: {
		// latitude: 37.618889,
		// longitude: -122.375
	// }
	// },
	// {
		// origin: {
			// latitude: 30.194444,
			// longitude: -97.67
		// },
		// destination: {
			// latitude: 25.793333,
			// longitude: -0.290556
		// }
	// }
// ], {strokeWidth: 2});		 

		

		
function addBubbles(){		

	map.bubbles(	
		bubbleArray,
		{	

			popupTemplate: function(geo, data) { 
				return "<div class='hoverinfo'>" +data.name  +
				"<br/>" +
"<table><tbody>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Sentimental Reviews </td></tr>"+ 
					"<tr><td align='left' class='tooltitle'>Reddit Review Index</td><td align='right' class='" + data.Senti_Class +"'>" + Number(data.pos_perc).toFixed(2) + "</td></tr>" +
					"<tr><td align='left' class='tooltitle'>Happiness Index::</td><td align='right' class=" + data.happiness_Class +">" + Number(data.happiness_index).toFixed(2) + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Price Factor</td></tr>"+ 
					"<tr><td align='left' class='tooltitle'>Price Index:</td><td align='right' class='" + data.Price_Class +"'>" + data.COL_Index + "</td></tr>" +
					"<tr><td align='center' colspan=2 class='indextitle'>  Safety Factors</td></tr>"+ 
					"<tr><td align='left' class='tooltitle'>Crime Rate:</td><td align='right' class='" + data.Crime_class +"'>" + data.Crime_index + "</td></tr>" +
					"<tr><td align='left' class='tooltitle'>Travel Warning:</td><td align='right' class='" + data.Safety_Class +"'>" + data.rating + "</td></tr>" +
					"<tr><td align='center' colspan=2, class ='" + data.Safety_Class+ "'>" + data.advice + "</td></tr>" +
"</table></tbody>" +

"</div>" ;

			}
		}				
	);

}

// function addLegend2(layer, data, options) {
//   data = data || {};
//   if ( !this.options.fills ) {
//     return;
//   }

//   var html = '<dl>';
//   if ( data.legendTitle ) {
//     html = '<h4>' + data.legendTitle + '</h4>' + html;
//   }
//   for ( var fillKey in this.options.fills ) {

//     if ( fillKey === 'defaultFill') {
//       if ( data.defaultFillName ) {
//         html += '<dt>' + data.defaultFillName + ': </dt>';
//       }
//       else {
//         continue;
//       }
//     }
//     else {
//     	if ((fillKey === 'No Data') || (fillKey === 'Not Affordable')|| (fillKey === 'Budget')|| (fillKey === 'Midrange') || (fillKey === 'Luxury')){
//     		html += '<dt>' + fillKey + ': </dt>';
//     	}
      
//     }
//     if ((fillKey === 'No Data') || (fillKey === 'Not Affordable') || (fillKey === 'Budget') || (fillKey === 'Midrange') || (fillKey === 'Luxury')){
//     	html += '<dd style="background-color:' +  this.options.fills[fillKey] + '">&nbsp;</dd>';
//     }
//   }
//   html += '</dl>';
//   var hoverover = d3.select( this.options.element ).append('div')
//     .attr('class', 'datamaps-legend')
//     .html(html);
// } 





function addLegend2(layer, data, options) {
	data = data || {};
	if ( !this.options.fills ) {
		return;
	}
	var html = '<dl>';
	var label = '';
	if ( data.legendTitle ) {
		html = '<h4>' + data.legendTitle + '</h4>' + html;
	}
	for ( var fillKey in this.options.fills ) {
		if ( fillKey === 'defaultFill') {
			if (! data.defaultFillName ) {
				continue;
			}
			label = data.defaultFillName;
		} else {
			if (data.labels && data.labels[fillKey]) {
				label = data.labels[fillKey];
			} else {
				if ((fillKey === 'No Data') || (fillKey === 'Not Affordable') || (fillKey === 'Budget') || (fillKey === 'Midrange') || (fillKey === 'Luxury')){
					label= '' + fillKey;
					html += '<dd style="background-color:' +  this.options.fills[fillKey] + '">&nbsp;</dd>';
					html += '<dt>' + label + '</dt>'+ '<br>';
				}

			}
		}
	}
	html += '</dl>';
	var hoverover = d3.select( this.options.element ).append('div')
	.attr('class', 'datamaps-legend')
	.html(html);
}

map.addPlugin("mylegend", addLegend2);

// function addLegend3(layer, data, options) {
//   data = data || {};
//   if ( !this.options.fills ) {
//     return;
//   }

//   var html2 = '<dl>';
//   if ( data.legendTitle ) {
//     html2 = '<h2>' + data.legendTitle + '</h2>' + html2;
//   }
//   for ( var fillKey in this.options.fills ) {

//     if ( fillKey === 'defaultFill') {
//       if ( data.defaultFillName ) {
//         html2 += '<dt>' + data.defaultFillName + ': </dt>';
//       }
//       else {
//         continue;
//       }
//     }
//     else {
//     	if (!((fillKey === 'No Data') || (fillKey === 'Not Affordable')|| (fillKey === 'Budget')|| (fillKey === 'Midrange') || (fillKey === 'Luxury'))){
//     		html2 += '<dt>' + fillKey + ': </dt>';
//     	}
      
//     }
//     if (!((fillKey === 'No Data') || (fillKey === 'Not Affordable')|| (fillKey === 'Budget')|| (fillKey === 'Midrange') || (fillKey === 'Luxury'))){
//     	html2 += '<dd style="background-color:' +  this.options.fills[fillKey] + '">&nbsp;</dd>';
//     }
//   }
//   html2 += '</dl>';
//   var hoverover = d3.select( this.options.element ).append('div')
//     .attr('class', 'datamaps-legend2')
//     .html(html2);
// } 

// map.addPlugin("mylegend2", addLegend3);



