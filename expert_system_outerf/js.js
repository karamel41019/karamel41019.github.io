'use strict';
let operand_1		= prompt('�������, ����������, ���� ������ �����', 1); 
let operand_2		= prompt('�������, ����������, ���� ������ �����', 1); 
let sign			= prompt('�������, ����������, ���� ��������� ��������������� ��������', '+');
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
		alert('�� ����� ���������� ���� ��������');
	}