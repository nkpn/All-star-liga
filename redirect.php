<?php
$url = $_SERVER['REQUEST_URI'];
if (strpos($url, 'index.html') !== false) {
    $newUrl = str_replace('index.html', '', $url);
    header("Location: $newUrl", true, 301);
    exit();
}
?>