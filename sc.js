'use strict';

function getRandomInt(max) {
	//return Math.floor(Math.random() * Math.floor(max));
	return parseInt(Math.random() * max);
}

function getrequest(q) {
	alert('')
	return prompt('Попытка №: ' );
}
/*for (var i = 10; i >= 0; i--) {
	console.log(getRandomInt(9999)+1000);
}*/
function conclusion1(a) {  //вывод
	let z='';
	for (var i = a; i < 16; i++) {
		z += ' ' + i;
	}
	alert(z);
}
function conclusion(a) {  //вывод
	let z = a + ' ';
		
	if (a < 15) {
		z += conclusion(a + 1);	
	}
	return z;
	
}

function getList(list) {
	switch (list){
   		case 2:
			let a = 2;
			let x = 1 + (a *= 2);
			alert('a=2, a*=2 - будет 4, x=1+4 - будет 5, x = ' + x);
			break;
		case 1:
			let az = 1, b = 1, c, d;
			c = ++az; alert("c = ++a, c= 1+1 ,будет 2. с=" + c);           // 2
			d = b++; alert('d=b++, b=1, d=1, '+d);           // 1
			c = (2+ ++az); alert('c = (2+ ++a), a=2, ++a=3, c=2+3=5,  : '+c);      // 5
			d = (2+ b++); alert('d = (2+ b++), b=2, d=2+2=4, : '+d);      // 4
			alert('a=3, : '+az);                    // 3
			alert('b=3, : '+b);                    // 3*/
			break;
		case 9:  	// угадайка
			let intendedNumber = getRandomInt(9999)+1000;	
			let answer = 0;
			let attempt = 1;
			let condition=true;

			while (condition) {
			  	answer = +prompt('Попытка №: ' + attempt + ' Угадайте четырех значное число ');  																																														
				if (answer === intendedNumber) {
					if (confirm('Поздравляю Вы угадали задуманное число: '+ intendedNumber+ 
						'Для продолжения нажмите - Да, для прекращения нажмите - отмена.')){
						attempt=1;
						intendedNumber = getRandomInt(9999)+1000;
					} else {
						condition = false;	
					}
				} else if (answer > intendedNumber) {
					attempt += 1;
					if (!confirm('Задуманное число меньше. Для продолжения нажмите - Да, для прекращения нажмите - отмена.')){
						condition = false;	
					}
				} else {
					attempt += 1;
					if (!confirm('Задуманное число больше. Для продолжения нажмите - Да, для прекращения нажмите - отмена.')){
						condition = false;	
					}
				}
			}
			break;
		case 3: 	// две переменные
			let variableA = Math.floor(getRandomInt(200)-100);
			let variableB = Math.floor(getRandomInt(200)-100);
			let variableC;
			if ((variableA>-1)&&(variableB>-1)) {
				variableC=variableA-variableB;
				alert ('1 '+variableA+' - '+variableB +' = '+ variableC);
			} else if ((variableA<0)&&(variableB<0)) {
				variableC=variableA*variableB;
				alert('2 '+variableA+' * '+variableB +' = ' + variableC);
			} else if (((variableA>-1)&&(variableB<0)) || ((variableA<0)&&(variableB>-1))) {
				variableC=variableA+variableB;
				alert('3 '+variableA+' + '+variableB +' = ' + variableC);
			};
			break;
		case 4: 	// [0..15]
			let variableZ = getRandomInt(15);
			alert(conclusion(variableZ));
			/*
			switch (variableZ){
			   	case 1:
			   		conclusion(1);
			   		break;
				case 2:
					conclusion(2);
				   	break;
				case 3:
				   	conclusion(3);
				   	break;
				case 4:
				   	conclusion(4);
				   	break;
				case 5:
				   	conclusion(5);
				   	break;
				case 6:
				   	conclusion(6);
				   	break;
				case 7:
				   	conclusion(7);
				   	break;
				case 8:
				   	conclusion(8);
				   	break;
				case 9:
				   	conclusion(9);
				   	break;
				case 10:
				   	conclusion(10);
				   	break;
				case 11:
				   	conclusion(11);
				   	break;
				case 12:
				   	conclusion(12);
				   	break;
				case 13:
				   	conclusion(13);
				   	break;
				case 14:
				   	conclusion(14);
				   	break;
				default:
				   	conclusion(15);
				   	break;
			}	*/
			break;
		case 5:
		alert('Основные арифметические функции реализованы в виде: function calsAmount (a,b){return a + b;} function calsSubtraction (a,b){return a - b;} function calsMultiplication (a,b){return a * b;} function calsDivision (a,b){return a / b;}' )
		break;
		case 6: 	// функция
			let arg1 = +prompt('Введите первое число:');
			let arg2 = +prompt('Введите второе число:');
			let operation = +prompt('Введите номер операции, которую хотите выполнить. 1-сложение, 2-вычитание, 3-умножение, 4-деление:');
			function mathOperation(arg1, arg2, operation){
				switch (operation){
					case 1:
				   		alert('Результат сложения: ' + calsAmount(arg1,arg2));
				   		break;
					case 2:
						alert('Результат вычитания: ' + calsSubtraction(arg1,arg2));
						break;
					case 3:
						alert('Результат умножения: ' + calsMultiplication(arg1,arg2));
						break;
					case 4:
						alert('Результат деления: ' + calsDivision(arg1,arg2));
						break;
				}
			}
			mathOperation(arg1, arg2, operation);
			break;
		case 7: 	// null и ноль
			alert('Значения null и undefined равны друг другу, но не чему бы то ни было еще. По-этому будет false.  ' + ( null == 0) + '    '+  (null === 0));
			break;
		case 8:
			function power(val, pow){
				let result = val;
				if (pow>1) {
					result *= power(val, pow-1);
				}
				return result;
			}
			alert('Результат: '+power(prompt('Введите основание: '),prompt('Введите степень: ')));
			break;
	}
}
// 5 
function calsAmount (a,b){
	return a + b;
}
function calsSubtraction (a,b){
	return a - b;
}
function calsMultiplication (a,b){
	return a * b;
}
function calsDivision (a,b){
	return a / b;
}
// 5
