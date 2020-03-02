function bankDetails(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
}

var initialDeposit = parseInt($("input#initial-deposit").val());

function reconfig() {
    $("input#name").val("");
    initialDeposit.val("");
}



$(document).ready(function() {
    $("form.submit").submit(function(event) {
        event.preventDefault();
        var nameOf = $("input#name").val();
        
        console.log(nameOf);
        console.log(initialDeposit);

       $(".show").val(initialDeposit);
    })
})
