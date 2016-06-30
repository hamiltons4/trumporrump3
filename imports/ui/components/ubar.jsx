import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

import { underscore } from 'meteor/underscore';
import { moment } from 'meteor/momentjs:moment';
import ReactDOM from 'react-dom';




Ubar = React.createClass({

	componentDidMount: function() {
		var el = ReactDOM.findDOMNode(this);
		//var el = this.getDOMNode(); //render this
		var svg1 = d3.select(el)
					.append("svg")
					.attr("class", "bar1")
					.attr("width", this.props.width)
					.attr("height", this.props.height);
		this.updateChart(this.props);	
	},

	componentWillUpdate: function(nextProps) {
		this.updateChart(nextProps);
	},
   
    getDefaultProps: function() {
    	return {
    		width:  250,
    		height: 70,
    		data: [] // added with createContainer for initial..
    	}
    },

    updateChart: function(props) {
    	var data = props.bardat;
    	//var data = props.data;

    	var max = _.max(_.pluck(data, "qty"));
    	var yScale = d3.scale.linear()
    		.domain([0, max])
    		.range([0, props.height - 15]);

		var xScale = d3.scale.ordinal()
			.domain(d3.range(data.length))
			.rangeRoundBands([0, props.width], 0.05);

		var svg1 = d3.select(".bar1");




		var bars = svg1.selectAll("rect").data(data);
		bars.enter()
			.append("rect")
			.attr("x", function(d, i) { return xScale(i);})
			.attr("width", xScale.rangeBand())
			.attr("y", function(d) { return props.height - yScale(d.qty);})
			.attr("height", function(d) { return yScale(d.qty);})
			.style("fill", function(d, i) {
				var cdata = "";
				console.log(i + "style section");
				if (i == 0) {console.log("i is zero");
				      	cdata = "crimson"; // "steelblue"
				  	}
				if (i == 1) {console.log("i is one");
						cdata = "steelblue"; // "crimson"
					}
				return cdata});

		bars.transition()
			.duration(1000)
			.attr('x', function(d, i) {
				return xScale(i);
			})	
			.attr('y', function(d, i) {
				return props.height - yScale(d.qty) - 20; // this was also minus twenty in the example
			})
			.attr('width', xScale.rangeBand())
			.attr('height', function(d, i) {
				return yScale(d.qty)
			});





		var qtyLabel = svg1.selectAll(".qtyLabel").data(data);
		qtyLabel.enter()
				.append("text")
				.attr("class", "qtyLabel")
				.style("font-weight", "bold")
				.style('fill', 'white')
				.attr("text-anchor", "middle")

		qtyLabel.transition()
				.duration(1000)
				.attr("x", function(d, i) {
					return xScale(i) + xScale.rangeBand()/2;
				})		
				.attr("y", function(d, i) {
					return props.height - yScale(d.qty) - 2;
				})
				.text(function(d, i) {
					return d.qty;
				});

		var xLabel = svg1.selectAll(".xLabel").data(data);
		xLabel.enter()
			  .append('text')
			  .attr('class', 'xLabel')
			  .style('fill', 'gray')

		xLabel.text(function(d, i) {
			 		return d.xLabel;
			 	})
			 	.attr('text-anchor', 'middle')
			 	.attr('x', function(d, i) {
			 		return xScale(i) + xScale.rangeBand()/2
			 	})
			 	.attr('y', function(d, i) {
			 		return props.height - 5;
			 	});	  			
    },

	render() {
		return (
			<div>
			
			</div>  
		)
	}
})

module.exports = Ubar;
