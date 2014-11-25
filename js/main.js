var chart = c3.generate({
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

var chart = c3.generate({
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