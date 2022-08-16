function countPositivesSumNegatives(input) {
    // your code here
    let positiveN = 0;
    let negativeN = 0;
    if (input.length === 0 || input == NaN) {
        return [""];
    } else {
        input.forEach((numX) => numX > 0 ? positiveN++ : negativeN += numX)
    }
    return [positiveN, negativeN];
}