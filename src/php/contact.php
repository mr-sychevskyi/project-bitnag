<?php

    $to = "n.sychevskyi@gmail.com";
    $from = $_REQUEST['email'];
    $headers = $_REQUEST['email']
    $headers = "From: $from";
    $fields = array();
    $fields{"email"} = "email";
    $body = "Email body:\n\n"; foreach($fields as $a => $b){ $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);

?>