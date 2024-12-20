function tickValues(scale, count) {
    // Calculate the domain of the scale
    const domain = scale.domain();

    // Calculate the step size for the ticks
    const step = (domain[1] - domain[0]) / (count - 1);

    // Generate an array of tick values
    const tickValues = Array.from({ length: count }, (_, i) => domain[0] + i * step);

    return tickValues;
}

// Example usage:
// Assuming you have a linear scale
const scale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
const count = 5;
const ticks = tickValues(scale, count);
console.log(ticks); // Output: [0, 25, 50, 75, 100]
