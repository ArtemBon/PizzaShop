function something()
{
	var x = window.localStorage.getItem('asdf');

	window.localStorage.setItem('asdf', 555);

	alert(x);
}