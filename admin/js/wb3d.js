/**
* Author URI:  https://3dwebsitebuilder.com/
* Author : Keivan Kamali
*/

window.wb3d_setupdata=[];

//create Id for objects
function wb3d_create_id(id,obm){
	if(obm.wb3d_id[id]===undefined){
		obm.wb3d_id_num++;
		obm.wb3d_id[id]=obm.wb3d_id_num;
		obm.wb3d_ids[obm.wb3d_id_num]=id;
	}
	return obm.wb3d_id[id];
}


// Start And Create Main Object
window.addEventListener('load', function(){
	var obm=new wb3d_readslides();
	obm.resizepage=1;
	obm.check_effect_compile();
});


// First Function Start When Load Dom
wb3d_readslides=function  () {

	if(wb3d.flag!='view'){
		const collection = document.getElementsByClassName("updated");
		for (let i = 0; i < collection.length; i++) {
			collection[i].remove();
		}
	}
	wb3d.wb3d_pro2=0;
	if(wb3d.wb3d_pro==0){
		wb3d_pro={};
		if(typeof(wb3d_remove_selectet_effect_token) === "function"){
			wb3d.wb3d_pro2=1;
		}
	}
	else if(wb3d.wb3d_pro==1){
		wb3d.wb3d_pro2=1;
	}
	if(wb3d.wb3d_pro2==0){
		wb3d_pro_install_new_modules=function(){
			//nothing in lite version
		}
		this.putimagecanvas=function(){
			if(wb3d.flag==='main'){
				document.getElementById("maincanvas-1").style.display="none";
			}
		};		
	}
	else{
		// if(wb3d.flag=='main'){
		// 	if(wb3d_pro.wb3d_pro_effect<1000){
		// 		var txt=jQuery("#wb3d_limit1_pro").text();
		// 		txt+=' '+wb3d_pro.wb3d_pro_effect+' Effects , '+wb3d_pro.wb3d_pro_act+' Act And '+wb3d_pro.wb3d_pro_event+' Event ';
		// 		txt+=jQuery("#wb3d_limit2_pro").text();
		// 		alert(txt)
		// 	}
		// }
		wb3d_load_putimagecanvas();
	}


	var level;
	var txt= '<div id="wb3d_fullscrean" style="display: none;" >';
	txt+= '<img id="wb3d_fullscrean_img" src="'+wb3d.wb3d_plagin_images_URL+'/1.gif" style=" display: block;"> ';   
	txt+= '<div style="width: 80px;height: 80px;top: 0px;left: 0px;position: absolute;background-color: #000;">';
	txt+= '<img id="wb3d_fullscrean_close" src="'+wb3d.wb3d_plagin_images_URL+'close3.png" class="imgbuttom img40 pointer">';
	txt+= '</div></div>';
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',txt);
	var obm=this;
	wb3d_setupdata.obm=this;
	var i;
	wb3d.wb3d_time*=1000;
	var t=new Date();
	obm.wb3d_time_difference=t.getTime()-wb3d.wb3d_time;

	if(wb3d.flag==='main'){
		obm.jQuery_GET = [];
		var parms = location.search.substring(1).split('&');
		for (i=0; i<parms.length; i++) {
			var pos = parms[i].indexOf('=');
			if (pos > 0){
				obm.jQuery_GET[ parms[i].substring(0, pos) ] = decodeURIComponent(parms[i].substring(pos+1));
                  }
		}

	}
	wb3d_compilesliderX=function(sn,wn,cu){
		var i;

		if(wn===0){
			level=0;
            }
		else{
			level=1;
            }
		if(document.getElementById('wb3d_style_'+obm.data_slide[cu][wn].id_ves)===null){
			document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend','<style id="wb3d_style_'+obm.data_slide[cu][wn].id_ves+'" ></style>');
            }

		obm.static_s[sn]=[];
		obm.static_l[sn]=[];
		obm.static_y[sn]=[];
		obm.static_c[sn]=0;
		obm.gs[sn]=[];
		obm.dataslide[sn]=[];
		obm.db_effect[sn]=(obm.data_slide[cu][wn].effects2);
		if(wb3d.wb3d_pro2==0){
			if(obm.db_effect[sn]!=''){
				alert(jQuery("#alert_open_pro_project").text());
				if(wb3d.flag!='view'){
					window.location.href = wb3d.wb3d_ADMIN_URL+'admin.php?page=wb3d_demo';
				}
				return;
			}
		}
		if(wb3d.wb3d_pro==1){
			if(wb3d_pro.wb3d_pro_license==0){
				alert(jQuery("#alert_many_effects").text());
				window.location.href = wb3d.wb3d_ADMIN_URL+'admin.php?page=wb3d_demo_license';
			}
		}
	      // else if(obm.db_effect[sn].num!=undefined){
	      //       if(wb3d_pro.wb3d_pro_effect<obm.db_effect[sn].num){
	      //             if(wb3d.flag=='main'&&obm.effect_not===0){
	      //             	obm.effect_not=1;
	      //                   alert(jQuery("#alert_many_effects").text());
	      //             }
	      //             else{
	      //             	wb3d_pro.wb3d_pro_l=1;
	      //             }	                  	
	      //       }
	      // }

		obm.colortable[sn]=(obm.data_slide[cu][wn].color2);
		obm.effect_color[sn]=wb3d_hexToBytes(obm.data_slide[cu][wn].effect_color);
            obm.css[sn]=JSON.parse(obm.data_slide[cu][wn].css2);
		obm.open_addon[sn]=obm.data_slide[cu][wn].open_addons;
		obm.html[sn]=JSON.parse(obm.data_slide[cu][wn].html2);
            
		document.getElementById('wb3d_style_'+obm.data_slide[cu][wn].id_ves).innerHTML =obm.css[sn];
		if(level===0){
			obm.layerstext=JSON.parse(obm.data_slide[cu][wn].layerstext);
		}
		obm.event[sn]=JSON.parse(obm.data_slide[cu][wn].event);
		var e_text1=(obm.data_slide[cu][wn].layers2);
		var effect_name=obm.data_slide[cu][wn].effect_name;

		if(level===0){
			obm.open_addons=(obm.data_slide[cu][wn].open_addons);    
                  for(i=0;i<obm.addons[cu].length;i++){
                        var addon_flag=0;
                        for(var j=0;j<obm.open_addons.length;j++){
                              if(obm.open_addons[j]===obm.addons[cu][i]){
                                    addon_flag=1;
                                    break;
                              }
                        }

                        if(addon_flag===1){           
                              if(wb3d.flag==='main'){
                                    jQuery('#wb3d_addon_'+obm.addons[cu][i]+'_checkbox').prop('checked', true);
                                    if(obm.addons[cu][i]==='img'){
                                          jQuery('#wb3d_addon_'+obm.addons[cu][i]+'_checkbox').prop('disabled', true);
                                    }
                              }
                              wb3d_setupdata[obm.addons[cu][i]](obm);
                        }
                        else{
                              if(wb3d.flag==='main'){
                                    jQuery('#wb3d_addon_'+obm.addons[cu][i]+'_checkbox').prop('checked', false);
                              }
                        }
                        if(wb3d.flag==='main'){
                              jQuery( '#'+obm.addons[cu][i]+'_div').draggable({ containment: '#start_sub', scroll: false });
                              jQuery('#wb3d_addon_'+obm.addons[cu][i]+'2').click(function(){
                                    var obm=window.wb3d_setupdata.obm;
                                    var id=this.id.split('wb3d_addon_')[1];
                                    id = id.substring(0, id.length - 1);
                                    obm.setnewvalue[id]();
                              });
                        }
                  }
            }

		obm.number_effect_name[sn]=effect_name.length/2;
		for(var es=0;es<obm.number_effect_name[sn];es++){
			var ef=effect_name[es*2];
			obm.effect_of_location[sn+'-'+es]=ef;
			obm.location_of_effect[sn+'-'+ef]=es;
			obm.name_effect[sn+'-'+ef]=effect_name[es*2+1];
			if(level===0&&wb3d.flag==='main'){
				if(wb3d.wb3d_pro2==1){
					wb3d_add_effect(ef,0,obm);
				}
				for(i=0;i<obm.open_addons.length;i++){
					if(obm.setupeffect[obm.open_addons[i]]!=undefined){
						obm.setupeffect[obm.open_addons[i]](ef,obm);
                              }
				}
			}
		}

		obm.setting[sn]=(obm.data_slide[cu][wn].setting);
		obm.slidnum[sn]=obm.setting[sn].num;

		if(level===0&&wb3d.flag==='main'){
			obm.dataslide.new=(obm.data_slide[cu][wn].layers0);
			for(var is=0;is<10;is++){
				wb3d_set_color_tables(obm,obm.setting[sn]['c'+is]);  
			}
		}
		obm.dataslide[sn]=e_text1;
		wb3d_new_slider_data(sn,obm,cu,level);
	};


	//Scroll And Slider Function
	wb3d_onMove_scrollbar = function(){
		var cu=obm.cu;
		var p=1;
		var mode_z,F,ms,s5,t1,F1,L,z,it,itz,mode_id,x2,x,delta,pos,scr2;
		if(obm.w_sc===0){
			return 0;
            }

		var idm=obm.wb3d_ids[obm.es_mousedown3];

		if(obm.w_sc==='hs2'&&wb3d.flag==='main'){
			s5=obm.bx;
		}
		else if(obm.w_sc==='hs2'){
			s5=obm.bx-document.getElementsByTagName("html")[0].scrollLeft;
		}
		else if(wb3d.flag==='main'){
			s5=obm.by;
		}
		else{
			t1=Number(document.body.scrollTop);
			if((isNaN(t1)||t1===0)&&document.documentElement.scrollTop>0){
				t1=document.documentElement.scrollTop;
			}
			if(obm.touchstart===1){
				s5=obm.by;
			}
			else{
				s5=obm.by-t1;
			}
		}

		if(idm===undefined||idm===0){
			return;
		}

		var ID=idm.split('_')[1];
		ID=ID.split('-');
		L=ID[1];
		var ids=cu+'_'+ID[0];
		var ds=obm.d;

		var wh=obm.wh_h[obm.id1];
		var sn=obm.scroll_sn;
		var idg,i;
		if(obm.scroll_level>0){
			L=ID[4];
			ids=cu+'_'+ID[0]+'-'+ID[1]+'-'+ID[2]+'-'+ID[3];
			z=obm.scroll_down;
			F=obm.dataslide[sn][ obm.los[sn+'-'+ID[3]] ][obm.lo_l[sn+'-'+ID[3]+'-'+z[4] ]];
			F1=obm.dataslide[sn][ obm.los[sn+'-'+ID[3]] ][0];
			mode_id=ID[5];
			mode_z=z[5];
			it=ID[0]+'-'+ID[1]+'-'+ID[2]+'-'+ID[3]+'-'+ID[4]+'-'+ID[5];
			itz=ID[0]+'-'+ID[1]+'-'+ID[2]+'-'+ID[3]+'-'+z[4];
			idg=obm.wb3d_id[cu+'_'+ID[0]+'-'+ID[1]+'-'+ID[2]];
			var sn3=obm.sn[cu+'-0'];
			var F3=obm.dataslide[sn3][ obm.los[sn3+'-'+ID[0]] ][obm.lo_l[sn3+'-'+ID[0]+'-'+ID[1]]];
                  wh=obm.wh_h[obm.wb3d_id['0_'+it]];

			if(F3['vs_'+ID[2]  ]===1){
				return;
			}
		}
		else{
			idg=0;
			F1=obm.dataslide[sn][ obm.los[sn+'-'+ID[0]] ][0];
			z=obm.scroll_down;
			it=ID[0]+'-'+ID[1]+'-'+ID[2];
			itz=ID[0]+'-'+z[1];
			F=obm.dataslide[sn][ obm.los[sn+'-'+ID[0]] ][obm.lo_l[sn+'-'+ID[0]+'-'+z[1]]];
			mode_id=ID[2];
			mode_z=z[2];
		}

		if(wb3d.flag==='main'&&obm.scroll_level===0){
			ms=obm.setting[sn]['vmaxsc-'+ds];
		}
		else if(obm.scroll_level===0){
			ms=obm. scrollMaxY[cu+'_'+idg]+obm.MaXvscroll;
		}
		else{
			ms=obm. scrollMaxY[cu+'_'+idg];
		}

		if(ms<0){
			ms=0;
		}

		if(obm.w_sc==='hs2'||obm.w_sc==='vs2'){
			ms=1000;
		}

		x=parseInt(ms)+parseInt(F['sizey_'+ds+'-'+mode_z]*wh);
		var e=F['sizey_'+ds+'-'+mode_z]*wh;

		if(obm.w_sc==='hs'||obm.w_sc==='hs2'){
			x2=parseInt(F['sizex2_'+ds+'-'+mode_id])*wh;
			x=parseInt(F['sizex_'+ds+'-'+mode_z])*wh;
		}
		else if(obm.w_sc==='vs'||obm.w_sc==='vs2'){
			x2=parseInt(F['sizey2_'+ds+'-'+mode_id])*wh;
			x=parseInt(F['sizey_'+ds+'-'+mode_z])*wh;
		}

		if(obm.lockscrollY[ids]===1&&obm.w_sc==='v'){
			return 0;
		}

		var hh= parseInt((e * e) / x) ;
		if(obm.scrollstatus===1&&(obm.w_sc==='hs'||obm.w_sc==='vs'||obm.w_sc==='hs2'||obm.w_sc==='vs2')){
			delta = s5-obm.bk_mouse ;
			pos=Math.min((x-x2/2), Math.max(-x2/2,  obm.offset_0+delta));
			scr2= Math.ceil(((pos+(x2/2))*ms)/(x));
			if(obm.w_sc==='hs2'||obm.w_sc==='vs2')
			{
				obm.slider[obm.wb3d_id[cu+'_'+it]]=scr2;
				return;
			}
		}
		else { 
			delta = s5-obm.bk_mouse ;
			pos=Math.min((e - hh), Math.max(0,  obm.offset_0+delta));
			scr2= Math.ceil((pos*ms/p)/(e-hh));
		}

		obm.vscroll[cu+'_'+idg]=~~(scr2);
		if(obm.scroll_level===0){
                  x=wb3d_find_x_scroll(cu+'_'+idg,obm.vscroll[cu+'_'+idg]);
                  x=x.x;
            }
		obm.vscrollM[cu+'_'+idg]	=obm.vscroll[cu+'_'+idg]-x;

		obm.lock_scroll_w_h=1;
		obm.timer_scroll_w_h=250;
		wb3d_timer_scroll_lock_w_h();
	};


	obm.es1_Tab=1;

	wb3d_reset_obj_xy=function (){  
		obm.public=[];
		obm.private=[];
		obm.bk_f=[];
		obm.bk_flag=[];
		obm.bk_transform2=[];
		obm.bk_change_sizew=[];
		obm.bk_change_sizeh=[];
		obm.id_pre_stop=[];
		obm.bk_vscroll_id1=[];
		obm.bk_vscroll_id2=[];
		obm.top0wb3d=[];	
		obm.chenge_details_obj=[];
		obm.chenge_details_obj2=[];
		obm.bk_transform1=[];
		obm.h2=[];
		obm.w2=[];
		obm.bk_top3=[];
		obm.flag_bl2=[];
		obm.max_top=[];
		obm.scY1=[];
		obm.scY2=[];
		obm.bk_t_l=[];
		obm.bk_t_l2=[];
		obm.bk_left2=[];
		obm.bk_top2=[];
		var h;
		if(wb3d.flag!='main'){
			for(var i=0;i<1000;i++){
				if(document.getElementById('wb3dh_'+i)!=null){
					h=document.getElementById('wb3dh_'+i).offsetHeight;
					document.getElementById('wb3dh_'+i).style.height='auto';
					document.getElementById('wb3d_'+i).style.height='auto';
				}
				else{
					break;
				}
			}
		}
		obm.flag_bl2['0_0']=0;
	};

	// Compile Effects
	this.check_effect_compile=function(){
		var flag=1;
		var sn;
		if(wb3d.wb3d_pro2==1){
			for(var i=0;i<=obm.cunter;i++){
				for(var t=0;t<obm.max_sub[i];t++){
					sn=obm.sn[i+'-'+t];
					if(obm.number_effect_compile[sn]!=obm.number_effect_name[sn]){
						flag=0;	
					}
				}
			}
		}
		if(flag===1&&obm.load===1){
			obm.cu=0;
			var cu=0;
			wb3d_change_screen_size(obm);
			if(wb3d.flag==='main'){
				if(wb3d.wb3d_pro2==1){
					wb3d_remove_selectet_effect_token(jQuery('#openingeffectselect').val(),obm);
					wb3d_create_selected_effect_token(jQuery('#openingeffectselect').val(),obm);
				}
				wb3d_scroll_tab_leftmenu('slide_menu',obm);
			}
			if(wb3d.flag==='main'){
				if(wb3d.wb3d_pro2==1){
					wb3d_remove_all_effect_token(obm.activeslide[cu],obm);
					wb3d_create_all_layer_token(obm.activeslide[cu],obm);
				}
				document.getElementById('wb3d_waiting').style.display='none';
			}
			obm.putimagecanvas();
			setTimeout(function(){
				obm.putimagecanvas();
			},680);
			obm.loadslides=0;
			if(wb3d.flag==='main'){
				wb3d_reset_data_slider();
				wb3d_start_frame(obm,0);
				wb3d_start_frame(obm,0);
			}
			obm.resizepage=0;
			setIntervaltmpcanvas=setInterval(function() {
				wb3d_start_frame(obm,0);
			}, 40);
		}
		else{
			setTimeout(function(){
				obm. check_effect_compile();
			},80);
			return;
		}

	};

	var wb3dtheme=document.getElementById('wb3dtheme');
	if (typeof(wb3dtheme) != 'undefined' && wb3dtheme != null){
		this.wb3dtheme=1;		
	}
	else{
		this.wb3dtheme=0;		
	}
	
	this.core=navigator.hardwareConcurrency;
	if(this.core===undefined){
		this.core=2;
	}

	var cu,sn;
	wb3d_reset_obj_xy();
	this.es1_key=-1;
	this.es1_key2=-1;
      if(wb3d.flag==='main'){
            this.inactiveRange=1;
      }
	this.tmp_es1_charStr=-1;
	this.setting=[];
	this.new_layer=0;
	this.sColortable=0;
	this.mouse_slider_h1=-1;
	this.U_P=[];
	this.t_p = [];
	this.cunter_effect=[];
	this.mouseenter=[];
	this.mouseout=[];
	this.mouseclick=[];
	this.mousedown=[];
	this.wh_w=[];
	this.wh_h=[];
	this.tl_t=[];
	this.tl_l=[];
	this.radius=[];
	this.mouseenter_obj=[];
	this.mouseleave_obj=[];
	this.mousedown_obj=[];
	this.mousemove_obj=[];
	this.mouseup_obj=[];
	this.event_obj=[];
	this.event_not=0;
	this.act_not=0;
	this.effect_not=0;
      
	this.tab_leftmenu='slide_menu';
	this.idc=[];
	this.idd=[];
	this.ide=[];
	this.wh3=[];
	this.ide2=[];
	this.act=[];
	this.event=[];
	this.load=0;
	this.los=[];
	this.maxtime=[];
	this.es1_T_key=[];
	this.val=[];
	this.vesid=[];
	this.modules=[];
	this.bk_jump_scrollX=[];
	this.bk_jump_scrollY=[];
	this.b_width =[];
	this.b_height =[];
	this.image=[];
	this.dataslide=[];
	this.db_effect=[];
	this.event=[];
	this.version='1.1.0';
	this.colortable=[];
	this.effect_color=[];
	this.wb3d=[];
	this.wb3dB=[];
	this.wb3dY=[];
	this.vscrollS=[];
	this.vscroll_ids=[];
	this.location_of_effect=[];
	this.effect_of_location=[];
	this.size1=[];
	this.change_slide=[];
	this.id_time_stop=[];
	this.id_stop=[];
	this.id_bk_pre_stop=[];
	this.setvalue=[];
	this.setnewvalue=[];
	this.removeobj=[];
	this.createobj=[];
	this.setupeffect=[];
	this.removeeffect=[];
	this.checkeffect=[];
	this.savedata=[];
	this.setupobj=[];
	this.cu=0;
	this.activeslide=[];
	this.activeslide[0]=-1;
	this.s_l=-1;
      this.panelY=[];
      this.panelTy=[];
      this.panelId=[];
      this.panelId2=[];
      this.mlayer=[6];
      this.mlayer[0]=0;
      this.mlayer[1]=0;
      this.mlayer[2]=0;
      this.mlayer[3]=0;
      this.mlayer[4]=0;
      this.mlayer[5]=0;
	this.s_o=-1;
	this.modules=[];
	this.w=[];
	this.h=[];
	this.hp=[];
	this.wp=[];
	this.max_sub=[];
	this.check_compile=[];
	this.wb3d_wh=[];
	this.slide_time=[];
	this.name_effect=[];
	this.color1=[];
	this.layers=[];
	this.tmpshadawvalues=[];
	this.pixel_frm=[];
	this.option_event='';
	this.option_act='';
	this.act=[];
	this.sc_t_fl=[];
	this.open_addons=0;
	this.setup=[];
	this.lo_l=[];
	this.la_l=[];
	this.canvas2=0;
	this.canvas3=1;
	this.deltaflag=[];
	this.change_status=[];
      this.ajaxwb3d_run1=[];
      this.ajaxwb3d_run2=[];
      this.ajaxwb3d_reverse=[];
	this.id_v=[];
	this.show_obj=[];
	this.id_22=[];
	this.id_22i=[];
	this.id_23=[];
	this.id_24=[];
	this.lockscrollX=[];
	this.lockscrollXY=[];
	this.lockscrollY=[];
	this.lockXY=[];
	this.addons=[];
	this.onmousemovelayer=-1;
	this.onslidemousemove=-1;
	this.es_mousedown3=-1;
	this.es_mousedown4=-2;
	this.click1=0;
	this.loadimage=[];
	this.click2=0;
	this.slidnum=[];
	this.hover_id=[];
	this.hover_id2=[];
	this.all_slider=[];
	this.es1_y=[];
	this.es1_x=[];
	this.es1_src=[];
	this.fcolor=[];
	this.sn=[];
	this.g=[];
	this.a=[];
	this.b=[];
	this.r=[];
	this.chenge_display=[];
	this.step=1;
	this.deltaY=[];
	this.wb3d_ax=[];
	this.wb3d_ay=[];
	this.wb3d_ax['0_0']=1;
	this.wb3d_ay['0_0']=1;
	this.number_effect_compile=[];
	this.number_effect_name=[];
	this.slide_of_location=[];
	this.static_c=[];
	this.static_s=[];
	this.css=[];
      this.open_addon=[];
	this.html=[];
	this.static_l=[];
	this.static_y=[];
	this.hover_slide=-1;
	this.change=[];
	this.number=[];
	this.li_MouseDown=-1;
	this.slider=[];
	this.maxcanvas=1000;
	this.scrollMaxY=[];
	this.addon=[];
	this.newsize=[];
	this.bg=[];
	this.lh=[];
	this.txt1=[];
	this.txt2=[];
	this.txt3=[];
	this.move_scroll_x=1;
	this.move_scroll_y=1;
	this.framenum=[];
	this.time=-1;
	this.true_frm=[];
	this.mouseenter=[];
	this.canvasArray=[];
	this.ctxarray=[];
	this.canvasArray2=[];
	this.ctxarray2=[];
	if(wb3d.flag==='main'){
		this.canvasArray_m= document.getElementById('maincanvas');
		this.ctxarray_m=  this.canvasArray_m.getContext('2d');
	}

      this.runfirst=[];
	this.cursor=[];
	this.parallex=1;
	this.top=0;
	this.down=0;
	this.left=0;
	this.right=0;
	this.trx=[];
	this.try=[];
	this.trx2=[];
	this.scaleX=[];
	this.scaleY=[];
	this.mouse_downX=[];
	this.mouse_downY=[];
	this.try2=[];
	this.bk_op=[];
	this.bk_letterspacing=[];
	this.bk_classobj=[];
	this.bk_height=[];
	this.bk_width=[];
	this.bk_tab=[];
	this.bk_tab2=[];
	this.bk_tab3=[];
      this.bk_create_layer=[];
	this.bk_create_layer0=[];
	this.bk_ax=[];
	this.bk_ay=[];
	this.bk_rh=[];
	this.bk_rw=[];
	this.bshadow=[];
	this.bkborder1=[];
	this.bkborder2=[];
	this.bkborder3=[];
	this.bkborder4=[];
	this.bk_fx=[];
	this.bk_fy=[];
	this.bk_mfx=[];
	this.bk_mfy=[];
	this.bk_origin=[];
	this.bk_ty=[];
	this.bk_tx=[];
	this.bk_tf=[];
	this.bk_play=[];
	this.bk_e=[];
	this.bk_d=[];
	this.bk_mode=[];
	this.bk_dis=[];
	this.bk_pluse=[];
	this.bk_frm=[];
	this.bk_Tcolor=[];
	this.bk_st=[];
	this.bk_ct=[];
	this.vscroll=[];
	this.vscrollM=[];
	this.lborder=[];
	this.l_border=[];
	this.event_slide_change=[];
	this.flag=[];
	this.bk_colors=[];
	this.bk_responsive=[];
	this.bk_border=[];
	this.bk_p_x=[];
	this.bk_p_y=[];
	this.bk_p_r=[];
	this.bk_p_rx=[];
	this.bk_p_ry=[];
	this.bk_p_scx=[];
	this.bk_f_scx=[];
	this.bk_p_scy=[];
	this.bk_f_scy=[];
	this.bk_p_skx=[];
	this.bk_p_sky=[];
	this.bk_left=[];
	this.bk_top=[];
	this.bk_zindex=[];
	this.bk_shadow_box=[];
	this.bk_tshadow=[];
	this.bk_radius=[];
	this.bk_radius=[];
	this.set_border=-1;
	this.bk_bg_color=[];
	this.bk_bg=[];
	this.bk_modd=[];
	this.bk_id=[];
	this.bk_dis_slide=[];
	this.bk_tf=[];
	this.bk_display=[];
	this.bk_display2=[];
	this.bk_color=[];
	this.wheel=[];
	this.max_color=[];
	this.endpointx=[];
	this.endpointy=[];
	this.set_end1=[];
	this.set_end1[0]=0;
	this.pos_x=[];
	this.pos_y=[];
	this.activeslide=[];
	this.es1_changeX=[];
	this.es1_changeY=[];
	this.loc_x_activeslide=[];
	this.previous_openingeffectselect=-1;
	this. gs=[];
	this.drag_m=0;
	this.xpositionrightclick =0;
	this.ypositionrightclick = 0;
	this.scroll_sn=0;
	this.mus=0;
	this.idm=0;
	this.reset=-1;
	this.MaXvscroll=0;
	this.idmm=-1;
	this.down_id=0;
	this.RangeSlider_val=-1;
	this.ex_frm=-1;
	this.scrollbar_status=0;
	this.indexslidertable=0;
	this.statussave=0;
	this.d=0;
      this.panelLock=[];
	this.run=[];
	this.lock_canvas=1;
	this.lock_effect=0;
	this.es_mousedown=-1;
	this.es_mousedown2=-1;
	this.bx=0;
	this.by=0;
	this.bx1=0;
	this.by1=0;
      this.loadImage=[];
      this.loadImage2=[];
	this.show_sub=0;
	this.bk=[];
	this.bk_ta=obm.es1_Tab;
	this.actflag=32;
	this.Menu_left=1;
	this.mousestatuse=0;
	this.tmp_div_token=0;
	this.tmp_div_token2=0;
	this.bk_scr=[];
	this.gotolock=0;
	this.scrollstatus=0;
	this.blz=0;
	this.d_c_effect='dis_c_effect';
	this.endpoint=0;
	this.startCurved=0;
	this.benty=0;
	this.bentx=0;
	this.mouseup=1;
	this.painttools=0;
	this.loadslides=1;
	this.bk_dis=[];
	this.mouseSliderScroll=0;
	if(wb3d.flag==='main'){
		jQuery('#uptext').val(0);
		jQuery('#downtext').val(0);
		jQuery('#lefttext').val(0);
		jQuery('#righttext').val(0);
	}

	if(typeof(wb3d_php_id)==='undefined'){
		obm.wb3d_id_org=[]; 
		obm.wb3d_ids_org=[]; 
		obm.wb3d_ids=[];
		obm.wb3d_id=[];
		obm.wb3d_id_num=0;
	}
	obm.cunter=1;
	if(wb3d.wb3d_pro2==1){
		if(wb3d.flag!='view'){
			wb3d_functions_event_act_notification (this);
		}
	}
	wb3d_functions_event(this);
	wb3d_load_event_function(this);
	wb3d_functionsjs_load(this);
	if(wb3d.wb3d_pro2==1){
		if(wb3d.flag==='main'){
			wb3d_editeffect1_load(this);
			wb3d_editeffect2_load(this);
		}
	}

	obm.data_slide=[];
	for(cu=0;cu<obm.cunter;cu++){
		obm.addons[cu]=JSON.parse(wb3d.wb3d_addons_0);
		obm.wb3d_id_org=JSON.parse((wb3d.wb3d_php_id_0)); 
		obm.wb3d_id=JSON.parse((wb3d.wb3d_php_id_0)); 
		obm.wb3d_ids_org=JSON.parse((wb3d.wb3d_php_ids_0)); 
		obm.wb3d_ids=JSON.parse((wb3d.wb3d_php_ids_0)); 
		obm.wb3d_id_num=JSON.parse((wb3d.wb3d_php_id_num_0)); 
		wb3d_scroll_event(cu,obm,'wb3dh_'+cu);
		this.change_status[cu+'_'+0]=0;
		obm.data_slide[cu]=[];
		obm.set_end1[cu]=0;
		obm.data_slide[cu]=JSON.parse(wb3d.wb3d_messages_0); 
		obm.data_slide[cu]=JSON.parse(obm.data_slide[cu]); 
		obm.max_sub[cu]=obm.data_slide[cu].length;


		for(var wn=0;wn<obm.max_sub[cu];wn++){
			sn=obm.data_slide[cu][wn].id_ves;
			obm.sn[cu+'-'+wn]=sn;

			if(obm.data_slide[cu][wn].setting.colortable===undefined&&wn===0){
				obm.data_slide[cu][wn].setting.colortable=10;
			}
			if(obm.data_slide[cu][wn].setting.run===1&&wn===0){
				obm.run[cu]=1;
			}
			else if(obm.data_slide[cu][wn].setting.run!=1&&wn===0){
				obm.run[cu]=0;
			}
			if(obm.check_compile[sn]===undefined){
				wb3d_compilesliderX(sn,wn,cu);
				obm.check_compile[sn]=1;
			}
		}

		if(wb3d.flag==='main'){
			jQuery( '#get_type_token' ).append(this.option_act);
			jQuery( '#send_when' ).append(this.option_event);
                  setTimeout((function(wb3d_check_addon_open,jQuery,wb3d_set_colortable) {
      			jQuery('.wb3d_addon_cb').change(function() {
	      			var id=this.id.split('wb3d_addon_')[1].split('_checkbox')[0];
	      			if(jQuery('#wb3d_addon_'+id+'_checkbox').is(':checked')===false){
	      				var flag=wb3d_check_addon_open(id);
	      				if(flag>0){
	      					alert(jQuery("#alert_unistallAddon").text()+flag);
	      					jQuery('#wb3d_addon_'+id+'_checkbox').prop('checked', true);
	      					return;
	      				}
	      			}
      			});
                  

      			jQuery( '#allcolormenu').sortable({
      				stop: function( event, ui ) {
      					var obm=window.wb3d_setupdata.obm;
      					var sn=obm.sn['0-0'];
      					var cu=0;
      					var sortedIDs = jQuery('#allcolormenu' ).sortable('toArray', {attribute: 'id'});
      					for(var is=0;is<10;is++){
      						obm.setting[sn]['c'+is]=parseInt(sortedIDs[is].split('bodycolormenu')[1]);
      					}
      					wb3d_set_colortable(cu);
      					obm.chenge_details_obj2=[];
      					obm.chenge_details_obj=[];
      				}
      			});
                  }).bind(null, wb3d_check_addon_open,jQuery,wb3d_set_colortable), 0);
		}

		wb3d_loadsliderdata(obm.sn[cu+'-'+0],obm,cu,0);
		if(cu===obm.cunter-1){
			obm.load=1;
		}
	}
};

// New Slider Data
function wb3d_new_slider_data(sn,obm,cu,level){
	obm.number_effect_compile[sn]=0;
	obm.cunter_effect[sn]=0;
	wb3d_compilecolor(obm.colortable[sn],sn,obm,level);
	function wb3d_o_b_j(id,sn){
		var eff=obm.db_effect[sn].name[id];
		setTimeout(function(){
			if(wb3d.wb3d_pro2==1){
				obm.gs[sn][eff]=new wb3d_compile_effect(obm.db_effect[sn][eff],sn,obm);
			}
		},  0 );
	}
	var ex;
	for(var us=0;us<obm.db_effect[sn].num;us++){
		obm.cunter_effect[sn]++;   
		ex=new wb3d_o_b_j(us,sn,obm);
	}
	if(level===0&&wb3d.flag==='main'){
		wb3d_set_css_html(sn,cu);
		wb3d_setui();
	}
} // end wb3d_new_slider_data()
 

// Load Slides Data
var wb3d_loadsliderdata = function(sn,obm,cu,level){
	obm.vscroll[cu+'_0']=0;
	obm.vscrollM[cu+'_0']=0;
	for(var j=0;j<obm.setting[sn].num;j++){
		var f=obm.dataslide[sn][j][0].slide_of_location;
		obm.dataslide[sn][j][0]['los_'+f]=j;
		obm.los[sn+'-'+f]=j;
		obm.slide_of_location[sn+'-'+j]=f;
		if(obm.wb3d_id[cu+'_'+f]===undefined){
			wb3d_create_id(cu+'_'+f,obm);
		}
		obm.layers[sn+'-'+f]=obm.dataslide[sn][j][0].layer;
		obm.framenum[cu+'_'+f]=0;
		if(j===0){
			obm.activeslide[cu]=f;
			document.getElementById('wb3dh-'+obm.wb3d_id[cu+'_'+f]).style.display='';
		}
            else{
                 document.getElementById('wb3dh-'+obm.wb3d_id[cu+'_'+f]).style.display='none'; 
            }
		var ls=obm.layers[sn+'-'+f];
		obm.layers[sn+'-'+f]=ls;
		for(var i=0;i< ls;i++){
			if(i===0){
                        if(wb3d.flag==='main'){
                              var txt='<canvas id="maincanvas-'+obm.wb3d_id[cu+'_'+f]+'"  style="position:absolute;left: 0px;top: 0px;z-index:1"></canvas>';
                              document.getElementById('wb3dh-'+obm.wb3d_id[cu+'_'+f]).innerHTML+=(txt);                  
                        }
				wb3d_addslide(f,sn,obm,level,-1,cu);
			}
			var aa=obm.dataslide[sn][j];
			wb3d_createlayer(cu,f,i,aa,'load_db',0,0,sn,0,0,0,obm );
		}
	}
	if(wb3d.flag==='main'){
		wb3d_set_slide_value(obm.activeslide[cu],0,obm);
		if(level===0) {
			wb3d_showslide ( obm.bk_ws , obm.activeslide[cu],obm );
			wb3d_valueset(obm,sn);
		}
	}
};

// Set Layer Data
function wb3d_createlayer(cu,wslide,dlnum,aa,wtmp,eff,level,sn,wslide_0,ind_0,y_0,obm ,flag2,idm){
	var ind,id,B,n;
	if(dlnum===0){
		ind='0';
	}
	else{
		ind=(aa[dlnum].ind);
	}
	obm.lo_l[sn+'-'+wslide+'-'+ind]=dlnum;
	B=aa[ dlnum  ];
	if(ind==='0'){
		obm.color1[sn+'-'+wslide]=aa[0].slide_r;
		if(dlnum===0&&level===0){
			wb3d_set_colortable(cu,wslide);
		}

		if(level===0&&ind==='0'){
			wb3d_create_slider(obm.wb3d_id[cu+'_'+wslide],'wb3dh_'+cu,sn,0,0,obm,cu,level);
		}
	}
	else{
		if(B.l_type===2){
			var flag=0;
			for(var th=0;th<obm.static_c[sn];th++){
				if(obm.static_s[sn][th]===wslide&&obm.static_l[sn][th]===ind){
					flag=1;
				}
			}
			if(flag===0){
				obm.static_s[sn][obm.static_c[sn]]=wslide;
				obm.static_l[sn][obm.static_c[sn]]=ind;
				obm.static_y[sn][obm.static_c[sn]]=dlnum;
				obm.static_c[sn]++;
			}
		}
	}

	if(wtmp==='load_db'){
		if(dlnum===0){
			ind='0'; 
			obm.lo_l[sn+'-'+wslide+'-'+ind]=ind;  
			obm.la_l[sn+'-'+wslide+'-'+ind]='0'; 
		} 
		else {
			obm.lo_l[sn+'-'+wslide+'-'+ind]=dlnum;
			obm.la_l[sn+'-'+wslide+'-'+dlnum]=ind;
		}  
	}
	else if(wtmp==='new'){
		ind=aa[dlnum].ind;
		B=obm.dataslide[sn][ obm.los[sn+'-'+wslide] ][dlnum];
	}

	if(level!=0){
		n=wslide_0+'-'+ind_0+'-'+y_0+'-'+wslide;
		obm.framenum[cu+'_'+n]=0;
		obm.framenum[cu+'_'+n+'-'+ind]=0;
		obm.bk_dis[cu+'_'+n+'-'+ind]=0;
		if(flag2===1){
                  obm.bk_create_layer[cu+'_'+n+'-'+ind]=0;
			obm.bk_create_layer0[cu+'_'+n+'-'+ind]=0;
		}
	}
	else{
		n=wslide;
	}
	obm.scY1[cu+'_'+n+'-'+ind]=99999999;
	obm.scY2[cu+'_'+n+'-'+ind]=0;
	if(B['T_E'+obm.d]===0){
		obm.bk_pluse[cu+'_'+n+'-'+ind]=1;
	}
	else{
		obm.bk_pluse[cu+'_'+n+'-'+ind]=0;
	}
	obm.w2[cu+'_'+n]=0;
	obm.h2[cu+'_'+n]=0;

	for(var x=0;x<4;x++){
		B['EB_'+x]=B['EA_'+x];
		// if(wb3d.flag==='view'){
		// 	if(wb3d_pro.wb3d_pro_l==1){
		// 		B['EA_'+x]=-1;
		// 		B['EB_'+x]=-1;
		// 	}
		// }
	}

	if(ind!='0'&&(wtmp==='load_db')){
		obm.U_P[sn+'-'+wslide+'-'+ind]=aa[dlnum].U_P; 
	}

	if(level===0){
		id=cu+'_'+wslide+'-'+ind;
	}
	else{
		id=cu+'_'+wslide_0+'-'+ind_0+'-'+y_0+'-'+wslide+'-'+ind;
	}
	obm.true_frm[id]=0;
	obm.framenum[id]=0;
  

	if(level==0&&ind==0){
		if(obm.setting[sn].maxColorTable==undefined){
			obm.setting[sn].maxColorTable=10;
		}

		if(typeof(Storage) !== 'undefined'&&wb3d.flag!='main'){
			if(localStorage.getItem('lStorage_colortable')===undefined){
				localStorage.setItem('lStorage_colortable', 0);
			}
			else{
				obm.sColortable=Number(localStorage.getItem('lStorage_colortable'));
				if(obm.sColortable>=obm.setting[sn].maxColorTable){
					obm.sColortable=obm.setting[sn].maxColorTable-1;
				}
			}
		}
	}

	if(level===0&&wb3d.flag==='main'){
		wb3d_create_layer_panel(sn,wslide,ind,dlnum,obm);
	}
	if((wtmp==='load_db')&&ind==='0'){
		obm.slide_time[sn+'-'+wslide]=aa[dlnum].maxtime;
	}       
}//enid function


// Reset Layers Data
function wb3d_set_bk(id,obm,l){
	obm.bk_change_sizew[id]=-1;
	obm.bk_change_sizeh[id]=-1;
	obm.bk_colors[id]=-1;
	obm.bk_responsive[l]=-1;
	obm.chenge_details_obj[id]=-1;
	obm.chenge_details_obj2[id]=-1;
	obm.bk_flag[id]=-1;
	obm.chenge_display[id]=-1;
	obm.bk_transform1[id]=-1;
	obm.bk_transform2[id]=-1;
	obm.bk_border[id]=-1;
	obm.bk_p_x[l]=0;
	obm.bk_p_y[l]=0;
	obm.bk_p_r[l]=0;
	obm.bk_p_rx[l]=0;
	obm.bk_p_ry[l]=0;
	obm.bk_p_scx[l]=0;
	obm.bk_f_scx[id]=1;
	obm.bk_p_scy[l]=0;
	obm.bk_f_scy[id]=1;
	obm.bk_p_skx[l]=0;
	obm.bk_p_sky[l]=0;
	obm.bk_left[id]='';
	obm.bk_top[id]='';
	obm.bk_zindex[id]='';
	obm.bk_t_l[id]='';
	obm.bk_shadow_box[id]='q';
	obm.bk_tshadow[id]='q';
	obm.bk_radius[id]='w';
	obm.bk_letterspacing[id]=0;
	obm.bk_bg_color[id]=-1;
	obm.bk_bg[id]=-1;
	obm.bk_modd[id]=-1;
	obm.bk_id[id]=-1;
	obm.bk_dis_slide[id]=-1;
	obm.bk_Tcolor[id]=-1;
	obm.bk_vscroll_id1[id]=-1;
	obm.bk_vscroll_id2[id]=-1;
	obm.bk_tf[id]=-1;
	obm.bk_display[id]=-1;
	obm.bk_color[id]=-1;
	obm.bk_p_scx[id+'-2']=0;
	obm.bk_f_scx[id+'-2']=0;
	obm.bk_p_scy[id+'-2']=0;
	obm.bk_f_scy[id+'-2']=0;
	obm.bk_tx[id+'-2']=1;
	obm.bk_ty[id+'-2']=1;
	obm.wp[id]=0;
	obm.hp[id]=0;
	obm.h[id]=0;
}



// Create Slide
function wb3d_addslide(i,sn,obm,level,flag,cu){

	if(flag===1){
		if((obm.slidnum[sn])===undefined){
			obm.slidnum[sn]=1;
		}
		else{
			obm.slidnum[sn]++;
		}
	}
	var wslide=i;
	var txt;
	obm.bk_ws=obm.activeslide[cu];
	if(level===0&&wb3d.flag==='main'){
		var dis='';
		if(wslide!=obm.activeslide[cu]){
			dis='display:none;';
		}
		wb3d_create_slide_button(wslide,obm);
		jQuery('#es_menu').mousemove(function(e){
			wb3d_onMove_li(e,obm);
		});
		obm.bk_ws=obm.activeslide[cu] ;
		txt='<div class="sortlist-slide" class="box_layers" id="slide-option-'+wslide+'" style="height:auto;position:relative;'+dis+'" >';
		txt=txt+'<div id="sortlist-slide-option-'+wslide+'" style="width:188px; ;;height:auto;;position:relative;"></div>';
		txt=txt+'</div></div>';
		jQuery('#div-slide-option').append(txt);
	}
}
///////////////////////

// Set Slide data & Events
wb3d_create_slider=function(wslide,patern,sn,y1,A,obm,cu,level,p){
	obm.bk_tab2[obm.wb3d_ids[wslide]]=1;
	obm.bk_tab[obm.wb3d_ids[wslide]]=1;
	if(obm.wb3d_ids_org[wslide]===undefined){
		wb3d_html_create_slider(sn,wslide,patern,level);
	}
	obm.vesid[obm.wb3d_ids[wslide]]=document.getElementById('wb3dh-'+wslide);
	if(level===0&&wb3d.flag==='main'){
		if(obm.lock_canvas===0){
			jQuery('.wb3d_draggable_s'). draggable();
		}
		else{
			jQuery('.wb3d_draggable_s'). draggable();
			jQuery('.wb3d_draggable_s'). draggable( 'disable' );
		}
		wb3d_drag_slide();
	}
	wb3d_set_bk(wslide,obm);
	wb3d_create_event_slide(obm,wslide,sn,cu,level);
	obm.mouseenter['wb3dh-'+cu+'_'+wslide]=0;
	obm.bk_play[obm.wb3d_ids[wslide]+'-'+0]='play';
	obm.lockscrollX[obm.wb3d_ids[wslide]]=0;
	obm.lockscrollY[obm.wb3d_ids[wslide]]=0;
	obm.deltaflag['v-'+obm.wb3d_ids[wslide]]=1;
	obm.lockscrollXY[obm.wb3d_ids[wslide]]=0;
      if(level!=0){
            if(p===0){
                  document.getElementById('wb3dh-'+wslide).style.display='';
            }
            else{
                  document.getElementById('wb3dh-'+wslide).style.display='none';
            }

      }
};//end create_slider

// Convert Hex to Byte
function wb3d_hexToBytes(hex) {

	for (var bytes = [], c = 0; c <hex.length; c += 2){
		var txt=(hex.substr(c, 2));
		bytes.push(parseInt(txt,16));
	}
	return bytes;
}



// Convert to Hexa String
function wb3d_toHexString(byteArray) {
	return Array.from(byteArray, function(byte) {
	return ('0' + (byte & 0xFF).toString(16)).slice(-2);
	}).join('');
}


// Compile Color
function wb3d_compilecolor(data1,sn,obm,level){

	for(var i=0;i<=9;i++){
		var p=0;   
		var data=wb3d_hexToBytes(data1[i]);
		var length_=data[p++]*256+data[p++];
		obm.max_color[sn+'-'+i]=length_;
		for(var u=0;u<length_;u++){
			if(level===0){
				if(wb3d.flag==='main'){
					var text='<div id="p_colormenu-'+i+'-'+u+'" style="width:70px;height: 38px; border: 0px solid blue;float: right;margin-right:15px">';
					text+='<div class="pointer" id="colormenu-'+i+'-'+u+'" style="float: left;margin:0 0 0 15px;width:24px;height:24px;background-image: url('+wb3d.wb3d_plagin_images_URL+'tr.jpg);position: relative;border-radius: 50%;overflow:hidden;">';
					text+='<div style="position: absolute;width:24px;height: 24px;top: 0px;left: 0px;background-color: #fff;"></div></div>';
					text+='<label  style="float: right;margin:10px 15px0 0 15px">'+(u)+'</label>';
					text+='</div>';
				
					jQuery('#bodycolormenu'+i).append(text);

					jQuery('#colormenu-'+i+'-'+u).click(function(){
						var i=this.id.split('-')[1];
						var u=this.id.split('-')[2];
						obm.Palette='colormenu-'+i+'-'+u;
						wb3d_showflat();
					});
				}
			}

			obm.r[sn+'-'+i+'-'+u]=data[p++];
			obm.g[sn+'-'+i+'-'+u]=data[p++];
			obm.b[sn+'-'+i+'-'+u]=data[p++];
			obm.a[sn+'-'+i+'-'+u]=data[p++];

			if(level===0&&wb3d.flag==='main'){
				var color_loading='rgba('+obm.r[sn+'-'+i+'-'+u]+','+obm.g[sn+'-'+i+'-'+u]+','+obm.b[sn+'-'+i+'-'+u]+','+(obm.a[sn+'-'+i+'-'+u]/255)+')';
				jQuery('#colormenu-'+i+'-'+u+' div').css('background-color',color_loading);
			}
		}
	}
}


