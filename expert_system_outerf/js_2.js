'use strict';
//Функция не работает
function check(value)
{
	if(typeof(Number(value))=='number')
	{
		alert('операнд ' + Number(value) + ' является числом!');
		
	}
	else if(typeof(Number(value))=='string')
	{
		alert('операнд является строкой!');
	}
	else if(typeof(Number(value))=='undefined')
	{
		alert('операнд не определён!');
	}
}
function run_expert_system()
{
	let operand_1		= prompt('Введите, пожалуйста, Ваше первое число', 1); 
	let operand_2		= prompt('Введите, пожалуйста, Ваше второе число', 1); 
	let sign			= prompt('Введите, пожалуйста, знак желаемого арифметического действия', '+');
		// check(operand_1);
		// check(operand_2);

		if(sign == '+')
		{
			alert(Number(operand_1) + Number(operand_2));
		}
		else if(sign == '-')
		{
			alert(Number(operand_1) - Number(operand_2));
		}
		else if(sign == '**')
		{
			alert(Number(operand_1) ** Number(operand_2));
		}
		else if(sign == '*')
		{
			alert(Number(operand_1) * Number(operand_2));
		}
		else if(sign == '/')
		{
			alert(Number(operand_1) / Number(operand_2));
		}
		else
		{
			alert('Вы ввели непонятный знак действия');
		}
}