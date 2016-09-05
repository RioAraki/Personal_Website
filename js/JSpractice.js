// to show time
var date = new Date();
var getDate = date.getDate();
var getDay = date.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
getDay = dayList[getDay];
var getMonth = date.getMonth();
var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

getMonth = monthList[getMonth];
var getYear = date.getFullYear();
var suf;
if (getDate == 1) {
  suf = 'st';
} else if (getDate == 2) {
  suf = 'nd';
} else if (getDate == 3) {
  suf = 'rd';
} else {
  suf = 'th';
}

var getHours = date.getHours();
var getMinutes = date.getMinutes();
var getSeconds = date.getSeconds();
var noon;
if (getHours <= 11) {
  noon = 'AM';
} else if (getHours == 12 && getMinutes == 0 && getSeconds == 0) {
  noon = 'noon';
} else {
  noon = 'PM';
}
window.onload = function() {
  document.getElementById('practice1').innerHTML = "Date: " + getDay + ', ' +
   getMonth + ' ' + getDate + suf + '.<br>' + "Time: " + getHours + ': ' +
   getMinutes + ': ' + getSeconds + ' ' + noon + '.';
}

function print_current_page() {
  window.print();
}

function cal_area() {
  var side1 = document.getElementById('side1');
  var side2 = document.getElementById('side2');
  var side3 = document.getElementById('side3');

  if (side1.value == "" || side2.value == "" || side3.value == "") {
    alert('One or more fields are empty');
  }

  var p = (Number(side1.value) + Number(side2.value) + Number(side3.value)) / 2;
  var result = Math.sqrt(p * (p - Number(side1.value)) *
  (p - Number(side2.value)) * (p - Number(side3.value)));

  if (result > 0) {
    result = 'The result is: ' + result;

  } else {
    result = "There must be something wrong with your input, remember the sum \
    of any two sides of a triangle must be larger than the other side.";
  }

  document.getElementById('practice4').innerHTML = result;
}

function reverse_string() {

  var element = document.getElementById('practice5');
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
   text = text[text.length - 1] + text.substring(0, text.length - 1);
   textNode.data = text;
  }, 100);
}

function cal_year() {
  var input = document.getElementById('year');
  if (input.value == 0) {
    alert('field is empty');
  } else {
    if (input.value % 4 == 0 && input.value % 100 != 0) {
      document.getElementById('practice6').innerHTML = 'This year is a leap year.';
    } else if (input.value % 400 == 0) {
      document.getElementById('practice6').innerHTML = 'This year is a leap year.';
    } else {
      document.getElementById('practice6').innerHTML = 'This year is not a leap year.';
    }
  }
}

function find_sunday() {
  for (var year = 2014; year <= 2050; year++){
    var first_day = new Date (year, 0, 1); // month starts from 0
    var result = document.createElement('p');
    if (first_day.getDay() == 0){
      var text = document.createTextNode('Jan 1st of '+ year + ' is Sunday.');
    } else {
      var text = document.createTextNode('Jan 1st of '+ year + ' is NOT Sunday.');
    }
    result.appendChild(text);
    document.getElementById('practice7').appendChild(result);
  }
}

var monthDayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xms_left() {
  var dayLeft = 0;
  var curMonth = date.getMonth() + 1;
  var curDate = getDate;
  var year = getYear;
  if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) { // deal with leap year
    monthDayList[1] = 29;
  } else {
    monthDayList[1] = 28;
  }

  if ((curMonth < 12) || (curMonth == 12 && curDate <= 25)) {
    while (curMonth < 12) {
      dayLeft += monthDayList[curMonth-1];
      curMonth += 1;
    }
    dayLeft += (25 - curDate);
  } else {
    if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
      dayLeft = 366 - (curDate - 25);
    } else {
      dayLeft = 365 - (curDate - 25);
    }
  }
  document.getElementById('practice9').innerHTML = dayLeft + ' days later would be Christmas.';
}

function find_url() {
  document.getElementById('practice12').innerHTML = document.URL;
}

function reverse_number() {
  var number = document.getElementById('r_number');
  number = number.value;
  var reverse = number.split("").reverse().join("");
  document.getElementById('f_practice1').innerHTML = reverse;
}

function check_palindrome() {
  var decide = true;
  var string = document.getElementById('palindrome');
  string = string.value;
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  var ccount = 0;
  if (string == "") {
    alert("Field is empty!");
  } else if (string.length % 2 == 0) {
    ccount = (string.length) / 2;
  } else {
    ccount = (string.length - 1) / 2;
  }

  for (var x = 0; x < ccount; x++) {
    if (string[x] != string.slice(-1-x)[0]) {
      decide = false;
    }
  }
  if (decide == true) {
    document.getElementById('f_practice2').innerHTML = string + ' is a palindrome.'
  } else {
    document.getElementById('f_practice2').innerHTML = string + ' is not a palindrome.'
  }
}

function string_combination() {
  var string = document.getElementById('combination');
  string = string.value;
  var result = '';
  for (var x = 0; x < string.length+1; x++) {
    for (var y = x+1; y < string.length+1; y++){
      result += string.slice(x, y);
      result += ' ';
    }
  }
  document.getElementById('f_practice3').innerHTML = result;
}

function string_sorted() {
  var string = document.getElementById('sort_string');
  string = string.value;
  string = string.split('').sort().join();
  document.getElementById('f_practice4').innerHTML = string;
}

function convert_upper_case() {
  var string = document.getElementById('upper_first');
  string = string.value;
  string = string.split(' ');
  var array = [];

  for (var x = 0; x < string.length; x++) {
    array.push(string[x].charAt(0).toUpperCase() + string[x].slice(1));
  }
  var result = array.join(' ');
  document.getElementById('f_practice5').innerHTML = result;
}

function cal_factorial() {
  var value = document.getElementById('factorial');
  value = value.value;
  var result = factorial(value);
  document.getElementById('r_practice1').innerHTML = result;
}

function factorial(number) {
  if (number == 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function gcb(a, b) {
  if (!b) {
    return a;
  }
  return gcb(b, a % b);
}

function cal_gcb() {
  var value1 = document.getElementById('gcb1');
  var value2 = document.getElementById('gcb2');
  value1 = value1.value;
  value2 = value2.value;
  var result = gcb(value1, value2);

  document.getElementById('r_practice2').innerHTML = result;
}

var first = 0;
var second = 1;
var array = [];
var third = 0;
function count_fib() {
  var counter = document.getElementById('counter');
  counter = counter.value;
  if (counter >= 1) {
    array.push(first);
  }
  if (counter >= 2) {
    array.push(second);
  }
  console.log(array);
  fib(counter-2);
}

function fib(count) {
  console.log(array, count);
  if (count > 0) {
    third = first + second;
    first = second;
    second = third;
    array.push(third);
    fib(count-1);
  } else {
    document.getElementById('r_practice3').innerHTML = array;
  }
}

function clear_fib() {
  first = 0;
  second = 1;
  array = [];
  third = 0;
  document.getElementById('r_practice3').innerHTML = "";
}
