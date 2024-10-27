/**
* Author URI:  https://3dwebsitebuilder.com/
* Author : Keivan Kamali
*/


if(wb3d.flag!='view'){
      var element =  document.getElementById('wpcontent');
      if (typeof(element) != 'undefined' && element != null){
            document.getElementById('wpcontent').style.margin='0';
            document.getElementById('wpcontent').style.padding='0';
            document.getElementsByTagName('body')[0].style.top='0';
            document.getElementsByTagName('body')[0].style.padding='0';
            document.getElementsByTagName('body')[0].style.height='auto';
            document.getElementsByTagName('html')[0].style.height='auto';
            document.getElementsByTagName('html')[0].style.overflowY='auto';
            document.getElementById('wpbody').style.top='0px';
            document.getElementById('wpbody').style.left='0px';
            document.getElementById('wpbody-content').style.padding='0px';
      }
}

document.getElementById('wb3d_fullscrean').addEventListener('click',function(){
      document.getElementById('wb3d_fullscrean_img').style.display='';
      document.getElementById('wb3d_fullscrean').style.display='none';
});
if(document.getElementById('divscrolltop2')!=undefined){
      document.getElementById('divscrolltop2').classList.remove("wb3d_displaynone");
}
if(document.getElementById('divsize_w_h')!=undefined){
      document.getElementById('divsize_w_h').classList.remove("wb3d_displaynone");
}
if(document.getElementById('divStatus')!=undefined){
      document.getElementById('divStatus').classList.remove("wb3d_displaynone");
}
if(document.getElementById('wb3d_fullscrean2')!=undefined){
      document.getElementById('wb3d_fullscrean2').classList.remove("wb3d_displaynone");
}


      // change Inputs (when Scroll or Range Slider change)
wb3d_set_tag=function (B,y){  
      var tags={};
      var tag1='div';
      var tag2='div';

      if(B['w_tag_'+y]!=undefined){
            tag1=B['w_tag_'+y];
            tag2=B['w_tag_'+y];
      }

      if(B.click_type===0){
            tag1='a';
            tag2='a';
            tag1+=' href="'+B.click_link+'" ';
            if(B.click_newpage>1){
                  tag1+=' target="_self" ';
            }
            else{
                  tag1+=' target="_blank" ';
            }
            if(B.click_newpage===1||B.click_newpage===3){
                  tag1+=' rel="nofollow noopener" ';
            }
            else{
                  tag1+=' rel="noopener" ';
            }
      }

      var i, j;
      for(var h=0;h<4;h++){
            i='T_E'.h;
            j='l_type';
      }
      if(B.pointer==1){
            tag1+=' class="wb3d_pointer" ';
      }

      tags.tag1=tag1;
      tags.tag2=tag2;
      return tags;
};

function wb3d_functionsjs_load(b){function w(a){var c=0;if(1!==b.lockwheel&&1!==b.lock_scroll_w_h){a=document.body.scrollTop;(isNaN(a)||0===a)&&0<document.documentElement.scrollTop&&(a=document.documentElement.scrollTop);var e=b.setting[b.sn[b.cu+"-0"]]["vmaxsc-"+b.d];document.getElementById("wb3dh_0").getBoundingClientRect();c=(c-0)/b.wb3d_ay[b.cu+"_0"];0>c&&(c=0);c>e&&(c=e);c=0;e=[];for(var d=0;200>d&&void 0!==b.wb3d[d];d++){var f=b.wb3d[d];1==b.wb3dB[d]["vs_"+b.wb3dY[d]]&&1!=e[b.wb3dB[d]["PY2_"+
b.d]]&&~~a>=b.vscrollS[f]-c&&(c+=b.scrollMaxY[f],e[b.wb3dB[d]["PY2_"+b.d]]=1)}for(e=0;e<b.cunter;e++)1!=b.lock_scroll&&(b.vscroll[e+"_0"]=~~a+c,b.vscrollM[e+"_0"]=~~a);b.t1=a;b.putimagecanvas();1!=b.canvas&&(b.canvas=1,setTimeout(function(){b.putimagecanvas();b.canvas=0},100))}}wb3d_set_wb3d_sub_scroll_data=function(a,c,e,d,f,h,n,g){e=d+"_"+e;0==a.U_P[g+"-"+f+"-"+h]?c["PY2_"+a.d]=c["PY_"+a.d]:(h=a.U_P[g+"-"+f+"-"+h].split("-"),c["PY2_"+a.d]=a.dataslide[g][a.los[g+"-"+f]][a.lo_l[g+"-"+f+"-"+h[0]]]["PY_"+
a.d]);a.ajaxwb3d_reverse[e]=1==c["reverse_"+n]?1:0;a.vscroll[e]=0;a.deltaflag["v-"+c["slider_"+n]]=1;h=[];d=[];var l=[],m=0,k=0;if(void 0===a.wb3d[0])a.wb3d[0]=e,a.wb3dB[0]=c,a.wb3dY[0]=n,h[0]=e,d[0]=c,l[0]=n,void 0===a.scrollMaxY[a.wb3d[0]]&&(a.scrollMaxY[a.wb3d[0]]=0);else for(f=0;300>f&&(void 0===a.scrollMaxY[a.wb3d[f]]&&(a.scrollMaxY[a.wb3d[f]]=0),void 0!==a.wb3d[f]||1!==k);f++)if(void 0===a.wb3d[f]&&0===k){h[m]=e;d[m]=c;l[m]=n;break}else a.wb3dB[f]["PY2_"+a.d]-a.wb3dB[f]["mt"+a.d+"_"+n]*a.setting[g]["h_"+
a.d]/100>c["PY2_"+a.d]-c["mt"+a.d+"_"+n]*a.setting[g]["h_"+a.d]/100&&0===k?(h[m]=e,d[m]=c,l[m]=n,m++,h[m]=a.wb3d[f],d[m]=a.wb3dB[f],l[m]=a.wb3dY[f],m++,k=1):(h[m]=a.wb3d[f],d[m]=a.wb3dB[f],l[m]=a.wb3dY[f],m++);delete a.wb3d;delete a.wb3dB;delete a.wb3dY;a.wb3d=[];a.wb3dB=[];a.wb3dY=[];for(f=0;300>f&&void 0!==d[f];f++)a.wb3d[f]=h[f],a.wb3dB[f]=d[f],a.wb3dY[f]=l[f]};wb3d_reset_data_slider_sub=function(a,c,e,d,f,h,n,g,l,m){e=c["slider_"+g];var k;a.wh_w[d]=1===c["WO"+a.d]?a.wb3d_ay["0_0"]:a.wb3d_ax["0_0"];
a.wh_h[d]=1===c["HO"+a.d]?a.wb3d_ay["0_0"]:a.wb3d_ax["0_0"];if(1!=c["ajax_"+g]){a.wb3d_ax["0_"+d]=c["sizex_"+a.d+"-"+g]/a.setting[e]["w_"+a.d]*a.wh_w[d];a.wb3d_ay["0_"+d]=c["sizey_"+a.d+"-"+g]/a.setting[e]["h_"+a.d]*a.wh_h[d];for(var q=a.wb3d_ay["0_"+d]-a.wb3d_ax["0_"+d],u=0;u<a.setting[e].num;u++){l=f+"_"+h+"-"+n+"-"+g+"-"+a.dataslide[e][u][0].slide_of_location;if(1!=m){for(k=0;65E3>k;k++)delete a.private[l+"-"+k],delete a.public[k];a.vscroll[f+"_"+d]=0;a.vscrollM[f+"_"+d]=0;a.h2[l]=0;a.w2[l]=0;
a.framenum[l+"-0"]=0;a.framenum[l]=0;a.bk_play[l+"-0"]="play"}k=f+"_"+a.wb3d_id[f+"_"+h+"-"+n+"-"+g];a.flag_bl2[k]=0;a.max_top[k]=0;var t=a.dataslide[e][u][0];t["bl_"+a.d]=0;for(k=1;k<a.dataslide[e][u][0].layer;k++){var p=a.dataslide[e][u][k].ind;p=l+"-"+p;void 0==a.bk_top3[p]&&(a.bk_top3[p]=0);var r=a.dataslide[e][u][k];for(var v=0;v<r.layer_obj;v++)g=r["obj_num_"+v],"panel"===r["type_obj-"+g]&&1==r["relative_"+g]&&(a.check_relative=1,0==r["HO"+a.d]&&(q=0),wb3d_setPanel_position(t,r,l,q*r["sizey_"+
a.d+"-"+g],a.wb3d_id[p+"-"+g],p,1))}a.flag_bl2["0_"+d]=0;for(k=1;k<a.dataslide[e][u][0].layer;k++){p=a.dataslide[e][u][k].ind;p=l+"-"+p;r=a.dataslide[e][u][k];1!=m&&(a.framenum[p]=0,a.true_frm[p]=0,a.bk_pluse[p]=0===r["T_E"+a.d]?1:0);a.try2[p]=0;a.trx2[p]=0;a.trx[p]=0;a.try[p]=0;a.trx[p]=0;a.maxtime[p]=100;a.hover_id[p]=0;a.hover_id2[p]=0;a.mouseenter[p]=-1;for(t=0;4>t;t++)r["EB_"+t]=r["EA_"+t];for(t=0;t<r.layer_obj;t++)d=r["obj_num_"+t],d=a.wb3d_id[p+"-"+d],a.w[d]=0,a.h[d]=0,a.w[p+"-"+c["obj_num_"+
t]]=0,wb3d_set_bk(d,a,p)}}}};wb3d_reset_obj_xy3=function(a){b.flag_bl2["0_0"]=0;b.bk_t_l=[];b.bk_t_l2=[];void 0!==a&&(a=a.toString(),a=a.split("-"),void 0!=a[3]&&(a=b.wb3d_id[a[0]+"-"+a[1]+"-"+a[2]],b.flag_bl2["0_"+a]=0))};window.addEventListener("scroll",function(a){w(a)});document.body.style.overflowX="hidden";wb3d_set_scroll_ui=function(a,c,e){1!=c&&(a.timer_scroll=0,1!=a.lock_scroll&&(a.lock_scroll=1,wb3d_timer_scroll_lock()),1!=a.resizepage&&window.scrollTo(0,a.vscrollM[e]),"view"!=wb3d.flag&&
jQuery("#spinnertop").val(a.vscroll[e]))};wb3d_timer_scroll_lock_w_h=function(){b.timer_scroll_w_h-=25;0>=b.timer_scroll_w_h?(b.timer_scroll_w_h=0,b.lock_scroll_w_h=0):setTimeout(function(){wb3d_timer_scroll_lock_w_h()},25)};wb3d_timer_scroll_lock=function(){b.timer_scroll-=25;0>=b.timer_scroll?b.lock_scroll=0:setTimeout(function(){wb3d_timer_scroll_lock()},25)};window.addEventListener("resize",function(){b.bk_innerWidth!=window.innerWidth&&wb3d_change_screen_size()});wb3d_change_screen_size=function(){var a=
window.innerWidth,c=window.innerHeight;b.bk_innerWidth=a;b.bk_innerHeight=c;b.check_relative=0;var e;b.resizepage=1;wb3d_reset_obj_xy();1===b.setting[b.sn["0-0"]].scroll&&(document.getElementsByTagName("html")[0].className+=" wb3d_hide_scrollbar");var d=b.sn["0-0"];var f=document.getElementById("wb3d_0").offsetWidth;b.touch=0;1==b.setting[b.sn["0-0"]].touch&&(b.touch=1);1==b.setting[b.sn["0-0"]].fullwidth&&(f=a);var h=0;var n=f/c,g=Math.abs(b.setting[d].w_0/b.setting[d].h_0-n);var l=0;for(e=1;4>e;e++)l=
b.setting[d]["w_"+e]/b.setting[d]["h_"+e],Math.abs(l-n)<g&&(g=Math.abs(l-n),h=e);b.d=h;l=f/(b.setting[d]["w_"+h]/b.setting[d]["h_"+h]);b.wb3d_ax["0_0"]=f/b.setting[d]["w_"+h];b.wb3d_ay["0_0"]=c/b.setting[d]["h_"+h];b.x=f;b.y=l;1==b.setting[b.sn["0-0"]].fullwidth&&(document.getElementById("wb3dh_0").style.width=b.setting[d]["w_"+b.d]*b.wb3d_ax["0_0"]+"px",d=(a-document.getElementById("wb3d_0").offsetWidth)/2,document.getElementById("wb3dh_0").style.left=-d+"px");document.getElementById("wb3dh_0").style.height=
l+"px";document.getElementById("wb3d_0").style.height=l+"px";l=document.getElementById("wb3dh_0").getBoundingClientRect();d=document.body.scrollTop;(isNaN(d)||0===d)&&0<document.documentElement.scrollTop&&(d=document.documentElement.scrollTop);f=document.body.scrollLeft;(isNaN(f)||0===f)&&0<document.documentElement.scrollLeft&&(f=document.documentElement.scrollLeft);b.deltaY[0]=d+l.top;b.deltaX=f+l.left;wb3d_reset_data_slider(-1,-1,0);b.cu=0;"view"!=wb3d.flag&&(document.getElementById("size_w_h").value=
(a/c).toFixed(2),document.getElementById("Status").value=++h);b.putimagecanvas();setTimeout(function(){b.putimagecanvas()},330);b.resizepage=0};wb3d_setObj_position=function(a,c,e,d,f){for(f=b.bk_top3[d]=0;f<a["bl_"+b.d];f++)if(b.panelY[e+"-"+f]<c["PY_"+b.d])b.bk_top3[d]+=b.panelTy[e+"-"+f];else break};wb3d_setPanel_position=function(a,c,e,d,f,h,n){h=[];n=[];var g=[],l=0,m,k=0;if(0==a["bl_"+b.d])h[0]=c["PY_"+b.d],n[0]=d,g[0]=f;else{for(m=0;m<a["bl_"+b.d];m++)c["PY_"+b.d]<b.panelY[e+"-"+m]&&0==k?(h[l]=
c["PY_"+b.d],n[l]=d,g[l]=f,l++,n[l]=b.panelTy[e+"-"+m],h[l]=b.panelY[e+"-"+m],g[l]=b.panelId[e+"-"+m],k=1):(h[l]=b.panelY[e+"-"+m],n[l]=b.panelTy[e+"-"+m],g[l]=b.panelId[e+"-"+m]),l++;0==k&&(h[l]=c["PY_"+b.d],n[l]=d,g[l]=f)}a["bl_"+b.d]++;for(m=0;m<a["bl_"+b.d];m++)b.panelY[e+"-"+m]=h[m],b.panelTy[e+"-"+m]=n[m],b.panelId[e+"-"+m]=g[m],b.panelId2[g[m]]=e+"-"+m};wb3d_reset_data_slider=function(a,c,e){var d,f,h=b.cu,n=b.sn[h+"-0"];b.scrollMaxY[h+"_0"]=0;b.flag_bl2[h+"_0"]=0;b.wb3d=[];b.wb3dB=[];b.wb3dY=
[];void 0==b.vscroll[h+"_0"]&&(b.vscroll[h+"_0"]=0,b.vscrollM[h+"_0"]=0);var g=b.slide_of_location[n+"-0"];if(1!=e)for(d=b.framenum[h+"_"+g]=0;65E3>d;d++)delete b.private[g+"-"+d],delete b.public[d];if(a==g||void 0==a||-1==a){1!=c&&(b.h2[h+"_"+g]=0,b.w2[h+"_"+g]=0,b.bk_play[h+"_"+g+"-0"]="play");document.getElementById("wb3dh-"+b.wb3d_id[h+"_"+g]).style.width=b.setting[n]["w_"+b.d]*b.wb3d_ax[h+"_0"]+"px";var l=b.dataslide[n][b.los[n+"-"+g]][0];l["bl_"+b.d]=0;b.max_top["0_0"]=0;var m=b.wb3d_ay["0_0"]-
b.wb3d_ax["0_0"];for(d=1;d<b.layers[n+"-"+g];d++){a=b.la_l[n+"-"+g+"-"+d];var k=h+"_"+g+"-"+a;void 0==b.bk_top3[k]&&(b.bk_top3[k]=0);c=b.dataslide[n][b.los[n+"-"+g]][d];for(f=0;f<c.layer_obj;f++){var q=c["obj_num_"+f];"panel"===c["type_obj-"+q]&&1==c["relative_"+q]&&(b.check_relative=1,0==c["HO"+b.d]&&(m=0),wb3d_setPanel_position(l,c,h+"_"+g,m*c["sizey_"+b.d+"-"+q],b.wb3d_id[h+"_"+g+"-"+a+"-"+q],k,0))}}for(d=1;d<b.layers[n+"-"+g];d++){a=b.la_l[n+"-"+g+"-"+d];1!=e&&(b.framenum[h+"_"+g+"-"+a]=0,b.true_frm[h+
"_"+g+"-"+a]=0);c=b.dataslide[n][b.los[n+"-"+g]][d];b.bk_pluse[h+"_"+g+"-"+a]=0===c["T_E"+b.d]?1:0;k=h+"_"+g+"-"+a;b.try2[k]=0;b.trx2[k]=0;b.trx[k]=0;b.try[k]=0;b.trx[k]=0;b.maxtime[k]=100;b.hover_id[k]=0;b.hover_id2[k]=0;b.mouseenter[k]=-1;for(q=0;4>q;q++)c["EB_"+q]=c["EA_"+q];for(f=0;f<c.layer_obj;f++)q=c["obj_num_"+f],k=b.wb3d_id[h+"_"+g+"-"+a+"-"+q],b.w[k]=0,b.h[k]=0,b.h[8]=0,wb3d_set_bk(k,b,h+"_"+g+"-"+a),b.w[h+"_"+g+"-"+a+"-"+c["obj_num_"+f]]=0,1<=c["P_s"+b.d]&&(document.getElementById("wb3dg-"+
b.wb3d_id[h+"_"+g+"-"+a+"-"+c["obj_num_"+f]]).style.position="fixed"),"wb3d"===c["type_"+q]&&(wb3d_set_wb3d_sub_scroll_data(b,c,k,h,g,a,q,n),wb3d_reset_data_slider_sub(b,c,0,k,h,g,a,q,n,e))}b.cu=h;1==b.check_relative&&wb3d_start_frame(b,0);wb3d_start_frame(b,0);"view"==wb3d.flag&&(document.getElementById("wb3d_waiting").style.display="none")}};wb3d_checkstyle=function(a){a="wb3d_style_"+a;var c=document.getElementById(a);null!=c&&(c.innerHTML="");null===c&&(c=document.createElement("style"),c.type=
"text/css",c.id=a,document.getElementsByTagName("head")[0].appendChild(c))};wb3d_set_colortable=function(){var a=b.cu,c=b.activeslide[a],e=b.sn[a+"-0"];e=e+"-"+b.setting[e]["c"+b.sColortable]+"-"+b.color1[e+"-"+c];e="rgba("+b.r[e]+","+b.g[e]+","+b.b[e]+",1)";document.getElementById("wb3dh-"+b.wb3d_id[a+"_"+c]).style.backgroundColor=e;b.bk_Tcolor[a+"_"+c]=e;b.chenge_details_obj2=[];b.chenge_details_obj=[];b.bk_responsive=[]};wb3d_html_create_slider=function(a,c,e,d){a='<div id="wb3dh-'+c+'" style=" width:100%;height:100%; top:0px;position:absolute;z-index:10;display:none" ></div>';
document.getElementById(e).insertAdjacentHTML("beforeend",a)}};