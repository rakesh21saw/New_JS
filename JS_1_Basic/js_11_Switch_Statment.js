/*
 The switch statment is alternative way to write complicated  if else ststment 
 when we want to do compare one value with  multiple  diffrent object.


*/


const day = "monday";

 switch (day) {
    case 'monday':
        console.log('plan course structure'); // plan course structure
        console.log('plan coding practice'); //plan coding practice
        break;
 
    case 'tuesday':
        console.log('prepare theory video');
        break;

    case 'Wednesday':
    case 'thrusday':
        console.log('write the code');

     case 'Friday':
        console.log('practice code');
       
        
     case 'saturday':
     case 'sunday':
        console.log('enjoyed weekand');
        break;

     default:
        console.log("not a valid day");
        
        

 }