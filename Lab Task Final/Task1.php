<?php

if (isset($_POST['food'])) {

    $food = $_POST['food'];
 
    // Cookie valid for 30 days

    setcookie("favorite_food", $food, time() + (30 * 24 * 60 * 60));
 
    // Refresh so the cookie can be read

    header("Location: " . $_SERVER['PHP_SELF']);

    exit();

}

?>
 
<!DOCTYPE html>
<html>
<head>
<title>Favorite Food</title>
</head>
<body>
 
<?php

if (isset($_COOKIE['favorite_food'])) {

    echo "Hi, We know about your favorite food: " . htmlspecialchars($_COOKIE['favorite_food']);

} else {

?>
 
    <form method="POST">
<label>Please let us know about your favorite food:</label>
<input type="text" name="food" required>
<button type="submit">Submit</button>
</form>
 
<?php

}

?>
 
</body>
</html>
 