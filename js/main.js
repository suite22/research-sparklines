var chart1 = c3.generate({
    bindto: '#chartMandatory',
    size: { 
    	width: 50, 
    	height: 50 },
    data: {
      columns: [
        ['AL', 16441707],
        ['OR', 19408790]
      ],
      type: 'bar'
    },
    bar: {
        width: {
            ratio: 1 // this makes bar width 50% of length between ticks
        }
    },
    axis: { 
    	x: { show: false }, 
    	y: { show: false } },
    legend: {
        show: false
    }
});

var chart2 = c3.generate({
    bindto: '#chartFedMatch',
    size: { width: 50, height: 50 },
    data: {
      columns: [
        ['AL', 25719481],
        ['OR', 19702652]
      ],
      type: 'bar'
    },
        bar: {
        width: {
            ratio: .98 // this makes bar width 50% of length between ticks
        }
    },
    axis: { x: { show: false }, y: { show: false } },
    legend: {
        show: false
    }
});

var chart3 = c3.generate({
	bindto: '#gaugeFMAPRate',
	size: { width: 75, height: 75 },
    data: {
      columns: [
        ['AL', 68.12],
        ['OR', 63.14]
      ],
        type: 'gauge',
    }
});

var chart4 = c3.generate({
    bindto: '#chartFedMatchCSV',
    size: { width: 500, height: 500 },
    data: {
      url: 'data/CCDF/FY14_refined.json',
      type: 'bar'
    },
        bar: {
        width: {
            ratio: .98 // this makes bar width 50% of length between ticks
        }
    },
    //axis: { x: { show: false }, y: { show: false } },
    // legend: {
    //     show: false
    // }
});