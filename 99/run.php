<?php
define('API_URL', 'http://127.0.0.1/99/api/api/');
while(true){
	$t = time();
    if($t % 3 == 0){
        @file_get_contents(API_URL . 'getdate');
        @file_get_contents(API_URL . 'order');
        @file_get_contents(API_URL . 'allotorder');
    }
    if($t % 30 == 0){
        @file_get_contents(API_URL . 'checkbal');
    }
    if($t % 60 == 0){
        @file_get_contents(API_URL . 'interest');
    }
    sleep(1);
}