// Dates

let tDate = new Date();
// console.log(tDate.toString());   // DATE TIME Timezone (Coordinated Universal Time)
// console.log(tDate.toDateString());  // DATE
// console.log(tDate.toLocaleString()); // MM-DD-YYYY time AM/PM
// console.log(tDate.toLocaleDateString()); // MM-DD-YYYY
// console.log(tDate.toISOString());  //  2026-02-19T09:18:20.126z
// console.log(tDate.toJSON());    // 2026-02-19T09:18:20.836z
// console.log(tDate.toLocaleTimeString()); // TIME
// console.log(tDate.toTimeString()); //  TIME Timezone (Coordinated Universal Time)
// console.log(tDate.toUTCString());  // Day DD MM YYYY Time GMT

let newDate = new Date(2006,8,29,5,8);

// console.log(newDate.toLocaleString());
// console.log(newDate.toUTCString());

let wholeDate = new Date("12-02-2023");
// console.log(wholeDate.toLocaleString());

let timeStamp = Date.now();

// console.log((Math.floor)(timeStamp/1000));
// console.log(wholeDate.getTime());

// console.log(tDate.getDay());
// console.log(tDate.getMonth());

// console.log(tDate.toLocaleString('default',{
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric"
// }));

