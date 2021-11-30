var arr = [1,5,10,-2]

function maxMinAvg(arr) {
    var arrnew = [];
    var max = 0;
    var min = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    arrnew.push(max, min, avg);
    console.log(arrnew); 
}

maxMinAvg(arr);