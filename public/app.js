function something()
{
	var x = window.localStorage.getItem('asdf');

	x = x * 1 + 1;

	window.localStorage.setItem('asdf', x);

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	var total = 0;
	for (var i = 1; i <= 3; i++)
	{
		var key = 'product_' + i;
		total += window.localStorage.getItem(key) * 1;
	}
	alert('There are ' + total + ' pizzas in cart.');
}
