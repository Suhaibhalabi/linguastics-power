document.getElementById("title").addEventListener("mouseover", function() {
    this.style.color = "#ff0000";
});

document.getElementById("title").addEventListener("mouseout", function() {
    this.style.color = "#000000";
});

console.log("welcome to the website");

alert("hello");
console.log("hello"  + "color:red");

function plan() {
    alert(" plan");
    console.log("plan"  + "color:red");
}
var plan = document.getElementById("plan");
console.log(plan);
plan.innerHTML = "this is a plan";
plan.style.backgroundColor = "red";

