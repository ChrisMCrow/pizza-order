//BACK-END

//Pizza constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//FRONT-END
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    //Get Values to new pizza object
    var thisSize = $("#size").val()
    var theseToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      var thisTopping = $(this).val();
      theseToppings.push(thisTopping);
    });
    var thisPizza = new Pizza(thisSize, theseToppings);
    console.log(thisPizza);
  });
});
