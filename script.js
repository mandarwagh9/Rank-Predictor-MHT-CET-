function calculateRank() {
    const percentileInput = document.getElementById('percentile').value;
    const total = 310000;
    const percentile = parseFloat(percentileInput);

    if (isNaN(percentile) || percentile < 0 || percentile > 100) {
        document.getElementById('result').innerText = "Please enter a valid percentile between 0 and 100.";
        return;
    }

    let rank;
    if (percentile === 100) {
        rank = 1;
    } else {
        const outoff = percentile / 100 * (total + 1);
        rank = total - outoff;
    }

    document.getElementById('result').innerText = `Your predicted rank is ${Math.round(rank)}`;
}
