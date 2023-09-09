
var box=document.getElementById('display');

function addtoscreen(x)
{
	box.value+=x;
	if(x=='c')
	{	
		box.value=' ';
	}
}

function answer()
{
	x=box.value;
	x=eval(x);
	box.value=x;
}
function power(x)
{
	y=box.value;
	y=y**x;
	box.value=y;
}
function backspace()
{
	box.value=box.value.slice(0,-1);
}
		
