(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();const w="Charizard",k="リザードン",b="Lizardon",x="0006",y="https://www.wikidex.net/wiki/Alcremie",A=150,h={forma:{normal:{datos:"charizard_normal",imagen:["https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210524165035/Charizard_HOME.png","https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160817212623/Charizard.png"],variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20210524164951/Charizard_HOME_variocolor.png"},megaX:{datos:"charizard_megaX",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20210524164940/Mega-Charizard_X_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164741/Mega-Charizard_X_HOME_variocolor.png"},megaY:{datos:"charizard_megaY",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20210524164716/Mega-Charizard_Y_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/b/bb/latest/20210524164852/Mega-Charizard_Y_HOME_variocolor.png"},giga:{datos:"charizard_giga",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20200214184340/Charizard_Gigamax_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20200214193200/Charizard_Gigamax_HOME_variocolor.png"}},info:{charizard_normal:{tipo:["Fuego",{valor:"Volador",nota:"A"}],altura:["1'7",{valor:"4'8",nota:"B"}],peso:["90'5",{valor:"87'2",nota:"A"}],habilidad:[{nombre:"Mar llamas"},{nombre:"Poder solar",oculta:!0},{nombre:{valor:"Llamas ocultas",nota:"B"},oculta:!0}],sexo:{macho:{valor:"87.5",nota:"B"},hembra:{valor:"87.2",nota:"A"}},generacion:{valor:"1",nota:"D"},categoria:["Llama",{valor:"Fogonazo",nota:"A"}],figura:["3",{valor:"1",nota:"D"}],huevo:[{valor:"Monstruo",nota:"C"},"Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20240213073305/Grito_de_Charizard.ogg",color:["Rojo",{valor:"Negro",nota:"B"}],pronunciacion:[{fonetica:{valor:"/ 'cha.ri.zard /",nota:"E"},zona:["España",{valor:"Hispanoamérica",nota:["A","B"]}]},{fonetica:"/ 'char.i.zard /",zona:"Hispanoamérica"}]},charizard_megaX:{tipo:["Fuego","Dragón"],altura:"1'7",peso:"110'5",habilidad:[{nombre:{valor:"Garra dura",nota:"F"},zona:"España"},{nombre:"Garras durs",zona:"Hispanoamérica"}],sexo:{macho:"87.5",hembra:"12.5"},generacion:"6",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/2/2e/latest/20140217185652/Grito_de_Mega-Charizard_X.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"/ 'cha.ri.zard /"}]},charizard_megaY:{tipo:["Fuego","Volador"],altura:"1'7",peso:"100'5",habilidad:[{nombre:"Sequía"}],sexo:{macho:"87.5",hembra:"12.5"},generacion:"6",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"/ 'cha.ri.zard /"}]},charizard_giga:{tipo:["Fuego","Volador"],altura:"1'7",habilidad:[{nombre:"Sequía"}],sexo:{macho:"87.5",hembra:"12.5"},generacion:"8",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"/'cha.ri.zard/"}]}},nota:{A:"A partir de X generación",B:"Solo en X versión",C:"Antes era <a href='https://www.google.com/es'>Monstruoso</a>",D:"Aunque oficialmente sea la primera, no salió hasta la <a href='https://www.google.com/es'>segunda</a>",E:"Pronunciación alternativa",F:"Prueba de notas"}},l={tipo:{Acero:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20221208180543/Tipo_acero_EP.png",Agua:"https://images.wikidexcdn.net/mwuploads/wikidex/5/59/latest/20221208180426/Tipo_agua_EP.png",Bicho:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20221208180434/Tipo_bicho_EP.png",Dragón:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png",Eléctrico:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png",Fantasma:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20221208180503/Tipo_fantasma_EP.png",Fuego:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20221208180625/Tipo_fuego_EP.png",Hada:"https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20221208180633/Tipo_hada_EP.png",Hielo:"https://images.wikidexcdn.net/mwuploads/wikidex/1/17/latest/20221208180641/Tipo_hielo_EP.png",Lucha:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20221208180651/Tipo_lucha_EP.png",Normal:"https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20221208180705/Tipo_normal_EP.png",Planta:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20221208180710/Tipo_planta_EP.png",Psíquico:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png",Roca:"https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20221208180726/Tipo_roca_EP.png",Siniestro:"https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20221208180734/Tipo_siniestro_EP.png",Tierra:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20221208180742/Tipo_tierra_EP.png",Veneno:"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20221208180751/Tipo_veneno_EP.png",Volador:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20221208180800/Tipo_volador_EP.png",Astral:"https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20231216092909/Tipo_astral_EP.png"},color:{Acero:"#cccccc",Agua:"#b0e2ff",Bicho:"#99cc33",Dragón:"#ab82ff",Eléctrico:"#ffd700",Fantasma:"#778899",Fuego:"#ff7f00",Hada:"#ffb0ff",Hielo:"#add8e6",Lucha:"#ff6a6a",Normal:"#ddccaa",Planta:"#99ff66",Psíquico:"#ffb5c5",Roca:"#cd853f",Siniestro:"#a9a9a9",Tierra:"#deb887",Veneno:"#cc88bb",Volador:"#baaaff",Astral:"#f1f7fb"},figura:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20200214140440/Figura_1.png",2:"https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20200214140740/Figura_2.png",3:"https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20200214140905/Figura_3.png",4:"https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20200214141009/Figura_4.png",5:"https://images.wikidexcdn.net/mwuploads/wikidex/2/21/latest/20200214141122/Figura_5.png",6:"https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20200214141238/Figura_6.png",7:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c7/latest/20200214141337/Figura_7.png",8:"https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20200214141425/Figura_8.png",9:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20200214141545/Figura_9.png",10:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20200214141655/Figura_10.png",11:"https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20200214141809/Figura_11.png",12:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20200214141912/Figura_12.png",13:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20200214142011/Figura_13.png",14:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20200214142056/Figura_14.png"},generación:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20241019145047/Primera_generaci%C3%B3n.svg",2:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20241019145155/Segunda_generaci%C3%B3n.svg",3:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20241019145242/Tercera_generaci%C3%B3n.svg",4:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20241019145319/Cuarta_generaci%C3%B3n.svg",5:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20241019145355/Quinta_generaci%C3%B3n.svg",6:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20241019145423/Sexta_generaci%C3%B3n.svg",7:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20241019145454/S%C3%A9ptima_generaci%C3%B3n.svg",8:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20241019145522/Octava_generaci%C3%B3n.svg",9:"https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20241019145549/Novena_generaci%C3%B3n.svg"},icono:{macho:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",hembra:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",trasera:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",mega:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",megaX:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",megaY:"https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",giga:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",grito:"https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20251112155152/Grito_Pok%C3%A9mon_%28Wikidex%29.svg",artwork:"https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20251117205424/Artwork_%28Wikidex%29.svg",galeria:"./photo.svg"},default:"https://images.wikidexcdn.net/mwuploads/wikidex/d/da/latest/20081011120239/Imagen_no_disponible.svg"},m={gender:[{id:"btnMacho",key:"macho",color:"azulColor",icon:l.icono.macho,size:"50px"},{id:"btnHembra",key:"hembra",color:"rojoColor",icon:l.icono.hembra,size:"50px"}],special:[{id:"btnMega",key:"mega",color:"megaColor",icon:l.icono.mega,size:"40px"},{id:"btnMegaX",key:"megaX",color:"megaXColor",icon:l.icono.megaX,size:"40px"},{id:"btnMegaY",key:"megaY",color:"megaYColor",icon:l.icono.megaY,size:"40px"},{id:"btnGiga",key:"giga",color:"gigamaxColor",icon:l.icono.giga,size:"28px"}],toggle:[{id:"btnShiny",key:"shiny",color:"amarilloColor",icon:l.icono.variocolor,size:"40px"},{id:"btnTrasera",key:"trasera",color:"verdeColor",icon:l.icono.trasera,size:"25px"}]};class S{constructor(){this.referenciasActivas=new Map,this.contadorReferencias=new Map}limpiarReferenciasPokemon(){console.log("=== LIMPIANDO REFERENCIAS ===");const e=document.querySelector("h2.destroyable.cuadroPokemon");if(console.log("h2 encontrado con clases:",e),e)console.log("Eliminando h2:",e.outerHTML),e.remove();else{const t=document.querySelector("span#Anotaciones");if(console.log("span#Anotaciones encontrado:",t),t){const a=t.closest("h2");console.log("h2 padre del span:",a),a&&a.classList.contains("destroyable")&&a.classList.contains("cuadroPokemon")&&(console.log("Eliminando h2 padre:",a.outerHTML),a.remove())}}const i=document.querySelectorAll("li.destroyable.cuadroPokemon");console.log("li encontrados:",i.length),i.forEach(t=>t.remove());const o=document.querySelector("ol.references");o&&o.children.length===0&&(console.log("Lista vacía, eliminando sección"),this.eliminarSeccionAnotaciones()),this.referenciasActivas.clear(),this.contadorReferencias.clear(),console.log("=== FIN LIMPIEZA ===")}eliminarSeccionAnotaciones(){const e=document.querySelector(".mw-references-wrap")||document.querySelector("#mw-references-wrap");e&&e.remove();const i=document.querySelector("h2.destroyable.cuadroPokemon");i&&i.remove()}asegurarSeccionAnotaciones(){let e=document.querySelector(".mw-references-wrap");if(!e){let i=null;const o=document.querySelectorAll("h2");for(const a of o){const s=a.querySelector("span.mw-headline");if(s&&s.textContent.includes("Anotaciones")){i=a;break}}if(!i){const a=document.querySelector(".mw-content-text");if(!a)return console.error("ERROR: No se encontró .mw-content-text."),null;let s=null;const r=a.querySelectorAll("h2");for(const c of r){const d=c.querySelector("span.mw-headline, span#Véase_también");if(d&&(d.textContent.includes("Véase también")||d.id==="Véase_también")){s=c;break}}i=document.createElement("h2"),i.className="destroyable cuadroPokemon";const n=document.createElement("span");n.className="mw-headline",n.id="Anotaciones",n.textContent="Anotaciones",i.appendChild(n),s?a.insertBefore(i,s):a.appendChild(i)}e=document.createElement("div"),e.className="mw-references-wrap",e.id="mw-references-wrap",e.style.color="white";const t=document.createElement("ol");t.className="references",e.appendChild(t),i.insertAdjacentElement("afterend",e)}return e.querySelector("ol.references")}procesarReferencia(e,i){let o=[];if(typeof e=="string"&&e.trim()!==""?o=[e]:Array.isArray(e)?o=e.filter(a=>typeof a=="string"&&a.trim()!==""):i&&typeof i=="object"&&(typeof i.nota=="string"?o=[i.nota]:Array.isArray(i.nota)&&(o=i.nota.filter(a=>typeof a=="string"&&a.trim()!==""))),o.length===0)return"";const t=o.map(a=>{let s=null;if(h&&h.nota&&h.nota[a]&&(s=h.nota[a]),!s)return"";this.referenciasActivas.has(a)||this.referenciasActivas.set(a,{cuenta:0,texto:s});const r=this.referenciasActivas.get(a),n=r.cuenta;r.cuenta++;const c=`cite_ref-${a}_${n}`;return`<a href="#${`cite_note-${a}`}" data-ref-key="${a}" id="${c}">?</a>`}).filter(Boolean);return t.length===0?"":` <sup class="reference">${t.join(" ")}</sup>`}actualizarNumerosCitas(){const e=document.querySelector(".mw-references-wrap ol.references")||document.querySelector("#mw-references-wrap ol.references")||document.querySelector("ol.references");if(!e)return;const i=new Map;Array.from(e.querySelectorAll("li")).forEach((a,s)=>{const r=a.id.match(/^cite_note-(.+)$/);r&&i.set(r[1],s+1)}),document.querySelectorAll("a[data-ref-key]").forEach(a=>{const s=a.getAttribute("data-ref-key"),r=i.get(s);r&&(a.textContent=r)})}calcularNumeroReferencia(e){const i=document.querySelector("#mw-references-wrap ol.references");if(!i)return 1;const o=i.querySelectorAll("li"),t=Array.from(o).map(r=>{const n=r.id.match(/^cite_note-(.+)$/);return n?n[1]:null}).filter(Boolean),a=new Set([...t,...Array.from(this.referenciasActivas.keys())]);return Array.from(a).sort().indexOf(e)+1}renderizarReferencias(){if(this.referenciasActivas.size===0){console.log("No hay referencias para renderizar");return}const e=this.asegurarSeccionAnotaciones();if(!e)return;e.querySelectorAll("li.destroyable.cuadroPokemon").forEach(t=>t.remove()),Array.from(this.referenciasActivas.entries()).sort((t,a)=>t[0].localeCompare(a[0])).forEach(([t,a])=>{const s=document.createElement("li");s.id=`cite_note-${t}`,s.className="destroyable cuadroPokemon",e.appendChild(s);const n=Array.from(e.querySelectorAll("li")).indexOf(s)+1;let c="";if(a.cuenta===1)c=`<span class="mw-cite-backlink"><a href="#${`cite_ref-${t}_0`}" aria-label="Volver arriba" title="Volver arriba">↑</a></span>`;else{const d=[];for(let u=0;u<a.cuenta;u++){const g=`cite_ref-${t}_${u}`;d.push(`<sup><a href="#${g}">${n},${u}</a></sup>`)}c=`<span class="mw-cite-backlink">↑ ${d.join(" ")}</span>`}s.innerHTML=`${c} <span class="reference-text">${a.texto}</span>`}),this.actualizarNumerosCitas()}extraerValorConReferencia(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){let i=e.valor||"",o="";return e.nota&&(o=this.procesarReferencia(e.nota,e)),i+o}return""}procesarArray(e){return Array.isArray(e)?e.map(i=>this.extraerValorConReferencia(i)):e}}class T{constructor(){this.forma=h.forma,this.info=h.info,this.pokemon="Pikachu",this.sexoActivo="",this.formaEspecialActiva="",this.esShiny=!1,this.esTrasera=!1,this.esArtwork=localStorage.getItem("preferArtwork")==="true",this.selector1=0,this.selector2=0,this.secciones1=[],this.secciones2=[],this.isSeccion1="",this.isSeccion2="",this.ultimaSeccion2Nombre="",this.audioActual=null,this.cargandoAudio=!1;const e=this.getAvailableGenders();e.length>0&&(this.sexoActivo=e[0]),this.initializeSections()}initializeSections(){this.secciones1=this.getAvailableSections(),this.secciones1.length>0&&(this.isSeccion1=this.secciones1[0],this.secciones2=this.getAvailableSubsections(this.isSeccion1),this.secciones2.length>0&&(this.isSeccion2=this.secciones2[0],this.ultimaSeccion2Nombre=this.isSeccion2))}getAvailableGenders(){if(!this._cachedGenders){const e=Object.keys(this.forma);if(e.includes("nogen"))return this._cachedGenders=[],this._cachedGenders;if(e.includes("normal")){if(this._cachedGenders=["macho","hembra"],!this.forma._duplicatedNormal){const i=this.forma.normal;this.forma.macho||(this.forma.macho=i),this.forma.hembra||(this.forma.hembra=i),this.forma._duplicatedNormal=!0}return this._cachedGenders}this._cachedGenders=e.filter(i=>i==="macho"||i==="hembra").filter(i=>this.forma[i]&&this.forma[i]!=="")}return this._cachedGenders}getAvailableSpecialForms(){return["mega","megaX","megaY","giga"].filter(i=>this.forma.hasOwnProperty(i)&&this.forma[i]!=="")}shouldHideSections(){return["mega","megaX","megaY","giga"].includes(this.formaEspecialActiva)}getCurrentFormaNode(){if(this.formaEspecialActiva&&this.forma[this.formaEspecialActiva])return this.forma[this.formaEspecialActiva];const e=this.getAvailableGenders();return e.length>0&&this.sexoActivo?this.forma[this.sexoActivo]:e.length>0?(this.sexoActivo=e[0],this.forma[this.sexoActivo]):this.forma}getAvailableSections(){const e=this.getCurrentFormaNode();if(!e||typeof e=="string")return[];const i=["mega","megaX","megaY","giga","primigenio","origen"];return e.datos!==void 0?[]:Object.keys(e).filter(o=>!i.includes(o))}getAvailableSubsections(e){const i=this.getCurrentFormaNode();if(!i||typeof i=="string")return[];const o=i[e];return!o||typeof o=="string"?[]:o.datos!==void 0?[]:Object.keys(o)}getPokemonData(){if(this.formaEspecialActiva&&this.forma[this.formaEspecialActiva]){const t=this.forma[this.formaEspecialActiva],a=typeof t=="string"?t:t.datos;return this.info[a]||{}}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0&&typeof e.datos=="string")return this.info[e.datos]||{};const i=e[this.isSeccion1];if(!i)return{};if(typeof i=="string")return this.info[i]||{};if(i.datos!==void 0)return this.info[i.datos]||{};const o=i[this.isSeccion2];if(o){if(typeof o=="string")return this.info[o]||{};if(o.datos!==void 0)return this.info[o.datos]||{}}return{}}getCurrentImageUrls(){if(this.formaEspecialActiva&&this.forma[this.formaEspecialActiva]){const t=this.forma[this.formaEspecialActiva];return typeof t=="string"?{}:t}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0)return e;const i=e[this.isSeccion1];if(!i)return{};if(typeof i=="string")return{};if(i.datos!==void 0)return i;const o=i[this.isSeccion2];return o?typeof o=="string"?{}:o:{}}buildImageSrc(){const e=this.getCurrentImageUrls(),i=t=>t?typeof t=="string"?t:Array.isArray(t)?t.length===0?null:t.length===1?t[0]:this.esArtwork?t[1]:t[0]:null:null;if(this.esTrasera&&this.esShiny){const t=i(e.variocolorTrasera);if(t)return t}if(this.esTrasera){const t=i(e.trasera);if(t)return t}if(this.esShiny){const t=i(e.variocolor);if(t)return t}const o=i(e.imagen);return o||""}playAudio(e){try{const i=new Audio(`public/audio/${e}`);i.play().catch(o=>{}),this.audioActual=i}catch{}}}class E{constructor(e){this.estado=e,this.gestorReferencias=new S,this.initializeHTML(),this.elements=this.getElements(),this.setupEventListeners(),this.updateAll(),this.imageLoading=!1,window.addEventListener("resize",()=>this.handleResize())}getElements(){const e={imagenPokemonCuadro:document.querySelector("#imagenPokemonCuadro"),contenedorPokemon:document.querySelector(".contenedorPokemon"),seccion1:document.querySelector("#seccion1"),seccion2:document.querySelector("#seccion2"),seccion1Texto:document.querySelector("#seccion1Texto"),seccion2Texto:document.querySelector("#seccion2Texto"),contenedorInfo:document.querySelector("#contenedorInfo"),botonVolumen:document.querySelector("#botonVolumen"),botonArtwork:document.querySelector("#botonArtwork"),botonEnlace:document.querySelector("#botonEnlace"),loadingIndicator:document.querySelector("#loadingIndicator")};return[...m.gender,...m.special,...m.toggle].forEach(o=>{e[o.key]=document.querySelector(`#${o.id}`)}),Object.entries({btnSec1Mas:"sec1mas",btnSec1Menos:"sec1menos",btnSec2Mas:"sec2mas",btnSec2Menos:"sec2menos"}).forEach(([o,t])=>{e[t]=document.querySelector(`#${o}`)}),e}initializeHTML(){const e=this.getBackgroundColor();document.querySelector("#app").innerHTML=`
      <div class="contenedorPokemon" style="background:${e}">
        <div class="tituloPokemon">${w}</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">${k} (${b})</div>
          <div class="numeroPokemon">#${x}</div>
        </div>
        <div>
        <div class="contenidoPokemon">
        <div class="contenedorImagen">
  <div class="imagenWrapper">
    <img id="imagenPokemonCuadro" class="imagenPokemon" src="${l.default}" height="200;">
    
    <div id="loadingIndicator" class="loadingIndicator" style="display:none;">
      <div class="spinner"></div>
    </div>
  </div>

  <div id="botonArtwork" class="circuloExterno botonEsquinaSupIzq">
    <div class="circuloMedio artworkColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${l.icono.artwork}" alt="Artwork" style="height:28px">
      </div>
    </div>
  </div>

  <div id="botonEnlace" class="circuloExterno botonEsquinaInfIzq">
    <div class="circuloMedio enlaceColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${l.icono.galeria}" alt="Enlace" style="height:28px">
      </div>
    </div>
  </div>
  
  <div id="botonVolumen" class="circuloExterno botonEsquinaSupDer" style="display:none;">
  <div class="circuloMedio gritoColor transparente">
    <div class="circuloInterno">
      <img class="iconoSVG" src="${l.icono.grito}" alt="Volumen" style="height:28px">
    </div>
  </div>
</div>

  <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(m.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(m.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(m.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
        </div>
      </div>
      </div>
      

<div class="mw-content-text" style="color:white;">
    <h2><span class="mw-headline" id="Anotaciones">Anotaciones</span></h2>
      <div class="mw-references-wrap"><ol class="references">
          <li id="cite_note-1"><span class="mw-cite-backlink"><a href="#cite_ref-1" aria-label="Volver arriba" title="Volver arriba">↑</a></span> <span class="reference-text">Esta anotación no debería eliminarse nunca, aunque se cambie la forma del Pokémon tantas veces como el usuario quiera. Tampoco debería verse reflejado el número 1 en el cuadro Pokémon.</span>
          </li>
        </ol>
      </div>`}generateButtons(e){return e.map(i=>`
      <div id="${i.id}" class="circuloExterno">
        <div class="circuloMedio ${i.color} transparenteBoton">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${i.icon}" alt="${i.key}" style="height:${i.size}">
          </div>
        </div>
      </div>
    `).join("")}generateSectionControls(){return`
      <div id="seccion1" class="seccionControles">
        <div id="btnSec1Menos" class="seccionSelector">
          <span>←</span>
        </div>
        <div id="seccion1Texto" class="textoSeccion">Común</div>
        <div id="btnSec1Mas" class="seccionSelector">
          <span>→</span>
        </div>
      </div>
      <div id="seccion2" class="seccionControles" style="display: none;">
        <div id="btnSec2Menos" class="seccionSelector">
          <span>←</span>
        </div>
        <div id="seccion2Texto" class="textoSeccion">Común</div>
        <div id="btnSec2Mas" class="seccionSelector">
          <span>→</span>
        </div>
      </div>
    `}setupEventListeners(){var e,i,o,t,a,s,r;m.gender.forEach(n=>{var c;(c=this.elements[n.key])==null||c.addEventListener("click",()=>{this.handleGenderClick(n.key)})}),m.special.forEach(n=>{var c;(c=this.elements[n.key])==null||c.addEventListener("click",()=>{this.handleSpecialFormClick(n.key)})}),m.toggle.forEach(n=>{var c;(c=this.elements[n.key])==null||c.addEventListener("click",()=>{this.handleToggleClick(n.key)})}),(e=this.elements.sec1mas)==null||e.addEventListener("click",()=>this.navigateSection(1,1)),(i=this.elements.sec1menos)==null||i.addEventListener("click",()=>this.navigateSection(1,-1)),(o=this.elements.sec2mas)==null||o.addEventListener("click",()=>this.navigateSection(2,1)),(t=this.elements.sec2menos)==null||t.addEventListener("click",()=>this.navigateSection(2,-1)),(a=this.elements.botonVolumen)==null||a.addEventListener("click",()=>{const n=this.estado.getPokemonData();if(this.estado.audioActual&&!this.estado.audioActual.paused){this.estado.audioActual.pause(),this.estado.audioActual.currentTime=0,this.estado.audioActual=null,this.estado.cargandoAudio=!1,this.updateVolumeButton();return}if(!this.estado.cargandoAudio&&n.grito&&n.grito.startsWith("https://")){this.estado.cargandoAudio=!0,this.updateVolumeButton();const c=new Audio;c.addEventListener("canplaythrough",()=>{this.estado.cargandoAudio=!1,c.play().then(()=>{this.updateVolumeButton()}).catch(()=>{this.estado.cargandoAudio=!1,this.estado.audioActual=null,this.updateVolumeButton()})},{once:!0}),c.addEventListener("error",()=>{this.estado.cargandoAudio=!1,this.estado.audioActual=null,this.updateVolumeButton()}),c.addEventListener("play",()=>this.updateVolumeButton()),c.addEventListener("pause",()=>this.updateVolumeButton()),c.addEventListener("ended",()=>{this.estado.audioActual=null,this.updateVolumeButton()}),c.src=n.grito,this.estado.audioActual=c}}),(s=this.elements.botonArtwork)==null||s.addEventListener("click",()=>{this.estado.esArtwork=!this.estado.esArtwork,localStorage.setItem("preferArtwork",this.estado.esArtwork),this.updateAll()}),(r=this.elements.botonEnlace)==null||r.addEventListener("click",()=>{window.open(y,"_blank")})}handleResize(){this.updateTipos()}getBackgroundColor(){const e=this.estado.getPokemonData();if(!e.tipo||e.tipo.length===0)return"#f4f4f4ff";if(e.tipo.length===1){let o=e.tipo[0];return typeof o=="object"&&o.valor&&(o=o.valor),l.color[o]||"#FFFFFF"}return`linear-gradient(to right, ${e.tipo.map(o=>{let t=o;return typeof o=="object"&&o.valor&&(t=o.valor),l.color[t]||"#FFFFFF"}).join(", ")})`}updateBackgroundColor(){const e=this.getBackgroundColor();this.elements.contenedorPokemon&&(this.elements.contenedorPokemon.style.background=e)}handleGenderClick(e){this.estado.getAvailableGenders().includes(e)&&(this.estado.sexoActivo=e,this.estado.selector1=0,this.estado.selector2=0,this.estado.initializeSections(),this.updateAll())}handleSpecialFormClick(e){this.estado.formaEspecialActiva=this.estado.formaEspecialActiva===e?"":e,this.estado.selector1=0,this.estado.selector2=0,this.estado.initializeSections(),this.updateAll()}handleToggleClick(e){const i=this.estado.getCurrentImageUrls(),o=!!i.variocolor,t=!!i.trasera||!!i.variocolorTrasera;e==="shiny"&&!o||e==="trasera"&&!t||(this.estado[`es${e.charAt(0).toUpperCase()+e.slice(1)}`]=!this.estado[`es${e.charAt(0).toUpperCase()+e.slice(1)}`],this.updateAll())}navigateSection(e,i){const o=`selector${e}`,t=`secciones${e}`;if(this.estado[o]=(this.estado[o]+i+this.estado[t].length)%this.estado[t].length,e===1){const a=this.estado.ultimaSeccion2Nombre;this.estado.secciones2=this.estado.getAvailableSubsections(this.estado.secciones1[this.estado.selector1]);const s=this.estado.secciones2.findIndex(r=>r===a);s!==-1?this.estado.selector2=s:this.estado.selector2=0,this.estado.secciones2.length>0&&(this.estado.ultimaSeccion2Nombre=this.estado.secciones2[this.estado.selector2])}else this.estado.secciones2.length>0&&(this.estado.ultimaSeccion2Nombre=this.estado.secciones2[this.estado.selector2]);this.updateSections(),this.updateImage(),this.updateTipos(),this.updateBackgroundColor()}updateButtonState(e,i,o,t){var r;const a=this.elements[i];if(!a)return;const s=(r=m[e])==null?void 0:r.find(n=>n.key===i);s&&(t?(a.style.pointerEvents="auto",o?(a.className=`circuloExterno ${s.color}`,a.querySelector(".circuloMedio").className="circuloMedio",a.querySelector(".circuloInterno").className=`circuloInterno ${s.color}`,a.querySelector(".iconoSVG").className="iconoSVG blanco"):(a.className="circuloExterno",a.querySelector(".circuloMedio").className=`circuloMedio ${s.color} transparenteBoton`,a.querySelector(".circuloInterno").className="circuloInterno",a.querySelector(".iconoSVG").className="iconoSVG")):(a.className="circuloExterno botonDeshabilitado",a.querySelector(".circuloMedio").className="circuloMedio grisColor",a.querySelector(".circuloInterno").className="circuloInterno",a.querySelector(".iconoSVG").className="iconoSVG deshabilitado",a.style.pointerEvents="none"))}updateSections(){if(this.estado.shouldHideSections()){this.elements.seccion1.style.display="none",this.elements.seccion2.style.display="none",this.estado.isSeccion1="",this.estado.isSeccion2="";return}this.estado.secciones1=this.estado.getAvailableSections(),this.estado.selector1>=this.estado.secciones1.length&&(this.estado.selector1=0),this.estado.secciones1.length<=1?(this.elements.seccion1.style.display="none",this.estado.isSeccion1=this.estado.secciones1[0]||"normal"):(this.elements.seccion1.style.display="flex",this.estado.isSeccion1=this.estado.secciones1[this.estado.selector1],this.elements.seccion1Texto.textContent=this.estado.isSeccion1==="normal"?"Común":this.estado.isSeccion1),this.estado.secciones2=this.estado.getAvailableSubsections(this.estado.isSeccion1),this.estado.selector2>=this.estado.secciones2.length&&(this.estado.selector2=0),this.estado.secciones2.length<=1?(this.elements.seccion2.style.display="none",this.estado.isSeccion2=this.estado.secciones2[0]||""):(this.elements.seccion2.style.display="flex",this.estado.isSeccion2=this.estado.secciones2[this.estado.selector2],this.elements.seccion2Texto.textContent=this.estado.isSeccion2)}updateVolumeButton(){const e=this.estado.getPokemonData(),i=this.elements.botonVolumen;if(!e.grito){i.style.display="none";return}i.style.display="flex";const o=i.querySelector(".circuloMedio"),t=i.querySelector(".circuloInterno"),a=i.querySelector("img");if(this.estado.cargandoAudio){i.className="circuloExterno botonEsquinaSupDer",o.className="circuloMedio gritoColor transparenteBoton",t.className="circuloInterno",a.style.display="none";let n=i.querySelector(".audio-spinner");n||(n=document.createElement("div"),n.className="audio-spinner",t.appendChild(n)),n.style.display="block";return}const s=i.querySelector(".audio-spinner");s&&(s.style.display="none"),a.style.display="block",this.estado.audioActual&&!this.estado.audioActual.paused?(i.className="circuloExterno botonEsquinaSupDer gritoColor",o.className="circuloMedio",t.className="circuloInterno gritoColor",a.className="iconoSVG blanco"):(i.className="circuloExterno botonEsquinaSupDer",o.className="circuloMedio gritoColor transparenteBoton",t.className="circuloInterno",a.className="iconoSVG",a.src=l.icono.grito)}updateArtworkButton(){const e=this.elements.botonArtwork;e.style.display="flex";const i=e.querySelector(".circuloMedio"),o=e.querySelector(".circuloInterno"),t=e.querySelector("img");this.estado.esArtwork?(e.className="circuloExterno botonEsquinaSupIzq artworkColor",i.className="circuloMedio",o.className="circuloInterno artworkColor",t.className="iconoSVG blanco"):(e.className="circuloExterno botonEsquinaSupIzq",i.className="circuloMedio artworkColor transparenteBoton",o.className="circuloInterno",t.className="iconoSVG")}updateTipos(){this.gestorReferencias.limpiarReferenciasPokemon();const e=this.estado.getPokemonData(),i=this.elements.contenedorInfo;if(i.innerHTML="",!(!e||Object.keys(e).length===0)){if(e.tipo&&e.tipo.length>0||e.generacion!==void 0){const o=e.tipo&&e.tipo.length>0?e.tipo.map(r=>{let n=r,c="";return typeof r=="object"&&r.valor&&(n=r.valor,r.nota&&(c=this.gestorReferencias.procesarReferencia(r.nota,r))),`<span style="white-space: nowrap;"><img src="${l.tipo[n]||"ruta/por_defecto.png"}" height="22" alt="${n}">${c}</span>`}).join(" "):"",t=e.tipo&&e.tipo.length>1?"Tipos":"Tipo",a=o?`
    <div class="tarjeta">
      <div class="tituloTarjeta">${t}</div>
      <div class="contenidoTarjeta">
        <div class="tiposContainer">${o}</div>
      </div>
    </div>
  `:'<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">—</div></div>';let s="";if(e.generacion!==void 0){const r=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima","Octava","Novena"];if(Array.isArray(e.generacion)){const n=e.generacion.map(d=>{let u="",g="";typeof d=="object"&&d.valor?(u=d.valor,d.nota&&(g=this.gestorReferencias.procesarReferencia(d.nota,d))):u=d;const v=l.generación[u]||l.default,f=r[u-1]||u;return`<div class="tipoGeneracionContainer">
        <img src="${v}" height="20" alt="${f} generación">
        &nbsp;${f}&nbsp;${g}
      </div>`}).join("<br>");s=`
      <div class="tarjeta">
        <div class="tituloTarjeta">${e.generacion.length===1?"Generación":"Generaciones"}</div>
        <div class="contenidoTarjeta">
          ${n}
        </div>
      </div>
    `}else{let n=e.generacion,c="";typeof e.generacion=="object"&&e.generacion.valor&&(n=e.generacion.valor,e.generacion.nota&&(c=this.gestorReferencias.procesarReferencia(e.generacion.nota,e.generacion)));const d=l.generación[n]||l.default,u=r[n-1]||n;s=`
      <div class="tarjeta">
        <div class="tituloTarjeta">Generación</div>
        <div class="contenidoTarjeta">
          <div class="tipoGeneracionContainer">
            <img src="${d}" height="20" alt="${u} generación">
            &nbsp;${u}&nbsp;${c}
          </div>
        </div>
      </div>
    `}}else s='<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">—</div></div>';i.innerHTML+=`
      <div class="contenedorMedidas">
        ${a}
        ${s}
      </div>
    `}if(e.sexo){let o="";if(e.sexo.macho){let t=e.sexo.macho,a="";typeof t=="object"&&t.valor&&(t.nota&&(a=this.gestorReferencias.procesarReferencia(t.nota,t)),t=t.valor);const s=parseFloat(t),r=s===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;";o+=`
    <div class="sexoContainer">
      <img src="${l.icono.macho}" alt="Macho">
      <div class="sexoBarra">
        <div class="sexoBarraMacho" style="flex-basis: ${s}%; ${r}"></div>
        ${s<100?`<div class="sexoBarraVacia" style="flex-basis: ${100-s}%;"></div>`:""}
        <div class="sexoPorcentaje"><span>${s.toString().replace(".","'")}%${a}</span></div>
      </div>
    </div>
  `}if(e.sexo.hembra){let t=e.sexo.hembra,a="";typeof t=="object"&&t.valor&&(t.nota&&(a=this.gestorReferencias.procesarReferencia(t.nota,t)),t=t.valor);const s=parseFloat(t),r=s===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;";o+=`
    <div class="sexoContainer">
      <img src="${l.icono.hembra}" alt="Hembra">
      <div class="sexoBarra">
        <div class="sexoBarraHembra" style="flex-basis: ${s}%; ${r}"></div>
        ${s<100?`<div class="sexoBarraVacia" style="flex-basis: ${100-s}%;"></div>`:""}
        <div class="sexoPorcentaje"><span>${s.toString().replace(".","'")}%${a}</span></div>
      </div>
    </div>
  `}i.innerHTML+=`
      <div class="tarjetaIndividual">
        <div class="tituloTarjeta">Sexo</div>
        <div class="contenidoTarjeta">
          <div style="width: 100%;">${o}</div>
        </div>
      </div>
    `}else i.innerHTML+=`
      <div class="tarjetaIndividual">
        <div class="tituloTarjeta">Sexo</div>
        <div class="contenidoTarjeta">Sin sexo</div>
      </div>
    `;if(e.altura!==void 0||e.peso!==void 0){let o='<div class="contenedorMedidas">';if(e.altura!==void 0){let t=Array.isArray(e.altura)?e.altura:[e.altura];const a=t.map(r=>{let n="",c="";return typeof r=="object"&&r.valor?(n=r.valor,r.nota&&(c=this.gestorReferencias.procesarReferencia(r.nota,r))):n=r,`${n} m${c}`}).join("<br>"),s=t.length===1?"Altura":"Alturas";o+=`
    <div class="tarjeta">
      <div class="tituloTarjeta">${s}</div>
      <div class="contenidoTarjeta">
        <span>${a}</span>
      </div>
    </div>
  `}if(e.peso!==void 0){let t=Array.isArray(e.peso)?e.peso:[e.peso];const a=t.map(r=>{let n="",c="";return typeof r=="object"&&r.valor?(n=r.valor,r.nota&&(c=this.gestorReferencias.procesarReferencia(r.nota,r))):n=r,`${n} kg${c}`}).join("<br>"),s=t.length===1?"Peso":"Pesos";o+=`
    <div class="tarjeta">
      <div class="tituloTarjeta">${s}</div>
      <div class="contenidoTarjeta">
        <span>${a}</span>
      </div>
    </div>
  `}else o+=`
    <div class="tarjeta">
      <div class="tituloTarjeta">Peso</div>
      <div class="contenidoTarjeta">
        <span>??? kg</span>
      </div>
    </div>
  `;o+="</div>",i.innerHTML+=o}if(e.habilidad&&e.habilidad.length>0){const o=e.habilidad.filter(s=>!s.oculta),t=e.habilidad.filter(s=>s.oculta);let a='<div class="contenedorMedidas">';if(o.length>0){const s=o.map(n=>`<span>${this.gestorReferencias.extraerValorConReferencia(n.nombre)}</span><br>`).join(""),r=o.length===1?"Habilidad":"Habilidades";a+=`
        <div class="tarjeta">
          <div class="tituloTarjeta">${r}</div>
          <div class="contenidoTarjeta">
            <div>${s}</div>
          </div>
        </div>
      `}if(t.length>0){const s=t.map(n=>`<span>${this.gestorReferencias.extraerValorConReferencia(n.nombre)}</span><br>`).join(""),r=t.length===1?"Habilidad oculta":"Habilidades ocultas";a+=`
        <div class="tarjeta">
          <div class="tituloTarjeta">${r}</div>
          <div class="contenidoTarjeta">
            <div>${s}</div>
          </div>
        </div>
      `}a+="</div>",i.innerHTML+=a}if(e.figura!==void 0||e.color){l.figura[e.figura]||l.default;let o="";if(e.figura!==void 0)if(Array.isArray(e.figura)){const s=e.figura.map(n=>{let c="",d="";return typeof n=="object"&&n.valor?(c=n.valor,n.nota&&(d=this.gestorReferencias.procesarReferencia(n.nota,n))):c=n,`<span style="white-space: nowrap; margin-right: 8px;"><img src="${l.figura[c]||l.default}" height="30" alt="Figura ${c}">${d}</span>`}).join("");o=`
      <div class="tarjeta">
        <div class="tituloTarjeta">${e.figura.length===1?"Figura":"Figuras"}</div>
        <div class="contenidoTarjeta">
          ${s}
        </div>
      </div>
    `}else o=`
      <div class="tarjeta">
        <div class="tituloTarjeta">Figura</div>
        <div class="contenidoTarjeta">
          <img src="${l.figura[e.figura]||l.default}" height="30" alt="Figura ${e.figura}">
        </div>
      </div>
    `;else o='<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">—</div></div>';const t={Azul:"#3D8BFF",Amarillo:"#FFD700",Blanco:"#EEEEEE",Gris:"#696969",Marrón:"#B8860B",Morado:"#6A5ACD",Negro:"#000000",Rojo:"#FF6347",Rosa:"#DB7093",Verde:"#228B22"};let a="";if(e.color){const s=Array.isArray(e.color)?e.color:[e.color],r=s.map(c=>{let d="",u="";return typeof c=="object"&&c.valor?(d=c.valor,c.nota&&(u=this.gestorReferencias.procesarReferencia(c.nota,c))):d=c,`<span class="colorMuestra" style="background-color:${t[d]||"#FFFFFF"};"></span><span>${d}${u}</span>`}).join("");a=`
    <div class="tarjeta">
      <div class="tituloTarjeta">${s.length===1?"Color":"Colores"}</div>
      <div class="contenidoTarjeta">
        <div class="colorContenedor">${r}</div>
      </div>
    </div>
  `}i.innerHTML+=`
      <div class="contenedorMedidas">
        ${o}
        ${a}
      </div>
    `}if(e.categoria||e.huevo&&e.huevo.length>0){if(e.categoria){const o=Array.isArray(e.categoria)?e.categoria:[e.categoria];o.map(t=>`<span>Pokémon ${this.gestorReferencias.extraerValorConReferencia(t)}</span>`).join("<br>"),o.length}e.huevo&&e.huevo.length>0&&(e.huevo.length>1,e.huevo.map(o=>this.gestorReferencias.extraerValorConReferencia(o)).join("<br>"))}if(e.pronunciacion&&e.pronunciacion.length>0){const o=e.pronunciacion.map(t=>{let a=this.gestorReferencias.extraerValorConReferencia(t.fonetica),s="";if(t.zona)if(Array.isArray(t.zona))s=" "+t.zona.map(n=>{let c="",d="";typeof n=="object"&&n.valor?(c=n.valor,n.nota&&(d=this.gestorReferencias.procesarReferencia(n.nota,n))):c=n;let u="";return c.includes("España")?u='<abbr title="España">(ES)</abbr>':c.includes("Hispanoamérica")?u='<abbr title="Hispanoamérica">(HA)</abbr>':u=c,u+d}).join(" ");else{let r=t.zona,n="";typeof t.zona=="object"&&t.zona.valor&&(r=t.zona.valor,t.zona.nota&&(n=this.gestorReferencias.procesarReferencia(t.zona.nota,t.zona))),r==="España"?s=' <abbr title="España">(ES)</abbr>'+n:r==="Hispanoamérica"?s=' <abbr title="Hispanoamérica">(HA)</abbr>'+n:s=" "+r+n}return`${a}${s?`&nbsp;${s}`:""}`}).join("<br>");i.innerHTML+=`
    <div class="contenedorMedidas">
      <div class="tarjeta">
        <div class="tituloTarjeta">${e.pronunciacion.length===1?"Pronunciación":"Pronunciaciones"}</div>
        <div class="contenidoTarjeta">
          <div>${o}</div>
        </div>
      </div>
    </div>
  `}this.gestorReferencias.renderizarReferencias(),setTimeout(()=>{this.gestorReferencias.actualizarNumerosCitas()},0)}}updateImage(){this.estado.getPokemonData();const e=this.estado.buildImageSrc(),i=this.estado.getCurrentImageUrls(),o=!!i.variocolor,t=!!i.trasera||!!i.variocolorTrasera;!o&&this.estado.esShiny&&(this.estado.esShiny=!1),!t&&this.estado.esTrasera&&(this.estado.esTrasera=!1),this.updateButtonState("toggle","shiny",this.estado.esShiny,o),this.updateButtonState("toggle","trasera",this.estado.esTrasera,t),this.updateVolumeButton(),this.updateArtworkButton();const a=new Image;let s=!1,r;r=setTimeout(()=>this.showLoadingIndicator(),A),a.onload=()=>{s||(clearTimeout(r),this.elements.imagenPokemonCuadro.src=e||l.default,this.hideLoadingIndicator(!1))},a.onerror=()=>{s=!0,clearTimeout(r);const n=new Image;n.onload=()=>{this.elements.imagenPokemonCuadro.src=l.default,this.hideLoadingIndicator(!1)},n.onerror=()=>this.hideLoadingIndicator(!0),n.src=l.default},a.src=e||l.default}showLoadingIndicator(){const e=this.elements.loadingIndicator;e&&(e.style.display="flex",e.classList.remove("error"),this.imageLoading=!0)}hideLoadingIndicator(e=!1){const i=this.elements.loadingIndicator;i&&(e?(i.classList.add("error"),setTimeout(()=>{i.style.display="none",i.classList.remove("error"),this.imageLoading=!1},2e3)):(i.style.display="none",this.imageLoading=!1))}updateAll(){const e=this.estado.getAvailableGenders(),i=this.estado.getAvailableSpecialForms();m.gender.forEach(o=>{const t=e.includes(o.key),a=this.estado.sexoActivo===o.key;this.updateButtonState("gender",o.key,a,t)}),m.special.forEach(o=>{const t=i.includes(o.key),a=this.estado.formaEspecialActiva===o.key;this.updateButtonState("special",o.key,a,t)}),this.updateSections(),this.updateImage(),this.updateTipos(),this.updateBackgroundColor()}}const _=new T;new E(_);
