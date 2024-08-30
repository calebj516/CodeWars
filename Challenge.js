// Challenge: My Language Skills (7 kyu)

// Description:

// Task

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// Challenge code below:

function myLanguages(results) {
    return Object.keys(results).filter(l => results[l] >= 60).sort((a, b) => results[b] - results[a]);
}

// Tests

console.log(stringClean("")); // ""
console.log(stringClean("! !")); // "! !"
console.log(stringClean("123456789")); // ""
console.log(stringClean("(E3at m2e2!!)")); // "(Eat me!!)"
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!")); // "Dsa cdsc csa!!! I Am cool!"
console.log(stringClean("A1 A1! AAA   3J4K5L@!!!")); // "A A! AAA   JKL@!!!"
console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@")); // "Adgre Asad! AAA fvfdvJKL@"
console.log(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 ")); // "Addsadds A  $$sad! AAAe fKL@ "
console.log(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ")); // "Addsadds A  $$sa!d! A!A!Ae$ f## "
console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?")); // "My \"messy\" data issues! Will they ever, ever be solved?"
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")); // "Why can't we buy the good software? #cheapskates"