// Challenge: Clock In Mirror (6 kyu)

// Description:

// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22, he knows that the time is 11:38

// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

// My code below:

let WhatIsTheTime = (t) => {
  let [h, m] = t.split(":"); // Destructure t into hours and minutes
  h = (+m ? 11 : 12) - (h % 12) || 12; // if the minutes are truthy (something greater than 0) we need to reduce 12 to 11 in order to correctly take the minutes into account when mirroring. Otherwise the result will be off by 1 hour.
  m = (60 - m) % 60; // This mirrors the minutes correctly. An amount % a larger amount gives us the same amount
  return [h, m].map((e) => (e > 9 ? e : "0" + e)).join(":"); // add a zero to the front of any single digit integer
};

// Tests
console.log(WhatIsTheTime("06:35")); // "05:25"
console.log(WhatIsTheTime("11:59")); // "12:01"
console.log(WhatIsTheTime("12:02")); // "11:58"
console.log(WhatIsTheTime("04:00")); // "08:00"
console.log(WhatIsTheTime("06:00")); // "06:00"
console.log(WhatIsTheTime("12:00")); // "12:00"
