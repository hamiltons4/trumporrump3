import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

import { underscore } from 'meteor/underscore';
import { moment } from 'meteor/momentjs:moment';
import ReactDOM from 'react-dom';




Uline = React.createClass({
	
	
componentDidMount() {
	var el3 = ReactDOM.findDOMNode(this);
	//var el3 = this.getDOMNode(); //render baby
	var svg3 = d3.select(el3) // this was svg3
				.append("svg")
				.attr("class", "line1")
				.attr("width", this.props.width)
				.attr("height", this.props.height);
	//var data = this.props.data;
	console.log(this.props.linedat);
	var data = this.props.linedat;
	var end = moment().utc().startOf('day');
	var start = moment.utc(end).subtract(12, 'days');
	
	var max = _.max(_.pluck(data, "rumps"));
	var max2 = _.max(_.pluck(data, "trumps"));

	var trueMax = (max >= max2)? max: max2;

	var yScale = d3.scale.linear()
		.domain([0, trueMax])
		.range([(this.props.height-15), 0]);

	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([33,66,99,132,165,198,231,264,297,330,363,396]);	

	var xScale2 = d3.time.scale()
		.nice(d3.time.day)
		.domain([start.toDate(), end.toDate()])
		.range([0, this.props.width-1]);	

	var y_axis = d3.svg.axis()
					.scale(yScale)
					.orient("right")
					.ticks(3);

	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);													

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

	//this.updateChart(this.props);
},
componentWillUpdate(nextProps) {
	this.updateChart(nextProps);
},

getDefaultProps() {
	return {
		width: 400,
		height: 70, //70
		data: [] //added this as a test
	}
},

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

	var xScale = d3.scale.ordinal()
		.domain([1,2,3,4,5,6,7,8,9,10,11,12])
		.range([33,66,99,132,165,198,231,264,297,330,363,396]);	

    var xScale2 = d3.time.scale()
		.nice(d3.time.day)
		.domain([start.toDate(), end.toDate()])
		.range([0, this.props.width-1]);

	var y_axis = d3.svg.axis()
					.scale(yScale)
					.orient("right")
					.ticks(3);	

	var x_axis = d3.svg.axis()
					.scale(xScale2)
					.orient("bottom")
					.ticks(6);					
	
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
