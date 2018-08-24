//BACK-END

//Prices object
var prices = {
  sm:8,
  md:11,
  lg:14,
  sauce:0,
  cheese:0,
  herbs:0,
  pepperoni:1,
  bacon:1,
  ham:1,
  mushrooms:.5,
  onion:.5,
  black_olives:.5,
  green_olives:.5,
  tomatoes:.5,
  jalapeno:.5,
}

//Collect toppings user input
function getToppings(input) {
  var theseToppings = []
  input.each(function() {
    var thisTopping = $(this).val();
    theseToppings.push(thisTopping);
  })
  return theseToppings
}

//Pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//Prototype for getting pizza object's price
Pizza.prototype.price = function() {
  var totalPrice = 0;
  totalPrice += prices[this.size];
  this.toppings.forEach(function(topping) {
    totalPrice += prices[topping];
  })
  return totalPrice
}

//Prototype for getting pizza object's tax
Pizza.prototype.tax = function() {
  return this.baseTotal * .1
}

//FRONT-END
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //Clear previous result
    $("#result *").text("");

    //Get values from user input
    var thisSize = $("#size").val();
    var theseToppings = getToppings($("input:checkbox[name=toppings]:checked"));

    //Construct new pizza object
    var thisPizza = new Pizza(thisSize, theseToppings);

    //Get price
    var baseTotal = thisPizza.price();
    thisPizza.baseTotal = baseTotal
    var taxTotal = thisPizza.tax();
    var currentTotal = "$" + parseFloat(baseTotal + taxTotal).toFixed(2);

    //Display result
    $("#result h3").text("Your current total is " + currentTotal);
    $("#result p").text("* $" + baseTotal + " + tax");
    

  });
});
