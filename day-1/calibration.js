/*
1.Used to sum the calibrated values from calibrated Document
2.Return 0 if calibrated Document is empty or any of the calibrated value is empty
Input - String Array
Output - Integer
*/
function calibration(calibratedDoc){ 
    let sumOfCalibrations = 0;
    for(i=0;i<calibratedDoc.length;i++){
        if(calibratedDoc[i].length>0){
            sumOfCalibrations = sumOfCalibrations + firstLastDigits(calibratedDoc[i]);
        } else{
            sumOfCalibrations;
        }
       
    }
    return sumOfCalibrations;
}

/*
1.Iterate each value in the calibrated array and returns the first and last digit
Input - String
Output - Integer
*/
function firstLastDigits(str){
    var start = 0;
    var end = (str.length) - 1;
    var numberArray = ['0','1','2','3','4','5','6','7','8','9'];
    let firstDigit = -1;
    let lastDigit = -1;
    while(start <= end){
        if(firstDigit === -1 && numberArray.includes(str[start])){
                firstDigit = parseInt(str[start]) * 10;
        } else{
            start++;
        }
        if(lastDigit === -1 && numberArray.includes(str[end])){
                    lastDigit = parseInt(str[end]);
        } else{
            end--;
        }   
    }
    return (firstDigit+lastDigit);
}

