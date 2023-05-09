const metn = prompt("Mətni daxil edin:");

const tersmetn = metn.split("").reverse().join(""); 

const yenimetn = `Mətnin tərsi: ${tersmetn}`; 

alert(yenimetn); 
