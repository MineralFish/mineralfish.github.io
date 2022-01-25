var app=function(){"use strict";function e(){}function t(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,l;function n(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function m(e,t){e.appendChild(t)}function u(e,t,r){e.insertBefore(t,r||null)}function f(e){e.parentNode.removeChild(e)}function s(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function p(){return g(" ")}function y(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function h(e,t,r){e.classList[r?"add":"remove"](t)}function d(e){l=e}const b=[],C=[],N=[],v=[],x=Promise.resolve();let F=!1;function T(e){N.push(e)}const k=new Set;let H=0;function L(){const e=l;do{for(;H<b.length;){const e=b[H];H++,d(e),S(e.$$)}for(d(null),b.length=0,H=0;C.length;)C.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];k.has(t)||(k.add(t),t())}N.length=0}while(b.length);for(;v.length;)v.pop()();F=!1,k.clear(),d(e)}function S(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const I=new Set;function M(e,t){-1===e.$$.dirty[0]&&(b.push(e),F||(F=!0,x.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function w(c,i,n,m,u,s,g,p=[-1]){const y=l;d(c);const h=c.$$={fragment:null,ctx:null,props:s,update:e,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(y?y.$$.context:[])),callbacks:r(),dirty:p,skip_bound:!1,root:i.target||y.$$.root};g&&g(h.root);let b=!1;if(h.ctx=n?n(c,i.props||{},((e,t,...r)=>{const a=r.length?r[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),b&&M(c,e)),t})):[],h.update(),b=!0,a(h.before_update),h.fragment=!!m&&m(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(f)}else h.fragment&&h.fragment.c();i.intro&&((C=c.$$.fragment)&&C.i&&(I.delete(C),C.i(N))),function(e,r,c,i){const{fragment:l,on_mount:n,on_destroy:m,after_update:u}=e.$$;l&&l.m(r,c),i||T((()=>{const r=n.map(t).filter(o);m?m.push(...r):a(r),e.$$.on_mount=[]})),u.forEach(T)}(c,i.target,i.anchor,i.customElement),L()}var C,N;d(y)}const $={official:"Official fish",technicallyofficial:"Technically official fish",semiofficial:"Semi-official fish",unofficial:"Unofficial fish",mineral:"Minerals",mcitems:"Minecraft items",mcblocks:"Minecraft blocks",mcmobs:"Minecraft mobs",mcrandom:"Minecraft randomized ores",oc:"OC fish",misc:"Miscellaneous",crossover:"Fish from other franchises",fullName:"Name",category:"Category",type:"Type",bitmap:"Bitmap sprite",vector:"Vector sprite",creator:"Creator",textureCreator:"Bitmap creator",vectorTextureCreator:"Vector creator",realName:"Real name",role:"Role"},B={copper:{realName:"Tickee",role:"Miscellaneous annoyances",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Copper Fish"},emerald:{realName:"Plagee",role:"Advertising",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Emerald Fish"},lapis:{realName:"Iragee",role:"Flame wars",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Lapis Fish"},redstone:{realName:"Cussee",role:"Community Guidelines / FaQ / ToS",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Redstone Fish"},quartz:{realName:"Bumpee, Jumpee, Stretchee, Bonkee, Clonkee",role:"Subject derailment",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Quartz Fish"},iron:{realName:"Ingo, Blawbo & Unknown",role:"Topic bumping",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Fish"},coal:{realName:"Brunee",role:"Topic closing/opening",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Coal Fish"},diamond:{realName:"Cubzia",role:"Topic subject offenses",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Diamond Fish"},golden:{realName:"Tailee",role:"Quote chains",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Golden Fish"},netherite:{realName:"Tengreyee",role:"Spamming",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Netherite Fish"},ancientdebris:{realName:"Tengree",role:"Necroposting",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Ancient Debris Fish"},amethyst:{realName:"Notiee",role:"Topic pinning",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Amethyst Fish"},ironnugget:{realName:"Thunkee",role:"Rapid bumping/bopping",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Nugget Fish"},goldnugget:{realName:"Bunkee",role:"Quote chains",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Gold Nugget Fish"},ironingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Iron Fish Ingot (Iron Ingot Fish)"},goldingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Golden Fish Ingot (Gold Ingot Fish)"},deepslate:{realName:"Grimee",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Deepslate Fish"},glass:{realName:"Glasee",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Glass Fish"},bow:{realName:"Aimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Bow Fish"},arrow:{realName:"Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Arrow Fish"},bowandarrow:{realName:"Aimee & Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Bow & Arrow Fish"},bucket:{realName:"Fillee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Bucket Fish"},egg:{realName:"Yolkee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Egg Fish"},melon:{realName:"Melonee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Melon Fish"},mutton:{realName:"Ramee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Mutton Fish"},cookedmutton:{realName:"Ramsee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cooked Mutton Fish"},paper:{realName:"Artee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Paper Fish"},potato:{realName:"Spudee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Potato Fish"},slimeball:{realName:"Slimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Slimeball Fish"},chargedcreeper:{category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Charged Creeper Fish"},chicken:{realName:"Bawkee",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Chicken Fish"},wheat:{realName:"Grainee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Wheat Fish"},cookie:{realName:"Pastree",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cookie Fish"},pig:{realName:"Oinkee",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Pig Fish"},cow:{realName:"Bullee",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cow Fish"},mooshroom:{realName:"Mooshee",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Mooshroom Fish"},flint:{realName:"Redundee",role:"Duplicate topics",category:"semiofficial",type:"mineral",bitmap:!0,vector:!0,creator:"Pianostar4",textureCreator:"-gge",fullName:"Flint Fish"},copper30:{category:"unofficial",type:"mineral",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Copper Fish 3.0"},ruby:{category:"unofficial",type:"mineral",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"LandonHarter",fullName:"Ruby Fish"},stone:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Stone Fish",vectorTextureCreator:"CST1229"},stone_old:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Stone Fish (Old sprite)",vectorTextureCreator:"CST1229"},stone_landon:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"CST1229",fullName:"Stone Fish (LandonHarter's vector)"},jackolantern:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Jack-O-Lantern Fish"},magma:{realName:"Mayami",role:"Deleting stuff",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"CST1229",fullName:"Magma (Block) Fish",vectorTextureCreator:"-TWILIGHTMISTY-"},beacon:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Beacon Fish"},chest:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-Quantum_Studios-",fullName:"Chest Fish"},endrod:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"End Rod Fish"},glowstone:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Glowstone Fish"},obsidian:{realName:"Portalee",role:"Large images",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Obsidian Fish"},skulk:{realName:"Bypee",role:"Filter bypassing",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"irish-tea",textureCreator:"irish-tea",fullName:"Skulk Fish"},wool:{realName:"Woolee",role:"Manually inserted signatures",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Wool Fish"},clay:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Clay Fish"},commandite:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Commandite Fish"},netherrack:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Netherrack Fish"},purpur:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Purpur Fish"},wooden:{role:"Telling people when something technically isn't a mineral fish",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"PATSATDAT",textureCreator:"PATSATDAT",fullName:"Wooden Fish",smooth:!0},apple:{realName:"Watchee",role:"Test topics",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Apple Fish"},bread:{realName:"Soldee",role:"Unconstructive criticism",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"wkmewsic",textureCreator:"-gge",fullName:"Bread Fish"},ender:{realName:"Portee",role:"Topic moving",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Ender Fish"},phantommembrane:{realName:"Elitree",role:"Welcoming",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"-gge",fullName:"Phantom Membrane Fish"},cake:{realName:"Cakee",role:"Roleplaying in the forums",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Cake Fish",vectorTextureCreator:"CST1229"},fire:{role:"Causing flame wars",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"PATSATDAT",textureCreator:"JackyBorderCollie",fullName:"Fire Fish"},magmacream:{realName:"Magnee",role:"Topic merging",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Magma (Cream) Fish"},dragonegg:{realName:"Revoltuzeë",role:"False reporting",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"Unithlees3",textureCreator:"-gge",fullName:"Dragon Egg Fish"},carrot:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Carrot Fish"},beetroot:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Beetroot Fish"},prismarinecrystal:{role:"Mass mentioning on the TBGs",category:"unofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"TonyBrown148",textureCreator:"TonyBrown148 & -gge",fullName:"Prismarine Crystal Fish"},spyglass:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Spyglass Fish"},sweetberry:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sweet Berry Fish"},firework:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Firework Fish"},chorus:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Chorus Fish"},creeper:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Creeper Fish"},enderman:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Enderman Fish"},blorfstone:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Blorfstone Fish"},ig:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Ig Fish"},inzeozite:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Inzeozite Fish"},firefighter:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"-gge",fullName:"Firefighter Fish"},grammarpolice:{role:"Grammar mistakes",category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Grammar Police Fish"},banana:{realName:"Banee/Bananee",role:"Bullies, evil Scratchers",category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"CST1229",fullName:"Banana Fish"},ghost:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"54321Tigg",textureCreator:"Marc92020",fullName:"Ghost Fish"},applerald:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie's sister",textureCreator:"CST1229",fullName:"Applerald Fish"},micafish:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"CST1229",textureCreator:"CST1229",fullName:"Mica Fish Fish"},moonstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Moonstone Fish"},blueberry:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Blueberry Fish"},tree:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"Marc92020",textureCreator:"Marc92020",fullName:"Tree Fish"},fullon:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Full On Fish"},cloud:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Cloud Fish"},daylight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Daylight Fish"},moonlight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Moonlight Fish"},galactic:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"Unithlees3",vectorTextureCreator:"LandonHarter",fullName:"Galactic Fish"},holo:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Holo Fish"},kumquat:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat Fish"},kumquatking:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat King Fish"},tempest:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Tempest Fish"},ticket:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Ticket Fish"},alenn:{category:"unofficial",type:"misc",bitmap:!1,vector:!1,creator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",bitmapTextureCreator:"JackyBorderCollie",fullName:"Alenn(a) Fish"},swimmy:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Swimmy Fish"},brownie:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"LandonHarter (based off of -TWILILIGHTMISTY-'s vector)",fullName:"Brownie Fish"},rainbowstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"lapisi",textureCreator:"lapisi",fullName:"Rainbowstone Fish"},roket:{role:"Dealing with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"roketH77",vectorTextureCreator:"roketH77",fullName:"Roket Fish"},marc92020:{role:"Helping Roket Fish deal with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"Marc92020",vectorTextureCreator:"-gge",fullName:"Marc92020 Fish"},cyruscarrasco15263:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"CyrusCarrasco15263 Fish"},dog:{realName:"Jackyee",category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Jacky Fish"},gge:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"-gge Fish"},scratchcat:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Scratch Cat Fish"},unithlees3:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Unithlees3 Fish"},twilight:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"-TWILIGHTMISTY-",fullName:"Twilight Fish"},hollow:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Hollow Fish",smooth:!0},sevcon:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sevcon Fish"},lunartic:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Lunartic Fish"},orb:{realName:"Mutenee",role:"Conflict prevention",category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Orb Fish"},orb_16x16:{realName:"Mutenee",role:"Conflict prevention",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"JackyBorderCollie",fullName:"Orb Fish (16x16 sprite)"},among:{realName:"Susee",role:"Sus things and impostor mineral fishes",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Among Fish"},amogus:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"Marc92020",textureCreator:"roketH77",fullName:"Amogus Fish"},nausicaa:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Nausicaä Fish"},babanana:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Babanana Fish"},bapple:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Bapple Fish"},hatsunemiku:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Hatsune Miku Fish"},appel:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Appel Fish",vectorTextureCreator:"CST1229"},camilo:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Camilo Fish"}};function G(e){return $[e]||e}function A(e,t,r){const a=e.slice();return a[3]=t[r],a}function W(t){let r;return{c(){r=s("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function _(e){let t,r;return{c(){t=s("img"),y(t,"class","fish-bitmap"),n(t.src,r="/assets/fish/"+e[3]+".png")||y(t,"src",r),y(t,"alt",B[e[3]].fullName),h(t,"pixelated",!B[e[3]].smooth)},m(e,r){u(e,t,r)},p(e,r){1&r&&h(t,"pixelated",!B[e[3]].smooth)},d(e){e&&f(t)}}}function P(t){let r;return{c(){r=s("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function J(t){let r,a;return{c(){r=s("img"),y(r,"class","fish-vector"),y(r,"width","48"),y(r,"height","auto"),n(r.src,a="/assets/fish/vector/"+t[3]+".svg")||y(r,"src",a),y(r,"alt",B[t[3]].fullName+" vector")},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function Y(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function R(t){let r,a=B[t[3]].realName+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function E(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function O(t){let r,a=B[t[3]].role+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function j(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function D(t){let r,a=B[t[3]].creator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function z(t){let r;return{c(){r=s("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function U(t){let r,a=B[t[3]].textureCreator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function q(t){let r;return{c(){r=s("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function Q(t){let r;return{c(){r=g("LandonHarter")},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function K(t){let r,a=B[t[3]].vectorTextureCreator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&f(r)}}}function V(e){let t,r,a,o,c,i,l,n,y,h,d,b,C,N,v,x,F,T,k,H,L,S,I,M,w=B[e[3]].fullName+"",$=G(B[e[3]].category)+"",A=G(B[e[3]].type)+"";let V=function(e,t){return B[e[3]].bitmap?_:W}(e),X=V(e);let Z=function(e,t){return B[e[3]].vector?J:P}(e),ee=Z(e);let te=function(e,t){return B[e[3]].realName?R:Y}(e),re=te(e);let ae=function(e,t){return B[e[3]].role?O:E}(e),oe=ae(e);let ce=function(e,t){return void 0!==B[e[3]].creator?D:j}(e),ie=ce(e);let le=function(e,t){return B[e[3]].textureCreator?U:z}(e),ne=le(e);let me=function(e,t){return B[e[3]].vectorTextureCreator?K:B[e[3]].vector?Q:q}(e),ue=me(e);return{c(){t=s("tr"),r=s("td"),a=g(w),o=p(),c=s("td"),X.c(),i=p(),l=s("td"),ee.c(),n=p(),y=s("td"),re.c(),h=p(),d=s("td"),oe.c(),b=p(),C=s("td"),N=g($),v=p(),x=s("td"),F=g(A),T=p(),k=s("td"),ie.c(),H=p(),L=s("td"),ne.c(),S=p(),I=s("td"),ue.c(),M=p()},m(e,f){u(e,t,f),m(t,r),m(r,a),m(t,o),m(t,c),X.m(c,null),m(t,i),m(t,l),ee.m(l,null),m(t,n),m(t,y),re.m(y,null),m(t,h),m(t,d),oe.m(d,null),m(t,b),m(t,C),m(C,N),m(t,v),m(t,x),m(x,F),m(t,T),m(t,k),ie.m(k,null),m(t,H),m(t,L),ne.m(L,null),m(t,S),m(t,I),ue.m(I,null),m(t,M)},p(e,t){X.p(e,t),ee.p(e,t),re.p(e,t),oe.p(e,t),ie.p(e,t),ne.p(e,t),ue.p(e,t)},d(e){e&&f(t),X.d(),ee.d(),re.d(),oe.d(),ie.d(),ne.d(),ue.d()}}}function X(t){let r,a,o,c,i,l,n,y,h,d,b,C,N,v,x,F,T,k,H,L,S,I,M,w,$,W,_=Object.keys(B),P=[];for(let e=0;e<_.length;e+=1)P[e]=V(A(t,_,e));return{c(){r=s("main"),a=s("h1"),a.textContent="2022 Mifernian Census",o=g("\r\n\t(name idea by LandonHarter)\r\n\t"),c=s("table"),i=s("thead"),l=s("tr"),n=s("th"),n.textContent=`${G("fullName")}`,y=p(),h=s("th"),h.textContent=`${G("bitmap")}`,d=p(),b=s("th"),b.textContent=`${G("vector")}`,C=p(),N=s("th"),N.textContent=`${G("realName")}`,v=p(),x=s("th"),x.textContent=`${G("role")}`,F=p(),T=s("th"),T.textContent=`${G("category")}`,k=p(),H=s("th"),H.textContent=`${G("type")}`,L=p(),S=s("th"),S.textContent=`${G("creator")}`,I=p(),M=s("th"),M.textContent=`${G("textureCreator")}`,w=p(),$=s("th"),$.textContent=`${G("vectorTextureCreator")}`,W=p();for(let e=0;e<P.length;e+=1)P[e].c()},m(e,t){u(e,r,t),m(r,a),m(r,o),m(r,c),m(c,i),m(i,l),m(l,n),m(l,y),m(l,h),m(l,d),m(l,b),m(l,C),m(l,N),m(l,v),m(l,x),m(l,F),m(l,T),m(l,k),m(l,H),m(l,L),m(l,S),m(l,I),m(l,M),m(l,w),m(l,$),m(c,W);for(let e=0;e<P.length;e+=1)P[e].m(c,null)},p(e,[t]){if(3&t){let r;for(_=Object.keys(B),r=0;r<_.length;r+=1){const a=A(e,_,r);P[r]?P[r].p(a,t):(P[r]=V(a),P[r].c(),P[r].m(c,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=_.length}},i:e,o:e,d(e){e&&f(r),function(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}(P,e)}}}function Z(e,t,r){return[B,G,$]}return new class extends class{$destroy(){!function(e,t){const r=e.$$;null!==r.fragment&&(a(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),w(this,e,Z,X,c,{fishList:0,strings:2,getString:1})}get fishList(){return B}get strings(){return $}get getString(){return G}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
