var app=function(){"use strict";function e(){}function t(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,l;function n(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function m(e,t){e.appendChild(t)}function u(e,t,r){e.insertBefore(t,r||null)}function s(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function g(e){return document.createTextNode(e)}function p(){return g(" ")}function y(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function h(e,t,r){e.classList[r?"add":"remove"](t)}function C(e){l=e}const d=[],b=[],v=[],N=[],x=Promise.resolve();let T=!1;function F(e){v.push(e)}const k=new Set;let H=0;function S(){const e=l;do{for(;H<d.length;){const e=d[H];H++,C(e),L(e.$$)}for(C(null),d.length=0,H=0;b.length;)b.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];k.has(t)||(k.add(t),t())}v.length=0}while(d.length);for(;N.length;)N.pop()();T=!1,k.clear(),C(e)}function L(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const I=new Set;function w(e,t){-1===e.$$.dirty[0]&&(d.push(e),T||(T=!0,x.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(i,c,n,m,u,f,g,p=[-1]){const y=l;C(i);const h=i.$$={fragment:null,ctx:null,props:f,update:e,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(y?y.$$.context:[])),callbacks:r(),dirty:p,skip_bound:!1,root:c.target||y.$$.root};g&&g(h.root);let d=!1;if(h.ctx=n?n(i,c.props||{},((e,t,...r)=>{const a=r.length?r[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),d&&w(i,e)),t})):[],h.update(),d=!0,a(h.before_update),h.fragment=!!m&&m(h.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);h.fragment&&h.fragment.l(e),e.forEach(s)}else h.fragment&&h.fragment.c();c.intro&&((b=i.$$.fragment)&&b.i&&(I.delete(b),b.i(v))),function(e,r,i,c){const{fragment:l,on_mount:n,on_destroy:m,after_update:u}=e.$$;l&&l.m(r,i),c||F((()=>{const r=n.map(t).filter(o);m?m.push(...r):a(r),e.$$.on_mount=[]})),u.forEach(F)}(i,c.target,c.anchor,c.customElement),S()}var b,v;C(y)}const B={official:"Official fish",technicallyofficial:"Technically official fish",semiofficial:"Semi-official fish",unofficial:"Unofficial fish",mineral:"Minerals",mcitems:"Minecraft items",mcblocks:"Minecraft blocks",mcmobs:"Minecraft mobs",mcrandom:"Minecraft randomized ores",oc:"OC fish",misc:"Miscellaneous",crossover:"Fish from other franchises",fullName:"Name",category:"Category",type:"Type",bitmap:"Bitmap sprite",vector:"Vector sprite",creator:"Creator",textureCreator:"Bitmap creator",vectorTextureCreator:"Vector creator",realName:"Real name",role:"Role"},$={copper:{realName:"Tickee",role:"Miscellaneous annoyances",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Copper Fish"},emerald:{realName:"Plagee",role:"Advertising",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Emerald Fish"},lapis:{realName:"Iragee",role:"Flame wars",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Lapis Fish"},redstone:{realName:"Cussee",role:"Community Guidelines / FaQ / ToS",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Redstone Fish"},quartz:{realName:"Bumpee, Jumpee, Stretchee, Bonkee, Clonkee",role:"Subject derailment",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Quartz Fish"},iron:{realName:"Ingo, Blawbo & Crumbo",role:"Topic bumping",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Fish"},coal:{realName:"Brunee",role:"Topic closing/opening",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Coal Fish"},diamond:{realName:"Cubzia",role:"Topic subject offenses",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Diamond Fish"},golden:{realName:"Tailee",role:"Quote chains",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Golden Fish"},netherite:{realName:"Tengreyee",role:"Spamming",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Netherite Fish"},ancientdebris:{realName:"Tengree",role:"Necroposting",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Ancient Debris Fish"},amethyst:{realName:"Notiee",role:"Topic pinning",category:"official",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Amethyst Fish"},ironnugget:{realName:"Thunkee",role:"Rapid bumping/bopping",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Iron Nugget Fish"},goldnugget:{realName:"Bunkee",role:"False quoting",category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",fullName:"Gold Nugget Fish"},ironingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Iron Ingot Fish"},goldingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Gold Ingot Fish"},copperingot:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Copper Ingot Fish"},deepslate:{realName:"Grimee",role:"Supports or No supports suggestions (depends on how useful)",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Deepslate Fish"},newcopper:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"New Copper Fish"},newercopper:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Copper Fish"},newiron:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"New Iron Fish"},neweriron:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Iron Fish"},newergolden:{category:"technicallyofficial",type:"mineral",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Newer Golden Fish"},glass:{realName:"Glasee",category:"technicallyofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Glass Fish"},bow:{realName:"Aimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Bow Fish"},arrow:{realName:"Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Arrow Fish"},bowandarrow:{realName:"Aimee & Arrowee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Bow & Arrow Fish"},bucket:{realName:"Fillee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"LandonHarter",fullName:"Bucket Fish"},egg:{realName:"Yolkee",role:"Answers questions in QaS",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Egg Fish"},melon:{realName:"Melonee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Melon Fish"},mutton:{realName:"Ramee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Mutton Fish"},cookedmutton:{realName:"Ramsee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cooked Mutton Fish"},paper:{realName:"Artee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"-gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Paper Fish"},potato:{realName:"Spudee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Potato Fish"},slimeball:{realName:"Slimee",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Slimeball Fish"},chargedcreeper:{category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Charged Creeper Fish"},chicken:{realName:"Bawkee",role:"Proposing articles to be featured",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Chicken Fish"},wheat:{realName:"Grainee",role:"Double quoting",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Wheat Fish"},cookie:{realName:"Pastree",category:"technicallyofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cookie Fish"},prismarineshard:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Prismarine Shart Fish"},pig:{realName:"Oinkee",role:"Shops",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Pig Fish"},cow:{realName:"Bullee",role:"Scratch Wiki helper",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Cow Fish"},mooshroom:{realName:"Mooshee",role:"Proposing studios to be featured",category:"technicallyofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Mooshroom Fish"},air:{role:"Used in Mineral Fish pixel art",category:"technicallyofficial",type:"misc",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Air Fish"},flint:{realName:"Redundee",role:"Duplicate topics",category:"semiofficial",type:"mineral",bitmap:!0,vector:!0,creator:"Pianostar4",textureCreator:"-gge",fullName:"Flint Fish"},copper30:{category:"unofficial",type:"mineral",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Copper Fish 3.0"},ruby:{category:"unofficial",type:"mineral",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"LandonHarter",fullName:"Ruby Fish"},stone:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Stone Fish",vectorTextureCreator:"CST1229"},stone_old:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Stone Fish (Old sprite)",vectorTextureCreator:"CST1229"},stone_landon:{realName:"Soldee",role:"Rejected suggestions",category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"CST1229",fullName:"Stone Fish (LandonHarter's vector)"},jackolantern:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Jack-O-Lantern Fish"},magma:{realName:"Mayami",role:"Deleting stuff",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"CST1229",fullName:"Magma (Block) Fish",vectorTextureCreator:"-TWILIGHTMISTY-"},beacon:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Beacon Fish"},chest:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-Quantum_Studios-",fullName:"Chest Fish"},endrod:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"End Rod Fish"},glowstone:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Glowstone Fish"},obsidian:{realName:"Portalee",role:"Large images",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Obsidian Fish"},skulk:{realName:"Bypee",role:"Filter bypassing",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"irish-tea",textureCreator:"irish-tea",fullName:"Skulk Fish"},wool:{realName:"Woolee",role:"Manually inserted signatures",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Wool Fish"},clay:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Clay Fish"},commandite:{category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Commandite Fish"},netherrack:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Netherrack Fish"},purpur:{category:"unofficial",type:"mcblocks",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Purpur Fish"},wooden:{role:"Telling people when something technically isn't a mineral fish",category:"unofficial",type:"mcblocks",bitmap:!0,vector:!1,creator:"PATSATDAT",textureCreator:"PATSATDAT",fullName:"Wooden Fish",smooth:!0},apple:{realName:"Watchee",role:"Test topics",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Apple Fish"},bread:{role:"Unconstructive criticism",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"wkmewsic",textureCreator:"-gge",fullName:"Bread Fish"},ender:{realName:"Portee",role:"Topic moving",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Ender Fish"},phantommembrane:{realName:"Elitree",role:"Welcoming",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"-gge",fullName:"Phantom Membrane Fish"},cake:{realName:"Cakee",role:"Roleplaying in the forums",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Cake Fish",vectorTextureCreator:"CST1229"},water:{role:"Helping Lapis Fish with flame wars",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",vectorTextureCreator:"LandonHarter",fullName:"Water Fish"},lava:{role:"Turning Water Fish into stone",category:"unofficial",type:"mcitems",bitmap:!1,vector:!0,creator:"PATSATDAT",vectorTextureCreator:"LandonHarter",fullName:"Lava Fish"},fire:{role:"Causing flame wars",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"PATSATDAT",textureCreator:"JackyBorderCollie",fullName:"Fire Fish"},magmacream:{realName:"Magnee",role:"Topic merging",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Magma (Cream) Fish"},dragonegg:{realName:"Revoltuzeë",role:"False reporting",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"Unithlees3",textureCreator:"-gge",fullName:"Dragon Egg Fish"},carrot:{category:"unofficial",role:"Multiple quoting",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Carrot Fish"},beetroot:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Beetroot Fish"},prismarinecrystal:{role:"Mass mentioning on the TBGs",category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"TonyBrown148",textureCreator:"TonyBrown148 & -gge",vectorTextureCreator:"JackyBorderCollie",fullName:"Prismarine Crystal Fish"},spyglass:{category:"unofficial",role:"Helps people in HwS",type:"mcitems",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Spyglass Fish"},sweetberry:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sweet Berry Fish"},firework:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Firework Fish"},chorus:{category:"unofficial",type:"mcitems",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Chorus Fish"},creeper:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Creeper Fish"},enderman:{category:"unofficial",type:"mcmobs",bitmap:!0,vector:!1,creator:"TheGlassPenguin",textureCreator:"TheGlassPenguin",fullName:"Enderman Fish"},blorfstone:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Blorfstone Fish"},ig:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Ig Fish"},inzeozite:{category:"unofficial",type:"mcrandom",bitmap:!0,vector:!1,creator:"lapisi",textureCreator:"lapisi",fullName:"Inzeozite Fish"},firefighter:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"-gge",vectorTextureCreator:"Marc92020",fullName:"Firefighter Fish"},grammarpolice:{role:"Grammar mistakes",category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Grammar Police Fish"},banana:{realName:"Banee/Bananee",role:"Bullies, evil Scratchers",category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"Marc92020",textureCreator:"CST1229",vectorTextureCreator:"Marc92020",fullName:"Banana Fish"},ghost:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"54321Tigg",textureCreator:"Marc92020",vectorTextureCreator:"JackyBorderCollie",fullName:"Ghost Fish"},applerald:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie's sister",textureCreator:"CST1229",fullName:"Applerald Fish"},micafish:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"CST1229",textureCreator:"CST1229",fullName:"Mica Fish Fish"},moonstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Moonstone Fish"},blueberry:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",fullName:"Blueberry Fish"},tree:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"Marc92020",textureCreator:"Marc92020",fullName:"Tree Fish"},fullon:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"LandonHarter",vectorTextureCreator:"JackyBorderCollie",fullName:"Full On Fish"},cloud:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Cloud Fish"},daylight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Daylight Fish"},moonlight:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Moonlight Fish"},galactic:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"Unithlees3",vectorTextureCreator:"LandonHarter",fullName:"Galactic Fish"},holo:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Holo Fish"},kumquat:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat Fish"},kumquatking:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",vectorTextureCreator:"LandonHarter",fullName:"Kumquat King Fish"},tempest:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Tempest Fish"},ticket:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"LandonHarter",fullName:"Ticket Fish"},alenn:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Alenn Fish"},swimmy:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"JackyBorderCollie",textureCreator:"JackyBorderCollie",vectorTextureCreator:"JackyBorderCollie",fullName:"Swimmy Fish"},brownie:{category:"unofficial",type:"misc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"LandonHarter (based off of -TWILILIGHTMISTY-'s vector)",fullName:"Brownie Fish"},rainbowstone:{category:"unofficial",type:"misc",bitmap:!0,vector:!0,creator:"lapisi",textureCreator:"lapisi",fullName:"Rainbowstone Fish"},potassium:{category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"Scratchbeginner5669",textureCreator:"Scratchbeginner5669",fullName:"Potassium Fish"},liberachat:{role:"Unmoderated chat",realName:"Nopee, Cordlee, Redlee, Twerlee, Mailee, Cloudlee",category:"unofficial",type:"misc",bitmap:!0,vector:!1,creator:"CST1229",textureCreator:"CST1229",fullName:"Libera Chat Fish"},balloon:{category:"unofficial",realName:"Partyee",type:"misc",bitmap:!0,vector:!1,creator:"JackyBorderCollie's sister",textureCreator:"JackyBorderCollie",fullName:"Balloon Fish"},roket:{role:"Dealing with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"roketH77",textureCreator:"roketH77",vectorTextureCreator:"roketH77",fullName:"(>Roket Fish"},marc92020:{role:"Helping Roket Fish deal with Mineral Fish haters",category:"unofficial",type:"oc",bitmap:!0,vector:!0,creator:"-gge",textureCreator:"Marc92020",vectorTextureCreator:"-gge",fullName:"Marc92020 Fish"},cyruscarrasco15263:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"CyrusCarrasco15263 Fish"},dog:{realName:"Jackyee",category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Jacky Fish"},gge:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"-gge Fish"},scratchcat:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Scratch Cat Fish"},unithlees3:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-gge",vectorTextureCreator:"-gge",fullName:"Unithlees3 Fish"},twilight:{category:"unofficial",type:"oc",bitmap:!1,vector:!0,creator:"-TWILIGHTMISTY-",vectorTextureCreator:"-TWILIGHTMISTY-",fullName:"Twilight Fish"},redgreenandblue:{category:"unofficial",type:"oc",bitmap:!0,vector:!1,creator:"redgreenandblue",textureCreator:"redgreenandblue",fullName:"redgreenandfish"},hollow:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"-gge",textureCreator:"-gge",fullName:"Hollow Fish",smooth:!0},sevcon:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Sevcon Fish"},lunartic:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"-gge",fullName:"Lunartic Fish"},orb:{realName:"Mutenee",role:"Conflict prevention",category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Orb Fish"},orb_16x16:{realName:"Mutenee",role:"Conflict prevention",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"JackyBorderCollie",fullName:"Orb Fish (16x16 sprite)"},amogus:{realName:"Susee",role:"Sus things and impostor Mineral Fish",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Among Fish"},among:{realName:"Susee",role:"Sus things and impostor Mineral Fish",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Among Fish (Old sprite)"},nausicaa:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"-TWILIGHTMISTY-",textureCreator:"-gge",fullName:"Nausicaä Fish"},babanana:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Babanana Fish"},bapple:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"LandonHarter",textureCreator:"LandonHarter",fullName:"Bapple Fish"},hatsunemiku:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Hatsune Miku Fish"},appel:{category:"unofficial",type:"crossover",bitmap:!0,vector:!0,creator:"CST1229",textureCreator:"CST1229",fullName:"Appel Fish",vectorTextureCreator:"CST1229"},camilo:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"Camilo Fish"},infinitygauntlet:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"-TWILIGHTMISTY-",textureCreator:"-TWILIGHTMISTY-",fullName:"Infinity Gauntlet Fish"},nofish:{category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"roketH77",textureCreator:"roketH77",fullName:"No-fish"},olivee:{realName:"Olivee",role:"Good, making and editing pages on the Scratch/MF Wiki",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"gilbert_given_TBG",textureCreator:"gilbert_given_TBG",fullName:"Origami Fish"},ollee:{realName:"Ollee",role:"Evil, making and editing pages on the Scratch/MF Wiki",category:"unofficial",type:"crossover",bitmap:!0,vector:!1,creator:"gilbert_given_TBG",textureCreator:"gilbert_given_TBG",fullName:"Origami Fish"}};function G(e){return B[e]||e}function A(e,t,r){const a=e.slice();return a[4]=t[r],a}function J(t){let r;return{c(){r=f("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function W(e){let t,r;return{c(){t=f("img"),y(t,"class","fish-bitmap"),n(t.src,r="/assets/fish/"+e[4]+".png")||y(t,"src",r),y(t,"alt",$[e[4]].fullName),h(t,"pixelated",!$[e[4]].smooth)},m(e,r){u(e,t,r)},p(e,r){1&r&&h(t,"pixelated",!$[e[4]].smooth)},d(e){e&&s(t)}}}function _(t){let r;return{c(){r=f("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function P(t){let r,a;return{c(){r=f("img"),y(r,"class","fish-vector"),y(r,"width","48"),y(r,"height","auto"),n(r.src,a="/assets/fish/vector/"+t[4]+".svg")||y(r,"src",a),y(r,"alt",$[t[4]].fullName+" vector")},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function Y(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function O(t){let r,a=$[t[4]].realName+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function R(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function E(t){let r,a=$[t[4]].role+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function D(t){let r;return{c(){r=g("Unknown")},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function j(t){let r,a=$[t[4]].creator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function q(t){let r;return{c(){r=f("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function U(t){let r,a=$[t[4]].textureCreator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function z(t){let r;return{c(){r=f("i"),r.textContent="N/A"},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function Q(t){let r;return{c(){r=g("LandonHarter")},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function K(t){let r,a=$[t[4]].vectorTextureCreator+"";return{c(){r=g(a)},m(e,t){u(e,r,t)},p:e,d(e){e&&s(r)}}}function V(e){let t,r,a,o,i,c,l,n,y,h,C,d,b,v,N,x,T,F,k,H,S,L,I,w,M=$[e[4]].fullName+"",B=G($[e[4]].category)+"",A=G($[e[4]].type)+"";let V=function(e,t){return $[e[4]].bitmap?W:J}(e),X=V(e);let Z=function(e,t){return $[e[4]].vector?P:_}(e),ee=Z(e);let te=function(e,t){return $[e[4]].realName?O:Y}(e),re=te(e);let ae=function(e,t){return $[e[4]].role?E:R}(e),oe=ae(e);let ie=function(e,t){return void 0!==$[e[4]].creator?j:D}(e),ce=ie(e);let le=function(e,t){return $[e[4]].textureCreator?U:q}(e),ne=le(e);let me=function(e,t){return $[e[4]].vectorTextureCreator?K:$[e[4]].vector?Q:z}(e),ue=me(e);return{c(){t=f("tr"),r=f("td"),a=g(M),o=p(),i=f("td"),X.c(),c=p(),l=f("td"),ee.c(),n=p(),y=f("td"),re.c(),h=p(),C=f("td"),oe.c(),d=p(),b=f("td"),v=g(B),N=p(),x=f("td"),T=g(A),F=p(),k=f("td"),ce.c(),H=p(),S=f("td"),ne.c(),L=p(),I=f("td"),ue.c(),w=p()},m(e,s){u(e,t,s),m(t,r),m(r,a),m(t,o),m(t,i),X.m(i,null),m(t,c),m(t,l),ee.m(l,null),m(t,n),m(t,y),re.m(y,null),m(t,h),m(t,C),oe.m(C,null),m(t,d),m(t,b),m(b,v),m(t,N),m(t,x),m(x,T),m(t,F),m(t,k),ce.m(k,null),m(t,H),m(t,S),ne.m(S,null),m(t,L),m(t,I),ue.m(I,null),m(t,w)},p(e,t){X.p(e,t),ee.p(e,t),re.p(e,t),oe.p(e,t),ce.p(e,t),ne.p(e,t),ue.p(e,t)},d(e){e&&s(t),X.d(),ee.d(),re.d(),oe.d(),ce.d(),ne.d(),ue.d()}}}function X(t){let r,a,o,i,c,l,n,y,h,C,d,b,v,N,x,T,F,k,H,S,L,I,w,M,B,J,W,_,P,Y,O,R,E=Object.keys($),D=[];for(let e=0;e<E.length;e+=1)D[e]=V(A(t,E,e));return{c(){r=f("main"),a=f("h1"),a.textContent="2022 Mifernian Census",o=g("\n\tVersion "),i=g(t[2]),c=f("br"),l=g("\n\t(name idea by LandonHarter)"),n=f("br"),y=f("br"),h=p(),C=f("table"),d=f("thead"),b=f("tr"),v=f("th"),v.textContent=`${G("fullName")}`,N=p(),x=f("th"),x.textContent=`${G("bitmap")}`,T=p(),F=f("th"),F.textContent=`${G("vector")}`,k=p(),H=f("th"),H.textContent=`${G("realName")}`,S=p(),L=f("th"),L.textContent=`${G("role")}`,I=p(),w=f("th"),w.textContent=`${G("category")}`,M=p(),B=f("th"),B.textContent=`${G("type")}`,J=p(),W=f("th"),W.textContent=`${G("creator")}`,_=p(),P=f("th"),P.textContent=`${G("textureCreator")}`,Y=p(),O=f("th"),O.textContent=`${G("vectorTextureCreator")}`,R=p();for(let e=0;e<D.length;e+=1)D[e].c()},m(e,t){u(e,r,t),m(r,a),m(r,o),m(r,i),m(r,c),m(r,l),m(r,n),m(r,y),m(r,h),m(r,C),m(C,d),m(d,b),m(b,v),m(b,N),m(b,x),m(b,T),m(b,F),m(b,k),m(b,H),m(b,S),m(b,L),m(b,I),m(b,w),m(b,M),m(b,B),m(b,J),m(b,W),m(b,_),m(b,P),m(b,Y),m(b,O),m(C,R);for(let e=0;e<D.length;e+=1)D[e].m(C,null)},p(e,[t]){if(4&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(i,e[2]),3&t){let r;for(E=Object.keys($),r=0;r<E.length;r+=1){const a=A(e,E,r);D[r]?D[r].p(a,t):(D[r]=V(a),D[r].c(),D[r].m(C,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=E.length}},i:e,o:e,d(e){e&&s(r),function(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}(D,e)}}}function Z(e,t,r){let{version:a}=t;return e.$$set=e=>{"version"in e&&r(2,a=e.version)},[$,G,a,B]}return new class extends class{$destroy(){!function(e,t){const r=e.$$;null!==r.fragment&&(a(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),M(this,e,Z,X,i,{fishList:0,strings:3,getString:1,version:2})}get fishList(){return $}get strings(){return B}get getString(){return G}}({target:document.body,props:{version:"1.1.1"}})}();
//# sourceMappingURL=bundle.js.map