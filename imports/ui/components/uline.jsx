import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

import { underscore } from 'meteor/underscore';
import { moment } from 'meteor/momentjs:moment';
import ReactDOM from 'react-dom';




Uline = React.createClass({

componentWillMount: function() {
	var _self=this;
	$(window).on('resize', function(e) {
		_self.updateSize();
	});
},	
	
componentDidMount() {
	var el3 = ReactDOM.findDOMNode(this);
	//var el3 = this.getDOMNode(); //render baby
	var svg3 = d3.select(el3) // this was svg3
				.append("svg")
				.attr("class", "line1")
				.attr("width", this.props.width)
				.attr("height", this.props.height);
	//var data = this.props.data;
	//console.log(this.props.linedat);
	var data = this.props.linedat;
	var end = moment().utc().startOf('day');
	var start = moment.utc(end).subtract(12, 'days');
	
	var max = _.max(_.pluck(data, "rumps"));
	var max2 = _.max(_.pluck(data, "trumps"));

	var trueMax = (max >= max2)? max: max2;

	var yScale = d3.scale.linear()
		.domain([0, trueMax])
		.range([(this.props.height-15), 0]);
	/*
	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([33,66,99,132,165,198,231,264,297,330,363,396]);	
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

	var y_axis = d3.svg.axis()
					.scale(yScale)
					.orient("right")
					.ticks(3)
					.tickFormat(d3.format("s"));
	/*
	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);													
	*/

	if(this.props.width < 294) {
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
     
    svg3.append("g")
    	.attr("class", "xaxis")
    	.attr("transform", "translate(0,"+(this.props.height-15)+ ")")
    	.call(x_axis);

    svg3.append("g")
    	.attr("class", "yaxis")
    	.call(y_axis);

    svg3.append("path")
		        .attr({
		            d: line_one(data),
		            "stroke": "blue",
		            "stroke-width": 2,
		          	"fill": "none",
		          	"class": "ray3"
		        });

	svg3.append("path")
          .attr({
              d: line_two(data),
              "stroke": "red",
              "stroke-width": 2,
              "fill": "none",
              "class": "ray4"             
          }); 

    var tooltip = d3.select('.line1')
					.append('div')
					.attr('class', 'utooltip')
					.style('position', 'absolute')
					.style('z-index', '10')
					.style('visibility', 'visible')
					.append('text')
					.text("Hello!");      
					/*
    d3.select('.ray3')
    	.on("mouseover", function(){return tooltip.style("visibility", "visible");})
    	.on("mouseout", function() {return tooltip.style("visibility", "hidden");});      

	*/
	//this.updateChart(this.props);
	var _usLabel = svg3.selectAll("text.lineLabel");

	if(_usLabel[0].length > 0) {
		_usLabel
			.attr("x", this.props.width/2)
			.attr("y", this.props.height - 50);
	}else{

	svg3.append("text")
		.attr("x", this.props.width/2)
		.attr("y", this.props.height - 50)
		.classed("lineLabel", true)
		.attr("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("fill", "MidnightBlue")
		.text("USA");
	}
	/*
	var tooltip = d3.select('.line1')
					.append('div')
					.attr('class', 'utooltip')
					.style('position', 'absolute')
					.style('z-index', '10')
					.style('visibility', 'hidden')
					.text("Hello!");
	*/
	

},

componentWillUpdate(nextProps) {
	this.updateSize();
	//this.renderLabels();
	this.updateChart(nextProps);
},

componentWillUnmount: function() {
	$(window).off('resize');
},

updateSize: function() {
	var el3 = ReactDOM.findDOMNode(this);
	var parentWidth=$(el3).width();
	if (parentWidth < 400) {
		Session.set("ulsize", parentWidth);
	}else{
		Session.set("ulsize", 400);
	}	
},


getDefaultProps() {
	return {
		width: 400,
		height: 70, //70
		data: [] //added this as a test
	}
},
/*
renderLabels: function() {
		var _usLabel = svg3.selectAll("text.lineLabel");

		if(_usLabel[0].length > 0) {
			_usLabel
				.attr("x", this.props.width/2)
				.attr("y", this.props.height - 50);
		}else{

		svg3.append("text")
			.attr("x", this.props.width/2)
			.attr("y", this.props.height - 50)
			.classed("lineLabel", true)
			.attr("text-anchor", "middle")
			.style("font-weight", "bold")
			.style("fill", "blue")
			.text("USA");
		}
	},
*/
updateChart(props) {
	//var data = props.data;
	var data = props.linedat;
	var end = moment().utc().startOf('day');
	var start = moment.utc(end).subtract(12, 'days');
	
    //console.log(data);
   
	//console.log("uline updateChart");

	var max = _.max(_.pluck(data, "rumps"));
	var max2 = _.max(_.pluck(data, "trumps"));

	var trueMax = (max >= max2)? max: max2;
	//console.log(trueMax);

	var yScale = d3.scale.linear()
		.domain([0, trueMax])
		.range([(props.height-15), 0]);
	/*	
	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([33,66,99,132,165,198,231,264,297,330,363,396]);	
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

	var y_axis = d3.svg.axis()
					.scale(yScale)
					.orient("right")
					.ticks(3)
					.tickFormat(d3.format("s"));	
	/*
	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);					
	*/

	if(this.props.width < 294) {
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
   
    var svg3 = d3.select(".line1");

     svg3.transition()
    	.select(".ray3")
    	.duration(1000)
    	.attr("d", line_one(data));
    svg3.transition()
    	.select(".ray4")
    	.duration(1000)
    	.attr("d", line_two(data));
    svg3.transition()
    	.select(".xaxis")
    	.duration(1000)
    	.call(x_axis);		
	svg3.transition()
		.select(".yaxis")
		.duration(1000)
		.call(y_axis);
	/*	
	var lineLabel = [
		{
			x:
			y: 
		}
	]	

	var usLabel = svg3.selectAll(".usLabel").data(lineLabel);
	usLabel.enter()
			.append("text")
			.attr("class", "lineLabel")
			.style("font-weight", "bold")
			.style("fill", "blue")
			.attr("text-anchor", "middle")

	*/
	
	//function renderLabels() {
	var _usLabel = svg3.selectAll("text.lineLabel");

	if(_usLabel[0].length > 0) {
		_usLabel
			.attr("x", this.props.width/2)
			.attr("y", this.props.height - 50);
	}else{

	svg3.append("text")
		.attr("x", this.props.width/2)
		.attr("y", this.props.height - 50)
		.classed("lineLabel", true)
		.attr("text-anchor", "middle")
		.style("font-weight", "bold")
		.style("fill", "MidnightBlue")
		.text("USA");
	}
	//}

	var tooltip = d3.select('.line1')
					.append('div')
					.attr('class', 'utooltip')
					.style('position', 'absolute')
					.style('z-index', '10')
					.style('visibility', 'visible')
					.append('text')
					.text("Hello!");      

   //renderLabels();
},


	render() {
		//if (this.props.linedat == []) { return <div>Loading...</div>; }
		return (
			<div>
		
			</div>
		)
	}

})
module.exports = Uline;
