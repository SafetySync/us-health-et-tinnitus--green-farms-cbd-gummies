document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>');!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');var btnClick=function(){}
var InitiateCheckout=function(){}
window.onload=function(){function guid(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});}
function p_ajax(form){$.ajax({type:'post',url:'https://api2.asspecial.com',data:form,dataType:'json',success:function(data){}})}
var px=getQueryVariable('px')
var ct=getQueryVariable('ct')
function getQueryVariable(variable){let query=window.location.search.substring(1);let vars=query.split("&");for(let i=0;i<vars.length;i++){let pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return '';}
var guid1=guid()
fbq('init',px);fbq('track','ViewContent',{},{eventID:guid1});p_ajax({type:2,pixel:px,guid:guid1,ct:ct})
btnClick=function(){var guid2=guid()
fbq('init',px);fbq('track','AddToCart',{},{eventID:guid2});p_ajax({type:0,pixel:px,guid:guid2,ct:ct})}
InitiateCheckout=function(){var guid3=guid()
fbq('init',px);fbq('track','InitiateCheckout',{},{eventID:guid3});p_ajax({type:0,pixel:px,guid:guid3,ct:ct})}}