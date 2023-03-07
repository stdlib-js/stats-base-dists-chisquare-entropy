// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t=Math.floor,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,o=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol.toStringTag:"",i=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,a;if(null==r)return u.call(r);t=r[f],a=f,n=null!=(i=r)&&o.call(i,a);try{r[f]=void 0}catch(n){return u.call(r)}return e=u.call(r),n?r[f]=t:delete r[f],e}:function(r){return u.call(r)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var y,v=n,p="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w,d=y,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),t=n,r=(A&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var m,h=w,g="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(g&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O={uint16:m,uint8:h};(I=new O.uint16(1))[0]=4660;var S=52===new O.uint8(I.buffer)[0],E=!0===S?1:0,F=new d(1),T=new v(F.buffer);function H(r){return F[0]=r,T[E]}var G=!0===S?0:1,P=new d(1),M=new v(P.buffer);function x(r,n){return P[0]=r,M[G]=n>>>0,P[0]}function L(r,n,t){var e,u,o,f,i,a,c,l,y;return(u=2147483647&(e=H(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),f=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),f=n+y*((i=y*r)*(f+c)+n),l=r+(f+=.3333333333333341*i),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-f))):1===t?l:(x(y=l,0),c=f-(y-r),x(a=o=-1/l,0),a+o*((i=1+a*y)+a*c))}var V,W,k=!0===S?0:1,Y=new d(1),q=new v(Y.buffer);!0===S?(V=1,W=0):(V=0,W=1);var C={HIGH:V,LOW:W},z=new d(1),B=new v(z.buffer),D=C.HIGH,J=C.LOW;function K(r,n){return B[D]=r,B[J]=n,z[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,X=1023;function Z(r){return r===Q||r===R}var $,rr,nr=2147483647,tr="function"==typeof Object.defineProperty?Object.defineProperty:null,er=Object.defineProperty,ur=Object.prototype,or=ur.toString,fr=ur.__defineGetter__,ir=ur.__defineSetter__,ar=ur.__lookupGetter__,cr=ur.__lookupSetter__,lr=function(){try{return tr({},"x",{}),!0}catch(r){return!1}}()?er:function(r,n,t){var e,u,o,f;if("object"!=typeof r||null===r||"[object Array]"===or.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===or.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(ar.call(r,n)||cr.call(r,n)?(e=r.__proto__,r.__proto__=ur,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,f="set"in t,u&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&fr&&fr.call(r,n,t.get),f&&ir&&ir.call(r,n,t.set),r};function yr(r,n,t){lr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===S?($=1,rr=0):($=0,rr=1);var vr={HIGH:$,LOW:rr},pr=new d(1),sr=new v(pr.buffer),br=vr.HIGH,wr=vr.LOW;function dr(r,n,t,e){return pr[0]=r,n[e]=sr[br],n[e+t]=sr[wr],n}function Ar(r){return dr(r,[0,0],1,0)}yr(Ar,"assign",dr);var _r=[0,0];function Nr(r,n){var t,e;return Ar.assign(r,_r,1,0),t=_r[0],t&=nr,e=H(n),K(t|=e&=2147483648,_r[1])}function mr(r){return Math.abs(r)}function hr(n,t,e,u){return r(n)||Z(n)?(t[u]=n,t[u+e]=0,t):0!==n&&mr(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+e]=-52,t):(t[u]=n,t[u+e]=0,t)}yr((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var gr=[0,0],Ur=[0,0];function jr(n,t){var e,u;return 0===t||0===n||r(n)||Z(n)?n:(hr(n,gr,1,0),t+=gr[1],t+=function(r){var n=H(r);return(n=(2146435072&n)>>>20)-X|0}(n=gr[0]),t<-1074?Nr(0,n):t>1023?n<0?R:Q:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,Ar.assign(n,Ur,1,0),e=Ur[0],e&=2148532223,u*K(e|=t+X<<20,Ur[1])))}function Ir(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Sr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Er=16777216,Fr=5.960464477539063e-8,Tr=Ir(20),Hr=Ir(20),Gr=Ir(20),Pr=Ir(20);function Mr(r,n,e,u,o,f,i,a,c){var l,y,v,p,s,b,w,d,A;for(p=f,A=u[e],d=e,s=0;d>0;s++)y=Fr*A|0,Pr[s]=A-Er*y|0,A=u[d-1]+y,d-=1;if(A=jr(A,o),A-=8*t(.125*A),A-=w=0|A,v=0,o>0?(w+=s=Pr[e-1]>>24-o,Pr[e-1]-=s<<24-o,v=Pr[e-1]>>23-o):0===o?v=Pr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<e;s++)d=Pr[s],0===l?0!==d&&(l=1,Pr[s]=16777216-d):Pr[s]=16777215-d;if(o>0)switch(o){case 1:Pr[e-1]&=8388607;break;case 2:Pr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=jr(1,o)))}if(0===A){for(d=0,s=e-1;s>=f;s--)d|=Pr[s];if(0===d){for(b=1;0===Pr[f-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Or[i+s],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(s-d)];u[s]=y}return Mr(r,n,e+=b,u,o,f,i,a,c)}}if(0===A)for(e-=1,o-=24;0===Pr[e];)e-=1,o-=24;else(A=jr(A,-o))>=Er?(y=Fr*A|0,Pr[e]=A-Er*y|0,o+=24,Pr[e+=1]=y):Pr[e]=0|A;for(y=jr(1,o),s=e;s>=0;s--)u[s]=y*Pr[s],y*=Fr;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=Sr[b]*u[s+b];Gr[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Gr[s];for(n[0]=0===v?y:-y,y=Gr[0]-y,s=1;s<=e;s++)y+=Gr[s];return n[1]=0===v?y:-y,7&w}function xr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Tr[a]=c<0?0:Or[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Tr[f+(a-c)];Hr[a]=u}return Mr(r,n,4,Hr,i,4,o,f,Tr)}var Lr=Math.round;function Vr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Lr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(H(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(H(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Wr=1.5707963267341256,kr=6077100506506192e-26,Yr=2*kr,qr=3*kr,Cr=4*kr,zr=[0,0,0],Br=[0,0];function Dr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&H(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Vr(r,u,n):u<=1073928572?r>0?(a=r-Wr,n[0]=a-kr,n[1]=a-n[0]-kr,1):(a=r+Wr,n[0]=a+kr,n[1]=a-n[0]+kr,-1):r>0?(a=r-2*Wr,n[0]=a-Yr,n[1]=a-n[0]-Yr,2):(a=r+2*Wr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Vr(r,u,n):r>0?(a=r-3*Wr,n[0]=a-qr,n[1]=a-n[0]-qr,3):(a=r+3*Wr,n[0]=a+qr,n[1]=a-n[0]+qr,-3):1075388923===u?Vr(r,u,n):r>0?(a=r-4*Wr,n[0]=a-Cr,n[1]=a-n[0]-Cr,4):(a=r+4*Wr,n[0]=a+Cr,n[1]=a-n[0]+Cr,-4);if(u<1094263291)return Vr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Y[0]=r,q[k]}(r),a=K(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)zr[f]=0|a,a=16777216*(a-zr[f]);for(zr[2]=a,o=3;0===zr[o-1];)o-=1;return i=xr(zr,Br,e,o),r<0?(n[0]=-Br[0],n[1]=-Br[1],-i):(n[0]=Br[0],n[1]=Br[1],i)}var Jr=[0,0],Kr=3.141592653589793,Qr=!0===S?1:0,Rr=new d(1),Xr=new v(Rr.buffer);function Zr(r,n){return Rr[0]=r,Xr[Qr]=n>>>0,Rr[0]}var $r=.6931471803691238,rn=1.9082149292705877e-10,nn=1048575;function tn(n){var t,e,u,o,f,i,a,c,l,y,v,p;return 0===n?R:r(n)||n<0?NaN:(f=0,(e=H(n))<1048576&&(f-=54,e=H(n*=0x40000000000000)),e>=2146435072?n+n:(f+=(e>>20)-X|0,f+=(c=614244+(e&=nn)&1048576|0)>>20|0,a=(n=Zr(n,e|1072693248^c))-1,(nn&2+e)<3?0===a?0===f?0:f*$r+f*rn:(i=a*a*(.5-.3333333333333333*a),0===f?a-i:f*$r-(i-f*rn-a)):(c=e-398458|0,l=440401-e|0,o=(v=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=u+o,(c|=l)>0?(t=.5*a*a,0===f?a-(t-y*(t+i)):f*$r-(t-(y*(t+i)+f*rn)-a)):0===f?a-y*(a-i):f*$r-(y*(a-i)-f*rn-a))))}function en(n){var e,u;if(r(n)||0===n)return NaN;if(n<=-1){if((e=(n=1-n)-t(n))>.5&&(e-=1),0===e)return NaN;u=Kr/function(r){var n,t;return n=H(r),(n&=2147483647)<=1072243195?n<1044381696?r:L(r,0,1):n>=2146435072?NaN:(t=Dr(r,Jr),L(Jr[0],Jr[1],1-((1&t)<<1)))}(Kr*e)}else u=0;if(n>=10)return u+=function(r){var n;return tn(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(n),u;for(;n>2;)u+=1/(n-=1);for(;n<1;)u-=1/n,n+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(n),u}function un(r){return t(r)===r}function on(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var fn=-.16666666666666632;function an(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(fn+u*t):r-(u*(.5*n-e*t)-n-e*fn)}var cn=[0,0];function ln(r){return un(r/2)}function yn(r){return ln(r>0?r-1:r+1)}var vn=Math.sqrt;function pn(r){return 0|r}var sn=1048576,bn=[1,1.5],wn=[0,.5849624872207642],dn=[0,1.350039202129749e-8],An=1048575,_n=1048576,Nn=1083179008,mn=1e300,hn=1e-300,gn=[0,0],Un=[0,0];function jn(n,t){var e,u,o,f,i,a,c,l,y,v,p,s,b,w;if(r(n)||r(t))return NaN;if(Ar.assign(t,gn,1,0),i=gn[0],0===gn[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return vn(n);if(-.5===t)return 1/vn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Z(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:mr(r)<1==(n===Q)?0:Q}(n,t)}if(Ar.assign(n,gn,1,0),f=gn[0],0===gn[1]){if(0===f)return function(r,n){return n===R?Q:n===Q?0:n>0?yn(n)?r:0:yn(n)?Nr(Q,r):Q}(n,t);if(1===n)return 1;if(-1===n&&yn(t))return-1;if(Z(n))return n===R?jn(-0,-t):t<0?0:Q}if(n<0&&!1===un(t))return(n-n)/(n-n);if(o=mr(n),e=f&nr|0,u=i&nr|0,c=i>>>31|0,a=(a=f>>>31|0)&&yn(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(H(r)&nr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*mn*mn:a*hn*hn;if(e>1072693248)return 0===c?a*mn*mn:a*hn*hn;p=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=x(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(Un,o)}else p=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,s,b,w,d,A,_,N,m,h,g;return N=0,t<sn&&(N-=53,t=H(n*=9007199254740992)),N+=(t>>20)-X|0,t=1072693248|(m=1048575&t|0),m<=235662?h=0:m<767610?h=1:(h=0,N+=1,t-=sn),f=x(u=(A=(n=Zr(n,t))-(c=bn[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Zr(0,e+=h<<18),d=(o=u*u)*o*(0===(g=o)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=x(a=3+(o=f*f)+(d+=(i=_*(A-f*a-f*(n-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(y=x(y=(A=f*a)+(_=i*a+(d-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+dn[h])-((s=x(s=(v=.9617967009544373*y)+p+(l=wn[h])+(w=N),0))-w-l-v),r[0]=s,r[1]=b,r}(Un,o,e);if(s=(v=(t-(l=x(t,0)))*p[0]+t*p[1])+(y=l*p[0]),Ar.assign(s,gn,1,0),b=pn(gn[0]),w=pn(gn[1]),b>=Nn){if(0!=(b-Nn|w))return a*mn*mn;if(v+8008566259537294e-32>s-y)return a*mn*mn}else if((b&nr)>=1083231232){if(0!=(b-3230714880|w))return a*hn*hn;if(v<=s-y)return a*hn*hn}return s=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&nr|0)>>20)-X|0,c=0,l>1071644672&&(u=Zr(0,((c=r+(_n>>y+1)>>>0)&~(An>>(y=((c&nr)>>20)-X|0)))>>>0),c=(c&An|_n)>>20-y>>>0,r<0&&(c=-c),n-=u),r=pn(r=H(a=1-((a=(o=.6931471824645996*(u=x(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?jr(a,c):Zr(a,r)}(b,y,v),a*s}var In=Math.ceil;function On(r){return r<0?In(r):t(r)}var Sn=1.4426950408889634,En=1/(1<<28);function Fn(n){var t;return r(n)||n===Q?n:n===R?0:n>709.782712893384?Q:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<En?1+n:function(r,n,t){var e,u,o,f;return jr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=On(n<0?Sn*n-.5:Sn*n+.5)),1.9082149292705877e-10*t,t)}function Tn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Fn(r),2.5066282746310007*(t=r>143.01608?(e=jn(r,.5*r-.25))*(e/t):jn(r,r-.5)/t)*n}function Hn(r,n){return n/((1+.5772156649015329*r)*r)}function Gn(n){var e,u,o,f;if(un(n)&&n<0||n===R||r(n))return NaN;if(0===n)return function(r){return 0===r&&1/r===R}(n)?R:Q;if(n>171.61447887182297)return Q;if(n<-170.5674972726612)return 0;if((u=mr(n))>33)return n>=0?Tn(n):(e=0==(1&(o=t(u)))?-1:1,(f=u-o)>.5&&(f=u-(o+=1)),f=u*function(r){var n;if(n=H(r),(n&=2147483647)<=1072243195)return n<1045430272?r:an(r,0);if(n>=2146435072)return NaN;switch(3&Dr(r,cn)){case 0:return an(cn[0],cn[1]);case 1:return on(cn[0],cn[1]);case 2:return-an(cn[0],cn[1]);default:return-on(cn[0],cn[1])}}(Kr*f),e*Kr/(mr(f)*Tn(u)));for(f=1;n>=3;)f*=n-=1;for(;n<0;){if(n>-1e-9)return Hn(n,f);f/=n,n+=1}for(;n<2;){if(n<1e-9)return Hn(n,f);f/=n,n+=1}return 2===n?f:f*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(n-=2)}return function(n){var t;return r(n)||n<=0?NaN:(t=n/2)+tn(2*Gn(t))+(1-t)*en(t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=index.js.map
