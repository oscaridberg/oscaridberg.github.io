import{a as P,t as H,c as He}from"../chunks/aT66PMjp.js";import"../chunks/CzSeqX1I.js";import{K as Se,au as Me,av as Fe,aq as Le,h as De,F as xe,aw as Re,ae as Te,ax as ie,ay as Be,az as Oe,aA as Ke,ab as ye,$ as _e,ac as Ce,p as fe,aB as Ie,aC as we,c as l,b as f,r as a,g as t,t as T,a as pe,m as W,s as G,k as ce,n as ve,f as de,aD as Ge}from"../chunks/DvTyfH4p.js";import{a as Ue,e as B,s as $}from"../chunks/sB4rxcp_.js";import{p as S,i as z}from"../chunks/BoeAfOyl.js";import{s as se,b as Z,e as K,a as C,N as $e,F as ze,i as Ve}from"../chunks/Dni_iTeC.js";import{i as Ne}from"../chunks/K2UwdyRf.js";import{o as We}from"../chunks/Braythmz.js";const Je=()=>performance.now(),U={tick:n=>requestAnimationFrame(n),now:()=>Je(),tasks:new Set};function Pe(){const n=U.now();U.tasks.forEach(e=>{e.c(n)||(U.tasks.delete(e),e.f())}),U.tasks.size!==0&&U.tick(Pe)}function Ye(n){let e;return U.tasks.size===0&&U.tick(Pe),{promise:new Promise(i=>{U.tasks.add(e={c:n,f:i})}),abort(){U.tasks.delete(e)}}}function oe(n,e){n.dispatchEvent(new CustomEvent(e))}function qe(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function Ae(n){const e={},i=n.split(";");for(const r of i){const[p,c]=r.split(":");if(!p||c===void 0)break;const v=qe(p.trim());e[v]=c.trim()}return e}const Xe=n=>n;function ge(n,e,i,r){var p=(n&Be)!==0,c=(n&Oe)!==0,v=p&&c,b=(n&Ke)!==0,j=v?"both":p?"in":"out",g,o=e.inert,I=e.style.overflow,s,k;function y(){var _=Ce,E=xe;ye(null),_e(null);try{return g??(g=i()(e,(r==null?void 0:r())??{},{direction:j}))}finally{ye(_),_e(E)}}var m={is_global:b,in(){var _;if(e.inert=o,!p){k==null||k.abort(),(_=k==null?void 0:k.reset)==null||_.call(k);return}c||s==null||s.abort(),oe(e,"introstart"),s=ue(e,y(),k,1,()=>{oe(e,"introend"),s==null||s.abort(),s=g=void 0,e.style.overflow=I})},out(_){if(!c){_==null||_(),g=void 0;return}e.inert=!0,oe(e,"outrostart"),k=ue(e,y(),s,0,()=>{oe(e,"outroend"),_==null||_()})},stop:()=>{s==null||s.abort(),k==null||k.abort()}},h=xe;if((h.transitions??(h.transitions=[])).push(m),p&&Ue){var u=b;if(!u){for(var x=h.parent;x&&x.f&Se;)for(;(x=x.parent)&&!(x.f&Me););u=!x||(x.f&Fe)!==0}u&&Le(()=>{De(()=>m.in())})}}function ue(n,e,i,r,p){var c=r===1;if(Re(e)){var v,b=!1;return Te(()=>{if(!b){var h=e({direction:c?"in":"out"});v=ue(n,h,i,r,p)}}),{abort:()=>{b=!0,v==null||v.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(i==null||i.deactivate(),!(e!=null&&e.duration))return p(),{abort:ie,deactivate:ie,reset:ie,t:()=>r};const{delay:j=0,css:g,tick:o,easing:I=Xe}=e;var s=[];if(c&&i===void 0&&(o&&o(0,1),g)){var k=Ae(g(0,1));s.push(k,k)}var y=()=>1-r,m=n.animate(s,{duration:j});return m.onfinish=()=>{var h=(i==null?void 0:i.t())??1-r;i==null||i.abort();var u=r-h,x=e.duration*Math.abs(u),_=[];if(x>0){var E=!1;if(g)for(var w=Math.ceil(x/16.666666666666668),F=0;F<=w;F+=1){var R=h+u*I(F/w),A=Ae(g(R,1-R));_.push(A),E||(E=A.overflow==="hidden")}E&&(n.style.overflow="hidden"),y=()=>{var M=m.currentTime;return h+u*I(M/x)},o&&Ye(()=>{if(m.playState!=="running")return!1;var M=y();return o(M,1-M),!0})}m=n.animate(_,{duration:x,fill:"forwards"}),m.onfinish=()=>{y=()=>r,o==null||o(r,1-r),p()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=ie)},deactivate:()=>{p=ie},reset:()=>{r===0&&(o==null||o(1,0))},t:()=>y()}}var Qe=H('<div class="p-2"><span class="text-sm text-beige-light"> </span></div>'),Ze=H('<button type="button" class="text-left"><div class="overflow-hidden relative w-full h-96 bg-red-900 rounded-t-2xl drop-shadow-lg"><img alt="logo"> <div class="absolute inset-0 bg-green-dark bg-opacity-30"></div> <div><div class="py-2 w-full text-center"><span class="text-center text-beige-light font-heading uppercase"> </span></div> <!></div></div></button>');function X(n,e){fe(e,!1);const i=W();let r=S(e,"title",8,"Lasse dricker öl"),p=S(e,"body",8,"Lasse tycker att det är jättegott med öl och majonäs.    "),c=S(e,"image",8,"/images/P_20241025_161954_1.jpg"),v=S(e,"isExpandable",8,!0),b=S(e,"imagePosition",8,""),j="h-12",g=S(e,"expandedHeight",8,"h-[50%]"),o=W(!1);function I(){console.log(b()),G(o,!t(o))}Ie(()=>(t(o),ce(v()),ce(g())),()=>{G(i,t(o)&&v()?g():j)}),we();var s=Ze(),k=l(s),y=l(k),m=f(y,4),h=l(m),u=l(h),x=l(u,!0);a(u),a(h);var _=f(h,2);{var E=w=>{var F=Qe(),R=l(F),A=l(R,!0);a(R),a(F),T(()=>$(A,p())),P(w,F)};z(_,w=>{t(o)&&v()&&w(E)})}a(m),a(k),a(s),T(()=>{se(y,`object-cover ${b()??""} w-full h-full`),Z(y,"src",c()),se(m,`absolute bottom-0 left-0 bg-green-light w-full z-50 px-2 ${t(i)??""}
    transition-all duration-300`),$(x,r())}),B("click",s,I),P(n,s),pe()}const et=n=>n;function Ee(n){const e=n-1;return e*e*e+1}function tt(n,{delay:e=0,duration:i=400,easing:r=et}={}){const p=+getComputedStyle(n).opacity;return{delay:e,duration:i,easing:r,css:c=>`opacity: ${c*p}`}}function je(n,{delay:e=0,duration:i=400,easing:r=Ee,axis:p="y"}={}){const c=getComputedStyle(n),v=+c.opacity,b=p==="y"?"height":"width",j=parseFloat(c[b]),g=p==="y"?["top","bottom"]:["left","right"],o=g.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),I=parseFloat(c[`padding${o[0]}`]),s=parseFloat(c[`padding${o[1]}`]),k=parseFloat(c[`margin${o[0]}`]),y=parseFloat(c[`margin${o[1]}`]),m=parseFloat(c[`border${o[0]}Width`]),h=parseFloat(c[`border${o[1]}Width`]);return{delay:e,duration:i,easing:r,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*v};${b}: ${u*j}px;padding-${g[0]}: ${u*I}px;padding-${g[1]}: ${u*s}px;margin-${g[0]}: ${u*k}px;margin-${g[1]}: ${u*y}px;border-${g[0]}-width: ${u*m}px;border-${g[1]}-width: ${u*h}px;min-${b}: 0`}}function at(n,{delay:e=0,duration:i=400,easing:r=Ee,start:p=0,opacity:c=0}={}){const v=getComputedStyle(n),b=+v.opacity,j=v.transform==="none"?"":v.transform,g=1-p,o=b*(1-c);return{delay:e,duration:i,easing:r,css:(I,s)=>`
			transform: ${j} scale(${1-g*s});
			opacity: ${b-o*s}
		`}}var nt=H('<div class="px-4 pb-4 pt-2 text-sm text-gray-700 whitespace-pre-line leading-relaxed bg-white"> </div>'),rt=H('<div class="border border-beige-dark rounded-xl shadow-sm overflow-hidden w-full"><button class="w-full text-left px-4 py-3 bg-green-light transition font-semibold text-base text-beige-light uppercase"> </button> <!></div>'),it=H('<div class="space-y-4 w-full p-2"><div class="flex flex-col w-full items-center gap-y-4 bg-green-medium rounded-lg p-2 drop-shadow-md"><h2 class="text-white text-xl"> </h2> <!></div></div>');function Q(n,e){let i=S(e,"items",24,()=>[]),r=S(e,"isExpandable",8,!0),p=S(e,"title",8,"Test"),c=W(null);const v=s=>{r()&&G(c,t(c)===s?null:s)};var b=it(),j=l(b),g=l(j),o=l(g,!0);a(g);var I=f(g,2);K(I,1,i,C,(s,k,y)=>{var m=rt(),h=l(m),u=l(h,!0);a(h);var x=f(h,2);{var _=E=>{var w=nt(),F=l(w,!0);a(w),T(()=>$(F,t(k).content)),ge(1,w,()=>je,()=>({duration:250})),ge(2,w,()=>je,()=>({duration:200})),P(E,w)};z(x,E=>{t(c)===y&&E(_)})}a(m),T(()=>$(u,t(k).title)),B("click",h,()=>v(y)),P(s,m)}),a(j),a(b),T(()=>$(o,p())),P(n,b)}var st=H('<img> <div class="absolute inset-0 bg-green-dark bg-opacity-30"></div>',1),lt=H('<div class="w-full h-full flex items-center justify-center bg-green-medium"><span class="text-beige-light font-heading italic opacity-30 text-xl">[ Bild ]</span></div>'),ot=H('<button type="button" class="text-left w-full"><div class="overflow-hidden relative w-full h-96 bg-green-medium rounded-t-2xl drop-shadow-lg"><!> <div class="absolute bottom-0 left-0 bg-green-light w-full z-50 px-2 py-3"><div class="w-full text-center mb-2"><span class="text-beige-light font-heading uppercase text-sm"> </span></div> <div class="flex justify-center"><span class="text-xs text-beige-light uppercase tracking-widest font-heading border border-beige-light/50 px-4 py-1 rounded">Läs mer</span></div></div></div></button>');function dt(n,e){let i=S(e,"title",8,""),r=S(e,"image",8,""),p=S(e,"imagePosition",8,""),c=S(e,"onClick",8,()=>{});var v=ot(),b=l(v),j=l(b);{var g=m=>{var h=st(),u=de(h);ve(2),T(()=>{se(u,`object-cover ${p()??""} w-full h-full`),Z(u,"src",r()),Z(u,"alt",i())}),P(m,h)},o=m=>{var h=lt();P(m,h)};z(j,m=>{r()?m(g):m(o,!1)})}var I=f(j,2),s=l(I),k=l(s),y=l(k,!0);a(k),a(s),ve(2),a(I),a(b),a(v),T(()=>$(y,i())),B("click",v,function(...m){var h;(h=c())==null||h.apply(this,m)}),P(n,v)}var gt=H('<img> <div class="absolute inset-0 bg-green-dark bg-opacity-20"></div>',1),mt=H('<div class="w-full h-full flex items-center justify-center"><div class="absolute inset-0 bg-green-dark bg-opacity-10"></div> <span class="text-beige-light font-heading italic text-xl opacity-40 relative z-10">[ Bild ]</span></div>'),ct=H('<div class="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"><button class="absolute inset-0 w-full h-full cursor-default" aria-label="Stäng"></button> <div class="relative bg-green-dark max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden flex flex-col drop-shadow-lg" role="dialog" aria-modal="true"><div class="w-full h-56 bg-green-medium shrink-0 relative overflow-hidden"><!></div> <div class="bg-green-light px-6 py-4 shrink-0"><h2 class="text-beige-light font-heading uppercase text-center tracking-wide text-lg leading-snug"> </h2></div> <div class="overflow-y-auto px-6 py-5 flex-1"><p class="text-beige-light text-sm whitespace-pre-line leading-relaxed"> </p></div> <div class="px-6 py-4 shrink-0 flex justify-center border-t border-green-medium"><button class="px-8 py-2 bg-green-light text-beige-light font-heading uppercase rounded-lg hover:bg-green-medium transition-colors tracking-wider text-sm">Stäng</button></div> <button class="absolute top-3 right-3 text-beige-light w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10 text-base" aria-label="Stäng">✕</button></div></div>');function vt(n,e){fe(e,!1);let i=S(e,"isOpen",12,!1),r=S(e,"treatment",8,null);function p(){i(!1)}function c(g){g.key==="Escape"&&p()}Ie(()=>ce(i()),()=>{typeof document<"u"&&(document.body.style.overflow=i()?"hidden":"")}),we(),Ne();var v=He();B("keydown",Ge,c);var b=de(v);{var j=g=>{var o=ct(),I=l(o),s=f(I,2),k=l(s),y=l(k);{var m=L=>{var D=gt(),O=de(D);ve(2),T(()=>{se(O,`w-full h-full object-cover ${r().imagePosition??""}`),Z(O,"src",r().img),Z(O,"alt",r().title)}),P(L,D)},h=L=>{var D=mt();P(L,D)};z(y,L=>{r().img?L(m):L(h,!1)})}a(k);var u=f(k,2),x=l(u),_=l(x,!0);a(x),a(u);var E=f(u,2),w=l(E),F=l(w,!0);a(w),a(E);var R=f(E,2),A=l(R);a(R);var M=f(R,2);a(s),a(o),T(()=>{Z(s,"aria-label",r().title),$(_,r().title),$(F,r().content)}),B("click",I,p),B("click",A,p),B("click",M,p),ge(3,s,()=>at,()=>({duration:200,start:.95})),ge(3,o,()=>tt,()=>({duration:200})),P(g,o)};z(b,g=>{i()&&r()&&g(j)})}P(n,v),pe()}var ut=H('<div class="w-full overflow-hidden border shadow-sm border-beige-dark rounded-xl"><button class="w-full px-4 py-3 text-base font-semibold text-left uppercase transition bg-green-light text-beige-light"> </button></div>'),ft=H('<div class="flex flex-col items-center justify-center w-full h-full mt-8 gap-y-4"><h2 class="text-4xl uppercase text-beige-light font-heading">Behandlingar</h2> <!> <div class="w-full p-2 space-y-4"><div class="flex flex-col items-center w-full p-2 rounded-lg gap-y-4 bg-green-medium drop-shadow-md"><h2 class="text-xl text-white">Avancerad Hudvård</h2> <!></div></div> <!> <!> <!> <!> <!></div>'),pt=H(`<div class="absolute top-0 flex p-4 rounded-lg drop-shadow-lg bg-green-medium z-20 transform translate-y-[70%]"><span class="italic text-beige-light max-w-[700px]">En ansiktsbehandling hos mig ger (förutom en härlig stund för dig och ditt välmående
							såklart) djupare verkan i huden jämfört med din hudvårdsrutin hemma, med aktivare och
							”starkare” ingredienser i produkterna samt mer stimulerande och noggrant utförande.</span></div>`),kt=H('<div class="flex flex-col items-center justify-center w-full max-w-screen-xl p-8 gap-y-12"><div class="relative flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Ansiktsbehandlingar</h2> <h3 class="text-lg italic text-beige-light font-heading">DERMALOGICA PRO EXPERIENCE</h3> <!> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Avancerad Hudvård</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Massage</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Kroppsvård</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Fransar och Bryn</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Makeup</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Vaxning</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div></div>'),ht=H("<!> <!> <main><!></main> <!>",1);function Nt(n,e){fe(e,!1);const i=".././images/treatments/massage/massage1.jpg";let r=W(!1);We(()=>{G(r,Ve())});let p=W(!1),c=W(null),v=W(!1);function b(A){G(c,A),G(v,!0)}const j=[{title:"Microneedling 60 min 1950:-",content:`En avancerad behandling för att reducera samt förebygga markanta och mer djupgående hudproblem som
•Hyperpigmentering
•Förstorade porer, ojämn hudstruktur
•Fina linjer & Rynkor
•Ytliga ärr

Microneedling är användningen av små, tunna nålar som penetrerar huden i syfte att skapa mikroskopiska kanaler. Skadan triggar sedan igång hudens naturliga läkningsprocesser.

INFÖR DITT BESÖK
•Om du har ätit Isotretinoin eller använt andra starkt uttorkande/exfolierande läkemedel, vänligen konsultera med din läkare och mig innan du bokar en microneedlingbehandling.
•3-5 dagar före behandlingen; avstå från att använda produkter som kan göra din hud känslig, exempelvis retinol, AHA/BHA eller lokalt applicerade läkemedel.
•Ca 2 veckor innan din behandling; undvik Laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.
•5 dagar före behandlingen; avstå från vaxning/epilering/hårborttagningskrämer i området som ska behandlas.
•2 dagar inför ditt besök; avstå från blodtunnande läkemedel, alkohol och koffein för att minimera risken för blödning.
•Samma dag; raka inte samt sminka inte området.
•Experimentera inte med nya hudvårdsprodukter innan din behandling.

EFTER DIN MICRONEEDLINGBEHANDLING

6 timmar
•Låt huden vara, applicera inga produkter och tvätta inte ansiktet.

2 dygn
•Lägg inte svala kompresser eller förband på huden
•Avstå från läkemedel med ibuprofen eller anti-inflammatoriska egenskaper.

3 dygn
•Undvik direkt solljus
•Undvik att svettas (ingen konditionsträning/bastu)
•Avstå från hudvårdsprodukter med aktiva ingredienser (ex AHA/BHA, retinol, exfoliering)
•Undvik makeup
•Drick mycket vatten och använd återfuktande produkter.

2 veckor
•Undvik laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.

Under fortsatt läkningsprocess
•Avstå från att dra bort eventuellt fjällande hud
•Använd produkter rekommenderade av mig.

JAG GÖR INTE MICRONEEDLING PÅ
•Hudcancer
•Cellgift eller strålbehandling
•Blodförtunnande mediciner
•Hudinfektioner (bakteriella/virus/svamp)
•Diabetes
•Nedsatt känsel
•Kirurgiska ingrepp eller pågående läkarbehandling
•Sår eller hudirritationer
•Inflammerad akne
•Kroniska hudsjukdomar
•Aktiniska keratoser
•Laserpeeling (inom tre månader)
•Medeldjup kemisk/mekanisk peeling (inom två veckor)
•Icke diagnostiserade födelsemärken
•Solbränd hud
•Kraftigt nedsatt barriärfunktion

Det är bara att skriva till mig, maila eller ring om du har några frågor. Annars är du välkommen att boka din Microneedling via länken i min bio, konsultation ingår i besöket då vi också går igenom eftervård passande för Din hud.
Vid behov rekommenderar jag en kur med 3-6 behandlingar, tillsammans gör vi en behandlingsplan under konsultationen.

Dubbelrengöring, Microneedling, Serum, Pro Restore.
Ampuller med Dermalogicas Pro Restore för vård hemma efter behandling ingår i behandlingspriset.`,img:".././images/treatments/advanced/microneedling.jpg"},{title:"Dermalogica PRO Nano Infusion 60 min 1550:-",content:`En lågintensiv, icke-invasiv version av microneedling som luckrar upp ytans döda hudceller med hjälp av slipande tippar av organiskt slitstarkt silikon eller metall.

Nano infusion stimulerar både cellförnyelse och hudens förmåga att absorbera aktiva ingredienser. På så vis kan vi behandla hudproblem som
•Fina linjer & rynkor
•Hyperpigmenteringar
•Ytliga (akne)ärr
•Förstorade porer, ojämn hudstruktur
•Fuktfattig & yttorr hud

Avancerade resultat - utan biverkningar!

INFÖR DITT BESÖK
•Om du har ätit Isotretinoin eller använt andra starkt uttorkande/exfolierande läkemedel, vänligen konsultera med din läkare och mig innan du bokar en nano infusionbehandling.
•3 dagar före behandlingen; avstå från att använda produkter som kan göra din hud känslig, exempelvis retinol, AHA/BHA eller lokalt applicerade läkemedel.
•Ca 2 veckor innan din behandling; undvik Laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.
•5 dagar före behandlingen; avstå från vaxning/epilering/hårborttagningskrämer i området som ska behandlas.
•Samma dag; raka inte området.
•Experimentera inte med nya hudvårdsprodukter innan din behandling.

EFTER DIN NANO INFUSIONBEHANDLING

2 dygn
•Undvik direkt solljus
•Undvik att svettas (ingen konditionsträning/bastu)
•Avstå från hudvårdsprodukter med aktiva ingredienser (ex AHA/BHA, retinol, exfoliering)
•Undvik makeup
•Avstå från att pilla bort eventuellt fjällande hud
•Drick mycket vatten och använd återfuktande produkter.

2 veckor
•Undvik laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.

JAG GÖR INTE NANO INFUSION PÅ
•Hudcancer
•Cellgift eller strålbehandling
•Blodförtunnande mediciner
•Hudinfektioner (bakteriella/virus/svamp)
•Diabetes
•Nedsatt känsel
•Kirurgiska ingrepp eller pågående läkarbehandling
•Sår eller hudirritationer
•Inflammerad akne
•Kroniska hudsjukdomar
•Aktiniska keratoser
•Laserpeeling (inom tre månader)
•Medeldjup kemisk/mekanisk peeling (inom två veckor)
•Icke diagnostiserade födelsemärken
•Solbränd hud
•Kraftigt nedsatt barriärfunktion

Har du några frågor är det bara att skriva till mig, maila eller ring. Annars är du välkommen att boka din Nano infusion via länken i min bio, konsultation ingår i besöket då vi också går igenom eftervård passande för Din hud.
Vid behov rekommenderar jag en kur med 3-6 behandlingar, tillsammans gör vi en behandlingsplan under konsultationen.

Dubbelrengöring, Exfoliering & Nano infusion, Portömning, Ansiktsmask, Serum, Ögonkräm, Ansiktskräm.`,img:".././images/treatments/advanced/nano-infusion.jpg",imagePosition:"[object-position:center_60%]"},{title:"Dermalogica PRO Power Peel 60 min 1450:-",content:`Kemisk peeling hör till de mest effektiva metoderna för att få bukt med
•Ojämn pigmentering
•Tilltäppta porer
•Grov ytstruktur
•Fina linjer & rynkor
•Förlorad spänst.

Med specifika och högkoncentrerade alfa- och betahydroxisyror (AHA, BHA) i kombination med låga pH-värden, avlägsnas hudens yttre lager och cellförnyelsen stimuleras. De övriga ingredienserna i respektive produkt arbetar effektivt med att förbättra och balansera olika hudtillstånd.

INFÖR DITT BESÖK
•Om du har ätit Isotretinoin eller använt andra starkt uttorkande/exfolierande läkemedel, vänligen konsultera med din läkare och mig innan du bokar en nano infusionbehandling.
•3 dagar före behandlingen; avstå från att använda produkter som kan göra din hud känslig, exempelvis retinol, AHA/BHA eller lokalt applicerade läkemedel.
•Ca 2 veckor innan din behandling; undvik Laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.
•5 dagar före behandlingen; avstå från vaxning/epilering/hårborttagningskrämer i området som ska behandlas.
•Samma dag; raka inte området.
•Experimentera inte med nya hudvårdsprodukter innan din behandling.

EFTER DIN POWER PEEL-BEHANDLING

2 dygn
•Undvik direkt solljus
•Undvik att svettas (ingen konditionsträning/bastu)
•Avstå från hudvårdsprodukter med aktiva ingredienser (ex AHA/BHA, retinol, exfoliering)
•Undvik makeup
•Avstå från att pilla bort eventuellt fjällande hud
•Drick mycket vatten och använd återfuktande produkter.

2 veckor
•Undvik laser/IPL-behandlingar eller att vara oskyddad/bränna dig i solen.

JAG GÖR INTE POWER PEEL PÅ
•Hudcancer
•Cellgift eller strålbehandling
•Hudinfektioner (bakteriella/virus/svamp)
•Kirurgiska ingrepp eller pågående läkarbehandling
•Sår eller hudirritationer
•Inflammerad akne
•Kroniska hudsjukdomar
•Aktiniska keratoser
•Laserpeeling (inom tre månader)
•Medeldjup kemisk/mekanisk peeling (inom två veckor)
•Solbränd hud
•Kraftigt nedsatt barriärfunktion

Frågor på det? Skriv till mig, maila eller ring! Annars är du välkommen att boka din kemiska peel-behandling via länken i min bio, konsultation ingår i besöket då vi också går igenom eftervård passande för Din hud.
Vid behov rekommenderar jag en kur med 3-6 behandlingar, tillsammans gör vi en behandlingsplan under konsultationen.

Dubbelrengöring, Pro Power Peel, Ansiktsmask, Serum, Ögonkräm, Ansiktskräm.`,img:".././images/treatments/advanced/power-peel.jpg"}],g=[{title:"ANSIKTSBEHANDLING 90 MIN 1150:-",content:`Dubbelrengöring, hudanalys, peeling, portömning, brynplock, apparatur, lymfdränage,
ansiktsmassage, mask, serum, kräm.
I en 90 minuters ansiktsbehandling får du ALLT! För den som håller med Freddie Mercury i
fjärde låten från Queen’s trettonde album helt enkelt!`,img:".././images/treatments/face/face1.jpg",imagePosition:"[object-position:center_65%]"},{title:"ANSIKTSBEHANDLING 60 MIN 950:-",content:`Dubbelrengöring, hudanalys, peeling, portömning, brynplock, lymfdränage, mask, serum,
kräm.
I en 60 minuters ansiktsbehandling är det mer utvalt vad som prioriteras av ovanstående
utifrån hudanalysen, förutom apparaturen och massagen som inte hinns med. För den som
vill ha lite av varje!`,img:".././images/treatments/face/face4.jpg",imagePosition:"[object-position:center_20%]"},{title:"ANSIKTSBEHANDLING 30 MIN 650:-",content:`Dubbelrengöring, peeling, lymfdränage, mask, kräm.
Den 30 minuter långa ansiktsbehandlingen är mer som en liten kur eller ”quick fix” med det
nödvändigaste. Denna kortare ansiktskur är även optimal för den överkänsliga, med
rosacea, pod, psoriasis, atopiker eller liknande. För er är det less is more som gäller i alla
lägen!`,img:".././images/treatments/face/face2.jpg",imagePosition:"[object-position:center_180%]"},{title:"AHA-BEHANDLING 75 MIN 1050:-",content:"Dubbelrengöring, AHA-peeling, brynplock, apparatur, lymfdränage, mask, serum, kräm.",img:".././images/treatments/face/face3.jpg",imagePosition:"[object-position:center_50%]"}],o=[{title:"SPAMASSAGE HALVKROPP 30 MIN 550:-",content:`Rygg & nackmassage.
En avslappnande, värmande och frigörande massage av rygg och nacke.
Halvkroppsmassagen gör susen för stela ryggar, spänd nacke och axlar eller ländrygg för att
nämna några av de smärtor som kan uppstå av överansträngda överkroppar.`,img:".././images/treatments/massage/massage1.jpg",imagePosition:"[object-position:center_10%]"},{title:"SPAMASSAGE HELKROPP 60 MIN 850:-",content:`Massage av rygg & nacke, ben, armar, mage, dekolletage & ansikte.
Med knådande tryck och värmande massageoljor masseras rygg och axlar, ben och fötter,
armar och händer, magen, ansiktet, dekolletaget och nacken.
En helkroppsupplevelse som gör dig totalt avslappnad, lättar upp stela muskelknutor,
stimulerar metabolismen och du finner ditt inre lugn och din lycka.`,img:".././images/treatments/massage/massage3.jpg",imagePosition:"[object-position:center_30%]"},{title:"FOT, HAND & ANSIKTSMASSAGE 45 MIN 650:-",content:`Fotmassage, handmassage & ansiktsmassage.
Passar utmärkt till den gravida & den nyblivna mamman! Eller bara den som behöver en
avkopplande stund för de muskler vi använder mest hela dagen då vi går med våra fötter,
använder våra händer till hjälp i mycket och såklart ansiktsuttrycken av att reagera, känna
och prata.`,img:".././images/treatments/massage/massage2.jpg",imagePosition:"[object-position:center_60%]"}],I=[{title:"NEAS LYXBEHANDLING 60 MIN 995:-",content:`Ryggskrubb, ryggmassage & ansiktskur med produkter från Dermalogica.
Ryggen skrubbas masserande och djuprengörande med havssalt, oljor och eteriska
aromater av patchouli och apelsin, uppföljt av en värmande och stimulerande ryggmassage.
Avslutas med en uppfriskande ansiktskur med dubbelrengöring, peeling, fuktmask,
lymfmassage och ansiktskräm utifrån Dig och Din huds behov.`,img:".././images/treatments/body/body1.jpg",imagePosition:"[object-position:center_20%]"},{title:"MOLNDANS 30 MIN 695:-",content:`Fotskrubb & fotmassage.
Fötterna och smalbenen tvättas med varma handdukar, skrubbas med min fantastiska
saltskrubb för att sedan masseras med lugnande muskelstimulerande oljor med eteriska
dofter av lavendel och sandelträ.
När du lämnar behandlingsrummet dansar du som på moln.
- ”Det känns som att jag svävar!”`,img:".././images/treatments/body/body2.jpg",imagePosition:"[object-position:center_30%]"},{title:"Ryggbehandling 45 min 650:-",content:`All hudvård Din rygg behöver!
Rengöring, skrubb, portömning vid behov, massage och återfuktande kräm.
- Som en ansiktsbehandling för din rygg!`,img:".././images/treatments/massage/massage1.jpg",imagePosition:"[object-position:center_30%]",expandedHeight:"h-[35%]"}],s=[{title:"FRANSFÄRG 15 MIN 250:-",content:"En fransfärgning ramar in dina ögon och ger ett mer vaket uttryck - utan att behöva mascara!",img:".././images/treatments/lashes/lashes4.jpg",expandedHeight:"h-[30%]"},{title:"BRYNFÄRG & PLOCK 30 MIN 250:-",content:`Inklusive brynplock.

Önskar du naturligt tydliga, mörkare och/eller fylligare bryn? I got you!`,img:".././images/treatments/face/face4.jpg",imagePosition:"[object-position:center_20%]",expandedHeight:"h-[30%]"},{title:"FRANS & BRYNFÄRG 30 MIN 450:-",content:"Inklusive brynplock.",img:".././images/treatments/lashes/lashes6.jpg",expandedHeight:"h-[30%]"},{title:"LASHLIFT 60 MIN 950:-",content:`Inklusive keratin.
Ett lashlift lyfter upp dina fransar och lämnar en naturlig böj. Tillsammans med färgen
upplevs fransarna längre och fylligare och både ögonfransböjaren och mascaran kan du ge
bort till någon annan som behöver dem mer`,img:".././images/treatments/lashes/lashes1.jpg",expandedHeight:"h-[50%]"},{title:"BROWLIFT 45 MIN 650:-",content:`Inklusive brynplock & keratin.
Ett browlift formar ögonbrynen och ger ett fylligare och tillsammans med färg ett mer
intensivt utseende på dina bryn!
Hos mig kan du få snygga bryn utan att behöva fylla i eller forma dem varje dag och det är
DU som bestämmer hur du vill ha dem; tjocka, mörka, varma, naturliga? Jag fixar!`,img:".././images/treatments/lashes/lashes3.jpg",imagePosition:"[object-position:center_70%]",expandedHeight:"h-[50%]"},{title:"LASH & BROWLIFT 90 MIN 1450:-",content:"Inklusive brynplock & keratin.",img:".././images/treatments/lashes/lashes5.jpg",expandedHeight:"h-[30%]"},{title:"Fransförlängning - Singelfransar 120 MIN 950:-",content:"I en singelfransbehandling limmas syntetfransar en och en på dina egna naturliga fransar och resulterar i fylligare och mörkare fransar dygnet runt! Du kan välja olika form, längd och böj utifrån önskat resultat - vill du ha naturliga, glammiga/pretentiösa eller något däremellan? Rekommenderar påfyllning var 2-5e vecka beroende på hur snabbt dina egna fransar växer samt hur de sköts om hemma (hur mycket avfall.)",img:".././images/treatments/lashes/lashes7.jpg",expandedHeight:"h-[60%]"}],k=[{title:"VARDAGSMAKEUP 45 MIN 450:-",content:"Placeholder content for Vardagsmakeup.",img:".././images/treatments/makeup/day.jpg"},{title:"FESTMAKEUP 60 MIN 550:-",content:"Placeholder content for Festmakeup.",img:".././images/treatments/makeup/party.jpg"},{title:"BRÖLLOPSMAKEUP INKL ANSIKTSKUR 105 MIN 1550:-",content:"Placeholder content for Bröllopsmakeup inkl. Ansiktskur.",img:".././images/treatments/makeup/wedding.jpg",imagePosition:"[object-position:center_600%]"}],y=[{title:"ARMHÅLOR 30 MIN 350:-",content:"Placeholder content for Armhålor.",img:".././images/treatments/wax/armpit.jpg",imagePosition:"[object-position:center_80%]"},{title:"BIKINILINJE 30 MIN 450:-",content:"Placeholder content for Bikinilinje.",img:".././images/treatments/wax/bikini.jpg",imagePosition:"[object-position:center_50%]"},{title:"HALVA BEN 45 MIN 550:-",content:"Placeholder content for Halva Ben.",img:".././images/treatments/wax/calf.jpg",imagePosition:"[object-position:center_50%]"},{title:"HELA BEN 60 MIN 895:-",content:"Placeholder content for Hela Ben.",img:".././images/treatments/wax/leg.jpg",imagePosition:"[object-position:center_80%]"},{title:"HELA BEN INKL. BIKINILINJE 75 MIN 995:-",content:"Placeholder content for Hela Ben inkl. Bikinilinje.",img:".././images/treatments/wax/legbikini.jpg",imagePosition:"[object-position:center_95%]"}];Ne();var m=ht(),h=de(m);vt(h,{get treatment(){return t(c)},get isOpen(){return t(v)},set isOpen(A){G(v,A)},$$legacy:!0});var u=f(h,2);$e(u,{heroText:"Behandlingar",heroImage:i,heroBg:"bg-green-dark",heroImagePostion:"[object-position:center_30%]"});var x=f(u,2),_=l(x);{var E=A=>{var M=ft(),L=f(l(M),2);Q(L,{items:g,title:"Ansiktsbehandlingar"});var D=f(L,2),O=l(D),me=f(l(O),2);K(me,1,()=>j,C,(ae,ne)=>{var V=ut(),q=l(V),re=l(q,!0);a(q),a(V),T(()=>$(re,t(ne).title)),B("click",q,()=>b(t(ne))),P(ae,V)}),a(O),a(D);var ee=f(D,2);Q(ee,{items:o,title:"Massage"});var J=f(ee,2);Q(J,{items:I,title:"Kroppsvård"});var te=f(J,2);Q(te,{items:s,title:"Fransar och bryn"});var Y=f(te,2);Q(Y,{items:k,title:"Makeup",isExpandable:!1});var le=f(Y,2);Q(le,{items:y,title:"Vaxning",isExpandable:!1}),a(M),P(A,M)},w=A=>{var M=kt(),L=l(M),D=l(L),O=f(D,4);{var me=N=>{var d=pt();P(N,d)};z(O,N=>{t(p)&&N(me)})}var ee=f(O,2);K(ee,5,()=>g,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},get imagePosition(){return t(d).imagePosition}})}),a(ee),a(L);var J=f(L,2),te=f(l(J),2);K(te,5,()=>j,C,(N,d)=>{dt(N,{get title(){return t(d).title},get image(){return t(d).img},get imagePosition(){return t(d).imagePosition},onClick:()=>b(t(d))})}),a(te),a(J);var Y=f(J,2),le=f(l(Y),2);K(le,5,()=>o,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},get imagePosition(){return t(d).imagePosition}})}),a(le),a(Y);var ae=f(Y,2),ne=f(l(ae),2);K(ne,5,()=>I,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},get imagePosition(){return t(d).imagePosition},get expandedHeight(){return t(d).expandedHeight}})}),a(ne),a(ae);var V=f(ae,2),q=f(l(V),2);K(q,5,()=>s,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},get imagePosition(){return t(d).imagePosition},get expandedHeight(){return t(d).expandedHeight}})}),a(q),a(V);var re=f(V,2),ke=f(l(re),2);K(ke,5,()=>k,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},isExpandable:!1,get imagePosition(){return t(d).imagePosition}})}),a(ke),a(re);var he=f(re,2),be=f(l(he),2);K(be,5,()=>y,C,(N,d)=>{X(N,{get title(){return t(d).title},get body(){return t(d).content},get image(){return t(d).img},isExpandable:!1,get imagePosition(){return t(d).imagePosition}})}),a(be),a(he),a(M),B("mouseenter",D,()=>G(p,!0)),B("mouseleave",D,()=>G(p,!1)),P(A,M)};z(_,A=>{t(r)?A(E):A(w,!1)})}a(x);var F=f(x,2);{var R=A=>{ze(A,{})};z(F,A=>{t(r)||A(R)})}T(()=>se(x,`flex flex-col justify-center items-center w-full bg-green-dark ${(t(r)?"mt-16":"")??""} `)),P(n,m),pe()}export{Nt as component};
