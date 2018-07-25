<?php
    $wpmpwa_config = array('postId' => get_the_ID());
    setcookie("wpmpwa_config", json_encode($wpmpwa_config));
    require_once('index.html');
?>