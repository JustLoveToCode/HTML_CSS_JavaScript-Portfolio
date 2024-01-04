// Creating an Array storing all the different months
// The first month for January will be Index 0
// and hence the month for May will be Index 4
const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// Creating an Array Storing all the different weekdays

const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// This will give you the Node-lists where you can Iterate through
const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4');

// JavaScript, Date Objects are created with the new Date()
// new Date() will return the date object with the current date and time
// This will give you the current time
// For the month, it will start from 0-Janurary and May will therefore be-4
// For the day, it will start from 0-Sunday and Saturday which is 6
// This will give you the Future Date
let futureDate= new Date(2025,4,24,11,30,0);
console.log(futureDate)

// This will give you the Full Year for this Date
const year=futureDate.getFullYear();
// This will give you the Full Hour for this Date
const hour=futureDate.getHours();
// This will give you the Full Minutes for this Date
const minutes=futureDate.getMinutes();

// Month in JavaScript will only give you Number.
// Hence you will need an Arrays to convert the number into string
// The getMonth() method will give you the month for this date
// accordingly to the Local time, as the Zero-Based Value, where
// the Zero will indicate the First month of the Year which is January
// The One will give you the Second month of the Year which is February
let month=futureDate.getMonth(); 
// This will give you 4 for May for the Arrays
// This months is from the JavaScript Arrays
// This is displayed in the form of an Array
month=months[month]


// Getting the Date from 1 to 31
// The getDate() method of the Date Instance will return the day
// of the month for this date according to the Local time.
const date=futureDate.getDate();

// Getting the weekday in string format
// The getDay() method will return the weekday of the date
// as a number from 0 to 6
let weekdayNumber = futureDate.getDay();
const weekday = weekdays[weekdayNumber];



giveaway.textContent=`Giveaways ends on ${weekday}, ${date} ${month} 
${year} ${hour}:${minutes}AM`;


// What is the getTime() Method:
// The getTime() method will return the number of milliseconds since
// 1 January 1970-Future Date
// Future time in ms
const futureTime=futureDate.getTime();


function getRemainingTime(){
// This will give you the number of milliseconds since 1 January 1970 UTC
// till today
const today=new Date().getTime();
const t= futureTime-today;

// values in ms for 1 day
const oneDay=24*60*60*1000;
const oneHour=60*60*1000;
const oneMinute=60*1000;
let days = Math.floor(t / oneDay);
// Using math.floor to take only the days
days = Math.floor(days);
let hours=Math.floor((t%oneDay)/oneHour);
let minutes=Math.floor((t%oneHour)/oneMinute);
let seconds=Math.floor((t%oneMinute)/1000);

// set values arrays:
const values=[days,hours,minutes, seconds]

// Using the forEach method:
items.forEach(function(item,index){
  item.innerHTML=values[index]  
})

}

// Invoke the Function of getRemainingTime()
getRemainingTime();

// Invoke the Function of getRemainingTime()
getRemainingTime();

// Update the Countdown Every Second from Now:
const countdownInterval = setInterval(getRemainingTime, 1000);



