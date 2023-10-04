function Task1()
{    
    var userName = prompt("Введіть своє ім'я:");
    alert("Привіт, " + userName + "!");
}

function Task2()
{    
    const currentYear = new Date().getFullYear();
    var birthYear = prompt("Введіть свій рік народження:");
    
    if (!isNaN(birthYear) && birthYear.length == 4) {        
        var age = currentYear - parseInt(birthYear);        
        alert("Вам " + age + " років.");
    } else {    
        alert("Будь ласка, введіть коректний рік народження (чотирицифрове число).");
    }    
}
function Task3()
{    
    var sideLength = prompt("Введіть довжину сторони квадрата:");
    sideLength = parseFloat(sideLength);
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Будь ласка, введіть коректне значення довжини сторони.");
    } else {        
        var perimeter = 4 * sideLength;
        alert("Периметр квадрата зі стороною " + sideLength + " одиниць дорівнює: " + perimeter);
    }    
}
function Task4()
{   
    var radius = prompt("Введіть радіус кола:");
    radius = parseFloat(radius);
    if (isNaN(radius) || radius <= 0) {
        alert("Будь ласка, введіть коректне значення радіусу.");
    } else {        
        var area = Math.PI * Math.pow(radius, 2);
        alert("Площа кола з радіусом " + radius + " одиниць: " + area);
    }
}
function Task5()
{
    var distance = prompt("Введіть відстань між містами (у кілометрах):");
    var time = prompt("За скільки годин ви хочете дістатися?");
    distance = parseFloat(distance);
    time = parseFloat(time);
    if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
        alert("Будь ласка, введіть коректні значення для відстані та часу.");
    } else {        
        var speed = distance / time;
        alert("Щоб дістатися за " + time + " годин(и) до міста, потрібно рухатися зі швидкістю " + speed + " км/год.");
    }
}
function Task6()
{
    const usdToEuroRate = 0.85;
    var usdAmount = prompt("Введіть суму в доларах:");    
    usdAmount = parseFloat(usdAmount); // Перетворити введену суму у число
    // Перевірка на коректність введеної суми
    if (isNaN(usdAmount) || usdAmount < 0) {
        alert("Будь ласка, введіть коректну суму в доларах.");
    } else {        
        var euroAmount = usdAmount * usdToEuroRate;
        alert(usdAmount + " доларів дорівнюють " + euroAmount + " євро.");
    }   
}
function Task7()
{
    var flashDriveSizeGB = prompt("Введіть обсяг флешки у гігабайтах (ГБ):");
    flashDriveSizeGB = parseFloat(flashDriveSizeGB);
    var fileSizeMB = 820;
    // Перевірка на коректність введеного обсягу флешки
    if (isNaN(flashDriveSizeGB) || flashDriveSizeGB <= 0) {
        alert("Будь ласка, введіть коректний обсяг флешки в ГБ.");
    } else {
        var numberOfFiles = Math.floor((flashDriveSizeGB * 1024) / fileSizeMB);
        alert("На флешці обсягом " + flashDriveSizeGB + " ГБ поміститься " + numberOfFiles + " файлів розміром 820 МБ кожен.");
    }
}
function Task8()
{
    var walletAmount = prompt("Введіть суму грошей у гаманці:");
    var chocolatePrice = prompt("Введіть вартість однієї шоколадки:");
    // Перетворити введені значення у числа
    walletAmount = parseFloat(walletAmount);
    chocolatePrice = parseFloat(chocolatePrice);
    // Перевірка на коректність введених значень
    if (isNaN(walletAmount) || isNaN(chocolatePrice) || walletAmount < 0 || chocolatePrice <= 0) {
        alert("Будь ласка, введіть коректні значення для суми грошей та вартості шоколадки.");
    } else {        
        var numberOfChocolates = Math.floor(walletAmount / chocolatePrice);
        var change = walletAmount % chocolatePrice;
        alert("За вашу суму в гаманці ви можете купити " + numberOfChocolates + " шоколадок, і у вас залишиться " + change + " грошей.");
    }
}
function Task9()
{    
    var number = prompt("Введіть тризначне число:");
    number = parseInt(number);    
    if (isNaN(number) || number < 100 || number > 999) {
        alert("Будь ласка, введіть коректне тризначне число.");
    } else {        
        var firstDigit = Math.floor(number / 100);
        var lastDigit = number % 10;
        var reversedNumber = lastDigit * 100 + (number % 100 - lastDigit) + firstDigit;
        if (number === reversedNumber) {
            alert("Введене число " + number + " є паліндромом.");
        } else {
            alert("Введене число " + number + " не є паліндромом.");
        }
    }
}
function Task10()
{
    var number = prompt("Введіть ціле число:");
    number = parseInt(number);
    if (!isNaN(number)) {
        var result = (number % 2 === 0) ? "парне" : "непарне";
        alert("Введене число " + number + " є " + result + ".");
    } else {
        alert("Будь ласка, введіть коректне ціле число.");
    }
}