<?php
/**
* Author : Keivan Kamali
*/
if(!defined('ABSPATH')) exit();
?>
<div id="wb3d_waiting" >
	<div>
		<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>1.gif">
	</div>
</div>
<div class="container-fluid"  class="wb3d_displaynone">
      <div class="row-fluid">
            <div class="row-fluid">
                  <div class="span6">
                        <div class="input-group myColorPicker">
                              <span class="input-group-addon myColorPicker-preview">&nbsp;</span>
                              <input class="form-control wb3d_displaynone" type="text">
                        </div>
                  </div>
                  <div class="span6">
                  </div>
            </div><!--/span-->
      </div><!--/span-->
</div><!--/.fluid-container-->
<div id="wb3d_panel" class="wb3d_displaynone">

      <label class="wb3d_displaynone" id='alert_dataischanged' ><?php esc_html_e('Data is changed', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_wrongNumber' ><?php esc_html_e('Wrong Number', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_empty' ><?php esc_html_e('Empty', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_dot' ><?php esc_html_e('You can not remove this effect ', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_selectEffect' ><?php esc_html_e('Please select an effect', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_inLayer' ><?php esc_html_e('You can not remove this effect.It use in a layer', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_removeEffect' ><?php esc_html_e('You can not remove this effect.It use in a slide', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_duplicateName' ><?php esc_html_e('This name already exists', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_unistallAddon' ><?php esc_html_e('You cannt unistall because this module use in layer', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_staticlayer' ><?php esc_html_e('Static layers only work with the 3D Website Builder module', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id='alert_notstaticlayer' ><?php esc_html_e("You can't do it.Because it is a child element", 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="wb3d_id_alert1" ><?php esc_html_e('Please select a layer', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_scale" ><?php esc_html_e('You cannt change size.because layer\'s effect change size of it (With saleX or ...)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_color" ><?php esc_html_e('You cannt remove last color', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_slide" ><?php esc_html_e('You cannt delete last slide', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_slide2" ><?php esc_html_e('Please select another slide and then remove this slide', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm1" ><?php esc_html_e('Do you want delete this slide?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_emptyEffect" ><?php esc_html_e('You cant select this effect.it is empty', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm3" ><?php esc_html_e('Click OK to delete', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm4" ><?php esc_html_e('Do you want to copy 1 to 2?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm5" ><?php esc_html_e('Do you want to copy 1 to 2?(Without changing the objects in the panels)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm6" ><?php esc_html_e('Do you want to copy 2 to 3?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm7" ><?php esc_html_e('Do you want to copy 2 to 3?(Without changing the objects in the panels)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm8" ><?php esc_html_e('Do you want to copy 3 to 4?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm9" ><?php esc_html_e('Do you want to copy 3 to 4?(Without changing the objects in the panels)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm10" ><?php esc_html_e('Do you want to copy this slide?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm11" ><?php esc_html_e('Do you want to copy this layer?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_confirm12" ><?php esc_html_e('Do you want to delete?', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_Error620" ><?php esc_html_e('Error620', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_Error621" ><?php esc_html_e('Error621-File Not Found', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_Error622" ><?php esc_html_e('Error622', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_refresh" ><?php esc_html_e('Copy was successful. Click OK to refresh and load the modules', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_modules" ><?php esc_html_e('To install more modules, you need to install the Pro version . You can download the Pro version from https://3dwebsitebuilder.com/', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_open_pro_project" ><?php esc_html_e('This object is edited with the Pro version. First install the Pro version . Then edit it', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_many_effects" ><?php esc_html_e('Invalid license', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="alert_colortable" ><?php esc_html_e('Invalid license ! You cannot select color table', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="wb3d_install_pro" ><?php esc_html_e('You can use the effect service by installing the effect service module in the bottom menu or by purchasing the pro version (https://3dwebsitebuilder.com/price/)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="wb3d_pro_event" ><?php esc_html_e('You can define the Events only when you install the pro version of the plugin (https://3dwebsitebuilder.com/)', 'wb3d'); ?></label>
      <label class="wb3d_displaynone" id="wb3d_pro_act" ><?php esc_html_e('You can define the Acts only when you install the pro version of the plugin (https://3dwebsitebuilder.com/)', 'wb3d'); ?></label>





      <div id="wb3d_fontfamily_sample" class="wb3d_panel">
            <img alt="" id="wb3d_fontfamily_close" src="<?php echo esc_url(wb3d_plagin_images_URL);?>close3.png" class="imgbuttom img40 pointer" >
      </div>
	<img alt="" id="stopimg2" src="<?php echo esc_url(wb3d_plagin_images_URL);?>pointin1.png" >
	<img alt="" id="stop_obj" src="<?php echo esc_url(wb3d_plagin_images_URL);?>stop3.cur" >
	<div class="pointer" id="save_all"  >
		<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>save.svg"  >
	</div>
	<a id="show_demo" href="<?php echo esc_url(wb3d_URL);?>" target="_blank">
		<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>demo.svg"  >
	</a>

	<div id="wb3d_fullscrean"  >
		<img alt="" id="wb3d_fullscrean_img" src="<?php echo esc_url(wb3d_plagin_images_URL);?>/1.gif" >    
		<div id="wb3d_fullscrean_imgdiv">
			<img alt="" id="wb3d_fullscrean_close" src="<?php echo esc_url(wb3d_plagin_images_URL);?>close3.png" class="imgbuttom img40 pointer" >
		</div>
	</div>


	<div id="start">
		<!-- Left Menu -->
		<div id="es_menu"  >
			<div id="Menu_left"  ><?php esc_html_e('Menu :', 'wb3d'); ?></div>
			<div id="tab_slide" class="pointer" ><?php esc_html_e('Slide', 'wb3d'); ?></div>
			<div id="tab_layers" class="pointer" ><?php esc_html_e('Layers', 'wb3d'); ?></div>
			<div id="tab_object" class="pointer" ><?php esc_html_e('Objects', 'wb3d'); ?></div>
			<div id="tab_object2" class="pointer" ><?php esc_html_e('Objects B', 'wb3d'); ?></div>

			<!-- Left Menu Object B -->

			<div id="object2_menu" class="wb3d_tab">
				<div id="object2_menu_sub" >
					<span id="span_objectB1">4</span>
					<span id="span_objectB2">4</span>
					<span id="span_objectB3">4</span>
					<span id="span_objectB4">4</span>
					<span id="span_objectB5">4</span>
					<span id="span_objectB6">4</span>
					<span id="span_objectB7">4</span>
					<span id="span_objectB8">4</span>
					<span id="span_objectB9">4</span>
					<span id="span_objectB10">4</span>
					<span id="span_objectB11">4</span>
					<span id="span_objectB12">4</span>
					<span id="span_objectB13">4</span>
					<span id="span_objectB14">4</span>
					<span id="span_objectB15">4</span>
					<span id="span_objectB16">4</span>
					<span id="span_objectB17">4</span>
					<span id="span_objectB18">4</span>
					<span id="span_objectB19">4</span>
					<span id="span_objectB20">4</span>
					<span id="span_objectB21">4</span>
					<span id="span_objectB22">4</span>
					<span id="span_objectB25">4</span>
					<span id="span_objectB28">4</span>
					<span id="span_objectB29">4</span>
					<span id="span_objectB30">4</span>
					<span id="span_objectB31">4</span>
					<span id="span_objectBB"><?php esc_html_e('--------B--------', 'wb3d'); ?></span>
					<span id="span_objectBC"><?php esc_html_e('--------C--------', 'wb3d'); ?></span>
					<span id="span_objectBD"><?php esc_html_e('--------D--------', 'wb3d'); ?></span>
					<span id="span_objectBE"><?php esc_html_e('--------E--------', 'wb3d'); ?></span>
					<span id="span_objectBF"><?php esc_html_e('--------F--------', 'wb3d'); ?></span>
					<span id="span_objectBH"><?php esc_html_e('--------G--------', 'wb3d'); ?></span>
					<label id="label_effect_0"><?php esc_html_e('Effect :', 'wb3d'); ?></label>
					<select id="effect_0" >
						<option selected value="-1"><?php esc_html_e('None', 'wb3d'); ?></option>
					</select>
					<label id="label_noxy"><?php esc_html_e('X & Y :', 'wb3d'); ?></label>
					<select id="noxy" >
						<option selected value="0"><?php esc_html_e('Normal', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('None', 'wb3d'); ?></option>
					</select>
					<label id='label_x_right_menu' ><?php esc_html_e('X:', 'wb3d'); ?></label>
					<input id='x_right_menu' type="number" >
					<label id='label_y_right_menu' ><?php esc_html_e('Y:', 'wb3d'); ?></label>
					<input id='y_right_menu' type="number" >
					<label id='label_w_right_menu' ><?php esc_html_e('Width:', 'wb3d'); ?></label>
					<input min="0" id='w_right_menu' type="number">
					<label id='label_h_right_menu'><?php esc_html_e('Height:', 'wb3d'); ?></label>
					<input min="0" id='h_right_menu' type="number">
					<label id='label_f_right_menu'><?php esc_html_e('Font:', 'wb3d'); ?></label>
					<input min="0" id='f_right_menu' type="number">
					<label class="wb3d_pointer" title="<?php esc_attr_e('Start', 'wb3d'); ?>" id='start_run_after_v_scroll' ><?php esc_html_e('S', 'wb3d'); ?></label>
					<label class="wb3d_pointer" title="<?php esc_attr_e('Reset', 'wb3d'); ?>" id='reset_run_after_v_scroll' ><?php esc_html_e('R', 'wb3d'); ?></label>
					<label class="wb3d_pointer" title="<?php esc_attr_e('End', 'wb3d'); ?>" id='end_run_after_v_scroll' ><?php esc_html_e('E', 'wb3d'); ?></label>
					<label class="wb3d_pointer" title="<?php esc_attr_e('Reset', 'wb3d'); ?>" id='reset2_run_after_v_scroll' ><?php esc_html_e('R', 'wb3d'); ?></label>
					<label id='label_run_after_v_scroll' ><?php esc_html_e('Run After V Scroll:', 'wb3d'); ?></label>
					<input id='run_after_v_scroll'  type="number">
					<label id='label_start_after' ><?php esc_html_e('Run After Time:', 'wb3d'); ?></label>
					<input id='start_after' step="0.1" min="0" type="number">
					<label id='label_run_to_v_scroll' ><?php esc_html_e('Run To V Scroll:', 'wb3d'); ?></label>
					<input min="0" id='run_to_v_scroll'  type="number">
					<label id='label_end_To' ><?php esc_html_e('Run To Time:', 'wb3d'); ?></label>
					<input id='end_To' step="0.1" min="0" type="number">
					<label id='label_show_in_range' ><?php esc_html_e('Show Object', 'wb3d'); ?></label>
					<select id="show_in_range" >
						<option value="0"><?php esc_html_e('Always Show', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Hide&off Out Off Range', 'wb3d'); ?></option>
					</select>
						<label id="label_select_position"><?php esc_html_e('Position :', 'wb3d'); ?></label>
					<select  id="select_position"  >
						<option value="0"><?php esc_html_e('1-Absolute %', 'wb3d'); ?></option> 
						<option value="1"><?php esc_html_e('2-Fixed (Position:fixed) PX', 'wb3d'); ?></option> 
						<option value="2"><?php esc_html_e('3-Fixed (Position:fixed) %', 'wb3d'); ?></option> 
					</select>

					<label id='label_align_left' ><?php esc_html_e('Align X:', 'wb3d'); ?></label>
					<select id="align_left" >
						<option value="0"><?php esc_html_e('1-Left', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('2-Center', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('3-Right', 'wb3d'); ?></option>
					</select>
					<label id='label_align_top' ><?php esc_html_e('Align Y:', 'wb3d'); ?></label>
					<select id="align_top" >
						<option value="0"><?php esc_html_e('1-Top', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('2-Center', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('3-Bottom', 'wb3d'); ?></option>
					</select>
					<label id='label_width_res' ><?php esc_html_e('Width:', 'wb3d'); ?></label>
					<select  id="width_res"  >
						<option value="0"><?php esc_html_e("Screen Width", 'wb3d'); ?></option> 
                                    <option value="1"><?php esc_html_e("Screen Height", 'wb3d'); ?></option> 
					</select>

					<label id='label_height_res' ><?php esc_html_e('Height:', 'wb3d'); ?></label>
					<select id="height_res"  >
						<option value="0"><?php esc_html_e("Screen Width", 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e("Screen Height", 'wb3d'); ?></option>  
					</select>
					<label id='label_sizex_right_menu' ><?php esc_html_e('Effect width:', 'wb3d'); ?></label>
					<input step="0.01" min="0.01" id='sizex_right_menu'  type="number">
					<label id='label_sizey_right_menu' ><?php esc_html_e('Effect height:', 'wb3d'); ?></label>
					<input step="0.01" min="0.01" id='sizey_right_menu'  type="number">

					<label id="label_selecttimeorscroll"><?php esc_html_e('Move on effect:', 'wb3d'); ?></label>
					<select  id="selecttimeorscroll" >
						<option value="0"><?php esc_html_e('Time', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Scroll (Down)', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('Scroll (Down/Up)', 'wb3d'); ?></option>
						<option value="6"><?php esc_html_e('Drag Up', 'wb3d'); ?></option>
						<option value="7"><?php esc_html_e('Drag Down', 'wb3d'); ?></option>
						<option value="8"><?php esc_html_e('Drag Right', 'wb3d'); ?></option>
						<option value="9"><?php esc_html_e('Drag Left', 'wb3d'); ?></option>
						<option value="10"><?php esc_html_e('Click', 'wb3d'); ?></option>
						<option value="11"><?php esc_html_e('Hover', 'wb3d'); ?></option>
						<option value="5"><?php esc_html_e('None(Change by Event&Act)', 'wb3d'); ?></option>
					</select>
					<label id="label_select_auto_repeat" ><?php esc_html_e('Repeat :', 'wb3d'); ?></label>
					<select id="select_auto_repeat" >
						<option value="0"><?php esc_html_e('No Repeat :', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Repeat', 'wb3d'); ?></option>
					</select>
					<label id="label_select_auto_slow" ><?php esc_html_e('Auto slow :', 'wb3d'); ?></label>
					<select id="select_auto_slow" >
						<option value="0"><?php esc_html_e('Fixed speed :', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Auto Slow :', 'wb3d'); ?></option>
					</select>
					<label id="label_select_parallex"  ><?php esc_html_e('Parallex :', 'wb3d'); ?></label>
					<select id="select_parallex" >
						<option value="0"><?php esc_html_e('Disable', 'wb3d'); ?></option> 
						<option value="1"><?php esc_html_e('Enable', 'wb3d'); ?></option>
					</select>
					<label  id="label_parallax_selectmenu1"  ><?php esc_html_e('Parallex 1:', 'wb3d'); ?></label>
					<select  id="parallax_selectmenu1">
						<option value="0"><?php esc_html_e('None', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="1"><?php esc_html_e('Move X By X', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('Move Y By Y', 'wb3d'); ?></option>                            
						<option disabled="disabled">---------------------</option>
						<option value="8"><?php esc_html_e('Rotate By X', 'wb3d'); ?></option>
						<option value="9"><?php esc_html_e('Rotate By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="11"><?php esc_html_e('RotateX By X', 'wb3d'); ?></option>
						<option value="12"><?php esc_html_e('RotateX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="14"><?php esc_html_e('RotateY By X', 'wb3d'); ?></option>
						<option value="15"><?php esc_html_e('RotateY By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="17"><?php esc_html_e('ScaleX By X', 'wb3d'); ?></option>
						<option value="18"><?php esc_html_e('ScaleX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="20"><?php esc_html_e('ScaleY By X', 'wb3d'); ?></option>
						<option value="21"><?php esc_html_e('ScaleY By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="26"><?php esc_html_e('SkewX By X', 'wb3d'); ?></option>
						<option value="27"><?php esc_html_e('SkewX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="29"><?php esc_html_e('SkewY By X', 'wb3d'); ?></option>
						<option value="30"><?php esc_html_e('SkewY By Y', 'wb3d'); ?></option>
					</select>
					<label  id="label_parallax_spinner1"  ><?php esc_html_e('Value:', 'wb3d'); ?></label>
					<input id="parallax_spinner1" type="number">
					<label  id="label_parallax_selectmenu2"  ><?php esc_html_e('Parallex 2:', 'wb3d'); ?></label>
					<select  id="parallax_selectmenu2">
						<option value="0"><?php esc_html_e('None', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="1"><?php esc_html_e('Move X By X', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('Move Y By Y', 'wb3d'); ?></option>                            
						<option disabled="disabled">---------------------</option>
						<option value="8"><?php esc_html_e('Rotate By X', 'wb3d'); ?></option>
						<option value="9"><?php esc_html_e('Rotate By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="11"><?php esc_html_e('RotateX By X', 'wb3d'); ?></option>
						<option value="12"><?php esc_html_e('RotateX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="14"><?php esc_html_e('RotateY By X', 'wb3d'); ?></option>
						<option value="15"><?php esc_html_e('RotateY By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="17"><?php esc_html_e('ScaleX By X', 'wb3d'); ?></option>
						<option value="18"><?php esc_html_e('ScaleX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="20"><?php esc_html_e('ScaleY By X', 'wb3d'); ?></option>
						<option value="21"><?php esc_html_e('ScaleY By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="26"><?php esc_html_e('SkewX By X', 'wb3d'); ?></option>
						<option value="27"><?php esc_html_e('SkewX By Y', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="29"><?php esc_html_e('SkewY By X', 'wb3d'); ?></option>
						<option value="30"><?php esc_html_e('SkewY By Y', 'wb3d'); ?></option>
					</select>
					<label  id="label_parallax_spinner2"  ><?php esc_html_e('Value:', 'wb3d'); ?></label>
					<input id="parallax_spinner2" type="number">
				</div>
			</div> <!-- End Of Left Menu Object B -->

			<!-- Left Menu Layer  -->
			<div class="wb3d_tab" id="layers_menu" >
				<div id="div_layers_menu" >
					<div id="layers_menu3">
						<div id="div-slide-option" ></div>
					</div>
				</div>  
			</div>  
			<div id="slider_p1" >
				<div id="slider_h1" class="pointer" ></div>
			</div>

			<!-- Left Menu Object Menu  -->
			<div class="wb3d_tab" id="object_menu" >
				<div id="div_layerc" >
					<div id="slider_layer" >  
						<div id="slider_parent">
							<div id="slider_k1" class="pointer">
							</div>
						</div>
					</div>

					<label id="label_select_layer"><?php esc_html_e('Select layer', 'wb3d'); ?></label>
					<select id="select_layer" >
						<option selected value="-1"><?php esc_html_e('None', 'wb3d'); ?></option>
						<option  value="1"><?php esc_html_e('1', 'wb3d'); ?>1</option>
					</select>
					<div class="pointer" id="new_layers_object"><?php esc_html_e('New Object', 'wb3d'); ?></div>
					<div id="layers_object" ></div>
					<select id="pers_type" >
						<option value="0"><?php esc_html_e('1-Normal Object', 'wb3d'); ?> </option> 
						<option value="1"><?php esc_html_e('2-Object with Perspectiv', 'wb3d'); ?></option> 
						<option value="2"><?php esc_html_e('3-Object with Perspectiv & 3D', 'wb3d'); ?></option> 
					</select>
					<label id="label_layer_pers"><?php esc_html_e('Perspective:', 'wb3d'); ?></label>
					<label id="label_layer_type"><?php esc_html_e('Type:', 'wb3d'); ?></label>
					<select id="layer_type">
						<option value="0"><?php esc_html_e('Normal Layer', 'wb3d'); ?></option>
						<option disabled="disabled">----------------</option>
						<option value="2"><?php esc_html_e('Static layer', 'wb3d'); ?></option>
						<option disabled="disabled">----------------</option>
						<option value="9"><?php esc_html_e('Tab Title', 'wb3d'); ?></option>
						<option value="10"><?php esc_html_e('Tab Content', 'wb3d'); ?></option>
						<option disabled="disabled">----------------</option>
						<option value="11"><?php esc_html_e('Mouse Layer A', 'wb3d'); ?></option>
						<option value="12"><?php esc_html_e('Mouse Slide A', 'wb3d'); ?></option>
                                    <option value="13"><?php esc_html_e('Mouse Layer B', 'wb3d'); ?></option>
                                    <option value="14"><?php esc_html_e('Mouse Slide B', 'wb3d'); ?></option>
					</select>
					<label id="label_tab_number"><?php esc_html_e('Number:', 'wb3d'); ?></label>
					<input id='tab_number' type="number">
					<img alt="" id="let_status0" src="<?php echo esc_url(wb3d_plagin_images_URL);?>desktop.png" >
					<img alt="" id="let_status1" src="<?php echo esc_url(wb3d_plagin_images_URL);?>htablet.png" >
					<img alt="" id="let_status2" src="<?php echo esc_url(wb3d_plagin_images_URL);?>vtablet.png" >
					<img alt="" id="let_status3" src="<?php echo esc_url(wb3d_plagin_images_URL);?>mobile.png" >
					<div id="let_status" ></div>
					<label id="label_click-type"><?php esc_html_e('Click', 'wb3d'); ?></label>
					<select  id="click-type" >
						<option value="-1"><?php esc_html_e('None', 'wb3d'); ?></option>
						<option disabled="disabled" ><?php esc_html_e('-----Link-----', 'wb3d'); ?></option>
						<option value="0"><?php esc_html_e('Simple link', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('JS link', 'wb3d'); ?></option>
						<option disabled="disabled" ><?php esc_html_e('-----Slide Action (3D.W.B Module)-----', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('Jump to slide (3D.W.B Module)', 'wb3d'); ?></option>
						<option value="3"><?php esc_html_e('Next slide (3D.W.B Module)', 'wb3d'); ?></option>
						<option value="4"><?php esc_html_e('Pre slide (3D.W.B Module)', 'wb3d'); ?></option>
						<option disabled="disabled">----------Scroll-----------</option>  
						<option value="10"><?php esc_html_e('Scroll to layer', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>          
						<option value="22"><?php esc_html_e('Clear save setting', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="11"><?php esc_html_e('Select color table 1', 'wb3d'); ?></option>
						<option value="12"><?php esc_html_e('Select color table 2', 'wb3d'); ?></option>
						<option value="13"><?php esc_html_e('Select color table 3', 'wb3d'); ?></option>
						<option value="14"><?php esc_html_e('Select color table 4', 'wb3d'); ?></option>
						<option value="15"><?php esc_html_e('Select color table 5', 'wb3d'); ?></option>
						<option value="16"><?php esc_html_e('Select color table 6', 'wb3d'); ?></option>
						<option value="17"><?php esc_html_e('Select color table 7', 'wb3d'); ?></option>
						<option value="18"><?php esc_html_e('Select color table 8', 'wb3d'); ?></option>
						<option value="19"><?php esc_html_e('Select color table 9', 'wb3d'); ?></option>
						<option value="20"><?php esc_html_e('Select color table 10', 'wb3d'); ?></option>
						<option disabled="disabled">---------------------</option>
						<option value="21"><?php esc_html_e('Text', 'wb3d'); ?></option>
					</select>

					<input type="text" disabled="disabled" id="click-link">          
					<label id="label_click-newpage"><?php esc_html_e('Link2', 'wb3d'); ?></label>
					<select  disabled="disabled" id="click-newpage" >
						<option value="0"><?php esc_html_e('New page', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('New page (No follow)', 'wb3d'); ?></option>
						<option value="2"><?php esc_html_e('Same page ', 'wb3d'); ?></option>
						<option value="3"><?php esc_html_e('Same page (No follow)', 'wb3d'); ?></option>
					</select>
					<label id="label_act_event"><?php esc_html_e('Event/Act', 'wb3d'); ?></label>
					<select  disabled="disabled" id="act_event" >
						<option value="0"><?php esc_html_e('No', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Yes', 'wb3d'); ?></option> 
					</select>
					<label id="label_reset"><?php esc_html_e('Reset', 'wb3d'); ?></label>
					<select  disabled="disabled" id="layer_reset" >
						<option value="0"><?php esc_html_e('No', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Yes', 'wb3d'); ?></option> 
					</select>
					<label id="label_pointer"><?php esc_html_e('Pointer', 'wb3d'); ?></label>
					<select  disabled="disabled" id="layer_pointer" >
						<option value="0"><?php esc_html_e('No', 'wb3d'); ?></option>
						<option value="1"><?php esc_html_e('Yes', 'wb3d'); ?></option> 
					</select>
                              <label id="label_selectable"><?php esc_html_e('Selectable', 'wb3d'); ?></label>
                              <select title="<?php esc_html_e('Scroll,Slider handle must select: No', 'wb3d'); ?>"  disabled="disabled" id="layer_selectable" >
                                    <option value="0"><?php esc_html_e('No', 'wb3d'); ?></option>
                                    <option value="1"><?php esc_html_e('Yes', 'wb3d'); ?></option> 
                              </select>
                              <label id="label_sizefunc"><?php esc_html_e('Size Function', 'wb3d'); ?></label>
                              <select title="<?php esc_html_e('Select Size Function', 'wb3d'); ?>"  disabled="disabled" id="layer_sizefunc" >
                                    <option value="0"><?php esc_html_e('.offsetWidth', 'wb3d'); ?></option>
                                    <option value="1"><?php esc_html_e('getBoundingClientRect', 'wb3d'); ?></option> 
                              </select>
                              <label id="label_overflow"><?php esc_html_e('Overflow 1', 'wb3d'); ?></label>
                              <select title="<?php esc_html_e('Not work in admin panel', 'wb3d'); ?>"  disabled="disabled" id="layer_overflow" >
                                    <option value="0"><?php esc_html_e('hidden', 'wb3d'); ?></option>
                                    <option value="1"><?php esc_html_e('visible', 'wb3d'); ?></option> 
                              </select>
                              <label id="label_overflow2"><?php esc_html_e('Overflow 2', 'wb3d'); ?></label>
                              <select title="<?php esc_html_e('needs a refresh', 'wb3d'); ?>"  disabled="disabled" id="layer_overflow2" >
                                    <option value="0"><?php esc_html_e('hidden', 'wb3d'); ?></option>
                                    <option value="1"><?php esc_html_e('visible', 'wb3d'); ?></option> 
                              </select>
				</div>
			</div><!--End Of Left Menu Object Menu  -->

			<!--Left Menu Slide Menu  -->
			<div class="wb3d_tab" id="slide_menu" >
				<div id="div_slide_menu" >
					<label id='label_slide_time' ><?php esc_html_e('Time:', 'wb3d'); ?></label>
					<input id='slide_time' type="number" min="-1">

					<label id="label_scroll_desktop"><?php esc_html_e('Vertical scroll :', 'wb3d'); ?></label>
					<input id="scroll_desktop" type="number" min="0">

					<label id="label_color_slide"><?php esc_html_e('Background-color :', 'wb3d'); ?></label>
					<input id="color_slide" type="number" min="0"  />
					
					<span id="span_slide1">1</span>
					<span id="span_slide2">1</span>
					<span id="span_slide3">4</span>
                              <span id="span_slide4">4</span>
					<span id="span_slide5">1</span>

					<label id="label_slide_select_1"><?php esc_html_e('Slide Effect', 'wb3d'); ?></label>
					<select id="slide_select_1"  >
						<option value="none"><?php esc_html_e('None', 'wb3d'); ?></option>
						<option value="fade"><?php esc_html_e('Fade', 'wb3d'); ?></option>
						<option value="to right"><?php esc_html_e('To Right', 'wb3d'); ?></option>
						<option value="to left"><?php esc_html_e('To Left', 'wb3d'); ?></option>
						<option value="to top"><?php esc_html_e('To Up', 'wb3d'); ?></option>
						<option value="to bottom"><?php esc_html_e('To Down', 'wb3d'); ?></option>
						<option value="rotatex"><?php esc_html_e('Rotate Around X-Center', 'wb3d'); ?></option>
						<option value="rotatey"><?php esc_html_e('Rotate Around Y-Center', 'wb3d'); ?></option>
						<option value="width"><?php esc_html_e('Close Width', 'wb3d'); ?></option>
						<option value="height"><?php esc_html_e('Close Height', 'wb3d'); ?></option>
						<option value="height_width"><?php esc_html_e('Close Height And width', 'wb3d'); ?></option>
						<option value="bottom_right"><?php esc_html_e('To Right-Down', 'wb3d'); ?></option>
						<option value="top_left"><?php esc_html_e('To Up-Left', 'wb3d'); ?></option>
						<option value="3dbox_top"><?php esc_html_e('3D Up', 'wb3d'); ?></option>
						<option value="3dbox_bottom"><?php esc_html_e('3D Down', 'wb3d'); ?></option>
						<option value="3dbox_left"><?php esc_html_e('3D Left', 'wb3d'); ?></option>
						<option value="3dbox_right"><?php esc_html_e('3D Right', 'wb3d'); ?></option>
						<option disabled="disabled" value="-1">--------------User Effect-------------</option>
					</select>
                              <label id="label_cursor"><?php esc_html_e('Cursor :', 'wb3d'); ?></label>
                              <select id="slide_cursor"  >
                                    <option value="0"><?php esc_html_e('Show ', 'wb3d'); ?></option>
                                    <option value="1"><?php esc_html_e('Hide ', 'wb3d'); ?></option>
                              </select>
				</div>  
			</div><!--End Of Left Menu-Slide Menu  -->
		</div><!--End Of Left Menu -->
	                


		<div id="start_sub">
		<!-- Addon Panel -->
			<div id="textmenu2" title="edit slider menu">
				<div id="textmenu_A2">
					<div class="es_tc es_left">
						<label id="change_obj_table2"><?php esc_html_e('Change Object', 'wb3d'); ?></label>
					</div>
					<div class=" es_right">
						<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>close3.png" id="textmenuclose2">
					</div>
				</div>
				<div id="bodytextmenu2" >
					<?php
						global $wb3d_addons;
						global $wb3d_open_addons_A;
						global $wb3d_pro;
						require wb3d_DIR.'includes/img/admin/button2.php';
						for ($i=0;$i<count($wb3d_open_addons_A[0]);$i++) {
							if (is_dir(wb3d_DIR.'modules/'.$wb3d_open_addons_A[0][$i])) { 
								if($wb3d_open_addons_A[0][$i]!="img"){
									require wb3d_DIR.'modules/'.$wb3d_open_addons_A[0][$i].'/admin/button2.php';
	                                          }
	                                    }
	                                    else if (is_dir(wb3d_DIR_Pro.'modules/'.$wb3d_open_addons_A[0][$i])) { 
								if($wb3d_open_addons_A[0][$i]!="img"){
									require wb3d_DIR_Pro.'modules/'.$wb3d_open_addons_A[0][$i].'/admin/button2.php';
	                                          }
	                                    }
						}
						
					?>
				</div>
			</div><!-- End of Addon Panel -->
	            
			<!-- Color Table -->
			<div id="colormenu" title="color menu">
				<div id="colordragdiv"><?php esc_html_e('Color Table', 'wb3d'); ?>
					<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>close3.png" id="colormenuclose">
					<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>export.png" id="colormenu_export">
					<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>import.png" id="colormenu_import">
					<input class="wb3d_displaynone" type="file" id="file_colormenu" name="file_colormenu" />
				</div>
				<div id="allcolormenu">
				</div>
			</div><!--End Of Color Table -->

			<!-- Canvas Effect -->
			<div id="bk_canvas"></div>
	      	<div id="after_start" class=" es_tc">
				<!-- Top Panel -->
				<div id="allfieldset">
					<div id="t_left_div" class="div_fieldset">
						<fieldset id="fieldset_1" class="fieldset_block">
							<legend>
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>desktop.png" title="desktop/pc" class="w60h40">
							</legend>
							<label id="screan_selector1">1</label>
							<label id="label_width_0_spiner"><?php esc_html_e('Width :', 'wb3d'); ?></label>
							<label id="label_width_0_X"><?php esc_html_e('1.77 X', 'wb3d'); ?></label>
							<input id="width_0_spiner" type="number" >
							<label id="label_height_0_spiner"><?php esc_html_e('Height :', 'wb3d'); ?>
							</label>
							<input id="height_0_spiner" type="number">
						</fieldset>
					</div>
					<div id="t_right_div" class="div_fieldset">
						<fieldset id="fieldset_2" class="fieldset_block es_mt10">
							<legend>
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>htablet.png" title="laptop" class="w60h40">
							</legend>
							<label id="screan_selector2">2</label>
							<label id="label_height_1_spiner"><?php esc_html_e('Height :', 'wb3d'); ?></label>
							<input id="height_1_spiner" type="number">
							<label id="label_width_1_spiner"><?php esc_html_e('Width :', 'wb3d'); ?></label>
							<label id="label_width_1_X"><?php esc_html_e('W / H', 'wb3d'); ?></label>
							<label class="wb3d_displaynone" id="label_width_1_X0"><?php esc_html_e('W / H', 'wb3d'); ?></label>
							<input type="number" id="width_1_spiner" >
                                          <label title="<?php esc_html_e('Do you want to copy 1 to 2?', 'wb3d'); ?>" id="label_copy_laptop"><?php esc_html_e('Copy A', 'wb3d'); ?></label>
							<label title="<?php esc_html_e('Do you want to copy 1 to 2?(Without changing the objects in the panels)', 'wb3d'); ?>" id="label_copy_laptop2"><?php esc_html_e('Copy B', 'wb3d'); ?></label>
						</fieldset>
					</div>
					<div id="b_left_div" class="div_fieldset">
						<fieldset id="fieldset_3" class="fieldset_block">
							<legend>
									<img alt="" id="div_363" src="<?php echo esc_url(wb3d_plagin_images_URL);?>vtablet.png" title="tablet" >
							</legend>
							<label id="screan_selector3">3</label>
							<label id="label_width_2_spiner"><?php esc_html_e('Width :', 'wb3d'); ?></label>
							<label id="label_width_2_X"><?php esc_html_e('0.65 X', 'wb3d'); ?></label>
							<input type="number" id="width_2_spiner" >
							<label id="label_height_2_spiner"><?php esc_html_e('Height :', 'wb3d'); ?>
							</label>
							<input type="number" id="height_2_spiner">
                                          <label title="<?php esc_html_e('Do you want to copy 2 to 3?', 'wb3d'); ?>" id="label_copy_tablet"><?php esc_html_e('Copy A', 'wb3d'); ?></label>
							<label title="<?php esc_html_e('Do you want to copy 2 to 3?(Without changing the objects in the panels)', 'wb3d'); ?>" id="label_copy_tablet2"><?php esc_html_e('Copy B', 'wb3d'); ?></label>
							<div class="es_left es_ml5">
							</div>
							<div class="es_left es_ml15">
							</div>
						</fieldset>
					</div>
					<div id="b_right_div" class="div_fieldset ">
						<fieldset id="fieldset_4" class="fieldset_block" >
							<legend>
									<img alt="" id="div_364" src="<?php echo esc_url(wb3d_plagin_images_URL);?>mobile.png" title="mobile">
							</legend>
							<label id="screan_selector4">4</label>
							<label id="label_width_3_spiner"><?php esc_html_e('Width :', 'wb3d'); ?></label>
							<label id="label_width_3_X"><?php esc_html_e('0.50 X', 'wb3d'); ?></label>
							<input type="number" id="width_3_spiner" class="es_w25" >
							<label id="label_height_3_spiner"><?php esc_html_e('Height :', 'wb3d'); ?>
							</label>
							<input type="number" id="height_3_spiner" class="es_w25">
                                          <label title="<?php esc_html_e('Do you want to copy 3 to 4?', 'wb3d'); ?>" id="label_copy_mobile"><?php esc_html_e('Copy A', 'wb3d'); ?></label>
							<label title="<?php esc_html_e('Do you want to copy 3 to 4?(Without changing the objects in the panels)', 'wb3d'); ?>" id="label_copy_mobile2"><?php esc_html_e('Copy B', 'wb3d'); ?></label>
							<div class="es_left">
							</div>
							<div class="es_left es_ml15" >
							</div>
						</fieldset>
					</div>
				</div> <!--End OF Top Panel -->   
			</div>
			<!-- Edit Panel -->
			<div id="edit_panel" >
				<div id='maindiv_A'>
					<div id="maindiv_g2">
					</div>
					<div  class="pointer"  id='addslide'><?php esc_html_e('Add Slide', 'wb3d'); ?></div>
					<div id='maindiv_B'>
						<div >
							<div  class="pointer"  id='color_table'><?php esc_html_e('Color Tables', 'wb3d'); ?></div>
						</div>
					</div>
					<fieldset id='maindiv_C' class="fieldset_block">
						<legend><?php esc_html_e('Layer Setting', 'wb3d'); ?></legend>
						<div id='maindiv_D'>
							<div id="up" >  
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>up3.png'>
							</div>
							<div id="down">  
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>down3.png'>
							</div>
							<div id="left">
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>left3.png'>
							</div>
							<div id="reset">
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>r3.png'>
							</div>
							<div id="right">
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>right3.png'>
							</div>
							<input id="uptext" name="uptext" disabled="disabled"  size="1" value=0 >
							<input id="lefttext" name="lefttext" disabled="disabled" size="1" value=0 >
							<input id="righttext" name="righttext" disabled="disabled" size="1" value=0 >
							<input id="downtext" name="downtext" disabled="disabled" size="1" value=0>
						</div>
					</fieldset>
				</div>    
				<fieldset id="maindiv_E" class="fieldset_block effect_panel" >
					<legend ></legend>
					<div id="maindiv_g">
					</div>


					<div id="maindiv_f">
						<div class="effect_panel2">
							<label class=" es_left es_mt10 es_ml5"><?php esc_html_e('Effects:', 'wb3d'); ?></label>
							<select id="openingeffectselect">
								<option value="-1"><?php esc_html_e('Select', 'wb3d'); ?></option>
							</select>
							<div id="p_lock_effect" class="pointer" >
								<img alt="" id="lock_effect" class="imgbuttom pointer img40" src="<?php echo esc_url(wb3d_plagin_images_URL);?>unlock.png">
							</div>
							<div class="pointer" id="demo_layer_color_1">
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>tr.jpg'>
								<div id="demo_layer_color_A"></div>                               
							</div>
							<div class="pointer" id="demo_layer_color_2" >
								<img alt="" class="maindiv_img" src='<?php echo esc_url(wb3d_plagin_images_URL);?>tr.jpg'>
								<div id="demo_layer_color_B"></div>                               
							</div>
							<img alt="" id="neweffect" title="new" src="<?php echo esc_url(wb3d_plagin_images_URL);?>add3.png">
							<div  id="rename">
								<img alt="" title="Rename effect & save slider" src="<?php echo esc_url(wb3d_plagin_images_URL);?>rename.png" class="imgbuttom img40" >
							</div>
							<div  id="closeeffect">
								<img alt="" title="Remove effect & save slider" src="<?php echo esc_url(wb3d_plagin_images_URL);?>close3.png" class="imgbuttom img40 es_left es_ml5" >
							</div>
						</div>
						<div class="effect_panel3">
							<div id="dis_c_effect">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>line2.jpg" class="imgbuttom img40 pointer">
							</div>
							<div id="c_effect">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>line1.jpg" class="imgbuttom img40 pointer">
							</div>
							<div id="drag" class="border">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>hand2.png" class="imgbuttom img40 pointer">
							</div>
							<div id="Curved" class="border">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>line2.png" class="imgbuttom img40 pointer">
							</div>
							<div id="straight" class="border">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>line.png" class="imgbuttom img40 pointer">
							</div>
							<div id="stop" class="border">
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>pointin1.png" title="set pixels in one location" class="imgbuttom pointer img40">
								<div class="wb3d_displaynone" id="div_stop_spinner">
									<input id="stop_spinner" type="number" max="32000" min="1" value="1">   
								</div>
							</div>
							<div id="undo" class="border" >
								<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>undo.png" class="imgbuttom img40 pointer">
							</div>
						</div>
						<div class="effect_panel4">
							<div class="effect_panel5">    
								<div id="borderid" class="border">
									<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>border1.png" title="border" class="imgbuttom pointer img40">
								</div>

								<div id="translatez" class="border">
									<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>translateZ.png" class="imgbuttom pointer img40">
								</div>
								<div id="token-e" class="border">
									<img alt="" id="token-e_img"  title="notification" src="<?php echo esc_url(wb3d_plagin_images_URL);?>sendreceive.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-token" >
										<div>
											<img alt="" id="sendtoken" title="Send notification" src="<?php echo esc_url(wb3d_plagin_images_URL);?>send.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="gettoken" title="Receive notificatin"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>receive.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>
								<div id="origin-t-b" class="border">
									<img alt="" id="origin-t-b_img" title="transform origin" src="<?php echo esc_url(wb3d_plagin_images_URL);?>orgin3.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-origin-t-b">
										<div>
											<img alt="" id="transform_originx" title="transform origin X" src="<?php echo esc_url(wb3d_plagin_images_URL);?>x.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="transform_originy" title="transform origin Y"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>y.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>

								<div id="skewxy" class="border">
									<img alt="" id="skewxy_img"  title="SKew" src="<?php echo esc_url(wb3d_plagin_images_URL);?>skew3.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-skewxy">
										<div>
											<img alt="" id="skewx" title="SKewx" src="<?php echo esc_url(wb3d_plagin_images_URL);?>skewx.jpg" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="skewy" title="SKewy"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>skewy.jpg" class="imgbuttom pointer">
										</div>
									</div>
								</div>

								<div id="zindex" class="border">
									<img alt="" title="z-index"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>zindex.png" class="imgbuttom pointer img40">
								</div>
								<div class="border" id="radius">
									<img alt="" title="border-radius" src="<?php echo esc_url(wb3d_plagin_images_URL);?>border-r.png" class="imgbuttom pointer img40">
								</div>
								<div class="border" id="shadaw-t-b">
									<img alt="" id="shadaw-t-b_img"  title="shadaw" src="<?php echo esc_url(wb3d_plagin_images_URL);?>shadow3.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-shadaw-t-b">
										<div>
											<img alt="" id="textshadow" title="textshadow" src="<?php echo esc_url(wb3d_plagin_images_URL);?>textshadow.jpg" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="boxshadow" title="boxshadow"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>boxshadow.jpg" class="imgbuttom pointer">
										</div>
									</div>
								</div>
								<div class="border" id="opacity3">
									<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>opacity.png" title="opacity" class="imgbuttom pointer img40">
								</div>
								<div id="perspective_origin" class="border">
									<img alt="" id="perspective_origin_img" title="perpective origin" src="<?php echo esc_url(wb3d_plagin_images_URL);?>perspective.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-perspective_origin">
										<div>
											<img alt="" id="perspective_originx" title="perspective origin X" src="<?php echo esc_url(wb3d_plagin_images_URL);?>x.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="perspective_originy" title="perspective origin Y"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>y.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>

								<div id="leterspacing" class="border pointer"><?php esc_html_e('Letter Spacing', 'wb3d'); ?></div>
								<div id="class_id" class="border pointer"><?php esc_html_e('Class', 'wb3d'); ?></div>

								<div class="border" id="stophere">
									<img alt="" title="Stop all slides" src="<?php echo esc_url(wb3d_plagin_images_URL);?>stop2.png" class="imgbuttom pointer img40" >
								</div>

							</div>  

							<div id="div_colors">
								<div class="border" id="colors">
									<img alt=""   title="Colors" src="<?php echo esc_url(wb3d_plagin_images_URL);?>color33.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-colors">
										<div>
											<img alt="" id="es_color1" title="Color 1" src="<?php echo esc_url(wb3d_plagin_images_URL);?>color1.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="es_color2" title="Color 2"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>color2.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="es_color3" title="Color 3"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>color3.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>


								<div class="border" id="gradient">
									<img alt="" title="Gradient" src="<?php echo esc_url(wb3d_plagin_images_URL);?>gradient.png" class="imgbuttom pointer img40" >
								</div>

					
								<div class="border" id="resize-w">
									<img alt=""  title="resize" src="<?php echo esc_url(wb3d_plagin_images_URL);?>heightwidth.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone" id="div-resize-w">
										<div>
											<img alt="" id="sizew" title="Width" src="<?php echo esc_url(wb3d_plagin_images_URL);?>width.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="sizeh" title="Height"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>height.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>

								<div class="border" id="resize-e">
									<img alt=""  title="Scale" src="<?php echo esc_url(wb3d_plagin_images_URL);?>sxy.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone"  id="div-resize">
										<div>
											<img alt="" id="sizex" title="ScaleX" src="<?php echo esc_url(wb3d_plagin_images_URL);?>width-r.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="sizey" title="ScaleY"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>height-r.png" class="imgbuttom pointer">
										</div>
									</div>
								</div>                    
								<div class="border pointer" id="media"><?php esc_html_e('Object number', 'wb3d'); ?>
								</div>    
								<div class="border" id="speed">
									<img alt=""  src="<?php echo esc_url(wb3d_plagin_images_URL);?>speed.png" class="imgbuttom pointer img40">
								</div>
								<div class="border" id="rotate-e">
									<img alt="" id="rotate-e_img" title="rotate" src="<?php echo esc_url(wb3d_plagin_images_URL);?>rotate3.png" class="imgbuttom pointer img40">
									<div class="wb3d_displaynone"  id="div-rotate">
										<div>
											<img alt="" id="rotate" title="rotate" src="<?php echo esc_url(wb3d_plagin_images_URL);?>rotate.png" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="rx" title="rotate-x"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>rx.jpg" class="imgbuttom pointer">
										</div>
										<div>
											<img alt="" id="ry" title="rotate-y"  src="<?php echo esc_url(wb3d_plagin_images_URL);?>ry.jpg" class="imgbuttom pointer">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</fieldset>
			</div><!--End of Edit Panel -->    


			<!-- Color Buttons -->
			<div id="div_colorTable">
				<div class="pointer" id="colorTable0">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable1">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable2">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable3">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable4">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable5">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable6">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable7">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable8">
					<div class="colorTable"></div>                               
				</div>
				<div class="pointer" id="colorTable9">
					<div class="colorTable"></div>                               
				</div>
			</div><!--End of Color Buttons -->
			<!-- Main Div-Slider -->
			<div id='maindiv'  > 
				<div id='scrollid1'>
					<div id='scrollid1-1'></div>                
				</div>
				<div id='scrollid2'>
					<div id='divtitleslide2' ></div>
				</div>
				<div id="p_lock_canvas" class="pointer" >
					<img alt="" id="lock_canvas" class="imgbuttom pointer img40" src="<?php echo esc_url(wb3d_plagin_images_URL);?>lock.png">
				</div>

				<div id='divleft'>
					
				</div>
				<div class="pointer" id='add_new_layer'>	
					<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>new_layer.jpg">
				</div>
				<div id='divbiger'>
					<label class="wb3d_displaynone" id="pointer_value_xy" ></label>
					<div id='divtop'></div>
					<div id='divscrolltop'>V
						<input disabled="disabled" type="number" min="0" id='spinnertop' value="0">
					</div>
					<div id='divstopimg'>
						<img alt="" id="stop_slide" src="<?php echo esc_url(wb3d_plagin_images_URL);?>stopplay.jpg">
					</div>
					<div id='divplaystop'>
						<input disabled="disabled" id='spinnerplay'>
					</div>
					<div title="canvas maximum-height size" id='div_canvas'>
						<input type="number" id='canvas_relative' min="50" value="1000">
						<input title="<?php esc_attr_e('Hide all objects', 'wb3d'); ?>" type="checkbox" id='canvas_checkbox' >
					</div>
					<div id='div_mode'>
						<input type="radio" name="es_mode" id='show_effects0'  value="0"><?php esc_html_e('Off', 'wb3d'); ?>
                                    <input type="radio" name="es_mode" id='show_effects1' checked value="1" ><?php esc_html_e('On', 'wb3d'); ?>
                                    <label id="inactive_label"><?php esc_html_e('Inactive Scroll/Time Range', 'wb3d'); ?></label> 
						<input type="checkbox"  id='inactive' checked >
					</div>
					<div id='divb'>
						<div id="wb3dh_0">
							<div class="wb3d_displaynone" id='wb3dh_point'></div>
							<canvas id='maincanvas' class="detailaddslide" ></canvas>
							<div id="start_act"></div>
							<div id="end_act"></div>

							<?php 
                                                echo wp_kses_post($GLOBALS['wb3d_html']);
							?>

						</div>
					</div>
				</div>
			</div><!--End Of Main Div-Slider -->

			<!-- Bottom Panel -->
			<div id="div-44">
				<div id="div-44_A" >
					<div class="tab_b" id="tab_css">
						<label class="es_tab"><?php esc_html_e('Css', 'wb3d'); ?></label> 
					</div>
					<div class="tab_b" id="tab_setting">
						<label class="es_tab"><?php esc_html_e('Setting', 'wb3d'); ?></label> 
					</div>
					<div class="tab_b" id="tab_replace">
						<label class="es_tab"><?php esc_html_e('Replace Word/Url', 'wb3d'); ?></label> 
					</div>
					<div class="tab_b" id="tab_addons">
						<label class="es_tab"><?php esc_html_e(' Modules ', 'wb3d'); ?></label> 
					</div>
				</div>
				<!-- Content Setting Tab -->
				<div class="content_b" id="div_setting">  
					<fieldset class="fieldset_block" id="fieldset_setting">
						<legend><?php esc_html_e('Settinng', 'wb3d'); ?></legend>
					
						<div id="fieldset_setting_sub">
      						<fieldset id="fieldset_fullwidth" class="fieldset_block2">
      							<legend><?php esc_html_e('Width :', 'wb3d'); ?> </legend>
      								<label id="fullwidth_label" ><?php esc_html_e('Width :', 'wb3d'); ?></label>
      								<select id="fullwidth"  >
      									<option value="0"><?php esc_html_e('Auto ', 'wb3d'); ?></option>
      									<option value="1"><?php esc_html_e('Full Width ', 'wb3d'); ?></option>
      								</select>
      						</fieldset>
      						<fieldset id="fieldset_setting_B" class="fieldset_block2">
      							<legend><?php esc_html_e('Background :', 'wb3d'); ?> </legend>
      							<div class=" es_mt10 es_left">
      								<label id="color_bk_slider_label"><?php esc_html_e('Background 3WB :', 'wb3d'); ?></label>
      								<div class="pointer" id="color_bk_slider">
      									<div id="color_bk_slider_A"></div>                               
      								</div>
      							</div>
      						</fieldset>
      						<fieldset id="fieldset_colortype" class="fieldset_block2">
      							<legend><?php esc_html_e('Color table type :', 'wb3d'); ?> </legend>
      								<label id="colortype_label" ><?php esc_html_e('Type :', 'wb3d'); ?></label>
      								<select id="colortype"  >
      									<option value="0"><?php esc_html_e('Public ', 'wb3d'); ?></option>
      									<option value="1"><?php esc_html_e('Private ', 'wb3d'); ?></option>
      								</select>
      						</fieldset>
      						<fieldset id="fieldset_mouse" class="fieldset_block2">
      							<legend><?php esc_html_e('Mouse :', 'wb3d'); ?> </legend>

      								<label id="wheel_label" ><?php esc_html_e('Wheel :', 'wb3d'); ?></label>
      								<input type="number"  id="wheel" value="10" min="0" >

      								<label id="wheel_speed_label" ><?php esc_html_e('Speed :', 'wb3d'); ?></label>
      								<input type="number"  id="wheel_speed" value="5" min="1" >

      								<label id="wheel_checkbox_label"><?php esc_html_e('Jump Scroll :', 'wb3d'); ?></label>
      								<input  type="checkbox"  id="wheel_checkbox"  >
      								<label id="wheel_label2"><?php esc_html_e('Active When 3WB Template is active & 3WB shortcode is one ', 'wb3d'); ?></label>
      						</fieldset>
                                          <fieldset id="fieldset_touch" class="fieldset_block2">
                                                <legend><?php esc_html_e('Touch (Mobile,...) :', 'wb3d'); ?> </legend>
                                                      <label id="touch_label" ><?php esc_html_e('Touch Move :', 'wb3d'); ?></label>
                                                      <select id="touch"  >
                                                            <option value="0"><?php esc_html_e('Disable zoom,Enable Virtual Scroll', 'wb3d'); ?></option>
                                                            <option value="1"><?php esc_html_e('Enable zoom, Disable Virtual Scroll', 'wb3d'); ?></option>
                                                      </select>
                                          </fieldset>
            					<fieldset id="fieldset_scroll" class="fieldset_block2">
      							<legend><?php esc_html_e('Scroll :', 'wb3d'); ?> </legend>
      							<div class=" es_mt10 es_left">
      								<label id="display_scroll_label"><?php esc_html_e('Hide Scroll :', 'wb3d'); ?></label>
      								<input type="checkbox"  id="display_scroll"  >

      							</div>
      						</fieldset>
      						<fieldset id="fieldset_scroll2" class="fieldset_block2">
      							<legend><?php esc_html_e('Scroll/Reste  +/- :', 'wb3d'); ?> </legend>
      							<div class=" es_mt10 es_left">
      								<label id="reset_scroll_label"><?php esc_html_e('Up - :', 'wb3d'); ?></label>
      								<input type="number"  id="reset_scroll" min="5" >

      							</div>
      							<div class=" es_mt10 es_left">
      								<label id="reset_scroll2_label" ><?php esc_html_e('Down + :', 'wb3d'); ?></label>
      								<input type="number"  id="reset_scroll2" min="5" >

      							</div>
      						</fieldset>
      						<fieldset id="fieldset_colortable" class="fieldset_block2">
      							<legend><?php esc_html_e('Activate tables', 'wb3d'); ?> </legend>
      								<label id="colortable_label"><?php esc_html_e('Activation of the color tables to number', 'wb3d'); ?></label>
      								<input type="number"  id="colortable_to" min="1" max="10" value="10">
      						</fieldset>
						</div>
					</fieldset>   
				</div><!--End of Content Setting Tab -->

				<!--Content Css Tab -->
				<div class="content_b" id="div_tab_css">
					<label id="wb3d_classtext_label"><?php esc_html_e('Example', 'wb3d'); ?></label>
					<textarea id="wb3d_classtext"></textarea>
				</div>

				<!--Content Random effect Tab -->
				<div class="content_b" id="div_random">  
					<fieldset class="fieldset_block " id="div_replace">
						<input type="text" placeholder="old-url.com" id="wb3d_replace1">  
						<input type="text" placeholder="new-url.com" id="wb3d_replace2">  
						<button id="wb3d_replace"><?php esc_html_e('Replace', 'wb3d'); ?></button>       
					</fieldset> 
				</div><!--End Of Content Random effect Tab -->

				<div class="content_b" id="div_addons">
					<input class="wb3d_pointer" type="button" id="wb3d_install_addon" value="<?php esc_html_e('Install/Unistall Module', 'wb3d'); ?>">      
                              <label class="wb3d_pointer" id="wb3d_select_addon" ><?php esc_html_e('Select/Unselect All Modules', 'wb3d'); ?></label>   
                                    <label class="wb3d_pointer" id="wb3d_download_addon" ><?php esc_html_e('Copy New Modules From Pro Version', 'wb3d'); ?></label>   
                                    <div class="wb3d_displaynone" id="wb3d_waiting6" >
                                    	<img alt="" src="<?php echo esc_url(wb3d_plagin_images_URL);?>1.gif">
                                    </div>
					<div id="addons_A">
						<?php
							global $wb3d_addons;
							require wb3d_DIR.'includes/img/admin/button1.php';
							for ($i=1;$i<count($wb3d_addons);$i++) {
								if (is_dir(wb3d_DIR.'modules/'.$wb3d_addons[$i])) { 
									require wb3d_DIR.'modules/'.$wb3d_addons[$i].'/admin/button1.php';
								}
								else if (is_dir(wb3d_DIR_Pro.'modules/'.$wb3d_addons[$i])) { 
									require wb3d_DIR_Pro.'modules/'.$wb3d_addons[$i].'/admin/button1.php';
								}
							}
						?>                 
					</div>
				</div>

				<div class="content_b" id="div_type_slider">  
					<div id="demo_type_slider"></div> 
				</div>
			</div> <!--End of Bottom Panel --> 
		</div> <!-- End Of start_sub -->
	</div> <!-- End Of start tag -->
</div><!-- END OF wb3d_panel -->




