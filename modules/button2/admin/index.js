/**
* Version:     1.0.0
* Author:      Keivan Kamali
*/
wb3d_setupdata.button2=function(obm){
      obm.modules['button2']=1;
      obm.button2_data=[];
      obm.button2_run=[];
      obm.button2_style='left';

      obm.createobj.button2=function(sn,idm,B,tmpdivid,obm,y,flag,l,wslide,cu,level){
            var p='position:absolute;';
            var ext2='<div  id="wb3df-'+idm+'"   style="'+p+'top:0px;left:0px; height:auto;width:300px;">';
            var textx='';
            if(level===0){
                  textx=wb3d_set_textx(idm);
            }
            var txt='<div id="wb3dg-'+idm+'" style="'+p+'">'+textx+ext2;
            var style1='style="overflow:hidden;height:auto;width:auto;'+p+'"';
            txt+='<div id="wb3de-'+idm+'" '+style1+'>'+B["text_"+y]+'</div>';
            txt+='</div>';
            txt+='</div>';
            jQuery(tmpdivid).append(txt);
            obm.bk_create_layer[l]=-1;
            obm.bk_create_layer0[l]=-1;
            wb3d_reset_obj_xy3(l);
      };

      obm.addon.wb3d_button2_run=function(sn,obm,frm,B,eff,wslide,yy,md,w0 ,yy_0,md0,id1,id_l,type_L,wh,ids,idg,cu,level){
            if(obm.button2_run[id1]!=obm.txt1[id1]+'-'+obm.txt2[id1]+'-'+obm.txt3[id1]+'-'+obm.chenge_details_obj[id1]){
                  var MyRoot = document.querySelector(':root');
                  MyRoot.style.setProperty('--wb3d_button2_color1-'+id1, obm.txt1[id1]);
                  MyRoot.style.setProperty('--wb3d_button2_color2-'+id1, obm.txt2[id1]);
                  MyRoot.style.setProperty('--wb3d_button2_color3-'+id1, obm.txt3[id1]);
                  MyRoot.style.setProperty('--wb3d_button2_height-'+id1, ((obm.bk_height[id1]+1)/2)+'px');
                  obm.button2_run[id1]=obm.txt1[id1]+'-'+obm.txt2[id1]+'-'+obm.txt3[id1]+'-'+obm.chenge_details_obj[id1];
            }
      };

      obm.removeobj.button2=function(K,idm,y){
            jQuery('#wb3dg-'+idm).empty();
            jQuery('#wb3dg-'+idm).remove();
            wb3d_delete_func_event(idm);
            delete K['type_obj-'+y];
            delete K['font'+y];
            return 0;
      };

      obm.setnewvalue.button2=function(){
            jQuery('.wb3d_panel').css('display','none');
            jQuery('#button2_div').css('display','');
            jQuery('#button2_div').removeClass("wb3d_displaynone");
            jQuery('#button2_fontname').val('Arial');
            jQuery('#button2_left').click();
            jQuery('#button2_text').val('text');
            jQuery('#button2_tag').val('div');    
            jQuery('#button2_type_line').val('nowrap');
            jQuery('#button2_decoration').val('none');
            jQuery('#button2_top_padding').val(10);
            jQuery('#button2_right_padding').val(20);
            jQuery('#button2_bottom_padding').val(10);
            jQuery('#button2_left_padding').val(20);
            jQuery('#button2_fontsize').val(17);
            jQuery('#button2_fontweight').val(100);
            jQuery('#button2_line_height').val(1);
            wb3d_button2_set_demo();
      };

      obm.setvalue.button2=function(i,T,K){
            jQuery('.wb3d_panel').css('display','none');
            jQuery('#button2_div').css('display','');
            jQuery('#button2_div').removeClass("wb3d_displaynone");
            obm.button2_style=K['align_'+i];
            jQuery('#button2_fontname').val(K['fname_'+i]);
            jQuery('#button2_tag').val(K['w_tag_'+i]);        
            jQuery('#button2_type_line').val(K['tline_'+i]);
            jQuery('#button2_'+K['talign_'+i]).click();
            jQuery('#button2_decoration').val(K['decoration_'+i]);
            var p1=obm.d+'-'+i;
            jQuery('#button2_top_padding').val(K['tp_'+p1]);
            jQuery('#button2_right_padding').val(K['rp_'+p1]);
            jQuery('#button2_bottom_padding').val(K['bp_'+p1]);
            jQuery('#button2_left_padding').val(K['lp_'+p1]);
            jQuery('#button2_fontsize').val(K['fs_'+p1]);
            jQuery('#button2_fontweight').val(K['fweight_'+i]);
            jQuery('#button2_line_height').val(K['lheight_'+i]);
            if(K['fname_'+i]===undefined){
                  jQuery('#button2_fontname').val('Arial');
                  jQuery('#button2_tag').val('div') ;       
                  jQuery('#button2_type_line').val('nowrap');
                  jQuery('#button2_decoration').val('none');
                  jQuery('#button2_top_padding').val(10);
                  jQuery('#button2_right_padding').val(20);
                  jQuery('#button2_bottom_padding').val(10);
                  jQuery('#button2_left_padding').val(20);
                  jQuery('#button2_fontsize').val(17);
                  jQuery('#button2_fontweight').val(100);
                  jQuery('#button2_line_height').val(1);
            }
            jQuery('#button2_text').val(K['text_'+i]);
            wb3d_button2_set_demo();
      };

      wb3d_button2_set_demo=function (){
            jQuery('#button2_demo2').css('text-align',obm.button2_style);
            jQuery( '#button2_demo2' ).text(jQuery('#button2_text').val());
            jQuery( '#button2_demo2' ).css('font-family',jQuery('#button2_fontname').val());
            jQuery( '#button2_demo2' ).css('text-decoration',jQuery('#button2_decoration').val());
            jQuery( '#button2_demo2' ).css('line-height',jQuery('#button2_line_height').val());
            jQuery( '#button2_demo2' ).css('font-weight',jQuery('#button2_fontweight').val());
            jQuery( '#button2_demo2' ).css('font-size',jQuery('#button2_fontsize').val()+'px');
            jQuery( '#button2_demo2' ).css('padding-top',jQuery('#button2_top_padding').val()+'px');
            jQuery( '#button2_demo2' ).css('padding-right',jQuery('#button2_right_padding').val()+'px');
            jQuery( '#button2_demo2' ).css('padding-bottom',jQuery('#button2_bottom_padding').val()+'px');
            jQuery( '#button2_demo2' ).css('padding-left',jQuery('#button2_left_padding').val()+'px');
            jQuery( '#button2_demo2' ).css('white-space',jQuery('#button2_type_line').val());
      };


      wb3d_button2_resize=function(id){
            jQuery('#wb3df-'+id ).resizable({handles: 'e',

                  start:function(event,ui){
                        var sn=obm.sn['0-0'];
                        var cu=0;
                        var id1=this.id.split('-')[1];
                        var id=obm.wb3d_ids[id1];
                        cu=id.split('_')[0]; 
                        id=id.split('_')[1]; 
                        id=id.split('-'); 
                        var fx=id[0];
                        var ex=id[1];
                        var bc=id[2];
                        var B=obm.dataslide[sn][obm.los[sn+'-'+fx]][obm.lo_l[sn+'-'+fx+'-'+ex]];
                        obm.bk_s=ui.size.width;
                        obm.bk_fontsize=B['fs_'+obm.d+'-'+bc];
                        obm.bk_rp=B['rp_'+obm.d+'-'+bc];
                        obm.bk_lp=B['lp_'+obm.d+'-'+bc];
                        obm.bk_tp=B['tp_'+obm.d+'-'+bc];
                        obm.bk_bp=B['bp_'+obm.d+'-'+bc];
                  },
                  resize: function( event, ui ) {
                        var sn=obm.sn['0-0'];
                        var cu=0;
                        var id1=this.id.split('-')[1];
                        var id=obm.wb3d_ids[id1];
                        cu=id.split('_')[0]; 
                        id=id.split('_')[1]; 
                        id=id.split('-'); 
                        var fx=id[0];
                        var ex=id[1];
                        var bc=id[2];
                        var B=obm.dataslide[sn][obm.los[sn+'-'+fx]][obm.lo_l[sn+'-'+fx+'-'+ex]];
                        var eff=B['EB_'+obm.d];
                        var frm=obm.pixel_frm[sn+'-'+eff+'-'+obm.framenum['0_'+fx+'-'+ex]];
                        if(wb3d_check_scale(obm,fx,ex,bc,B,eff,frm)===1){
                              return ;
                        }

                        var y1=ui.size.width/obm.bk_s;

                        if(B['tline_'+bc]==='normal'){
                              y1=1;
                        }

                        B['fs_'+obm.d+'-'+bc]=obm.bk_fontsize*y1;
                        B['rp_'+obm.d+'-'+bc]=obm.bk_rp*y1;
                        B['lp_'+obm.d+'-'+bc]=obm.bk_lp*y1;
                        B['tp_'+obm.d+'-'+bc]=obm.bk_tp*y1;
                        B['bp_'+obm.d+'-'+bc]=obm.bk_bp*y1;


                        if(B['tline_'+bc]==='normal'){
                              B['sizex_'+obm.d+'-'+bc]=ui.size.width-obm.bk_rp-obm.bk_lp;
                        }
                        wb3d_change_resize_data(obm,id1);
                  },
                  stop: function( event, ui ) {
                        var id1=this.id.split('-')[1];
                        setTimeout(function(){
                              wb3d_change_resize_data(obm,id1);
                        },300);
                  }   
            });
      };


      jQuery('.button2_style').click(function(){
            jQuery('.button2_style').css('border','none');
            obm.button2_style=this.id.split('button2_')[1];
            jQuery('#button2_'+obm.button2_style).css('border','1px solid blue');
            jQuery('#button2_demo2').css('text-align',obm.button2_style);
            jQuery('#button2_text').css('text-align',obm.button2_style);
      });

      jQuery('#button2_submit').click(function(){
            var cu=obm.cu;
            var sn=obm.sn['0-0'];
            var i,idm,K,tmpdivid;
            if(obm.new_layer!=0){
                  wb3d_new_layerB();
                  K=obm.dataslide[sn][ obm.los[sn+'-'+obm.activeslide[cu]] ][obm.lo_l[sn+'-'+obm.activeslide[cu]+'-'+obm.s_l]];
                  i=obm.i;
                  idm=obm.wb3d_id[cu+'_'+obm.activeslide[cu]+'-'+obm.s_l+'-'+i];
                  obm.new_layer=0;
            }
            else{
                  i=obm.i;
                  if(obm.s_l===-1||obm.s_o===-1){
                        alert(jQuery('#wb3d_id_alert1').text());
                        return;
                  }
                  K=obm.dataslide[sn][ obm.los[sn+'-'+obm.activeslide[cu]] ][obm.lo_l[sn+'-'+obm.activeslide[cu]+'-'+obm.s_l]];
                  idm=obm.wb3d_id[cu+'_'+obm.activeslide[cu]+'-'+obm.s_l+'-'+i];
                  if(obm.new_layer===0){
                        obm.removeobj.button2(K,idm,i);
                        jQuery('.wb3d_panel').css('display','none');
                        jQuery('#textmenu2').css('display','none');
                  }
            }

            wb3d_get_button2(K,i,obm);
            jQuery('.wb3d_panel').css('display','none');
            jQuery('#textmenu2').css('display','none');
            if(obm.U_P[sn+'-'+obm.activeslide[cu]+'-'+obm.s_l]!=0){
                  tmpdivid='#wb3de-'+obm.wb3d_id['0_'+obm.activeslide[cu]+'-'+obm.U_P[sn+'-'+obm.activeslide[cu]+'-'+obm.s_l]];
            }
            else{
                  tmpdivid='#wb3dh-'+obm.wb3d_id[cu+'_'+obm.activeslide[cu]];
            }
            obm.createobj.button2(sn,idm,K,tmpdivid,obm,i,0,idmm,obm.activeslide[cu],cu,0);
            var idmm=cu+'_'+obm.activeslide[cu]+'-'+obm.s_l;
            obm.bk_create_layer[idmm]=-1;
            obm.bk_create_layer0[idmm]=-1;

      });


      obm.savedata.button2=function(zz,z,i,t,T,F,flag,cx,cy,ax,ay){
            for(var j=0;j<4;j++){
                  if(flag!=1){
                        cy=j;
                        cx=j;
                        ax=1;
                        ay=1;
                  }
                  zz[z][i]['sizex_'+cx+'-'+t]=F['sizex_'+cy+'-'+t]/ax;
                  zz[z][i]['sizey_'+cx+'-'+t]=F['sizey_'+cy+'-'+t]/ay;
                  zz[z][i]['fs_'+cx+'-'+t]=F['fs_'+cy+'-'+t]/ax;
                  zz[z][i]['tp_'+cx+'-'+t]=F['tp_'+cy+'-'+t]/ax;
                  zz[z][i]['rp_'+cx+'-'+t]=F['rp_'+cy+'-'+t]/ax;
                  zz[z][i]['bp_'+cx+'-'+t]=F['bp_'+cy+'-'+t]/ax;
                  zz[z][i]['lp_'+cx+'-'+t]=F['lp_'+cy+'-'+t]/ax;
            }

            zz[z][i]['align_'+t]=F['align_'+t];
            zz[z][i]['font'+t]=1;
            zz[z][i]['decoration_'+t]=F['decoration_'+t];
            zz[z][i]['lheight_'+t]=F['lheight_'+t];
            zz[z][i]['tline_'+t]=F['tline_'+t];
            zz[z][i]['talign_'+t]=F['talign_'+t];
            zz[z][i]['fname_'+t]=F['fname_'+t];
            zz[z][i]['fweight_'+t]=F['fweight_'+t];
            zz[z][i]['w_tag_'+t]=F['w_tag_'+t];
            zz[z][i]['text_'+t]=F['text_'+t];
      };

      obm.setupobj.button2=function(obm,idm,T,B,wslide,name,y,sn,flag,level){
            obm.size1[idm]=2;
            obm.newsize[idm]=2;
            obm.bg[idm]=1;

            obm.show_obj[idm]=3;
            obm.button2_run[idm]=-1;
            obm.bshadow[idm]=1;


            wb3d_checkstyle(idm);
            wb3d_button2_setstyle(idm,obm);

            if(level===0){
                  if(B['tline_'+y]==='normal'){
                        wb3d_button2_resize(idm,'s,e');
                  }
                  else{
                        wb3d_button2_resize(idm,'e');
                  }
                  wb3d_drag_obj('#wb3dg-'+idm);
            }
            wb3d_events('wb3dg-'+idm,obm);
      };


      function wb3d_get_button2(K,i,obm){
            var cu=0;
            var idm=obm.wb3d_id[obm.activeslide[cu]+'-'+obm.s_l+'-'+i];
            K['type_obj-'+i  ]='button2';
            obm.size1[idm]=2;
            obm.newsize[idm]=2;
            obm.bg[idm]=1;
            K['talign_'+i]=jQuery('#button2_demo2').css('text-align');
            K['text_'+i]=jQuery('#button2_text').val();
            K['fname_'+i]=jQuery('#button2_fontname').val();
            K['align_'+i]=obm.button2_style;
            K['font'+i]=1;
            K['fweight_'+i]=jQuery('#button2_fontweight').val();
            K['lheight_'+i]=jQuery('#button2_line_height').val();
            K['tline_'+i]=jQuery('#button2_type_line').val();
            K['decoration_'+i]=jQuery('#button2_decoration').val();

            if(jQuery('#button2_tag').val() ===''){
                  K['w_tag_'+i]='div';  
            }
            else{      
                  K['w_tag_'+i]=jQuery('#button2_tag').val();  
            }      

            for(var n=0;n<4;n++){
                  var p1=n+'-'+i;
                  if(K['sizex_'+p1]==undefined){
                        K['sizex_'+p1]=300;
                  }

                  if(K['tp_'+p1]===undefined||n===obm.d){
                        K['tp_'+p1]=parseInt(jQuery('#button2_top_padding').val());
                  }
                  if(K['rp_'+p1]===undefined||n===obm.d){
                        K['rp_'+p1]=parseInt(jQuery('#button2_right_padding').val());
                  }

                  if(K['bp_'+p1]===undefined||n===obm.d){
                        K['bp_'+p1]=parseInt(jQuery('#button2_bottom_padding').val());
                  }

                  if(K['lp_'+p1]===undefined||n===obm.d){
                        K['lp_'+p1]=parseInt(jQuery('#button2_left_padding').val());
                  }

                  if(K['fs_'+p1]===undefined||n===obm.d){
                        K['fs_'+p1]=parseInt(jQuery('#button2_fontsize').val());
                  }
            }
      }

      jQuery('#button2_fontsize').change(function(){
            wb3d_button2_fontsize(this.value);
      });
      function wb3d_button2_fontsize(a){
            jQuery( '#button2_demo2' ).css('font-size',a+'px');
      }

      jQuery('#button2_line_height').change(function(){
            wb3d_button2_line_height(this.value);
      });
      function wb3d_button2_line_height(a){
            jQuery( '#button2_demo2' ).css('line-height',a);
      }

      jQuery('#button2_fontweight').change(function(){
            wb3d_button2_fontweight(this.value);
      });
      function wb3d_button2_fontweight(a){
            jQuery( '#button2_demo2' ).css('font-weight',a);
      }

      jQuery('#button2_top_padding').change(function(){
            wb3d_button2_top_padding(this.value);
      });
      function wb3d_button2_top_padding(a){
            jQuery( '#button2_demo2' ).css('padding-top',a+'px');
      }

      jQuery('#button2_right_padding').change(function(){
            wb3d_button2_right_padding(this.value);
      });
      function wb3d_button2_right_padding(a){
            jQuery( '#button2_demo2' ).css('padding-right',a+'px');
      }

      jQuery('#button2_bottom_padding').change(function(){
            wb3d_button2_bottom_padding(this.value);
      });
      function wb3d_button2_bottom_padding(a){
            jQuery( '#button2_demo2' ).css('padding-bottom',a+'px');
      }

      jQuery('#button2_left_padding').change(function(){
            wb3d_button2_left_padding(this.value);
      });
      function wb3d_button2_left_padding(a){
            jQuery( '#button2_demo2' ).css('padding-left',a+'px');
      }

      jQuery('#button2_decoration').change(function(){
            wb3d_button2_decoration(this.value);
      });
      function wb3d_button2_decoration(a){
            jQuery( '#button2_demo2' ).css('text-decoration',a);
      }

      jQuery('#button2_close2').click(function(){
            jQuery('.wb3d_panel').css('display','none');
      });


      jQuery('#button2_type_line').change(function(){
            jQuery('#button2_demo2').css('white-space',jQuery('#button2_type_line').val());
      });

      jQuery('#button2_text').keyup(function(){
            jQuery( '#button2_demo2' ).text(jQuery('#button2_text').val());
      });


      jQuery('#button2_fontname').keyup(function(){
            jQuery('#wb3d_fontfamily_sample').css("display","");
            obm.fontfamily=this.id;
            jQuery( '#button2_demo2' ).css('font-family',jQuery('#button2_fontname').val());
      });

////////////////////
function wb3d_button2_setstyle(id,obm){
      var keyFrames = ':root{'+
            '--wb3d_button2_color1-'+id+': #270b46;'+
            '--wb3d_button2_color2-'+id+': #0f0;'+
            '--wb3d_button2_color3-'+id+': #00f;'+
            '--wb3d_button2_height-'+id+': 30;'+
      '}'+
      '#wb3de-'+id+'{'+
            'background: var(--wb3d_button2_color1-'+id+');'+
            'color: var(--wb3d_button2_color2-'+id+');'+
      '}'+
      '#wb3de-'+id+':hover{'+
            '-webkit-transition: .5s;'+
            'transition: .7s;'+
            'box-shadow:inset 0 0 0 var(--wb3d_button2_height-'+id+') var(--wb3d_button2_color3-'+id+');'+
      '}';
      document.getElementById('wb3d_style_'+id).innerHTML = keyFrames;
}
};