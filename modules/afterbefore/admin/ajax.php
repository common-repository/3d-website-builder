<?php
/**
* Author URI:  https://3dwebsitebuilder.com/
* Author : Keivan Kamali
*/
if(!defined('ABSPATH')) exit();

function wb3d_get_media_afterbefore($F,$t,$url){

	$x[0]=explode($url,$F["image1_".$t])[1];
	$x[1]=explode($url,$F["image2_".$t])[1];
	return $x;
}

?>