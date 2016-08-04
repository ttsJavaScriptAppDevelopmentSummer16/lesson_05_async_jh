

var teacher = {
    name: 'Shane',
    speak: function() {

        //Save this to a variable
        var self = this;

        //self is visible inside function because of closure
        setTimeout(function(){
            console.log('later my name is ' + self.name);
        },1000);
    }
}
teacher.speak();






// var teacher = {
//     name: 'Shane',
//     speak: function() {
//
//         //Maybe you're fetching data from an API, or getting user input
//         setTimeout(function(){
//             console.log('later my name is ' + this.name);
//         },1000)
//
//         //Runs immediately
//         console.log('Now my name is ' + this.name);
//     }
// }
//
// teacher.speak();
