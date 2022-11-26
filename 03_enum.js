var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
var daysInWeek;
(function (daysInWeek) {
    daysInWeek[daysInWeek["Monday"] = 1] = "Monday";
    daysInWeek[daysInWeek["Tuesday"] = 2] = "Tuesday";
    daysInWeek[daysInWeek["Thursday"] = 3] = "Thursday";
    daysInWeek[daysInWeek["Wednesday"] = 4] = "Wednesday";
    daysInWeek[daysInWeek["Friday"] = 5] = "Friday";
    daysInWeek[daysInWeek["Saturday"] = 6] = "Saturday";
    daysInWeek[daysInWeek["Sunday"] = 7] = "Sunday";
})(daysInWeek || (daysInWeek = {}));
console.warn("++++++++++++++++ Days in Week ++++++++++++++++");
console.log(daysInWeek[1]);
console.log(daysInWeek[2]);
console.log(daysInWeek[3]);
console.log(daysInWeek[4]);
console.log(daysInWeek[5]);
console.log(daysInWeek[6]);
console.log(daysInWeek[7]);
console.log(daysInWeek.Monday);
