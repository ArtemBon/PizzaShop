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

	update_orders_input();

	//alert('There are ' + cart_get_number_of_items() + ' pizzas in cart.');
}

function cart_get_number_of_items()
{
	var total = 0;

	for (var i=0, len = window.localStorage.length; i<len; i++)
	{
		var key = window.localStorage.key(i);
		if ((/^product_/).test(key)){
			total += window.localStorage.getItem(key) * 1;
		}
	}

	return total;
}

function cart_get_orders()
{
	var total = '';

	for (var i=0, len = window.localStorage.length; i<len; i++)
	{
		var key = window.localStorage.key(i);
		if ((/^product_/).test(key)){
			total += key + '=' + window.localStorage.getItem(key) + ',';
		}
	}

	return total;
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}
