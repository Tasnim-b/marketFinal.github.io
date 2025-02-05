<?php
session_start();

if (isset($_POST['add_to_cart'])) {
	$product_id = $_POST['product_id'];
	$product_name = $_POST['product_name'];
	$product_price = $_POST['product_price'];
	$product_quantity = $_POST['product_quantity'];

	$item_array = array(
		'product_id' => $product_id,
		'product_name' => $product_name,
		'product_price' => $product_price,
		'product_quantity' => $product_quantity
	);

	// Si le panier existe déjà dans la session, ajoutez simplement le nouveau produit
	if (isset($_SESSION['shopping_cart'])) {
		$found = false;
		foreach ($_SESSION['shopping_cart'] as $key => $value) {
			if ($value['product_id'] == $product_id) {
				$_SESSION['shopping_cart'][$key]['product_quantity'] += $product_quantity;
				$found = true;
			}
		}
		if (!$found) {
			array_push($_SESSION['shopping_cart'], $item_array);
		}
	}
	// Si le panier n'existe pas dans la session, créez-le et ajoutez le produit
	else {
		$_SESSION['shopping_cart'][0] = $item_array;
	}
}
?>
