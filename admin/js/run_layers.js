/**
* Author URI:  https://3dwebsitebuilder.com/
* Author : Keivan Kamali
*/

// Run for all layer in Slide
wb3d_start_frame=function(obm,flag){

	var cu=obm.cu;
	var st,y,yy;
	var sn=obm.sn[cu+'-0'];
	if(obm.click1!=0){
		obm.click2=obm.click1;
      }
	obm.click1=0;
	if(obm.down_id!=0){
		obm.down_id2=obm.down_id;
      }
	obm.down_id=0;
	obm.bk_tab2[cu+'_'+obm.activeslide[cu]]=obm.bk_tab[cu+'_'+obm.activeslide[cu]];

	if(obm.es1_key!=-1){
		obm.es1_key2=obm.es1_key;
		obm.es1_key=-1;
	}

	obm.time++;
	if(obm.drag_slide===1){
            return;
      }
		
      obm.framenum[obm.cu+'_'+obm.activeslide[cu]]++;
      st=1;
      obm.mlayer[5]=0;
      obm.mlayer[4]=0;
      obm.mlayer[2]=0;

	for(y=1;y<=obm.layers[sn+'-'+obm.activeslide[cu]]-1;y++){
            yy=obm.la_l[sn+'-'+obm.activeslide[cu]+'-'+y];
            wb3d_run_main(obm.activeslide[cu],yy,y,obm,flag,st,cu,sn);	
	}

      if(obm.mlayer[5]==1){
            obm.mlayer[3]=0;
            obm.mlayer[0]=0;
            obm.mlayer[1]=0;
      }
      else if(obm.mlayer[3]==0){
            obm.mlayer[3]=1;
            obm.mlayer[0]=0;
            obm.mlayer[1]=0;
      }
      else if(obm.mlayer[4]==1){
            obm.mlayer[0]=0;
            obm.mlayer[1]=0;
      }
      else if(obm.mlayer[1]!=1){
            obm.mlayer[1]=1;
            obm.mlayer[0]=0;
      }
      else if(obm.mlayer[2]==1){
            obm.mlayer[0]=0;
      }
      else{
            obm.mlayer[0]=1;
      }      

	obm.click2=0;
	obm.down_id2=0;
	obm.bk_key=obm.es1_key2;
	obm.es1_key2=-1;
	obm.bk_ta=obm.es1_Tab;
	obm.bk_tab3[obm.cu+'_'+obm.activeslide[cu]]=obm.bk_tab2[obm.cu+'_'+obm.activeslide[cu]];
	if(wb3d.flag==='main'){
		wb3d_drawcanvas();
      }
      if(obm.flag_bl2['0_0']<3){
	wb3d_set_scrollMaxY(obm,obm.cu+'_0',0,obm.cu,sn); 
      }
	return 0;     
};

// Run layers
function  wb3d_run_main(w,yy,R,obm,flag5,st,cu,sn){
	var modd=0;
	var B=obm.dataslide[sn][obm.los[sn+'-'+w]][R];
	var eff=B['EB_'+obm.d];
	var frm=0;
	if(eff!=-1){
      	var frm=obm.pixel_frm[sn+'-'+eff+'-'+obm.framenum[cu+'_'+w+'-'+yy]];
	}

	var id_l=cu+'_'+w+'-'+yy;
      var y1=obm.scY1[id_l];
      var flag=1;
      flag5=0;
      var run=1;


      if(y1===undefined||isNaN(y1)){
            run=0;
      }
		 
      if(B['C_'+obm.d]*25>obm.framenum[cu+'_'+w]){
            flag=0;
            flag5=1;
      }
      else if(B['F_'+obm.d]*25<obm.framenum[cu+'_'+w]){
            flag=0;
            flag5=2;
      }
      else if(obm.vscroll[cu+'_0']<y1){
            flag=0;
            flag5=3;
      }
      else if(obm.vscroll[cu+'_0']>obm.scY2[id_l]){
            flag=0;
            flag5=4;
      }
     
	var stop=1;
	if(wb3d.wb3d_pro2==1&&eff!=-1){
		var obj=obm.gs[sn][eff];
		if(obm.RangeSlider_val>-1&&obm.s_l===yy&&wb3d.flag==='main'){
			obm.ex_frm=Math.round((obm.RangeSlider_val/100)*(obj.max_p-1));
		}
		else{
			obm.ex_frm=-1; 
		}
		if( obj.E[0][21]!=0){
			if(obm.id_pre_stop[id_l]!=frm){
				if(obj.E[21][frm]>0&&obm.id_stop[id_l]!=1){
					obm.id_time_stop[id_l]=obj.E[21][frm]*2.5;
					obm.id_stop[id_l]=1;
					stop=0;
					obm.id_bk_pre_stop[id_l]=frm;
				}
				else if(obm.id_stop[id_l]===1&&obm.id_time_stop[id_l]>0){
					obm.id_time_stop[id_l]--;
					stop=0;
				}
				else if(obm.id_stop[id_l]===1&&obm.id_time_stop[id_l]<=0){
					obm.id_stop[id_l]=0;
					obm.id_pre_stop[id_l]=obm.id_bk_pre_stop[id_l];
				}
				else{
					obm.id_pre_stop[id_l]=-2;
	                  }
			}
		}
	}

	if(flag===1){
		obm.sc_t_fl[id_l]=1;
      }
	else{
		obm.sc_t_fl[id_l]=0;
	}
	if(wb3d.wb3d_pro2==1&&eff!=-1){	
		if(obm.sc_t_fl[id_l]===1&&stop===1){
			if( !(obm.ex_frm<=0&&obm.bk_play[obm.cu+'_'+obm.activeslide[cu]+'-'+0]!='play'&&wb3d.flag==='main')){
	                  frm=wb3d_set_frame(sn,eff,(cu+'_'+w+'-'+yy),obm.vscroll[cu+'_0']-y1,st,obm,B,B['T_E'+obm.d],B['repeat'+obm.d]);
	            }    	
		}
	      if( obm.ex_frm!=-1&&wb3d.flag==='main'){ 
	            frm=obm.ex_frm;
	      }

		if(obj.E[0][26]!=0){
			modd=obj.E[26][frm];
	      }
	}

	var ids=cu+'_'+w+'-'+yy+'-'+modd;
	var id1=obm.wb3d_id[ids];

	if(obm.sc_t_fl[id_l]===1){
		if(obm.bk_flag[obm.wb3d_id[ids]]!=1){
			obm.bk_flag[obm.wb3d_id[ids]]=1;
			obm.chenge_display[obm.wb3d_id[ids]]=-1;
		}
	}
	else if(obm.bk_flag[obm.wb3d_id[ids]]!=0){
		obm.bk_flag[obm.wb3d_id[ids]]=0;
		obm.chenge_display[obm.wb3d_id[ids]]=-1;
	}

	if(obm.bk_f[id_l]!=frm){
		obm.chenge_details_obj[id1]=0;
		obm.chenge_details_obj2[id1]=0;
	}

	if(obm.bk_mode[id_l]!=modd){
		obm.chenge_display[id1]=-1;
		obm.bk_change_sizew[id1]=-1;
		obm.bk_change_sizeh[id1]=-1;
	}

      if(B['P_s'+obm.d]!=0){
            obm.sc_t_fl[id_l]=1;
      }

	wb3d_set_style(sn,obm,frm,B,eff,w,yy,modd,w,yy,modd,id1,id_l,'layer',run,ids,obm.sc_t_fl[id_l],cu+'_'+w,stop,0,0);

	if(flag===0){
      	if(obm.sc_t_fl[id_l]===1){
      		if((obm.framenum[cu+'_'+w+'-'+yy]===0||B['slow'+obm.d]!=1)&&(obm.vscroll[cu+'_0']<y1)){
                        obm.sc_t_fl[id_l]=0;
                  }
      		else if((obm.framenum[cu+'_'+w+'-'+yy]===(obj.max_f-1)||B['slow'+obm.d]!=1)&&(obm.vscroll[cu+'_0']>obm.scY2[id_l])){
                        obm.sc_t_fl[id_l]=0;
                  }
      	}
	}

	/////////////////////////////////border////////////////////////////     
	if(wb3d.flag==='main'){
		wb3d_set_border(obm,id1,obm.bk_width[id1]/obm.bk_tx[id1],obm.bk_height[id1]/obm.bk_ty[id1],B,id_l);
	}
	else{
		obm.set_border=-1;
      }
}


function wb3d_set_pre_width_height(a,c,d,e,b,g,k,f,l,r,t,z,q,y,p){e=p+"_"+q;a.wh_w[b]=1===c["WO"+a.d]?a.wb3d_ay[e]:a.wb3d_ax[e];a.wh_h[b]=1===c["HO"+a.d]?a.wb3d_ay[e]:a.wb3d_ax[e];e=c=1;1==wb3d.wb3d_pro2&&-1!=r&&(d=a.gs[d][r],-1!=t&&(0!==d.E[0][19]&&(c=d.E[19][t]/100),0!==d.E[0][20]&&(e=d.E[20][t]/100)));if(a.bk_rh[b]!=e||a.bk_rw[b]!=c)a.bk_rh[b]=e,a.bk_rw[b]=c,a.bk_change_sizew[b]=-1,a.bk_change_sizeh[b]=-1}
function wb3d_set_width_height(a,c,d,e,b,g,k,f,l,r,t,z,q,y,p){k=a.bk_rw[b];var m=a.bk_rh[b];if("layer"==g)if(1===a.size1[b]||void 0===a.size1[b]){f=c["sizex_"+a.d+"-"+l]*a.wh_w[b];var h=c["sizey_"+a.d+"-"+l]*a.wh_h[b];a.bk_change_sizew[b]!=f+"-"+k+"-"+a.wh_w[b]&&(a.bk_change_sizew[b]=f+"-"+k+"-"+a.wh_w[b],void 0!=a.idc[b]&&(2==c["relative_"+l]&&(f=a.setting[d]["w_"+a.d]*a.wh_w[b],a.idc[b].style.marginTop=c["margin_"+l]*a.wh_h[b]+"px"),a.ide[b].style.width=f+"px",1!=c.sizefunc?f=a.ide[b].offsetWidth:
(d=a.ide[b].getBoundingClientRect(),f=d.width),a.idc[b].style.width=f*k+"px",a.idd[b].style.width=f+"px",a.bk_width[b]=f,a.bk_width[e]=f));a.bk_change_sizeh[b]!=h+"-"+m+"-"+a.wh_h[b]+"-"+a.h[b]&&(a.bk_change_sizeh[b]=h+"-"+m+"-"+a.wh_h[b]+"-"+a.h[b],void 0!=a.idc[b]&&(a.ide[b].style.height=0!=a.h[b]?a.h[b]+"px":h+"px",1!=c.sizefunc?h=a.ide[b].offsetHeight:(d=a.ide[b].getBoundingClientRect(),h=d.height),a.idc[b].style.height=h*m+"px",a.idd[b].style.height=h+"px",a.bk_height[b]=h,a.bk_height[e]=h))}else if(1<=
a.size1[b]&&4>a.size1[b]){if(a.bk_change_sizew[b]!=k+"-"+a.wh_h[b]){a.bk_change_sizew[b]=k+"-"+a.wh_h[b];d=c["lp_"+a.d+"-"+l];g=c["rp_"+a.d+"-"+l];f=c["tp_"+a.d+"-"+l];r=c["bp_"+a.d+"-"+l];d*=a.wh_h[b];g*=a.wh_h[b];f*=a.wh_h[b];r*=a.wh_h[b];f=f+"px "+g+"px "+r+"px "+d+"px";2===a.newsize[b]&&1!=a.lborder[b]&&(a.ide[b].style.padding=f);1!=a.lh[b]&&void 0!=c["lheight_"+l]&&(a.ide[b].style.lineHeight=c["lheight_"+l]);a.ide[b].style.whiteSpace=void 0!=c["tline_"+l]?c["tline_"+l]:"nowrap";void 0!=c["fweight_"+
l]&&(a.ide[b].style.fontWeight=c["fweight_"+l]);void 0!=c["fname_"+l]&&(a.ide[b].style.fontFamily=c["fname_"+l]);void 0!=c["talign_"+l]&&(a.ide[b].style.textAlign=c["talign_"+l]);void 0!=c["decoration_"+l]&&(a.ide[b].style.textDecoration=c["decoration_"+l]);a.ide[b].style.fontSize=c["fs_"+a.d+"-"+l]*a.wh_h[b]+"px";r=a.ide[b].getElementsByTagName("*");for(f=0;f<r.length;f++)r[f].style.fontSize=c["fs_"+a.d+"-"+l]*a.wh_h[b]+"px";"normal"!=c["tline_"+l]?(a.ide[b].style.width="auto",1!=c.sizefunc?(f=a.ide[b].offsetWidth,
h=a.ide[b].offsetHeight):(d=a.ide[b].getBoundingClientRect(),h=d.height,f=d.width),a.idd[b].style.width=f*k+"px",a.idc[b].style.width=f*k+"px",a.idd[b].style.height=h*m+"px",a.idc[b].style.height=h*m+"px",a.bk_width[b]=f,a.bk_height[b]=h,a.bk_width[e]=f,a.bk_height[e]=h,c["sizey_"+a.d+"-"+l]=h/a.wh_h[b],0==y&&"main"===wb3d.flag&&(c["sizex_"+a.d+"-"+l]=f,c["sizey_"+a.d+"-"+l]=h)):(f=c["sizex_"+a.d+"-"+l]*a.wh_w[b],a.ide[b].style.width=f+"px",f+=d+g,1!=c.sizefunc?h=a.ide[b].offsetHeight:(d=a.ide[b].getBoundingClientRect(),
h=d.height),a.idd[b].style.width=f*k+"px",a.idc[b].style.width=f*k+"px",a.idd[b].style.height=h*m+"px",a.idc[b].style.height=h*m+"px",setTimeout(function(){a.idd[b].style.height=h*m+"px";a.idc[b].style.height=h*m+"px"},3040),a.bk_width[b]=f*a.bk_tx[b],a.bk_height[b]=h*a.bk_ty[b],a.bk_width[e]=f*k*a.bk_tx[b],a.bk_height[e]=h*m*a.bk_ty[b],c["sizey_"+a.d+"-"+l]=h/a.wh_h[b])}}else 7!=a.size1[b]&&(f=c["sizex_"+a.d+"-"+l]*a.wh_w[b],h=c["sizey_"+a.d+"-"+l]*a.wh_h[b],a.bk_width[b]=f,a.bk_width[e]=f,a.bk_height[b]=
h,a.bk_height[e]=h)}
function wb3d_set_top_left(a,c,d,e,b,g,k,f,l,r,t,z,q,y){if(1!=y&&12!==a.size1[b]&&"layer2"!==g){a.tl_l[b]=a.wb3d_ax[q];a.tl_t[b]=a.wb3d_ax[q];1<=c["P_s"+a.d]&&(a.tl_t[b]=a.wb3d_ay[q]);var p=c["PX_"+a.d],m=c["PY_"+a.d];y=1;if(0==a.U_P[d+"-"+k+"-"+f]||void 0==a.U_P[d+"-"+k+"-"+f])y=0,c["PY2_"+a.d]=c["PY_"+a.d];else{var h=a.U_P[d+"-"+k+"-"+f].split("-")[0];var A=a.U_P[d+"-"+k+"-"+f].split("-")[1];var v=a.dataslide[d][a.los[d+"-"+k]][a.lo_l[d+"-"+k+"-"+h]];c["PY2_"+a.d]=v["PY_"+a.d]+c["PY_"+a.d];if(0==
t)var w=e.split("-")[0]+"-"+h;else w=e.split("-"),w=w[0]+"-"+w[1]+"-"+w[2]+"-"+w[3]+"-"+h;h=a.wb3d_id[w+"-"+A]}if("main"===wb3d.flag&&0===t){var x=p;var u=m}else{var n=c["A_l"+a.d];var B=c["A_t"+a.d];0===n?x=p*a.tl_l[b]:0==y?1===n?(p=a.setting[d]["w_"+a.d]/2-(c["PX_"+a.d]+c["sizex_"+a.d+"-"+l]/2),0==c["P_s"+a.d]?(n=a.setting[d]["w_"+a.d]*a.wb3d_ax[q]/2,x=n-p*a.wb3d_ax[q]-a.bk_width[e]/2):(n=window.innerWidth/2,x=n-p*window.innerWidth/a.setting[d]["w_"+a.d]-a.bk_width[e]/2)):2===n&&(p=a.setting[d]["w_"+
a.d]-(c["PX_"+a.d]+c["sizex_"+a.d+"-"+l]),0==c["P_s"+a.d]?(n=a.setting[d]["w_"+a.d]*a.wb3d_ax[q],x=n-p*a.wb3d_ax[q]-a.bk_width[e]):(n=window.innerWidth,x=n-p*window.innerWidth/a.setting[d]["w_"+a.d]-a.bk_width[e])):1===n?(p=v["sizex_"+a.d+"-"+A]/2-(c["PX_"+a.d]+c["sizex_"+a.d+"-"+l]/2),n=a.bk_width[w]/2,x=n-p*a.wh_w[h]-a.bk_width[e]/2):2===n&&(p=v["sizex_"+a.d+"-"+A]-(c["PX_"+a.d]+c["sizex_"+a.d+"-"+l]),n=a.bk_width[w],x=n-p*a.wh_w[h]-a.bk_width[e]);0===B||0==y&&0==c["P_s"+a.d]?(u=m*a.tl_t[b],1==
y&&0!=t&&(u=m*a.wh_h[h])):0==y?1===B?(p=a.setting[d]["h_"+a.d]/2-(c["PY_"+a.d]+c["sizey_"+a.d+"-"+l]/2),n=a.setting[d]["h_"+a.d]*a.wb3d_ay[q]/2,u=n-p*a.wb3d_ay[q]-a.bk_height[e]/2):2===B&&(p=a.setting[d]["h_"+a.d]-(c["PY_"+a.d]+c["sizey_"+a.d+"-"+l]),n=a.setting[d]["h_"+a.d]*a.wb3d_ay[q],u=n-p*a.wb3d_ay[q]-a.bk_height[e]):1===B?(p=v["sizey_"+a.d+"-"+A]/2-(c["PY_"+a.d]+c["sizey_"+a.d+"-"+l]/2),n=a.bk_height[w]/2,u=n-p*a.wh_h[h]-a.bk_height[e]/2):2===B&&(p=v["sizey_"+a.d+"-"+A]-(c["PY_"+a.d]+c["sizey_"+
a.d+"-"+l]),n=a.bk_height[w],u=n-p*a.wh_h[h]-a.bk_height[e])}"main"===wb3d.flag&&0===t&&(a.bk_top3[e]=0);1!=a.flag_bl2[q]||"main"===wb3d.flag&&0===t||1==a.flag_bl2[b]||0!=c["P_s"+a.d]||0!=a.U_P[d+"-"+k+"-"+f]||(wb3d_setObj_position(a.dataslide[d][a.los[d+"-"+k]][0],c,r,e,b),a.flag_bl2[b]=1);h=0===t&&"main"!=wb3d.flag?a.deltaY[a.cu]:0;v=0!=t?a.setting[d]["h_"+a.d]*a.wh3[q]:a.setting[d]["h_"+a.d]*a.wb3d_ay[q];m=1-c["B_"+a.d];A=1-c["E_"+a.d];0!=c["P_s"+a.d]?(a.scY1[e]=Math.ceil(m*v+h),a.scY2[e]=Math.ceil(A*
v+h)):(m=a.bk_top3["A"+e]+(v*m-v)+h,1==y&&(m=a.bk_top3["A"+w]+m),a.scY1[e]=Math.ceil(m+wb3d_set_scr_objs(a,c["PY2_"+a.d],b,1)),m=a.bk_top3["A"+e]+(v*A-v)+h,1==y&&(m=a.bk_top3["A"+w]+m),a.scY2[e]=Math.ceil(m+wb3d_set_scr_objs(a,c["PY2_"+a.d]-c["E_"+a.d]*v,b,2)));0===c["B_"+a.d]&&(a.scY1[e]=0);if(a.bk_t_l[b]!=x+"-"+u+"-"+a.bk_top3[e]&&void 0!=a.idc[b]&&"mouse"!=g&&"slide"!=g&&("wb3d"===c["type_"+l]&&("main"!=wb3d.flag?0==a.U_P[d+"-"+k+"-"+f]?a.top0wb3d[z+"_"+b]=u+a.bk_top3[e]+h:(g=a.U_P[d+"-"+k+"-"+
f].split("-"),a.top0wb3d[z+"_"+b]=a.bk_top3["A0_"+k+"-"+g[0]]):a.top0wb3d[z+"_"+b]=c["PY2_"+a.d]),a.bk_t_l2[b]!=x+"-"+u+"-"+Math.ceil(a.bk_top3[e]))){for(g=0;g<c.layer_obj;g++)z=c["obj_num_"+g],b=a.wb3d_id[e+"-"+z],2!=c["relative_"+z]&&(a.idc[b].style.left=x+"px",a.idc[b].style.top="main"===wb3d.flag&&0===t?u+"px":Math.ceil(u+Math.ceil(a.bk_top3[e]))+"px"),a.bk_top2[e]=u+a.bk_top3[e],a.bk_left2[e]=x,a.bk_t_l2[b]=x+"-"+u+"-"+Math.ceil(a.bk_top3[e]);a.bk_top3["A"+e]=Math.ceil(u+Math.ceil(a.bk_top3[e]));
a.bk_top3["B"+e]=x}0!=a.flag_bl2[q]||"main"===wb3d.flag&&0==t?1!=a.flag_bl2[q]||"main"===wb3d.flag&&0==t||0===a.U_P[d+"-"+k+"-"+f]&&0===c["P_s"+a.d]&&a.bk_top2[e]+a.bk_height[e]>a.max_top[q]&&(a.max_top[q]=a.bk_top2[e]+a.bk_height[e]):0!=a.U_P[d+"-"+k+"-"+f]&&(b=a.U_P[d+"-"+k+"-"+f].split("-")[0],c=a.U_P[d+"-"+k+"-"+f].split("-")[1],0===a.U_P[d+"-"+k+"-"+b]&&(b=a.dataslide[d][a.los[d+"-"+k]][a.lo_l[d+"-"+k+"-"+b]],1==b["auto_height_"+c]&&a.bk_height[e]+a.bk_top2[e]+b["buttom_"+c]>a.h[a.wb3d_id[r+
"-"+a.U_P[d+"-"+k+"-"+f]]]&&(a.chenge_details_obj[a.wb3d_id[r+"-"+a.U_P[d+"-"+k+"-"+f]]]=-1,a.h[a.wb3d_id[r+"-"+a.U_P[d+"-"+k+"-"+f]]]=a.bk_height[e]+a.bk_top2[e]+b["buttom_"+c],a.panelTy[a.panelId2[a.wb3d_id[r+"-"+a.U_P[d+"-"+k+"-"+f]]]]=a.h[a.wb3d_id[r+"-"+a.U_P[d+"-"+k+"-"+f]]]-a.wb3d_ax[q]*b["sizey_"+a.d+"-"+c])))}}
wb3d_set_scr_objs=function(a,c,d,e){d=0;for(var b=[],g=0;300>g&&void 0!==a.wb3d[g]&&!(a.wb3dB[g]["PY2_"+a.d]>c)&&(a.wb3dB[g]["PY2_"+a.d]!=c||1!=e);g++)1===a.wb3dB[g]["vs_"+a.wb3dY[g]]&&void 0==b[a.wb3dB[g]["PY2_"+a.d]]&&(d+=Math.ceil(a.scrollMaxY[a.wb3d[g]]),b[a.wb3dB[g]["PY2_"+a.d]]=1);return d};
function wb3d_set_scrollMaxY(a,c,d,e,b){a.flag_bl2[c]++;var g;if(0===d){if("main"!=wb3d.flag){document.getElementById("wb3dh_0").offsetHeight<a.max_top[c]&&(document.getElementById("wb3dh_0").style.height=a.max_top[c]+"px","main"!=wb3d.flag&&(document.getElementById("wb3d_0").style.height=a.max_top[c]+"px"));d=document.body;var k=document.documentElement;a.scrollMaxY[c]=Math.max(d.scrollHeight,d.offsetHeight,k.clientHeight,k.scrollHeight,k.offsetHeight)-window.innerHeight;if(0<e)for(d=0;d<e;d++)a.scrollMaxY[d+
"_0"]=a.scrollMaxY[c]}else a.scrollMaxY[c]=0;a.MaXvscroll=0;c=[];if("main"!=wb3d.flag)for(g=0;300>g&&void 0!==a.wb3d[g];g++)1===a.wb3dB[g]["vs_"+a.wb3dY[g]]&&void 0!=a.scrollMaxY[a.wb3d[g]]&&1!=c[a.wb3dB[g]["PY2_"+a.d]]&&(a.MaXvscroll+=a.scrollMaxY[a.wb3d[g]]),c[a.wb3dB[g]["PY2_"+a.d]]=1;a.bk_vscroll_id1=[];a.bk_vscroll_id2=[];k="main"!=wb3d.flag?window.innerHeight:a.setting[b]["h_"+a.d];c=[];for(b=0;300>b;b++){d=e=0;if(void 0===a.wb3d[b])break;1===a.wb3dB[b]["vs_"+a.wb3dY[g]]&&(d=Math.ceil(a.wb3dB[b]["mt"+
a.d+"_"+a.wb3dY[b]]/100*k));for(g=0;300>g;g++)if(void 0===a.wb3d[g]||a.wb3d[g]===a.wb3d[b]){a.vscrollS[a.wb3d[b]]=void 0===c[a.wb3dB[g]["PY2_"+a.d]]?Math.ceil(a.top0wb3d[a.wb3d[b]])-d+e+a.deltaY[0]:Math.ceil(a.top0wb3d[a.wb3d[b]])-d+e+a.deltaY[0]-c[a.wb3dB[g]["PY2_"+a.d]];break}else 1===a.wb3dB[g]["vs_"+a.wb3dY[g]]&&(e+=Math.ceil(a.scrollMaxY[a.wb3d[g]]),c[a.wb3dB[g]["PY2_"+a.d]]=Math.ceil(a.scrollMaxY[a.wb3d[g]]))}}}
function wb3d_set_scrollMaxY2(a,c,d,e,b,g){1>=a.flag_bl2[c]&&(a.flag_bl2[c]++,a.scrollMaxY[c]=Math.ceil(a.max_top[c]-a.setting[b]["h_"+a.d]*a.wb3d_ay[c]),0>a.scrollMaxY[c]&&(a.scrollMaxY[c]=0),0!=d&&(a.vscroll[c]=0,a.vscrollM[c]=0),a.flag_bl2["0_0"]=0)};