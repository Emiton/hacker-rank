function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());

}
    //Find tip cost by multiplying base price by tip percent (integer input / 100)
    var tip_cost = mealCost * (tipPercent / 100);

    //Find tax cost by multiplying base price by tax percent (integer input / 100)
    var tax_cost = mealCost * (taxPercent / 100);

    //Add tip and tax to base price, also round to nearest integer value
    var total_cost = Math.round(mealCost + tip_cost + tax_cost);

    console.log('The total meal cost is ' + total_cost + ' dollars.');
