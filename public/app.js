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
	for (var i=0, len = window.localStorage.length; i<len; i++)
	{
		key = window.localStorage.key(i);
		if ((/^product_/).test(key)){
			total += window.localStorage.getItem(key) * 1;
		}
	}
	alert('There are ' + total + ' pizzas in cart.');
}
