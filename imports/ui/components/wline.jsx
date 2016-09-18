import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

import { underscore } from 'meteor/underscore';
import { moment } from 'meteor/momentjs:moment';
import ReactDOM from 'react-dom';




Wline = React.createClass({

componentWillMount: function() {
	var _self=this;
	$(window).on('resize', function(e) {
		_self.updateSize();
	});
	/*$(window).on('resize', function(e) {
		this.updateChart(this.props);
	});*/
},	

componentDidMount: function() {
	var el4 = ReactDOM.findDOMNode(this);
	//var el4 = this.getDOMNode(); //render baby
	var svg4 = d3.select(el4)
				.append("svg")
				.attr("class", "line2")
				.attr("width", this.props.width)
				.attr("height", this.props.height);
	//var data = this.props.data;
	var data = this.props.linedat;
	var end = moment().utc().startOf('day');
	var start = moment.utc(end).subtract(12, 'days');

	var dTest = 'Wed Apr 27 23:59:59 +0000 2016'
	    var dateString = new Date(dTest);
	    console.log(moment().dayOfYear() + "Day of year");
	    console.log(dateString);
	    var parseDate = d3.time.format("%a %b %d %Y");
	    //var labelColor = "#071E3E";
	    dTest = parseDate(dateString);
	    dTest = new Date(dTest);
	    console.log(dTest);
	    console.log(dTest + " dTest");
	    console.log(end.toDate());
	    console.log(moment("Wed Apr 27 23:59:59 +0000 2016").startOf('day').toDate());
	//console.log(end);
	//console.log(moment("Wed Apr 27 23:59:59 +0000 2016"));
	//console.log(moment.utc("Wed Apr 27 23:59:59 +0000 2016"));
	//console.log("Today " + moment().toDate());
	//console.log("Today " + moment().utc().startOf('day').toDate());
	//console.log(end.toDate());
	
	//console.log(end);
	//console.log(start.toDate());
	
	//console.log(start);
    //console.log(data);
   
	console.log("wline updateChart");
	//var max = 10;
	//var max2 = 11;
	var max = _.max(_.pluck(data, "rumps"));
	var max2 = _.max(_.pluck(data, "trumps"));
	//underscore.js max and pluck functions
	//console.log(max);
	//console.log(max2);	
	// I would like to have either max or max2 be the single
	// scaling factor for the graph, else the lines could have
	// different scales. (I need to look at others examples
	// here) I can compare max and max2 and pick the greatest
	// as the true max.

	var trueMax = (max >= max2)? max: max2;
	console.log(trueMax);
	var yScale = d3.scale.linear()
		.domain([0, trueMax])
		.range([(this.props.height-15), 0]);
    /*
	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([20,40,60,80,100,120,140,160,180,200,220,240]);
	*/
	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([(this.props.width-1)/12,
				(this.props.width-1)*(2/12),
				(this.props.width-1)*(3/12),
				(this.props.width-1)*(4/12),
				(this.props.width-1)*(5/12),
				(this.props.width-1)*(6/12),
				(this.props.width-1)*(7/12),
				(this.props.width-1)*(8/12),
				(this.props.width-1)*(9/12),
				(this.props.width-1)*(10/12),
				(this.props.width-1)*(11/12),
				(this.props.width-1)]);
	


	var xScale2 = d3.time.scale()
		.nice(d3.time.day)
		.domain([start.toDate(), end.toDate()])
		.range([0, this.props.width-1]);	



    //The twitter search range is set to 7 days, I'll
    // store data for 12. xscale need not be set.
    //var xScale = d3.time.scale().range([0, width])

    var y_axis = d3.svg.axis()
    				.scale(yScale)
    				.orient("right")
    				.ticks(3);
    /*				
	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);   				
	*/

	if(this.props.width < 182) {
		var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(3);
	}else{
		var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);
	}
	
	
	var line_one = d3.svg.line()
		        .x(function(d) {return xScale(d.day);})
		        .y(function(d) {return yScale(d.rumps*1);})
		        .interpolate("linear");
   
	var line_two = d3.svg.line()
            .x(function(d) {return xScale(d.day);})
            .y(function(d) {return yScale(d.trumps*1);})
            .interpolate("linear");	        
    
    /*
    var line_one = d3.svg.line()
		        .x(function(d) {return xScale2(d.day);})
		        .y(function(d) {return yScale(d.rumps*1);})
		        .interpolate("linear");
   
	var line_two = d3.svg.line()
            .x(function(d) {return xScale2(d.day);})
            .y(function(d) {return yScale(d.trumps*1);})
            .interpolate("linear");	     
    */        
	/*
	line_one.transition()
			.duration(1000)
			.attr("x", function(d) {return xScale2(d.day);})
			.attr("y", function(d) {return yScale(d.rumps*1);})
			.interpolate("linear");

	line_two.transition()
			.duration(1000)
			.attr("x", function(d) {return xScale2(d.day);})
			.attr("y", function(d) {return yScale(d.trumps*1);})
			.interpolate("linear");		
	*/
   // var svg4 = d3.select(".line2");
    //svg4.remove();

   
   

    

	svg4.append("g")
		.attr("class", "xaxis")	
		.attr("transform", "translate(0,"+(this.props.height-15)+ ")")
		.call(x_axis);
	
	svg4.append("g")
		.attr("class", "yaxis")
		.call(y_axis);	

	
    svg4.append("path") //was var viz = ...
		        .attr({
		            d: line_one(data),
		            "stroke": "blue",
		            "stroke-width": 2,
		          	"fill": "none",
		          	"class": "ray1"
		        });

	svg4.append("path") //was var viz_two = ..
          .attr({
              d: line_two(data),
              "stroke": "red",
              "stroke-width": 2,
              "fill": "none",
              "class": "ray2"
          });     	              
    
    var _worldLabel = svg4.selectAll("text.lineLabel");

  	if(_worldLabel[0].length > 0) {
  		_worldLabel
  			.attr("x", this.props.width/2)
  			.attr("y", this.props.height - 50);
  	}else{

  	svg4.append("text")
		.attr("x", this.props.width/2)
		.attr("y", this.props.height - 50)
		.classed("lineLabel", true)
		.attr("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("fill", "MidnightBlue")
		.text("WORLD"); 
	}      
   
			

	//this.updateChart(this.props);
	//this.updateSize(); //this is instead in componentWill update in uline
	//this.updateChart(this.props); //this is not here in uline
},

componentWillUpdate: function(nextProps) {
	this.updateSize();
	this.updateChart(nextProps);
	//this.updateSize();

},

componentWilUnmount: function() {
	$(window).off('resize');
},

updateSize: function() {
	var el4 = ReactDOM.findDOMNode(this);
	var parentWidth=$(el4).width();
	if (parentWidth < 250 ) {
		Session.set("wlsize", parentWidth);
	}else {
		Session.set("wlsize", 250);
	}
},

getDefaultProps: function() {
	return {
		width: 250,
		height: 70,
		data: []
	}
},

updateChart: function(props) {
	//svg.remove();
	//var data = props.data;
	var data = props.linedat;
	var end = moment().utc().startOf('day');
	var start = moment.utc(end).subtract(12, 'days');
	//var labelColor = "#071E3E";
	
    //console.log(data);
   
	//console.log("uline updateChart");

	var max = _.max(_.pluck(data, "rumps"));
	var max2 = _.max(_.pluck(data, "trumps"));
	//underscore.js max and pluck functions
	//console.log(max);
	//console.log(max2);	
	// I would like to have either max or max2 be the single
	// scaling factor for the graph, else the lines could have
	// different scales. (I need to look at others examples
	// here) I can compare max and max2 and pick the greatest
	// as the true max.

	var trueMax = (max > max2)? max: max2;
	console.log(trueMax);
	var yScale = d3.scale.linear()
		.domain([0, trueMax])
		.range([(this.props.height-15), 0]);
    
	/*var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([20,40,60,80,100,120,140,160,180,200,220,240]);
	*/	
    
    var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([(this.props.width-1)/12,
				(this.props.width-1)*(2/12),
				(this.props.width-1)*(3/12),
				(this.props.width-1)*(4/12),
				(this.props.width-1)*(5/12),
				(this.props.width-1)*(6/12),
				(this.props.width-1)*(7/12),
				(this.props.width-1)*(8/12),
				(this.props.width-1)*(9/12),
				(this.props.width-1)*(10/12),
				(this.props.width-1)*(11/12),
				(this.props.width-1)]);
    
	var xScale2 = d3.time.scale()
		.nice(d3.time.day)
		.domain([start.toDate(), end.toDate()])
		.range([0, this.props.width-1]);	

    //The twitter search range is set to 7 days, I'll
    // store data for 12. xscale need not be set.
    //var xScale = d3.time.scale().range([0, width])

    var y_axis = d3.svg.axis()
    				.scale(yScale)
    				.orient("right")
    				.ticks(3);
    /*				
	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);   				
	*/
	if(this.props.width < 182) {
		var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(3);
	}else{
		var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);
	}
	
	
	var line_one = d3.svg.line()
		        .x(function(d) {return xScale(d.day);}) //this was just xScale
		        .y(function(d) {return yScale(d.rumps*1);})
		        .interpolate("linear");
   
	var line_two = d3.svg.line()
            .x(function(d) {return xScale(d.day);}) //this was just xScale changed because xScale has no width variable
            .y(function(d) {return yScale(d.trumps*1);})
            .interpolate("linear");	        
    
    /*
    console.log(xScale2(this.props.data.day));
    var line_one = d3.svg.line()
		        .x(function(d) {return xScale2(d.day);})
		        .y(function(d) {return yScale(d.rumps*1);})
		        .interpolate("linear");
   
	var line_two = d3.svg.line()
            .x(function(d) {return xScale2(d.day);})
            .y(function(d) {return yScale(d.trumps*1);})
            .interpolate("linear");	     
    */        
	/*
	line_one.transition()
			.duration(1000)
			.attr("x", function(d) {return xScale(d.day);})
			.attr("y", function(d) {return yScale(d.rumps*1);})
			.interpolate("linear");

	line_two.transition()
			.duration(1000)
			.attr("x", function(d) {return xScale(d.day);})
			.attr("y", function(d) {return yScale(d.trumps*1);})
			.interpolate("linear");		
	*/
    var svg4 = d3.select(".line2");
    //svg4.remove();

     svg4.transition()
    	.select(".ray1")
    	.duration(1000)
    	.attr("d", line_one(data));
    svg4.transition()
    	.select(".ray2")
    	.duration(1000)
    	.attr("d", line_two(data));
    svg4.transition()
    	.select(".xaxis")
    	.duration(1000)
    	.call(x_axis);		
	svg4.transition()
		.select(".yaxis")
		.duration(1000)
		.call(y_axis);

    
  /*
	svg4.append("g")
		.attr("class", "xaxis")	
		.attr("transform", "translate(0,"+(props.height-15)+ ")")
		.call(x_axis);
	
	svg4.append("g")
		.attr("class", "yaxis")
		.call(y_axis);	

    svg4.append("path") //was var viz = ...
		        .attr({
		            d: line_one(data),
		            "stroke": "blue",
		            "stroke-width": 2,
		          	"fill": "none",
		          	"class": "ray1"
		        });

	svg4.append("path") //was var viz_two = ..
          .attr({
              d: line_two(data),
              "stroke": "red",
              "stroke-width": 2,
              "fill": "none",
              "class": "ray2"
          });     	              
          
  */

  	var _worldLabel = svg4.selectAll("text.lineLabel");

  	if(_worldLabel[0].length > 0) {
  		_worldLabel
  			.attr("x", this.props.width/2)
  			.attr("y", this.props.height - 50);
  	}else{

  	svg4.append("text")
		.attr("x", this.props.width/2)
		.attr("y", this.props.height - 50)
		.classed("lineLabel", true)
		.attr("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("fill", "MidnightBlue")
		.text("WORLD"); 
	}
},	
/*
updateChart2: function(props) {

},
*/

	render() {
		return (
			<div>
		
			</div>
		)
	}
})	

module.exports = Wline;

