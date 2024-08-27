function myFunction(){
    var bloodpressuretop = document.getElementById("bloodpressuretop").value;
    var bloodpressurebottom=document.getElementById("bloodpressurebottom").value;
    var text1 = "Hey google, start low blood pressure routine";
    var text2 = "Hey google, start high blood pressure routine";
    var text3 = "Your blood pressure is in the safe zone";
    var text4 = "You are at risk of a high blood pressure occurence. Endeavour to pay closer attention to your habits";
    var utterance1 = new SpeechSynthesisUtterance();
    var utterance2 = new SpeechSynthesisUtterance();
    var utterance3 = new SpeechSynthesisUtterance();
    var utterance4 = new SpeechSynthesisUtterance();
    utterance1.text = text1;
    utterance2.text = text2;
    utterance3.text = text3;
    utterance4.text = text4;
    
    var audio = new Audio('https://outlook.office.com/1fa9f9da-a8eb-4d1b-b2f8-8dfd60e8c6b2');
    
    if (bloodpressuretop<90 && bloodpressurebottom<60) {
        window.speechSynthesis.speak(utterance1);
    } else if(bloodpressuretop>90 && bloodpressuretop<=120 && bloodpressurebottom>60 && bloodpressurebottom<=80){
        window.speechSynthesis.speak(utterance3);
    }else if(bloodpressuretop>120 && bloodpressuretop<=139 && bloodpressurebottom>80 && bloodpressurebottom<=89){
        window.speechSynthesis.speak(utterance4);
    }
    else{
        audio.play();
    }

    var sleephours = document.getElementById("sleephours").value;
    var text5 = "Try getting to bed earlier or getting up later. The sleep hours are very important in increasing sleep quality";
    var text6 = " Looks like you have decent sleep hours. Long nights are good for decreasing sleep debt but watch out for bed and rise regularity";
    var text7 = "Looks like you've been oversleeping. I'd suggest a visit to the doctors";
    var utterance5 = new SpeechSynthesisUtterance();
    var utterance6 = new SpeechSynthesisUtterance();
    var utterance7 = new SpeechSynthesisUtterance();
    utterance5.text = text5;
    utterance6.text = text6;
    utterance7.text = text7;
    if (sleephours <=6){
        window.speechSynthesis.speak(utterance5);
        
    } else if(sleephours >=7 && sleephours<=9){
        window.speechSynthesis.speak(utterance6);
        
    }else if(sleephours > 9){
        window.speechSynthesis.speak(utterance7);
    }
    var temperature = document.getElementById("temperature").value;
    var text8 = "You are experiencing a low body temperature, it is important to seek medical attention immediately. While waiting for medical help, Move to a Warm Environment, Wrap yourself in a blanket and drink Warm Fluids "
    var text9 = "Your body temperature is within the normal range";
    var text10 = "You are experiencing a fever, stay hydrated and take a cool shower. If the fever still persist do endeavour to consult you doctor";
    var utterance8 = new SpeechSynthesisUtterance();
    var utterance9 = new SpeechSynthesisUtterance();
    var utterance10 = new SpeechSynthesisUtterance();
    utterance8.text = text8;
    utterance9.text = text9;
    utterance10.text = text10;
    if (temperature<36.1){
        window.speechSynthesis.speak(utterance8);
        
    } else if(temperature >= 36.1 && temperature <= 37.5){
        window.speechSynthesis.speak(utterance9);
        
    }else if(temperature > 37.5){
        window.speechSynthesis.speak(utterance10);
    }
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var BMI = (weight/(height * height)) * 703;
    var text11 = " You are underweight";
    var text12 = "You are within the healthy weight range";
    var text13 = "You are overweight";
    var utterance11 = new SpeechSynthesisUtterance();
    var utterance12 = new SpeechSynthesisUtterance();
    var utterance13 = new SpeechSynthesisUtterance();
    utterance11.text = text11;
    utterance12.text = text12;
    utterance13.text = text13;
    if (BMI < 18.5){
        window.speechSynthesis.speak(utterance11);
        
    } else if(BMI >= 18.5 && BMI<= 24.9){
        window.speechSynthesis.speak(utterance12);
        
    }else if(BMI >= 25){
        window.speechSynthesis.speak(utterance13);
    }
    
}
  






// Define a function to calculate BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)) * 703;
}

// Define a function to provide spoken feedback based on BMI
function speakBMIStatus(BMI) {
    let text;
    if (BMI < 18.5) {
        text = "You are underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        text = "You are within the healthy weight range";
    } else {
        text = "You are overweight";
    }
    let utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

// Retrieve weight and height values from HTML input elements
var weight = parseFloat(document.getElementById("weight").value);
var height = parseFloat(document.getElementById("height").value);

// Validate input values
if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.error("Invalid input values. Please enter valid weight and height.");
} else {
    // Calculate BMI
    var BMI = calculateBMI(weight, height);
    // Provide spoken feedback based on BMI
    speakBMIStatus(BMI);
}