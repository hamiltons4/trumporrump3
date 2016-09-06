import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

import { underscore } from 'meteor/underscore';
import { moment } from 'meteor/momentjs:moment';
import ReactDOM from 'react-dom';




Wbar = React.createClass ({
	componentWillMount: function() {
		var _self=this;
		$(window).on('resize', function(e) {
			_self.updateSize();
		});
	},

	componentDidMount: function() {
		var el2 = ReactDOM.findDOMNode(this);
		//var el2 = this.getDOMNode(); //render this
		var svg2 = d3.select(el2)
					.append("svg")
					.attr("class", "bar2")
					.attr("width", this.props.width)
					.attr("height", this.props.height);
		this.updateSize();
		this.updateChart(this.props);	
	},

	componentWillUpdate: function(nextProps) {
		this.updateChart(nextProps);
	},

	componentWillUnmount: function() {
		$(window).off('resize');
	},
   
    getDefaultProps: function() {
    	return {
    		width:  153,
    		height: 70,
    		data: []
    	}
    },

    updateSize: function() {
    	var el2 = ReactDOM.findDOMNode(this);
    	var parentWidth=$(el2).width();
    	if (parentWidth<153) {
    		Session.set("wbsize", parentWidth);
    	}else{
    		Session.set("wbsize", 153);
    	}	
    },

    updateChart: function(props) {
    	var data = props.wbardat;
    	//var data = props.data;

    	var max = _.max(_.pluck(data, "qty"));
    	var yScale = d3.scale.linear()
    		.domain([0, max])
    		.range([0, props.height - 15]);

		var xScale = d3.scale.ordinal()
			.domain(d3.range(data.length))
			.rangeRoundBands([0, props.width], 0.05);

		var svg2 = d3.select(".bar2");




		var bars2 = svg2.selectAll("rect").data(data);
		bars2.enter()
			.append("rect")
			.attr("x", function(d, i) { return xScale(i);})
			.attr("width", xScale.rangeBand())
			.attr("y", function(d) { return props.height - yScale(d.qty);})
			.attr("height", function(d) { return yScale(d.qty);})
			.style("fill", function(d, i) {
				var cdata = "";
				console.log(i + " wstyle section");
				if (i == 0) {console.log("i is zero");
				      	cdata = "crimson";
				  	}
				if (i == 1) {console.log("i is one");
						cdata = "steelblue";
					}
				return cdata});

		bars2.transition()
			 .duration(1000)
			 .attr('x', function(d, i) {
			 	return xScale(i);
			 })
			 .attr('y', function(d, i) {
			 	return props.height - yScale(d.qty) - 20;
			 })	
			 .attr('width', xScale.rangeBand())
			 .attr('height', function(d, i) {
			 	return yScale(d.qty)
			 });

		var qtyLabel = svg2.selectAll(".qtyLabel").data(data);
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
				})
		var xLabel = svg2.selectAll(".xLabel").data(data);
		xLabel.enter()
			  .append('text')
			  .attr('class', 'xLabel')
			  .style('fill', 'gray')
			  .style('font-size', '10px')

		xLabel.text(function(d, i) {
					return d.xLabel;
		      })
			  .attr('text-anchor', 'middle')
		      .attr('x', function(d, i) {
		      		return xScale(i) + xScale.rangeBand()/2
		      })		  		
			  .attr('y', function(d,i) {
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

module.exports = Wbar;