document.querySelector('#reset').addEventListener('click', () => {
	document.querySelector('#birthMonth').value = '';
    let day = document.querySelector('#birthDay').value = '';
    document.querySelector("#result").textContent = '';
    document.querySelectorAll('.exercise').forEach(x => x.classList.remove('showExercise'));
})

document.querySelector('#showSign').addEventListener('click', printFuture);

function printFuture() {
        let signName = fetchSign();
        document.querySelector("#result").textContent = signName;
        let selection = '#' + signName.toLowerCase() + 'Exercise';
        document.querySelector(selection).classList.add('showExercise');
        document.querySelector('#shia').classList.add('showExercise');
}

function fetchSign(){    
	let month = document.querySelector('#birthMonth').value;
    let day = document.querySelector('#birthDay').value;
    let allSigns = listSigns();
	
    if (checkDate(month, day)) {
        console.log(checkDate(month, day));
        for (sign in allSigns) {
            let s = allSigns[sign];
            let minCheck = s.startMonth == month && s.startDay <= day;
            let maxCheck = s.endMonth == month && s.endDay >= day;

            if (minCheck || maxCheck) {return s.name}
        }        
    } else {return "That's not a real date"}
}

function checkDate(m, d) {
    let maxDates = {
        January: 31,
        February: 29,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
    }
     // (d > maxDates[m]) ? (return false) : (return true) ;
    if (d > maxDates[m] || !maxDates[m]) {return false} 
    else {return true} 
}

function listSigns() {
    class Sign {
        constructor(name, startDay, startMonth, endDay, endMonth){
            this.name = name;
            this.startMonth = startMonth;
            this.startDay = startDay;
            this.endMonth = endMonth;
            this.endDay = endDay;
        }
    }
    const allSigns = {      
        Aries: new Sign('Aries', 21, 'March', 20, 'April'),
        Taurus: new Sign('Taurus', 20, 'April', 21, 'May'),
        Gemini: new Sign('Gemini', 21, 'May', 21, 'June'),
        Cancer: new Sign('Cancer', 21, 'June', 23, 'July'),
        Leo: new Sign('Leo', 23, 'July', 23, 'August'),
        Virgo: new Sign('Virgo', 23, 'August', 23, 'September'),
        Libra: new Sign('Libra', 23, 'September', 23, 'October'),
        Scorpio: new Sign('Scorpio', 23, 'October', 22, 'November'),
        Sagittarius: new Sign('Sagittarius', 23, 'November', 22, 'December'),
        Capricorn: new Sign('Capricorn' , 22, 'December', 20, 'January'),
        Aquarius: new Sign('Aquarius' , 20, 'January',19, 'February'),
        Pisces: new Sign('Pisces', 19, 'February', 21, 'March')
    }
    return allSigns;
}
