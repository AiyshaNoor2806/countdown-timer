import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";
function* countdownTimer(second: number){
    while (second > 0) {
        yield second;
        second--;
    }
}

let timerIterator = countdownTimer(10);

function displayCountown() {
    let result = timerIterator.next();

    if(!result.done) {
        const now = new Date();

        const countdownTime = new Date(now.getTime() + (result.value *1000))
        
        const remainingSeconds = differenceInSeconds(countdownTime , now)

        console.log(`Remaining Seconds: ${remainingSeconds}`)
    
    setTimeout(displayCountown, 1000)     
       } else {
        console.log("Countdown Complete!");
    }
}

displayCountown();