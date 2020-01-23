'use strict';
let operand_1		= prompt('Введите, пожалуйста, Ваше первое число', 1); 
let operand_2		= prompt('Введите, пожалуйста, Ваше второе число', 1); 
let sign			= prompt('Введите, пожалуйста, знак желаемого арифметического действия', '+');
let result;

	if(sign=='+')
	{
		alert(Number(operand_1) + Number(operand_2));
	}
	
	else if(sign=='-')
	{
		alert(Number(operand_1) - Number(operand_2));
	}
	else if(sign=='*')
	{
		alert(Number(operand_1) * Number(operand_2));
	}
	else if(sign=='/')
	{
		alert(Number(operand_1) / Number(operand_2));
	}
	else
	{
		alert('Вы ввели непонятный знак действия');
	}