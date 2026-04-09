import{a as A,t as I,c as Se}from"../chunks/JtOvRA_P.js";import"../chunks/Bogv5FBd.js";import{K as Le,au as De,av as Ue,aq as Fe,h as Re,F as xe,aw as Be,ae as Te,ax as le,ay as Ke,ab as we,$ as _e,ac as Oe,p as he,az as Ie,s as V,g as t,k as be,aA as Ne,c as l,b as c,r as a,t as D,a as ye,m as te,n as ve,f as oe,aB as Ge,a4 as pe}from"../chunks/oHz_URDW.js";import{a as Ce,e as O,s as q}from"../chunks/h3MYH7BO.js";import{p as L,i as G}from"../chunks/BiM4uzwM.js";import{a as de,s as J,N as ze,e as B,F as Ve,i as Je,b as T}from"../chunks/B3mzja_2.js";import{i as Ee}from"../chunks/Cl017WsB.js";import{o as qe}from"../chunks/6yX8aA_t.js";const We=()=>performance.now(),K={tick:i=>requestAnimationFrame(i),now:()=>We(),tasks:new Set};function Pe(){const i=K.now();K.tasks.forEach(e=>{e.c(i)||(K.tasks.delete(e),e.f())}),K.tasks.size!==0&&K.tick(Pe)}function Ye(i){let e;return K.tasks.size===0&&K.tick(Pe),{promise:new Promise(s=>{K.tasks.add(e={c:i,f:s})}),abort(){K.tasks.delete(e)}}}function ue(i,e){i.dispatchEvent(new CustomEvent(e))}function Xe(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function je(i){const e={},s=i.split(";");for(const n of s){const[v,b]=n.split(":");if(!v||b===void 0)break;const g=Xe(v.trim());e[g]=b.trim()}return e}const Qe=i=>i;function Ae(i,e,s,n){var v=(i&Ke)!==0,b="both",g,w=e.inert,N=e.style.overflow,m,d;function j(){var u=Oe,y=xe;we(null),_e(null);try{return g??(g=s()(e,(n==null?void 0:n())??{},{direction:b}))}finally{we(u),_e(y)}}var k={is_global:v,in(){e.inert=w,ue(e,"introstart"),m=fe(e,j(),d,1,()=>{ue(e,"introend"),m==null||m.abort(),m=g=void 0,e.style.overflow=N})},out(u){e.inert=!0,ue(e,"outrostart"),d=fe(e,j(),m,0,()=>{ue(e,"outroend"),u==null||u()})},stop:()=>{m==null||m.abort(),d==null||d.abort()}},f=xe;if((f.transitions??(f.transitions=[])).push(k),Ce){var h=v;if(!h){for(var o=f.parent;o&&o.f&Le;)for(;(o=o.parent)&&!(o.f&De););h=!o||(o.f&Ue)!==0}h&&Fe(()=>{Re(()=>k.in())})}}function fe(i,e,s,n,v){var b=n===1;if(Be(e)){var g,w=!1;return Te(()=>{if(!w){var u=e({direction:b?"in":"out"});g=fe(i,u,s,n,v)}}),{abort:()=>{w=!0,g==null||g.abort()},deactivate:()=>g.deactivate(),reset:()=>g.reset(),t:()=>g.t()}}if(s==null||s.deactivate(),!(e!=null&&e.duration))return v(),{abort:le,deactivate:le,reset:le,t:()=>n};const{delay:N=0,css:m,tick:d,easing:j=Qe}=e;var k=[];if(b&&s===void 0&&(d&&d(0,1),m)){var f=je(m(0,1));k.push(f,f)}var h=()=>1-n,o=i.animate(k,{duration:N});return o.onfinish=()=>{var u=(s==null?void 0:s.t())??1-n;s==null||s.abort();var y=n-u,E=e.duration*Math.abs(y),C=[];if(E>0){var R=!1;if(m)for(var U=Math.ceil(E/16.666666666666668),H=0;H<=U;H+=1){var F=u+y*j(H/U),p=je(m(F,1-F));C.push(p),R||(R=p.overflow==="hidden")}R&&(i.style.overflow="hidden"),h=()=>{var M=o.currentTime;return u+y*j(M/E)},d&&Ye(()=>{if(o.playState!=="running")return!1;var M=h();return d(M,1-M),!0})}o=i.animate(C,{duration:E,fill:"forwards"}),o.onfinish=()=>{h=()=>n,d==null||d(n,1-n),v()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=le)},deactivate:()=>{v=le},reset:()=>{n===0&&(d==null||d(1,0))},t:()=>h()}}var Ze=I('<div class="p-2"><span class="text-sm text-beige-light"> </span></div>'),$e=I('<button type="button" class="text-left"><div class="overflow-hidden relative w-full h-96 bg-red-900 rounded-t-2xl drop-shadow-lg"><img alt="logo"> <div class="absolute inset-0 bg-green-dark bg-opacity-30"></div> <div><div class="py-2 w-full text-center"><span class="text-center text-beige-light font-heading uppercase"> </span></div> <!></div></div></button>');function ee(i,e){he(e,!1);const s=te();let n=L(e,"title",8,"Lasse dricker öl"),v=L(e,"body",8,"Lasse tycker att det är jättegott med öl och majonäs.    "),b=L(e,"image",8,"/images/P_20241025_161954_1.jpg"),g=L(e,"isExpandable",8,!0),w=L(e,"imagePosition",8,""),N="h-12",m=L(e,"expandedHeight",8,"h-[50%]"),d=te(!1);function j(){console.log(w()),V(d,!t(d))}Ie(()=>(t(d),be(g()),be(m())),()=>{V(s,t(d)&&g()?m():N)}),Ne();var k=$e(),f=l(k),h=l(f),o=c(h,4),u=l(o),y=l(u),E=l(y,!0);a(y),a(u);var C=c(u,2);{var R=U=>{var H=Ze(),F=l(H),p=l(F,!0);a(F),a(H),D(()=>q(p,v())),A(U,H)};G(C,U=>{t(d)&&g()&&U(R)})}a(o),a(f),a(k),D(()=>{de(h,`object-cover ${w()??""} w-full h-full`),J(h,"src",b()),de(o,`absolute bottom-0 left-0 bg-green-light w-full z-50 px-2 ${t(s)??""}
    transition-all duration-300`),q(E,n())}),O("click",k,j),A(i,k),ye()}var et=I('<img> <div class="absolute inset-0 bg-green-dark bg-opacity-30"></div>',1),tt=I('<div class="w-full h-full flex items-center justify-center bg-green-medium"><span class="text-beige-light font-heading italic opacity-30 text-xl">[ Bild ]</span></div>'),at=I('<button type="button" class="text-left w-full"><div class="overflow-hidden relative w-full h-96 bg-green-medium rounded-t-2xl drop-shadow-lg"><!> <div class="absolute bottom-0 left-0 bg-green-light w-full z-50 px-2 py-3"><div class="w-full text-center mb-2"><span class="text-beige-light font-heading uppercase text-sm"> </span></div> <div class="flex justify-center"><span class="text-xs text-beige-light uppercase tracking-widest font-heading border border-beige-light/50 px-4 py-1 rounded">Läs mer</span></div></div></div></button>');function nt(i,e){let s=L(e,"title",8,""),n=L(e,"image",8,""),v=L(e,"imagePosition",8,""),b=L(e,"onClick",8,()=>{});var g=at(),w=l(g),N=l(w);{var m=o=>{var u=et(),y=oe(u);ve(2),D(()=>{de(y,`object-cover ${v()??""} w-full h-full`),J(y,"src",n()),J(y,"alt",s())}),A(o,u)},d=o=>{var u=tt();A(o,u)};G(N,o=>{n()?o(m):o(d,!1)})}var j=c(N,2),k=l(j),f=l(k),h=l(f,!0);a(f),a(k),ve(2),a(j),a(w),a(g),D(()=>q(h,s())),O("click",g,function(...o){var u;(u=b())==null||u.apply(this,o)}),A(i,g)}const it=i=>i;function rt(i){const e=i-1;return e*e*e+1}function st(i,{delay:e=0,duration:s=400,easing:n=it}={}){const v=+getComputedStyle(i).opacity;return{delay:e,duration:s,easing:n,css:b=>`opacity: ${b*v}`}}function lt(i,{delay:e=0,duration:s=400,easing:n=rt,start:v=0,opacity:b=0}={}){const g=getComputedStyle(i),w=+g.opacity,N=g.transform==="none"?"":g.transform,m=1-v,d=w*(1-b);return{delay:e,duration:s,easing:n,css:(j,k)=>`
			transform: ${N} scale(${1-m*k});
			opacity: ${w-d*k}
		`}}var ot=I('<img> <div class="absolute inset-0 bg-green-dark bg-opacity-20"></div>',1),dt=I('<div class="w-full h-full flex items-center justify-center"><div class="absolute inset-0 bg-green-dark bg-opacity-10"></div> <span class="text-beige-light font-heading italic text-xl opacity-40 relative z-10">[ Bild ]</span></div>'),gt=I('<div class="overflow-y-auto px-6 py-5 flex-1"><p class="text-beige-light text-sm whitespace-pre-line leading-relaxed"> </p></div>'),mt=I('<div class="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"><button class="absolute inset-0 w-full h-full cursor-default" aria-label="Stäng"></button> <div class="relative bg-green-dark max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden flex flex-col drop-shadow-lg" role="dialog" aria-modal="true"><div class="w-full h-56 bg-green-medium shrink-0 relative overflow-hidden"><!></div> <div class="bg-green-light px-6 py-4 shrink-0"><h2 class="text-beige-light font-heading uppercase text-center tracking-wide text-lg leading-snug"> </h2></div> <!> <div class="px-6 py-4 shrink-0 flex justify-center gap-x-3 border-t border-green-medium"><a target="_blank" class="px-8 py-2 bg-green-light text-beige-light font-heading uppercase rounded-lg hover:bg-green-medium transition-colors tracking-wider text-sm">Boka</a> <button class="px-8 py-2 bg-transparent text-beige-light/70 font-heading uppercase rounded-lg hover:text-beige-light transition-colors tracking-wider text-sm">Stäng</button></div> <button class="absolute top-3 right-3 text-beige-light w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10 text-base" aria-label="Stäng">✕</button></div></div>');function ct(i,e){he(e,!1);let s=L(e,"isOpen",12,!1),n=L(e,"treatment",8,null);function v(){s(!1)}function b(m){m.key==="Escape"&&v()}Ie(()=>be(s()),()=>{typeof document<"u"&&(document.body.style.overflow=s()?"hidden":"")}),Ne(),Ee();var g=Se();O("keydown",Ge,b);var w=oe(g);{var N=m=>{var d=mt(),j=l(d),k=c(j,2),f=l(k),h=l(f);{var o=_=>{var P=ot(),S=oe(P);ve(2),D(()=>{de(S,`w-full h-full object-cover ${n().imagePosition??""}`),J(S,"src",n().img),J(S,"alt",n().title)}),A(_,P)},u=_=>{var P=dt();A(_,P)};G(h,_=>{n().img?_(o):_(u,!1)})}a(f);var y=c(f,2),E=l(y),C=l(E,!0);a(E),a(y);var R=c(y,2);{var U=_=>{var P=gt(),S=l(P),ae=l(S,!0);a(S),a(P),D(()=>q(ae,n().content)),A(_,P)};G(R,_=>{n().content&&_(U)})}var H=c(R,2),F=l(H),p=c(F,2);a(H);var M=c(H,2);a(k),a(d),D(()=>{J(k,"aria-label",n().title),q(C,n().title),J(F,"href",n().bookingUrl||"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633")}),O("click",j,v),O("click",p,v),O("click",M,v),Ae(3,k,()=>lt,()=>({duration:200,start:.95})),Ae(3,d,()=>st,()=>({duration:200})),A(m,d)};G(w,m=>{s()&&n()&&m(N)})}A(i,g),ye()}var ut=I('<span class="block text-xs text-beige-light/70 mt-0.5"> </span>'),vt=I('<div class="w-full overflow-hidden rounded-xl bg-green-light"><button class="w-full px-4 py-3 text-left transition active:bg-green-dark/20"><span class="block text-sm font-semibold text-beige-light leading-snug"> </span> <!></button></div>'),kt=I('<div class="w-full px-4"><div class="flex flex-col items-center w-full p-4 rounded-2xl gap-y-3 bg-green-medium drop-shadow-md"><h2 class="text-beige-light text-lg uppercase font-heading tracking-wider py-1"> </h2> <!></div></div>'),pt=I('<div class="relative w-full h-48 overflow-hidden"><img class="object-cover w-full h-full [object-position:center_30%]" alt="Behandlingar"> <div class="absolute inset-0 bg-green-dark/50"></div> <div class="absolute inset-0 flex items-center justify-center"><h2 class="text-3xl uppercase text-beige-light font-heading tracking-wider">Behandlingar</h2></div></div> <div class="flex flex-col items-center w-full py-8 gap-y-6"></div>',1),bt=I(`<div class="absolute top-0 flex p-4 rounded-lg drop-shadow-lg bg-green-medium z-20 transform translate-y-[70%]"><span class="italic text-beige-light max-w-[700px]">En ansiktsbehandling hos mig ger (förutom en härlig stund för dig och ditt välmående
							såklart) djupare verkan i huden jämfört med din hudvårdsrutin hemma, med aktivare och
							”starkare” ingredienser i produkterna samt mer stimulerande och noggrant utförande.</span></div>`),ft=I('<div class="flex flex-col items-center justify-center w-full max-w-screen-xl p-8 gap-y-12"><div class="relative flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Ansiktsbehandlingar</h2> <h3 class="text-lg italic text-beige-light font-heading">DERMALOGICA PRO EXPERIENCE</h3> <!> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Avancerad Hudvård</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Massage</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Kroppsvård</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Fransar och Bryn</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Makeup</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div> <div class="flex flex-col items-center w-full"><h2 class="text-4xl uppercase text-beige-light font-heading">Vaxning</h2> <div class="grid w-full grid-cols-2 gap-4 p-4"></div></div></div>'),ht=I("<!> <!> <main><!></main> <!>",1);function Et(i,e){he(e,!1);const s=".././images/treatments/massage/massage1.jpg";let n=te(!1);qe(()=>{V(n,Je())});let v=te(!1),b=te(null),g=te(!1);function w(p){V(b,p),V(g,!0)}const N=[{title:"Microneedling 60 min 1950:-",content:`En avancerad behandling för att reducera samt förebygga markanta och mer djupgående hudproblem som
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
Ampuller med Dermalogicas Pro Restore för vård hemma efter behandling ingår i behandlingspriset.`,img:".././images/treatments/advanced/microneedling.jpg",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/microneedling-3420056"},{title:"Dermalogica PRO Nano Infusion 60 min 1550:-",content:`En lågintensiv, icke-invasiv version av microneedling som luckrar upp ytans döda hudceller med hjälp av slipande tippar av organiskt slitstarkt silikon eller metall.

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

Dubbelrengöring, Exfoliering & Nano infusion, Portömning, Ansiktsmask, Serum, Ögonkräm, Ansiktskräm.`,img:".././images/treatments/advanced/nano-infusion.jpg",imagePosition:"[object-position:center_60%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/dermalogica-pro-nano-infusion-3420066"},{title:"Dermalogica PRO Power Peel 60 min 1450:-",content:`Kemisk peeling hör till de mest effektiva metoderna för att få bukt med
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

Dubbelrengöring, Pro Power Peel, Ansiktsmask, Serum, Ögonkräm, Ansiktskräm.`,img:".././images/treatments/advanced/power-peel.jpg",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/dermalogica-pro-power-peel-3420067"}],m=[{title:"ANSIKTSBEHANDLING 90 MIN 1150:-",content:`Dubbelrengöring, hudanalys, peeling, portömning, brynplock, apparatur, lymfdränage, ansiktsmassage, mask, serum, kräm.

I en 90 minuters ansiktsbehandling får du ALLT! För den som håller med Freddie Mercury i fjärde låten från Queen’s trettonde album helt enkelt!`,img:".././images/treatments/face/face1.jpg",imagePosition:"[object-position:center_65%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270380"},{title:"ANSIKTSBEHANDLING 60 MIN 950:-",content:`Dubbelrengöring, hudanalys, peeling, portömning, brynplock, lymfdränage, mask, serum, kräm.

I en 60 minuters ansiktsbehandling är det mer utvalt vad som prioriteras av ovanstående utifrån hudanalysen, förutom apparaturen och massagen som inte hinns med. 

För den som vill ha lite av varje!`,img:".././images/treatments/face/face4.jpg",imagePosition:"[object-position:center_20%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270381"},{title:"ANSIKTSBEHANDLING 30 MIN 650:-",content:`Dubbelrengöring, peeling, lymfdränage, mask, kräm.
Den 30 minuter långa ansiktsbehandlingen är mer som en liten kur eller ”quick fix” med det
nödvändigaste. Denna kortare ansiktskur är även optimal för den överkänsliga, med
rosacea, pod, psoriasis, atopiker eller liknande. För er är det less is more som gäller i alla
lägen!`,img:".././images/treatments/face/face2.jpg",imagePosition:"[object-position:center_180%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270382"},{title:"AHA-BEHANDLING 75 MIN 1050:-",content:"Dubbelrengöring, AHA-peeling, brynplock, apparatur, lymfdränage, mask, serum, kräm.",img:".././images/treatments/face/face3.jpg",imagePosition:"[object-position:center_50%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270384"}],d=[{title:"SPAMASSAGE HALVKROPP 30 MIN 550:-",content:`Rygg & nackmassage.
En avslappnande, värmande och frigörande massage av rygg och nacke. Halvkroppsmassagen gör susen för stela ryggar, spänd nacke och axlar eller ländrygg för att nämna några av de smärtor som kan uppstå av överansträngda överkroppar.`,img:".././images/treatments/massage/massage1.jpg",imagePosition:"[object-position:center_10%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/spamassage-halvkropp-3270391"},{title:"SPAMASSAGE HELKROPP 60 MIN 850:-",content:`Massage av rygg & nacke, ben, armar, mage, dekolletage & ansikte.
Med knådande tryck och värmande massageoljor masseras rygg och axlar, ben och fötter, armar och händer, magen, ansiktet, dekolletaget och nacken. En helkroppsupplevelse som gör dig totalt avslappnad, lättar upp stela muskelknutor, stimulerar metabolismen och du finner ditt inre lugn och din lycka.`,img:".././images/treatments/massage/massage3.jpg",imagePosition:"[object-position:center_30%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/spamassage-helkropp-3270392"},{title:"FOT, HAND & ANSIKTSMASSAGE 45 MIN 650:-",content:`Fotmassage, handmassage & ansiktsmassage.
Passar utmärkt till den gravida & den nyblivna mamman! Eller bara den som behöver en avkopplande stund för de muskler vi använder mest hela dagen då vi går med våra fötter, använder våra händer till hjälp i mycket och såklart ansiktsuttrycken av att reagera, känna och prata.`,img:".././images/treatments/massage/massage2.jpg",imagePosition:"[object-position:center_60%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/fot-hand-och-ansiktsmassage-3270393"}],j=[{title:"NEAS LYXBEHANDLING 60 MIN 995:-",content:`Ryggskrubb, ryggmassage & ansiktskur med produkter från Dermalogica.
Ryggen skrubbas masserande och djuprengörande med havssalt, oljor och eteriska aromater av patchouli och apelsin, uppföljt av en värmande och stimulerande ryggmassage.

Avslutas med en uppfriskande ansiktskur med dubbelrengöring, peeling, fuktmask, lymfmassage och ansiktskräm utifrån Dig och Din huds behov.`,img:".././images/treatments/body/body1.jpg",imagePosition:"[object-position:center_20%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270386"},{title:"MOLNDANS 30 MIN 695:-",content:`Fotskrubb & fotmassage.
Fötterna och smalbenen tvättas med varma handdukar, skrubbas med min fantastiska saltskrubb för att sedan masseras med lugnande muskelstimulerande oljor med eteriska dofter av lavendel och sandelträ.

När du lämnar behandlingsrummet dansar du som på moln.

- ”Det känns som att jag svävar!”`,img:".././images/treatments/body/body2.jpg",imagePosition:"[object-position:center_30%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/molndans-3270388"},{title:"Ryggbehandling 45 min 650:-",content:`All hudvård Din rygg behöver!

Rengöring, skrubb, portömning vid behov, massage och återfuktande kräm.

- Som en ansiktsbehandling för din rygg!`,img:".././images/treatments/massage/massage1.jpg",imagePosition:"[object-position:center_30%]",expandedHeight:"h-[35%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/ryggbehandling-3353324"}],k=[{title:"FRANSFÄRG 15 MIN 250:-",content:"En fransfärgning ramar in dina ögon och ger ett mer vaket uttryck - utan att behöva mascara!",img:".././images/treatments/lashes/lashes4.jpg",expandedHeight:"h-[30%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270394"},{title:"BRYNFÄRG & PLOCK 30 MIN 250:-",content:`Inklusive brynplock.

Önskar du naturligt tydliga, mörkare och/eller fylligare bryn? I got you!`,img:".././images/treatments/face/face4.jpg",imagePosition:"[object-position:center_20%]",expandedHeight:"h-[30%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/brynfarg-plock-3270396"},{title:"FRANS & BRYNFÄRG 30 MIN 450:-",content:"Inklusive brynplock.",img:".././images/treatments/lashes/lashes6.jpg",expandedHeight:"h-[30%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/frans-brynfarg-3270398"},{title:"LASHLIFT 60 MIN 950:-",content:`Inklusive keratin.
Ett lashlift lyfter upp dina fransar och lämnar en naturlig böj. Tillsammans med färgen upplevs fransarna längre och fylligare och både ögonfransböjaren och mascaran kan du ge bort till någon annan som behöver dem mer`,img:".././images/treatments/lashes/lashes1.jpg",expandedHeight:"h-[50%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270399"},{title:"BROWLIFT 45 MIN 650:-",content:`Inklusive brynplock & keratin.
Ett browlift formar ögonbrynen och ger ett fylligare och tillsammans med färg ett mer intensivt utseende på dina bryn!

Hos mig kan du få snygga bryn utan att behöva fylla i eller forma dem varje dag och det är DU som bestämmer hur du vill ha dem; tjocka, mörka, varma, naturliga? Jag fixar!`,img:".././images/treatments/lashes/lashes3.jpg",imagePosition:"[object-position:center_70%]",expandedHeight:"h-[50%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270401"},{title:"LASH & BROWLIFT 90 MIN 1450:-",content:"Inklusive brynplock & keratin.",img:".././images/treatments/lashes/lashes5.jpg",expandedHeight:"h-[30%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/lash-browlift-3270403"},{title:"Fransförlängning - Singelfransar 120 MIN 950:-",content:"I en singelfransbehandling limmas syntetfransar en och en på dina egna naturliga fransar och resulterar i fylligare och mörkare fransar dygnet runt! Du kan välja olika form, längd och böj utifrån önskat resultat - vill du ha naturliga, glammiga/pretentiösa eller något däremellan? Rekommenderar påfyllning var 2-5e vecka beroende på hur snabbt dina egna fransar växer samt hur de sköts om hemma (hur mycket avfall.)",img:".././images/treatments/lashes/lashes7.jpg",expandedHeight:"h-[60%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/fransforlangning-singelfransar-3302230"}],f=[{title:"VARDAGSMAKEUP 45 MIN 450:-",content:"",img:".././images/treatments/makeup/day.jpg",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/vardagsmakeup-3270412"},{title:"FESTMAKEUP 60 MIN 550:-",content:"",img:".././images/treatments/makeup/party.jpg",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/festmakeup-3270413"},{title:"BRÖLLOPSMAKEUP INKL ANSIKTSKUR 105 MIN 1550:-",content:"",img:".././images/treatments/makeup/wedding.jpg",imagePosition:"[object-position:center_600%]",bookingUrl:"https://www.bokadirekt.se/boka-tjanst/deep-beauty-by-nea-129633/brollopsmakeup-3270414"}],h=[{title:"ARMHÅLOR 30 MIN 350:-",content:"",img:".././images/treatments/wax/armpit.jpg",imagePosition:"[object-position:center_80%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270411"},{title:"BIKINILINJE 30 MIN 450:-",content:"",img:".././images/treatments/wax/bikini.jpg",imagePosition:"[object-position:center_50%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270410"},{title:"HALVA BEN 45 MIN 550:-",content:"",img:".././images/treatments/wax/calf.jpg",imagePosition:"[object-position:center_50%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270409"},{title:"HELA BEN 60 MIN 895:-",content:"",img:".././images/treatments/wax/leg.jpg",imagePosition:"[object-position:center_80%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270408"},{title:"HELA BEN INKL. BIKINILINJE 75 MIN 995:-",content:"",img:".././images/treatments/wax/legbikini.jpg",imagePosition:"[object-position:center_95%]",bookingUrl:"https://www.bokadirekt.se/places/deep-beauty-by-nea-129633?ss=3270407"}];Ee();var o=ht(),u=oe(o);ct(u,{get treatment(){return t(b)},get isOpen(){return t(g)},set isOpen(p){V(g,p)},$$legacy:!0});var y=c(u,2);ze(y,{heroText:"Behandlingar",heroImage:s,heroBg:"bg-green-dark",heroImagePostion:"[object-position:center_30%]"});var E=c(y,2),C=l(E);{var R=p=>{var M=pt(),_=oe(M),P=l(_);J(P,"src",s),ve(4),a(_);var S=c(_,2);B(S,5,()=>[{items:m,title:"Ansiktsbehandlingar"},{items:N,title:"Avancerad Hudvård"},{items:d,title:"Massage"},{items:j,title:"Kroppsvård"},{items:k,title:"Fransar och bryn"},{items:f,title:"Makeup"},{items:h,title:"Vaxning"}],T,(ae,ne)=>{var W=kt(),ie=l(W),Y=l(ie),ge=l(Y,!0);a(Y);var re=c(Y,2);B(re,1,()=>t(ne).items,T,(me,X)=>{var Q=vt();const z=pe(()=>t(X).title.match(/^(.+?)\s+(\d+\s*min\s+\d+\s*:-)\s*$/i));var Z=l(Q),$=l(Z),ce=l($,!0);a($);var x=c($,2);{var r=se=>{var ke=ut(),He=l(ke,!0);a(ke),D(Me=>q(He,Me),[()=>t(z)[2].trim()],pe),A(se,ke)};G(x,se=>{t(z)&&se(r)})}a(Z),a(Q),D(se=>q(ce,se),[()=>t(z)?t(z)[1].trim():t(X).title],pe),O("click",Z,()=>w(t(X))),A(me,Q)}),a(ie),a(W),D(()=>q(ge,t(ne).title)),A(ae,W)}),a(S),A(p,M)},U=p=>{var M=ft(),_=l(M),P=l(_),S=c(P,4);{var ae=x=>{var r=bt();A(x,r)};G(S,x=>{t(v)&&x(ae)})}var ne=c(S,2);B(ne,5,()=>m,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},get imagePosition(){return t(r).imagePosition}})}),a(ne),a(_);var W=c(_,2),ie=c(l(W),2);B(ie,5,()=>N,T,(x,r)=>{nt(x,{get title(){return t(r).title},get image(){return t(r).img},get imagePosition(){return t(r).imagePosition},onClick:()=>w(t(r))})}),a(ie),a(W);var Y=c(W,2),ge=c(l(Y),2);B(ge,5,()=>d,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},get imagePosition(){return t(r).imagePosition}})}),a(ge),a(Y);var re=c(Y,2),me=c(l(re),2);B(me,5,()=>j,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},get imagePosition(){return t(r).imagePosition},get expandedHeight(){return t(r).expandedHeight}})}),a(me),a(re);var X=c(re,2),Q=c(l(X),2);B(Q,5,()=>k,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},get imagePosition(){return t(r).imagePosition},get expandedHeight(){return t(r).expandedHeight}})}),a(Q),a(X);var z=c(X,2),Z=c(l(z),2);B(Z,5,()=>f,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},isExpandable:!1,get imagePosition(){return t(r).imagePosition}})}),a(Z),a(z);var $=c(z,2),ce=c(l($),2);B(ce,5,()=>h,T,(x,r)=>{ee(x,{get title(){return t(r).title},get body(){return t(r).content},get image(){return t(r).img},isExpandable:!1,get imagePosition(){return t(r).imagePosition}})}),a(ce),a($),a(M),O("mouseenter",P,()=>V(v,!0)),O("mouseleave",P,()=>V(v,!1)),A(p,M)};G(C,p=>{t(n)?p(R):p(U,!1)})}a(E);var H=c(E,2);{var F=p=>{Ve(p,{})};G(H,p=>{t(n)||p(F)})}D(()=>de(E,`flex flex-col justify-center items-center w-full bg-green-dark ${(t(n)?"mt-16":"")??""} `)),A(i,o),ye()}export{Et as component};
