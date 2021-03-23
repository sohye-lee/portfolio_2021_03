const canvas = document.querySelector('#canvas__skills');
const file = '../../data.json';


let width  = window.innerWidth * 0.9 < 800  ? window.innerWidth * 0.9 : 900;
let height  = window.innerWidth * 0.9 < 800  ? width * 0.8 : 700;
let colors = [];


// GET DATA & DRAWING CHART ON SCREEN
const startChart = async () => {
    data = await d3.json(file).then(data => data);
    for (let i = 0; i <data.length; i++) {
        colors.push(generateColor(data[i].score));
    }
    generateChart(data);
};

startChart();

// FUNCTION GENERATING CHART
const generateChart = data => { 
    const bubble = data => d3.pack() 
        .size([width, height])
        .padding(2)(d3.hierarchy({ children: data }).sum(d => d.score));

    const root = bubble(data);

    const svg = d3.select('#canvas__skills')
        .style('width', width)
        .style('height', height);

    const tooltip = d3.select('.tooltip');

    const node = svg.selectAll()
        .data(root.children)
        .enter().append('g')
        .attr('transform', d => `translate(${d.x}, ${d.y})`);
    
    const circle = node.append('circle')
        .attr('r', d => d.r)
        .style('fill', d => colors[d.data.id])
        .on('mouseover', function(e, d) {
            tooltip.select('.tooltip__skill').text(`${d.data.name}`);
            tooltip.select('.tooltip__graph').style('background-color', 'gray');
            tooltip.select('.tooltip__graph')
                .select('.graph__inner')
                .style('width', `${d.data.score*2}px`)
                .style('background-color', colorMode==='white' ? 'black' : 'white')
            d3.select(this)
                .style('stroke', colorMode==='white' ? 'var(--DarkGray)' : 'white')
                .attr('stroke-width','3px');
                

            // label.select(this).attr('fill', colorMode);
        })
        .on('mouseout', function(e, d) {
            d3.select(this).style('stroke', 'none');
            tooltip.select('.tooltip__skill').text('');
            tooltip.select('.tooltip__graph').style('background-color','transparent');
            tooltip.select('.tooltip__graph')
                .select('.graph__inner')
                .style('background-color', 'transparent');
        })

    const label = node.append('text')
        .attr('fill', 'white')
        .attr("text-anchor", "middle")
        .attr('dy', 2)
        .text(d => d.data.name);
};



// GENERATE RANDOM COLORS OF NUM OF DATA LENGTH
function generateColor (value) {
    const r = Math.round( Math.random() * 150 + 50 );
    const g = Math.round( Math.random() * 150 + 50 );
    const b = Math.round( Math.random() * 150 + 50 );
    const opacity = value / 70 + 0.3;
    return `rgba(${r},${g},${b},${opacity})`;
}


// RESIZE HANDLER
window.addEventListener('resize', () => {
    width  = window.innerWidth * 0.9 < 800  ? window.innerWidth * 0.9 : 900;
    height  = window.innerWidth * 0.9 < 800  ? width * 0.8 : 700;
    d3.select('#canvas__skills')
        .selectAll('*').remove();
    startChart();
});

