// function Book(title, author, publishingDay) {
//     if(!(this instanceof Book)) {
//         return new Book(title, author, publishingDay);
//     }
//     Book.title = title;
//     this.author = author;
//     this.publishingDay = publishingDay;
// }

// // THIS KEYWORD

// const progmaticProgrammer = Book("Progmatic Programmer", "Andy Hun", "1999");
// const cleanCode = new Book("Clean Coder", "Robert E Martin", 2000);

// console.log(progmaticProgrammer );
// console.log(cleanCode );

// console.log(1+1 == 2);
// console.log(1+2 == 3);

// console.log(1 + true);

// console.log( 0.1 + 0.2 == 0.6);






$(document).ready(function(){
    $(".submit").submit(function(event){
        event.preventDefault();
        console.log("f**k")
    })
})