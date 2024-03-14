const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// default to none first. output will only appear when check button is clicked / enter
output.style.display = 'none';

// function romanNumeralConverter(event) {
//   event.preventDefault();
  
//   const number = numberInput.value;
//   const inputInt = parseInt(numberInput.value);

//   if (inputInt < 1) {
//     output.innerHTML = `<span class="output-span">Please enter a number greater than or equal to 1</span>`;
//     output.style.display = 'block';
//   }
//   else if (inputInt >= 4000) {
//     output.innerHTML = `<span class="output-span">Please enter a number less than or equal to 3999`;
//     output.style.display = 'block';
//   }

//   else if (number === '' || number === null) {
//     output.innerHTML = `<span class="output-span">Please enter a valid number`;
//     output.style.display = 'block';
//   }

//   else if (!number || isNaN(inputInt)) {
//     alert("Please provide a decimal number");
//   }

//   else if(inputInt === 1000) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'M' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 900) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'CM' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 500) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'D' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 400) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'CD' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 100) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'C' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 90) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'XC' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 50) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'L' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 40) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'XL' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 10) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'X' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 9) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'IX' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 5) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'V' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 4) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'IV' in Roman Numeral`;
//     output.style.display = 'block';
//   }

//   else if(inputInt === 1) {
//     output.innerHTML = `<span class="output-span">${inputInt} is 'I' in Roman Numeral`;
//     output.style.display = 'block';
//   }
// }

function romanNumeralConverter(event) {
    event.preventDefault();
    
     let number = parseInt(numberInput.value); //convert to integer
  
     if (number === '' || number === null || isNaN(number)) { 
      output.innerHTML = `<span class="output-span">Please enter a valid number</span>`;
      output.style.display = 'block';
    }
    else if (number < 1) {
      output.innerHTML = `<span class="output-span">Please enter a number greater than or equal to 1</span>`;
      output.style.display = 'block';
    }
    else if (number >= 4000) {
      output.innerHTML = `<span class="output-span">Please enter a number less than or equal to 3999</span>`;
      output.style.display = 'block';
    }
  
    else {
      //array for Roman numerals and their corresponding decimal values
      const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
      const numeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let result = '';
  
  //iterate through the array starting with the largest Roman numeral value (3000) and check if it fits into the given number. if it does, subtract the value of that Roman numeral from the number, and append the corresponding Roman numeral to the result string. repeat process for each numeral value in decreasing order. repeat for each digit. since Roman numerals are formed by combining individual letters, this process needs to be repeated for each digit in the given number. ex: 3000, the process would start with M for 1000, then M again for 2000, then another M for 3000 giving MMM.
      for (let i = 0; i < numeralValues.length; i++) {
          while (number >= numeralValues[i]) {
              result += romanNumerals[i];
              number -= numeralValues[i];
          }
      }
  
      output.innerHTML = `<span class="output-span">${result}</span>`;
      output.style.display = 'block';
    }
}

convertBtn.addEventListener("click", romanNumeralConverter);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    romanNumeralConverter(e);
  }
});