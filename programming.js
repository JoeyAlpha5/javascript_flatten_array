
function flatten_array(array) {
    //create a new empty array
    var flatt_array = [];
    for(var i = 0; i < array.length; i++) {
        //check if the current index of the given array is itself an array
        if(Array.isArray(array[i])) {
            //if index contains an array, concatenate the current flatt_array with the array in 
            //this index
            flatt_array = flatt_array.concat(flatten_array(array[i]));
        } else {
            //if index does not contain an array extend the flatt_array
            flatt_array.push(array[i]);
        }
    }
    return flatt_array;
}
//testing flatten_array function using givenexample
var flattened_array = flatten_array([ 1, [ 2, [ 3 ] ], 4 ])
//flattened array output
console.log(flattened_array)