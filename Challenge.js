// Challenge: Determine offspring sex based on genes XX and XY chromosomes (8 kyu)

// Description:

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// Challenge code below:

const chromosomeCheck = (sperm) => `Congratulations! You're going to have a ${sperm == 'XY' ? 'son' : 'daughter'}.`;

// Tests

console.log(chromosomeCheck('XY')); // "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX')); // "Congratulations! You're going to have a daughter."
console.log(chromosomeCheck('XY')); // "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX')); // "Congratulations! You're going to have a daughter."