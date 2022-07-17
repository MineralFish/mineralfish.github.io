var app=function(){"use strict";function e(){}function r(e){return e()}function t(){return Object.create(null)}function a(e){e.forEach(r)}function o(e){return"function"==typeof e}function c(e,r){return e!=e?r==r:e!==r||e&&"object"==typeof e||"function"==typeof e}let i,l;function n(e,r){return i||(i=document.createElement("a")),i.href=r,e===i.href}function m(e,r){e.appendChild(r)}function u(e,r,t){e.insertBefore(r,t||null)}function s(e){e.parentNode.removeChild(e)}function g(e,r){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(r)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function y(){return p(" ")}function h(e,r,t){null==t?e.removeAttribute(r):e.getAttribute(r)!==t&&e.setAttribute(r,t)}function d(e,r,t){e.classList[t?"add":"remove"](r)}function v(e){l=e}const C=[],b=[],x=[],N=[],T=Promise.resolve();let F=!1;function k(e){x.push(e)}const H=new Set;let L=0;function A(){const e=l;do{for(;L<C.length;){const e=C[L];L++,v(e),B(e.$$)}for(v(null),C.length=0,L=0;b.length;)b.pop()();for(let e=0;e<x.length;e+=1){const r=x[e];H.has(r)||(H.add(r),r())}x.length=0}while(C.length);for(;N.length;)N.pop()();F=!1,H.clear(),v(e)}function B(e){if(null!==e.fragment){e.update(),a(e.before_update);const r=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,r),e.after_update.forEach(k)}}const S=new Set;function w(e,r){-1===e.$$.dirty[0]&&(C.push(e),F||(F=!0,T.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[r/31|0]|=1<<r%31}function I(c,i,n,m,u,g,f,p=[-1]){const y=l;v(c);const h=c.$$={fragment:null,ctx:null,props:g,update:e,not_equal:u,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(y?y.$$.context:[])),callbacks:t(),dirty:p,skip_bound:!1,root:i.target||y.$$.root};f&&f(h.root);let d=!1;if(h.ctx=n?n(c,i.props||{},((e,r,...t)=>{const a=t.length?t[0]:r;return h.ctx&&u(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),d&&w(c,e)),r})):[],h.update(),d=!0,a(h.before_update),h.fragment=!!m&&m(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(s)}else h.fragment&&h.fragment.c();i.intro&&((C=c.$$.fragment)&&C.i&&(S.delete(C),C.i(b))),function(e,t,c,i){const{fragment:l,on_mount:n,on_destroy:m,after_update:u}=e.$$;l&&l.m(t,c),i||k((()=>{const t=n.map(r).filter(o);m?m.push(...t):a(t),e.$$.on_mount=[]})),u.forEach(k)}(c,i.target,i.anchor,i.customElement),A()}var C,b;v(y)}const M={official:"Official fish",technicallyofficial:"Technically official fish",semiofficial:"Semi-official fish",unofficial:"Unofficial fish",mineral:"Minerals",mcitems:"Minecraft items",mcblocks:"Minecraft blocks",mcmobs:"Minecraft mobs",mcrandom:"Minecraft randomized ores",oc:"OC fish",misc:"Miscellaneous",crossover:"Fish from other franchises",special:"Special fish",fullName:"Name",category:"Category",type:"Type",bitmap:"Bitmap sprite",vector:"Vector sprite",creator:"Creator",textureCreator:"Bitmap creator",vectorTextureCreator:"Vector creator",realName:"Real name",role:"Role"},_={copper:{realName:"Tickee",role:"Miscellaneous annoyances",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Copper Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{copper_gge:{creator:"-gge",name:"Alternate vector"},copper_evil:{creator:"LandonHarter",name:'Copper "Tickall" Fish'}}},emerald:{realName:"Plagee",role:"Advertising",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Emerald Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{emerald_gge:{creator:"-gge",name:"Alternate vector"}}},lapis:{realName:"Iragee",role:"Flame wars",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Lapis Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{lapis_gge:{creator:"-gge",name:"Alternate vector"},lapis_evil:{creator:"LandonHarter",name:'Lapis "Iragall" Fish'}}},redstone:{realName:"Cussee",role:"Community Guidelines / FaQ / ToS",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Redstone Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{redstone_gge:{creator:"-gge",name:"Alternate vector"}}},quartz:{realName:"Bumpee, Jumpee, Stretchee, Bonkee, Clonkee",role:"Subject derailment",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Quartz Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{quartz_gge:{creator:"-gge",name:"Alternate vector"}}},iron:{realName:"Ingo, Blawbo & Crumbo",role:"Topic bumping",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{iron_gge:{creator:"-gge",name:"Alternate vector"}}},coal:{realName:"Brunee",role:"Topic closing/opening",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Coal Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{coal_gge:{creator:"-gge",name:"Alternate vector"}}},diamond:{realName:"Cubzia",role:"Topic subject offenses",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Diamond Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{diamond_gge:{creator:"-gge",name:"Alternate vector"}}},golden:{realName:"Tailee",role:"Quote chains",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Golden Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{golden_gge:{creator:"-gge",name:"Alternate vector"}}},netherite:{realName:"Tengreyee",role:"Spamming",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Netherite Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{netherite_gge:{creator:"-gge",name:"Alternate vector"},netherite_evil:{creator:"LandonHarter",name:'Netherite "Tengreyall" Fish'}}},ancientdebris:{realName:"Tengree",role:"Necroposting",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Ancient Debris Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{ancientdebris_gge:{creator:"-gge",name:"Alternate vector"},ancientdebris_evil:{creator:"LandonHarter",name:'Ancient Debris "Tengrall" Fish'}}},amethyst:{realName:"Notiee",role:"Topic pinning",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Amethyst Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{amethyst_gge:{creator:"-gge",name:"Alternate vector"},amethyst_evil:{creator:"LandonHarter",name:'Amethyst "Notiall" Fish'}}},ironnugget:{realName:"Thunkee",role:"Rapid bumping/bopping",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Nugget Fish",vectorTextureCreator:"LandonHarter"},goldnugget:{realName:"Bunkee",role:"False quoting",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Gold Nugget Fish",vectorTextureCreator:"LandonHarter"},ironingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Iron Ingot Fish"},goldingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Gold Ingot Fish"},copperingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Copper Ingot Fish"},deepslate:{realName:"Grimee",role:"Supports or No supports suggestions (depends on how useful)",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Deepslate Fish"},newcopper:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"New Copper Fish"},newercopper:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Copper Fish"},newiron:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"New Iron Fish"},neweriron:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Iron Fish"},newgolden:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"New Golden Fish"},newergolden:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Golden Fish"},glass:{realName:"Glasee",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Glass Fish"},bow:{realName:"Aimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Bow Fish"},arrow:{realName:"Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Arrow Fish"},bowandarrow:{realName:"Aimee & Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Bow & Arrow Fish"},bucket:{realName:"Fillee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"LandonHarter",fullName:"Bucket Fish"},egg:{realName:"Yolkee",role:"Answers questions in QaS",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Egg Fish"},melon:{realName:"Melonee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"LandonHarter",fullName:"Melon Fish",vectorAlts:{melon_jacky:{creator:"JackyBorderCollie",name:"Alternate vector"}}},mutton:{realName:"Ramee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Mutton Fish"},cookedmutton:{realName:"Ramsee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Cooked Mutton Fish"},paper:{realName:"Artee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Paper Fish"},potato:{realName:"Spudee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Potato Fish"},slimeball:{realName:"Slimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Slimeball Fish"},chargedcreeper:{category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Charged Creeper Fish"},chicken:{realName:"Bawkee",role:"Proposing articles to be featured",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Chicken Fish"},wheat:{realName:"Grainee",role:"Double quoting",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Wheat Fish"},cookie:{realName:"Pastree",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Cookie Fish"},prismarineshard:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Prismarine Shard Fish"},pig:{realName:"Oinkee",role:"Shops",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Pig Fish"},cow:{realName:"Bullee",role:"Scratch Wiki helper",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cow Fish"},mooshroom:{realName:"Mooshee",role:"Proposing studios to be featured",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Mooshroom Fish"},air:{role:"Used in Mineral Fish pixel art",category:"technicallyofficial",type:"misc",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Air Fish"},ocular:{category:"technicallyofficial",type:"misc",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Ocular Fish",alts:{ocular_alt:{creator:"-gge",name:"Alternate sprite"}}},flint:{realName:"Redundee",role:"Duplicate topics",category:"semiofficial",type:"mineral",bitmap:!0,vector:!0,creator:"Pianostar4",textureCreator:"-gge",fullName:"Flint Fish",vectorTextureCreator:"LandonHarter"},copper30:{category:"unofficial",type:"mineral",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Copper Fish 3.0"},ruby:{category:"unofficial",type:"mineral",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"LandonHarter",fullName:"Ruby Fish"},ancientemerald:{category:"unofficial",type:"mineral",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Ancient Emerald Fish"},stone:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Stone Fish",vectorTextureCreator:"CST1229",alts:{stone_old:{creator:"CST1229",name:"Old sprite"}},vectorAlts:{stone_old:{creator:"CST1229",name:"Old sprite (vector remake)"},stone_landon:{creator:"LandonHarter",name:"Alternate vector"}}},jackolantern:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Jack-O-Lantern Fish"},magma:{realName:"Mayami",role:"Deleting stuff",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"CST1229",fullName:"Magma (Block) Fish",vectorTextureCreator:"-TWILIGHTMISTY-",vectorAlts:{magma_gge:{creator:"-gge",name:"Alternate vector"}}},beacon:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Beacon Fish",vectorTextureCreator:"LandonHarter"},chest:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Chest Fish"},endrod:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"End Rod Fish",vectorTextureCreator:"LandonHarter"},glowstone:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Glowstone Fish",vectorTextureCreator:"LandonHarter"},obsidian:{realName:"Portalee",role:"Large images",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Obsidian Fish"},skulk:{realName:"Bypee",role:"Filter bypassing",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"irish-tea",textureCreator:"irish-tea",fullName:"Skulk Fish"},wool:{realName:"Woolee",role:"Manually inserted signatures",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Wool Fish"},clay:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Clay Fish",vectorTextureCreator:"LandonHarter"},commandite:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Commandite Fish"},netherrack:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Netherrack Fish",vectorTextureCreator:"LandonHarter"},purpur:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Purpur Fish",vectorTextureCreator:"LandonHarter"},wooden:{role:"Telling people when something technically isn't a mineral fish",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"PATSATDAT",textureCreator:"JackyBorderCollie",fullName:"Wooden Fish"},notfound:{realName:"Errorree",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Not Found Fish"},apple:{realName:"Watchee",role:"Test topics",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Apple Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{apple_gge:{creator:"-gge",name:"Alternate vector"},apple_evil:{creator:"LandonHarter",name:'Apple "Watchall" Fish'}}},bread:{role:"Unconstructive criticism",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"wkmewsic",textureCreator:"-gge",fullName:"Bread Fish",vectorTextureCreator:"LandonHarter"},ender:{realName:"Portee",role:"Topic moving",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Ender Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{ender_gge:{creator:"-gge",name:"Alternate vector"}}},phantommembrane:{realName:"Elitree",role:"Welcoming",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"-gge",fullName:"Phantom Membrane Fish",vectorTextureCreator:"LandonHarter"},cake:{realName:"Cakee",role:"Roleplaying in the forums",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Cake Fish",vectorTextureCreator:"CST1229"},water:{role:"Helping Lapis Fish with flame wars",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",vectorTextureCreator:"LandonHarter",fullName:"Water Fish"},lava:{role:"Turning Water Fish into stone",category:"unofficial",type:"mcitems",bitmap:!1,vector:!0,creator:"PATSATDAT",vectorTextureCreator:"LandonHarter",fullName:"Lava Fish"},fire:{role:"Causing flame wars",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"PATSATDAT",textureCreator:"JackyBorderCollie",fullName:"Fire Fish",vectorTextureCreator:"LandonHarter"},magmacream:{realName:"Magnee",role:"Topic merging",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Magma (Cream) Fish"},dragonegg:{realName:"Revoltuzeë",role:"False reporting",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"Unithlees3",textureCreator:"-gge",fullName:"Dragon Egg Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{dragonegg_evil:{creator:"LandonHarter",name:'Dragon Egg "Revoltuzal" Fish'}}},carrot:{category:"unofficial",role:"Multiple quoting",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Carrot Fish",vectorTextureCreator:"LandonHarter"},beetroot:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Beetroot Fish",vectorTextureCreator:"LandonHarter"},prismarinecrystal:{role:"Mass mentioning on the TBGs",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"TonyBrown148",textureCreator:"TonyBrown148 & -gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Prismarine Crystal Fish"},spyglass:{category:"unofficial",role:"Helps people in HwS",type:"mcitems",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Spyglass Fish"},sweetberry:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sweet Berry Fish",vectorTextureCreator:"LandonHarter"},firework:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Firework Fish",vectorTextureCreator:"LandonHarter"},chorus:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Chorus Fish",vectorTextureCreator:"LandonHarter"},prismarineshard:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Prismarine Shard Fish"},stick:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Stick Fish"},creeper:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Creeper Fish"},enderman:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Enderman Fish"},blorfstone:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Blorfstone Fish"},ig:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Ig Fish"},inzeozite:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Inzeozite Fish"},firefighter:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"-gge",vectorTextureCreator:"Marc92020",fullName:"Firefighter Fish"},grammarpolice:{role:"Grammar mistakes",category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Grammar Police Fish"},banana:{realName:"Banee/Bananee",role:"Bullies, evil Scratchers",category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"CST1229",vectorTextureCreator:"Marc92020",fullName:"Banana Fish",vectorAlts:{banana_gge:{creator:"-gge",name:"Alternate vector"},banana_landon:{creator:"LandonHarter",name:"Alternate vector"},banana_evil:{creator:"LandonHarter",name:"Evil version"}}},ghost:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"54321Tigg",textureCreator:"Marc92020",vectorTextureCreator:"JackyBorderCollie",fullName:"Ghost Fish"},applerald:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie's sister",textureCreator:"CST1229",fullName:"Applerald Fish"},micafish:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"CST1229",textureCreator:"CST1229",fullName:"Mica Fish Fish"},moonstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Moonstone Fish"},blueberry:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Blueberry Fish"},tree:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"Marc92020",textureCreator:"Marc92020",fullName:"Tree Fish"},fullon:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"LandonHarter",vectorTextureCreator:"JackyBorderCollie",fullName:"Full On Fish"},cloud:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Cloud Fish"},daylight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Daylight Fish"},moonlight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Moonlight Fish"},galactic:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"Unithlees3",vectorTextureCreator:"LandonHarter",fullName:"Galactic Fish"},holo:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Holo Fish"},kumquat:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat Fish"},kumquatking:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat King Fish"},tempest:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Tempest Fish",vectorTextureCreator:"LandonHarter"},ticket:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Ticket Fish",vectorTextureCreator:"LandonHarter"},alenn:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Alenn Fish"},swimmy:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Swimmy Fish"},brownie:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"LandonHarter (based off of -TWILILIGHTMISTY-'s vector)",fullName:"Brownie Fish"},rainbowstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"lapisi",textureCreator:"-gge",fullName:"Rainbowstone Fish",vectorTextureCreator:"LandonHarter"},potassium:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"Scratchbeginner5669",textureCreator:"Scratchbeginner5669",fullName:"Potassium Fish"},liberachat:{role:"Unmoderated chat",realName:"Nopee, Cordlee, Redlee, Twerlee, Mailee, Cloudlee",category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"CST1229",textureCreator:"CST1229",fullName:"Libera Chat Fish"},balloon:{category:"unofficial",realName:"Partyee",type:"misc",bitmap:!0,vector:!0,creator:"JackyBorderCollie's sister",textureCreator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Balloon Fish"},doodle:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Accidental-Doodle-on-Table Fish",vectorTextureCreator:"LandonHarter",vectorAlts:{doodle_alt:{creator:"LandonHarter",name:"Alternate vector"}}},greenapple:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Green Apple Fish",vectorTextureCreator:"LandonHarter"},sweetandsourcarrot:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Sweet and Sour Carrot Fish",vectorTextureCreator:"LandonHarter"},telegram:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Telegram Fish",vectorTextureCreator:"LandonHarter"},roket:{role:"Dealing with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"roketH77",vectorTextureCreator:"roketH77",fullName:"Roket Fish"},marc92020:{role:"Helping Roket Fish deal with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"Marc92020",vectorTextureCreator:"-gge",fullName:"Marc92020 Fish"},cyruscarrasco15263:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"CyrusCarrasco15263 Fish"},dog:{realName:"Jackyee",category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Jacky Fish"},gge:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"-gge Fish"},scratchcat:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Scratch Cat Fish"},unithlees3:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Unithlees3 Fish"},twilight:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"-TWILIGHTMISTY-",fullName:"Twilight Fish"},redgreenandblue:{category:"unofficial",type:"oc",bitmap:!0,vector:!1,creator:"redgreenandblue",textureCreator:"redgreenandblue",fullName:"redgreenandfish"},hollow:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Hollow Fish",smooth:!0},sevcon:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sevcon Fish",vectorTextureCreator:"LandonHarter"},lunartic:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Lunartic Fish",vectorTextureCreator:"LandonHarter"},orb:{realName:"Mutenee",role:"Conflict prevention",category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Orb Fish",vectorTextureCreator:"LandonHarter",alts:{orb_16x16:{creator:"JackyBorderCollie",name:"16x16 sprite"}},vectorAlts:{orb_evil:{creator:"LandonHarter",name:'Orb "Mutenall" Fish'}}},amogus:{realName:"Susee",role:"Sus things and impostor Mineral Fish",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Among Fish",alts:{among:{creator:"roketH77",name:"Old sprite",smooth:!0}}},nausicaa:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Nausicaä Fish"},babanana:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Babanana Fish"},bapple:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Bapple Fish"},babfire:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Babfire Fish"},hatsunemiku:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Hatsune Miku Fish"},appel:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Appel Fish",vectorTextureCreator:"CST1229"},camilo:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Camilo Fish"},infinitygauntlet:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Infinity Gauntlet Fish",smooth:!0},nofish:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"No-fish"},olivee:{realName:"Olivee",role:"Good, making and editing pages on the Scratch/MF Wiki",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"gilbert_given_TBG",textureCreator:"gilbert_given_TBG",fullName:"Origami Fish"},ollee:{realName:"Ollee",role:"Evil, making and editing pages on the Scratch/MF Wiki",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"gilbert_given_TBG",textureCreator:"gilbert_given_TBG",fullName:"Origami Fish"},cube:{realName:"Dashee",role:"Rating Geometry Dash levels",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"GD Cube Fish"},spike:{realName:"Crashee",role:"Making Geometry Dash levels harder",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"GD Spike Fish"},trophy:{role:"Reward for Mineral Fish Forums scavenger hunt",category:"unofficial",type:"special",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"CST1229",fullName:"Trophy Fish",alts:{trophy_horizontal:{creator:"CST1229",name:"Horizontal sprite"},trophy_small:{creator:"CST1229",name:"16x16 sprite"}}},air:{role:"Used in Mineral Fish pixel art",category:"technicallyofficial",type:"special",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"-gge",fullName:"Air Fish"}};function G(e){return M[e]||e}function J(e,r,t){const a=e.slice();a[4]=r[t];const o=_[a[4]];return a[5]=o,a}function $(e,r,t){const a=e.slice();a[8]=r[t];const o=a[5].vectorAlts[a[8]];a[9]=o;const c=a[9].name+", by "+a[9].creator;return a[10]=c,a}function W(e,r,t){const a=e.slice();a[8]=r[t];const o=a[5].alts[a[8]];a[9]=o;const c=a[9].name?a[9].creator?a[9].name+", by "+a[9].creator:a[9].name:a[9].creator?"by "+a[9].creator:"";return a[10]=c,a}function P(r){let t;return{c(){t=f("i"),t.textContent="N/A"},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function O(e){let r,t,a;return{c(){r=f("div"),t=f("img"),h(t,"class","fish-image fish-bitmap"),n(t.src,a="/assets/fish/"+e[4]+".png")||h(t,"src",a),h(t,"alt",e[5].fullName),d(t,"pixelated",!e[5].smooth),h(r,"class","fish-bitmap-container")},m(e,a){u(e,r,a),m(r,t)},p(e,r){1&r&&d(t,"pixelated",!e[5].smooth)},d(e){e&&s(r)}}}function Y(e){let r,t,a,o;return{c(){r=f("img"),a=y(),o=f("br"),h(r,"class","fish-image fish-bitmap fish-alt"),n(r.src,t="/assets/fish/"+e[8]+".png")||h(r,"src",t),h(r,"alt",e[10]),h(r,"title",e[10]),d(r,"pixelated",!e[9].smooth)},m(e,t){u(e,r,t),u(e,a,t),u(e,o,t)},p(e,t){1&t&&d(r,"pixelated",!e[9].smooth)},d(e){e&&s(r),e&&s(a),e&&s(o)}}}function D(r){let t;return{c(){t=f("i"),t.textContent="N/A"},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function E(r){let t,a;return{c(){t=f("img"),h(t,"class","fish-image fish-vector"),h(t,"width","48"),h(t,"height","auto"),n(t.src,a="/assets/fish/vector/"+r[4]+".svg")||h(t,"src",a),h(t,"alt",r[5].fullName+" vector")},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function R(r){let t,a,o,c;return{c(){t=f("img"),o=y(),c=f("br"),h(t,"class","fish-image fish-vector fish-alt"),h(t,"width","48"),h(t,"height","auto"),n(t.src,a="/assets/fish/vector/"+r[8]+".svg")||h(t,"src",a),h(t,"alt",r[10]),h(t,"title",r[10])},m(e,r){u(e,t,r),u(e,o,r),u(e,c,r)},p:e,d(e){e&&s(t),e&&s(o),e&&s(c)}}}function j(r){let t;return{c(){t=p("Unknown")},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function z(r){let t,a=r[5].realName+"";return{c(){t=p(a)},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function q(r){let t;return{c(){t=p("Unknown")},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function U(r){let t,a=r[5].role+"";return{c(){t=p(a)},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function Q(r){let t;return{c(){t=p("Unknown")},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function K(r){let t,a=r[5].creator+"";return{c(){t=p(a)},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function V(r){let t;return{c(){t=f("i"),t.textContent="N/A"},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function X(r){let t,a=r[5].textureCreator+"";return{c(){t=p(a)},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function Z(r){let t;return{c(){t=f("i"),t.textContent="N/A"},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function ee(r){let t,a=r[5].vectorTextureCreator+"";return{c(){t=p(a)},m(e,r){u(e,t,r)},p:e,d(e){e&&s(t)}}}function re(e){let r,t,a,o,c,i,l,n,h,d,v,C,b,x,N,T,F,k,H,L,A,B,S,w,I,M,_=e[5].fullName+"",J=G(e[5].category)+"",re=G(e[5].type)+"";let te=function(e,r){return e[5].bitmap?O:P}(e),ae=te(e),oe=e[5].alts&&function(e){let r,t,a,o=Object.keys(e[5].alts),c=[];for(let r=0;r<o.length;r+=1)c[r]=Y(W(e,o,r));return{c(){r=f("details"),t=f("summary"),t.textContent="Alts",a=y();for(let e=0;e<c.length;e+=1)c[e].c()},m(e,o){u(e,r,o),m(r,t),m(r,a);for(let e=0;e<c.length;e+=1)c[e].m(r,null)},p(e,t){if(1&t){let a;for(o=Object.keys(e[5].alts),a=0;a<o.length;a+=1){const i=W(e,o,a);c[a]?c[a].p(i,t):(c[a]=Y(i),c[a].c(),c[a].m(r,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=o.length}},d(e){e&&s(r),g(c,e)}}}(e);let ce=function(e,r){return e[5].vector?E:D}(e),ie=ce(e),le=e[5].vectorAlts&&function(e){let r,t,a,o=Object.keys(e[5].vectorAlts),c=[];for(let r=0;r<o.length;r+=1)c[r]=R($(e,o,r));return{c(){r=f("details"),t=f("summary"),t.textContent="Alts",a=y();for(let e=0;e<c.length;e+=1)c[e].c()},m(e,o){u(e,r,o),m(r,t),m(r,a);for(let e=0;e<c.length;e+=1)c[e].m(r,null)},p(e,t){if(1&t){let a;for(o=Object.keys(e[5].vectorAlts),a=0;a<o.length;a+=1){const i=$(e,o,a);c[a]?c[a].p(i,t):(c[a]=R(i),c[a].c(),c[a].m(r,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=o.length}},d(e){e&&s(r),g(c,e)}}}(e);let ne=function(e,r){return e[5].realName?z:j}(e),me=ne(e);let ue=function(e,r){return e[5].role?U:q}(e),se=ue(e);let ge=function(e,r){return void 0!==e[5].creator?K:Q}(e),fe=ge(e);let pe=function(e,r){return e[5].textureCreator?X:V}(e),ye=pe(e);let he=function(e,r){return e[5].vectorTextureCreator?ee:Z}(e),de=he(e);return{c(){r=f("tr"),t=f("td"),a=p(_),o=y(),c=f("td"),ae.c(),i=y(),oe&&oe.c(),l=y(),n=f("td"),ie.c(),h=y(),le&&le.c(),d=y(),v=f("td"),me.c(),C=y(),b=f("td"),se.c(),x=y(),N=f("td"),T=p(J),F=y(),k=f("td"),H=p(re),L=y(),A=f("td"),fe.c(),B=y(),S=f("td"),ye.c(),w=y(),I=f("td"),de.c(),M=y()},m(e,s){u(e,r,s),m(r,t),m(t,a),m(r,o),m(r,c),ae.m(c,null),m(c,i),oe&&oe.m(c,null),m(r,l),m(r,n),ie.m(n,null),m(n,h),le&&le.m(n,null),m(r,d),m(r,v),me.m(v,null),m(r,C),m(r,b),se.m(b,null),m(r,x),m(r,N),m(N,T),m(r,F),m(r,k),m(k,H),m(r,L),m(r,A),fe.m(A,null),m(r,B),m(r,S),ye.m(S,null),m(r,w),m(r,I),de.m(I,null),m(r,M)},p(e,r){ae.p(e,r),e[5].alts&&oe.p(e,r),ie.p(e,r),e[5].vectorAlts&&le.p(e,r),me.p(e,r),se.p(e,r),fe.p(e,r),ye.p(e,r),de.p(e,r)},d(e){e&&s(r),ae.d(),oe&&oe.d(),ie.d(),le&&le.d(),me.d(),se.d(),fe.d(),ye.d(),de.d()}}}function te(r){let t,a,o,c,i,l,n,h,d,v,C,b,x,N,T,F,k,H,L,A,B,S,w,I,M,$,W,P,O,Y,D,E,R=Object.keys(_),j=[];for(let e=0;e<R.length;e+=1)j[e]=re(J(r,R,e));return{c(){t=f("main"),a=f("h1"),a.textContent="2022 Mifernian Census",o=p("\n\tVersion "),c=p(r[2]),i=f("br"),l=p("\n\t(name idea by LandonHarter)"),n=f("br"),h=f("br"),d=y(),v=f("table"),C=f("thead"),b=f("tr"),x=f("th"),x.textContent=`${G("fullName")}`,N=y(),T=f("th"),T.textContent=`${G("bitmap")}`,F=y(),k=f("th"),k.textContent=`${G("vector")}`,H=y(),L=f("th"),L.textContent=`${G("realName")}`,A=y(),B=f("th"),B.textContent=`${G("role")}`,S=y(),w=f("th"),w.textContent=`${G("category")}`,I=y(),M=f("th"),M.textContent=`${G("type")}`,$=y(),W=f("th"),W.textContent=`${G("creator")}`,P=y(),O=f("th"),O.textContent=`${G("textureCreator")}`,Y=y(),D=f("th"),D.textContent=`${G("vectorTextureCreator")}`,E=y();for(let e=0;e<j.length;e+=1)j[e].c()},m(e,r){u(e,t,r),m(t,a),m(t,o),m(t,c),m(t,i),m(t,l),m(t,n),m(t,h),m(t,d),m(t,v),m(v,C),m(C,b),m(b,x),m(b,N),m(b,T),m(b,F),m(b,k),m(b,H),m(b,L),m(b,A),m(b,B),m(b,S),m(b,w),m(b,I),m(b,M),m(b,$),m(b,W),m(b,P),m(b,O),m(b,Y),m(b,D),m(v,E);for(let e=0;e<j.length;e+=1)j[e].m(v,null)},p(e,[r]){if(4&r&&function(e,r){r=""+r,e.wholeText!==r&&(e.data=r)}(c,e[2]),3&r){let t;for(R=Object.keys(_),t=0;t<R.length;t+=1){const a=J(e,R,t);j[t]?j[t].p(a,r):(j[t]=re(a),j[t].c(),j[t].m(v,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=R.length}},i:e,o:e,d(e){e&&s(t),g(j,e)}}}function ae(e,r,t){let{version:a}=r;return e.$$set=e=>{"version"in e&&t(2,a=e.version)},[_,G,a,M]}return new class extends class{$destroy(){!function(e,r){const t=e.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(r),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=e}$on(e,r){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(r),()=>{const e=t.indexOf(r);-1!==e&&t.splice(e,1)}}$set(e){var r;this.$$set&&(r=e,0!==Object.keys(r).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),I(this,e,ae,te,c,{fishList:0,strings:3,getString:1,version:2})}get fishList(){return _}get strings(){return M}get getString(){return G}}({target:document.body,props:{version:"1.3.3"}})}();
//# sourceMappingURL=bundle.js.map
