(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const u="Pikachu",g="#FFD700",m="ピカチュウ",h="Pikachu",v="#0025",p={forma:{macho:{normal:{datos:"pikachu_normal",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20200214192043/Pikachu_HOME.png",variocolor:"https://img.pokemondb.net/sprites/home/shiny/1x/pikachu.png"},"Con gorra":{Original:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-original-cap.png"},Hoenn:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-hoenn-cap.png"},Sinnoh:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-sinnoh-cap.png"},Teselia:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-unova-cap.png"},Kalos:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-kalos-cap.png"},Alola:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-alola-cap.png"},Compañero:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-partner-cap.png"},Trotamundos:{datos:"pikachu_gorra",imagen:"https://img.pokemondb.net/sprites/home/normal/1x/pikachu-world-cap.png"}}},hembra:{datos:"pikachu_normal",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20200214185804/Pikachu_HOME_hembra.png",variocolor:"https://img.pokemondb.net/sprites/home/shiny/pikachu-f.png"},giga:{datos:"pikachu_giga",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d8/latest/20191016155951/Pikachu_Gigamax.png/270px-Pikachu_Gigamax.png",variocolor:"https://img.pokemondb.net/sprites/home/shiny/1x/pikachu-gigantamax.png"},mega:{datos:"pikachu_mega",imagen:""},megaX:{datos:"pikachu_megaX",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/7/7d/latest/20251016084320/Mega-Raichu_X.png",trasera:"https://images.wikidexcdn.net/mwuploads/wikidex/9/96/latest/20241104015348/Pikachu_%28Halloween%29_morado_Sleep.png"},megaY:{datos:"pikachu_megaY",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/f/f1/latest/20251016084336/Mega-Raichu_Y.png",trasera:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20180418223326/Evento_Pikachu_con_vuelo.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20150615185638/Pikachu_Pok%C3%A9mon_Mundo_Megamisterioso.png",variocolorTrasera:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250127090512/Raichu.png"}},info:{pikachu_normal:{tipo:["Eléctrico","Eléctrico"],altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Otro"}],generacion:"1",categoria:"Ratón",figura:"8",huevo:["Campo","Hada"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20200302181628/Grito_de_Pikachu_en_la_s%C3%A9ptima_generaci%C3%B3n.ogg",genero:{macho:"49",hembra:"49"},color:"Amarillo",pronunciacion:[{fonetica:"pi.ˈka.chu",zona:"España"},{fonetica:"ˈpi.ka.chu",zona:"Hispanoamérica",nota:["Nota 1","Nota 2"]}]},pikachu_gorra:{tipo:["Eléctrico"],variocolor:!1,altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"7",categoria:"Ratón",figura:"8",color:"Verde",genero:{macho:"100",hembra:"0"},grito:"https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20180510202106/Grito_de_Pikachu_con_gorra.ogg"},pikachu_giga:{tipo:["Eléctrico"],altura:21,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"8",categoria:"Ratón"},pikachu_mega:{tipo:["Agua","Bicho"],peso:"34",altura:21,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"9",figura:"12",color:"Blanco",categoria:"Ratón"},pikachu_megaX:{tipo:["Hielo","Astral"],peso:"34",altura:21,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],genero:{hembra:"100"},generacion:"9",figura:"12",categoria:"Ratón"},pikachu_megaY:{tipo:["Fantasma","Dragón"],peso:"34",altura:21,genero:{macho:"20",hembra:"80"},habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"9",color:"Rojo",categoria:"Ratón"}}},d={tipo:{Acero:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20221208180543/Tipo_acero_EP.png",Agua:"https://images.wikidexcdn.net/mwuploads/wikidex/5/59/latest/20221208180426/Tipo_agua_EP.png",Bicho:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20221208180434/Tipo_bicho_EP.png",Dragón:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png",Eléctrico:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png",Fantasma:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20221208180503/Tipo_fantasma_EP.png",Fuego:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20221208180625/Tipo_fuego_EP.png",Hada:"https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20221208180633/Tipo_hada_EP.png",Hielo:"https://images.wikidexcdn.net/mwuploads/wikidex/1/17/latest/20221208180641/Tipo_hielo_EP.png",Lucha:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20221208180651/Tipo_lucha_EP.png",Normal:"https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20221208180705/Tipo_normal_EP.png",Planta:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20221208180710/Tipo_planta_EP.png",Psíquico:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png",Roca:"https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20221208180726/Tipo_roca_EP.png",Siniestro:"https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20221208180734/Tipo_siniestro_EP.png",Tierra:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20221208180742/Tipo_tierra_EP.png",Veneno:"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20221208180751/Tipo_veneno_EP.png",Volador:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20221208180800/Tipo_volador_EP.png",Astral:"https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20231216092909/Tipo_astral_EP.png"},figura:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20200214140440/Figura_1.png",2:"https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20200214140740/Figura_2.png",3:"https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20200214140905/Figura_3.png",4:"https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20200214141009/Figura_4.png",5:"https://images.wikidexcdn.net/mwuploads/wikidex/2/21/latest/20200214141122/Figura_5.png",6:"https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20200214141238/Figura_6.png",7:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c7/latest/20200214141337/Figura_7.png",8:"https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20200214141425/Figura_8.png",9:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20200214141545/Figura_9.png",10:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20200214141655/Figura_10.png",11:"https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20200214141809/Figura_11.png",12:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20200214141912/Figura_12.png",13:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20200214142011/Figura_13.png",14:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20200214142056/Figura_14.png"},generación:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20241019145047/Primera_generaci%C3%B3n.svg",2:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20241019145155/Segunda_generaci%C3%B3n.svg",3:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20241019145242/Tercera_generaci%C3%B3n.svg",4:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20241019145319/Cuarta_generaci%C3%B3n.svg",5:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20241019145355/Quinta_generaci%C3%B3n.svg",6:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20241019145423/Sexta_generaci%C3%B3n.svg",7:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20241019145454/S%C3%A9ptima_generaci%C3%B3n.svg",8:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20241019145522/Octava_generaci%C3%B3n.svg",9:"https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20241019145549/Novena_generaci%C3%B3n.svg"},default:"https://www.wikidex.net/wiki/Archivo:Imagen_no_disponible.svg"},c={gender:[{id:"btnMacho",key:"macho",color:"azulColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",size:"50px"},{id:"btnHembra",key:"hembra",color:"rojoColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",size:"50px"}],special:[{id:"btnMega",key:"mega",color:"megaColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",size:"40px"},{id:"btnMegaX",key:"megaX",color:"megaXColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",size:"40px"},{id:"btnMegaY",key:"megaY",color:"megaYColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",size:"40px"},{id:"btnGiga",key:"giga",color:"gigamaxColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",size:"28px"}],toggle:[{id:"btnShiny",key:"shiny",color:"amarilloColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",size:"40px"},{id:"btnTrasera",key:"trasera",color:"verdeColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",size:"25px"}]};class k{constructor(){this.forma=p.forma,this.info=p.info,this.pokemon="Pikachu",this.activeGender="",this.activeSpecialForm="",this.isShiny=!1,this.isTrasera=!1,this.selector1=0,this.selector2=0,this.secciones1=[],this.secciones2=[],this.isSeccion1="",this.isSeccion2="",this.currentAudio=null;const e=this.getAvailableGenders();e.length>0&&(this.activeGender=e[0]),this.initializeSections()}initializeSections(){this.secciones1=this.getAvailableSections(),this.secciones1.length>0&&(this.isSeccion1=this.secciones1[0],this.secciones2=this.getAvailableSubsections(this.isSeccion1),this.secciones2.length>0&&(this.isSeccion2=this.secciones2[0]))}getAvailableGenders(){return Object.keys(this.forma).filter(e=>e==="macho"||e==="hembra").filter(e=>this.forma.hasOwnProperty(e)&&this.forma[e]!=="")}getAvailableSpecialForms(){return["mega","megaX","megaY","giga"].filter(i=>this.forma.hasOwnProperty(i)&&this.forma[i]!=="")}shouldHideSections(){return["mega","megaX","megaY","giga"].includes(this.activeSpecialForm)}getCurrentFormaNode(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm])return this.forma[this.activeSpecialForm];{const e=this.getAvailableGenders();return e.length>0&&this.activeGender?this.forma[this.activeGender]:e.length>0?(this.activeGender=e[0],this.forma[this.activeGender]):this.forma}}getAvailableSections(){const e=this.getCurrentFormaNode();if(!e||typeof e=="string")return[];const i=["mega","megaX","megaY","giga","primigenio","origen"];return e.datos!==void 0?[]:Object.keys(e).filter(t=>!i.includes(t))}getAvailableSubsections(e){const i=this.getCurrentFormaNode();if(!i||typeof i=="string")return[];const t=i[e];return!t||typeof t=="string"?[]:t.datos!==void 0?[]:Object.keys(t)}getPokemonData(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const a=this.forma[this.activeSpecialForm],s=typeof a=="string"?a:a.datos;return this.info[s]||{}}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0&&typeof e.datos=="string")return this.info[e.datos]||{};const i=e[this.isSeccion1];if(!i)return{};if(typeof i=="string")return this.info[i]||{};if(i.datos!==void 0)return this.info[i.datos]||{};const t=i[this.isSeccion2];if(t){if(typeof t=="string")return this.info[t]||{};if(t.datos!==void 0)return this.info[t.datos]||{}}return{}}getCurrentImageUrls(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const a=this.forma[this.activeSpecialForm];return typeof a=="string"?{}:a}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0)return e;const i=e[this.isSeccion1];if(!i)return{};if(typeof i=="string")return{};if(i.datos!==void 0)return i;const t=i[this.isSeccion2];return t?typeof t=="string"?{}:t:{}}buildImageSrc(){const e=this.getCurrentImageUrls();return this.isTrasera&&this.isShiny&&e.variocolorTrasera?e.variocolorTrasera:this.isTrasera&&e.trasera?e.trasera:this.isShiny&&e.variocolor?e.variocolor:e.imagen?e.imagen:""}playAudio(e){try{const i=new Audio(`public/audio/${e}`);i.play().catch(t=>{}),this.currentAudio=i}catch{}}}class f{constructor(e){this.state=e,this.initializeHTML(),this.elements=this.getElements(),this.setupEventListeners(),this.updateAll(),window.addEventListener("resize",()=>this.handleResize())}getElements(){const e={imagenPokemonCuadro:document.querySelector("#imagenPokemonCuadro"),seccion1:document.querySelector("#seccion1"),seccion2:document.querySelector("#seccion2"),seccion1Texto:document.querySelector("#seccion1Texto"),seccion2Texto:document.querySelector("#seccion2Texto"),contenedorInfo:document.querySelector("#contenedorInfo"),botonVolumen:document.querySelector("#botonVolumen")};return[...c.gender,...c.special,...c.toggle].forEach(t=>{e[t.key]=document.querySelector(`#${t.id}`)}),Object.entries({btnSec1Mas:"sec1mas",btnSec1Menos:"sec1menos",btnSec2Mas:"sec2mas",btnSec2Menos:"sec2menos"}).forEach(([t,a])=>{e[a]=document.querySelector(`#${t}`)}),e}initializeHTML(){document.querySelector("#app").innerHTML=`
      <div class="contenedorPokemon" style="background:${g}">
        <div class="tituloPokemon">${u}</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">${m} (${h})</div>
          <div class="numeroPokemon">${v}</div>
        </div>
        <div>
        <div class="contenidoPokemon">
        <div class="contenedorImagen">
          <img id="imagenPokemonCuadro" class="imagenPokemon" src="public/Imagen_no_disponible.svg" height="200;">
          
          <div id="botonVolumen" class="botonVolumen gritoColor" 
               onmouseover="this.style.background='rgba(255, 255, 255, 1)'; this.style.transform='scale(1.1)'" 
               onmouseout="this.style.background='rgba(255, 255, 255, 0.9)'; this.style.transform='scale(1)'">
            <img src="volume.svg" alt="Volumen"/>
          </div>

          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(c.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(c.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(c.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
        </div>
      </div>
    `}generateButtons(e){return e.map(i=>`
      <div id="${i.id}" class="circuloExterno">
        <div class="circuloMedio ${i.color} transparente">
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
    `}setupEventListeners(){var e,i,t,a,s;c.gender.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleGenderClick(o.key)})}),c.special.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleSpecialFormClick(o.key)})}),c.toggle.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleToggleClick(o.key)})}),(e=this.elements.sec1mas)==null||e.addEventListener("click",()=>this.navigateSection(1,1)),(i=this.elements.sec1menos)==null||i.addEventListener("click",()=>this.navigateSection(1,-1)),(t=this.elements.sec2mas)==null||t.addEventListener("click",()=>this.navigateSection(2,1)),(a=this.elements.sec2menos)==null||a.addEventListener("click",()=>this.navigateSection(2,-1)),(s=this.elements.botonVolumen)==null||s.addEventListener("click",()=>{const o=this.state.getPokemonData();if(o.grito&&o.grito.startsWith("https://")){const n=new Audio(o.grito);n.play().catch(()=>{}),this.state.currentAudio=n}})}handleVolumeClick(){const e=this.state.getPokemonData();e.grito&&this.state.playAudio(e.grito)}handleResize(){this.updateTipos()}handleGenderClick(e){this.state.getAvailableGenders().includes(e)&&(this.state.activeGender=e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll())}handleSpecialFormClick(e){this.state.activeSpecialForm=this.state.activeSpecialForm===e?"":e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll()}handleToggleClick(e){const i=this.state.getCurrentImageUrls(),t=!!i.variocolor,a=!!i.trasera||!!i.variocolorTrasera;e==="shiny"&&!t||e==="trasera"&&!a||(this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`]=!this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`],this.updateAll())}playAudio(e){try{const i=new Audio(e);i.play().catch(),this.currentAudio=i}catch(i){console.log(i)}}navigateSection(e,i){const t=`selector${e}`,a=`secciones${e}`;this.state[t]=(this.state[t]+i+this.state[a].length)%this.state[a].length,e===1&&(this.state.selector2=0),this.updateSections(),this.updateImage(),this.updateTipos()}updateButtonState(e,i,t,a){var n;const s=this.elements[i];if(!s)return;const o=(n=c[e])==null?void 0:n.find(r=>r.key===i);o&&(a?(s.style.pointerEvents="auto",t?(s.className=`circuloExterno ${o.color}`,s.querySelector(".circuloMedio").className="circuloMedio",s.querySelector(".circuloInterno").className=`circuloInterno ${o.color}`,s.querySelector(".iconoSVG").className="iconoSVG blanco"):(s.className="circuloExterno",s.querySelector(".circuloMedio").className=`circuloMedio ${o.color} transparente`,s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG")):(s.className="circuloExterno botonDeshabilitado",s.querySelector(".circuloMedio").className="circuloMedio grisColor",s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG deshabilitado",s.style.pointerEvents="none"))}updateSections(){if(this.state.shouldHideSections()){this.elements.seccion1.style.display="none",this.elements.seccion2.style.display="none",this.state.isSeccion1="",this.state.isSeccion2="";return}this.state.secciones1=this.state.getAvailableSections(),this.state.selector1>=this.state.secciones1.length&&(this.state.selector1=0),this.state.secciones1.length<=1?(this.elements.seccion1.style.display="none",this.state.isSeccion1=this.state.secciones1[0]||"normal"):(this.elements.seccion1.style.display="flex",this.state.isSeccion1=this.state.secciones1[this.state.selector1],this.elements.seccion1Texto.textContent=this.state.isSeccion1==="normal"?"Común":this.state.isSeccion1),this.state.secciones2=this.state.getAvailableSubsections(this.state.isSeccion1),this.state.selector2>=this.state.secciones2.length&&(this.state.selector2=0),this.state.secciones2.length<=1?(this.elements.seccion2.style.display="none",this.state.isSeccion2=this.state.secciones2[0]||""):(this.elements.seccion2.style.display="flex",this.state.isSeccion2=this.state.secciones2[this.state.selector2],this.elements.seccion2Texto.textContent=this.state.isSeccion2)}updateVolumeButton(){const e=this.state.getPokemonData(),i=this.elements.botonVolumen;e.grito?i.style.display="flex":i.style.display="none"}updateTipos(){const e=this.state.getPokemonData(),i=this.elements.contenedorInfo;if(i.innerHTML="",!(!e||Object.keys(e).length===0)){if(e.tipo&&e.tipo.length>0||e.generacion!==void 0){const t=e.tipo&&e.tipo.length>0?e.tipo.map(n=>`<img src="${d.tipo[n]||"ruta/por_defecto.png"}" height="22" alt="${n}">`).join(""):"",a=d.generación[e.generacion]||d.default;let s="";if(e.generacion!==void 0){const r=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima","Octava","Novena","Décima","Undécima","Duodécima"][e.generacion-1]||e.generacion;s=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Generación</div>
            <div class="contenidoTarjeta">
              <div class="tipoGeneracionContainer">
                <img src="${a}" height="20" alt="${r} generación"><div class="generacionSpacing"></div>${r}
              </div>
            </div>
          </div>
        `}const o=t?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Tipo</div>
          <div class="contenidoTarjeta">
            <div class="tiposContainer">${t}</div>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">–</div></div>';i.innerHTML+=`
        <div class="contenedorMedidas">
          ${o}
          ${s||'<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">–</div></div>'}
        </div>
      `}if(e.genero){let t="";if(e.genero.macho>0){const a=Math.round(e.genero.macho);t+=`
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Macho">
        <div class="generoBarra">
          <div class="generoBarraMacho" style="flex-basis: ${a}%; ${a===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;"}"></div>
          ${a<100?`<div class="generoBarraVacia" style="flex-basis: ${100-a}%;"></div>`:""}
          <div class="generoPorcentaje"><span>${a}%</span></div>
        </div>
      </div>
    `}if(e.genero.hembra>0){const a=Math.round(e.genero.hembra);t+=`
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Hembra">
        <div class="generoBarra">
          <div class="generoBarraHembra" style="flex-basis: ${a}%; ${a===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;"}"></div>
          ${a<100?`<div class="generoBarraVacia" style="flex-basis: ${100-a}%;"></div>`:""}
          <div class="generoPorcentaje"><span>${a}%</span></div>
        </div>
      </div>
    `}i.innerHTML+=`
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        <div style="width: 100%;">${t}</div>
      </div>
    </div>
  `}else i.innerHTML+=`
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        Sin género
      </div>
    </div>
  `;if(e.altura!==void 0||e.peso!==void 0){let t='<div class="contenedorMedidas">';e.altura!==void 0&&(t+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Altura</div>
            <div class="contenidoTarjeta">
              <span>${e.altura} m.</span>
            </div>
          </div>
        `),e.peso!==void 0?t+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>${e.peso} kg.</span>
            </div>
          </div>
        `:t+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>??? kg</span>
            </div>
          </div>
        `,t+="</div>",i.innerHTML+=t}if(e.habilidad&&e.habilidad.length>0){const t=e.habilidad.filter(o=>!o.oculta),a=e.habilidad.filter(o=>o.oculta);let s='<div class="contenedorMedidas">';if(t.length>0){const o=t.map(r=>`<span>${r.nombre}</span><br>`).join(""),n=t.length===1?"Habilidad":"Habilidades";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}if(a.length>0){const o=a.map(r=>`<span>${r.nombre}</span><br>`).join(""),n=a.length===1?"Habilidad oculta":"Habilidades ocultas";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}s+="</div>",i.innerHTML+=s}if(e.figura!==void 0||e.color){const t=d.figura[e.figura]||d.default;let a="";e.figura!==void 0?a=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Figura</div>
            <div class="contenidoTarjeta">
              <img src="${t}" height="30" alt="Figura ${e.figura}">
            </div>
          </div>
        `:a='<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">–</div></div>';const o={Azul:"#3D8BFF",Amarillo:"#FFD700",Blanco:"#EEEEEE",Gris:"#696969",Marrón:"#B8860B",Morado:"#6A5ACD",Negro:"#000000",Rojo:"#FF6347",Rosa:"#DB7093",Verde:"#228B22"}[e.color]||"#FFFFFF";let n="";e.color?n=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Color</div>
            <div class="contenidoTarjeta">
              <div class="figuraColorContainer">
                <span class="colorMuestra" style="background-color:${o};"></span>
                ${e.color}
              </div>
            </div>
          </div>
        `:n='<div class="tarjeta"><div class="tituloTarjeta">Color</div><div class="contenidoTarjeta">–</div></div>',i.innerHTML+=`
        <div class="contenedorMedidas">
          ${a}
          ${n}
        </div>
      `}if(e.categoria||e.huevo&&e.huevo.length>0){const t=e.categoria?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Categoría</div>
          <div class="contenidoTarjeta">
            <span>Pokémon ${e.categoria}</span>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">–</div></div>';let a="";e.huevo&&e.huevo.length>0?a=e.huevo.map(o=>`<span>${typeof o=="string"?o:o.nombre}</span>`).join("<br>"):a="–";const s=`
        <div class="tarjeta">
          <div class="tituloTarjeta">Grupo huevo</div>
          <div class="contenidoTarjeta">
            <div>${a}</div>
          </div>
        </div>
      `;i.innerHTML+=`
        <div class="contenedorMedidas">
          ${t}
          ${s}
        </div>
      `}if(e.pronunciacion&&e.pronunciacion.length>0){let t="";const a=e.pronunciacion.map(s=>{let o="";s.zona==="España"?o=' <abbr title="España">(ES)</abbr>':s.zona==="Hispanoamérica"&&(o=' <abbr title="Hispanoamérica">(HA)</abbr>');let n="";return s.nota&&s.nota.length>0&&(n=s.nota.map(r=>`<ref>${r}</ref>`).join("")),`/ ${s.fonetica} /${o}${n}`}).join("<br>");t+=`
      <div class="contenedorMedidas">
      <div class="tarjeta">
        <div class="tituloTarjeta">${e.pronunciacion.length===1?"Pronunciación":"Pronunciaciones"}</div>
        <div class="contenidoTarjeta">
          <div>${a}</div>
        </div>
        </div>
        </div>
      `,i.innerHTML+=t}}}updateImage(){this.state.getPokemonData();const e=this.state.buildImageSrc(),i=this.state.getCurrentImageUrls(),t=!!i.variocolor,a=!!i.trasera||!!i.variocolorTrasera;!t&&this.state.isShiny&&(this.state.isShiny=!1),!a&&this.state.isTrasera&&(this.state.isTrasera=!1),this.updateButtonState("toggle","shiny",this.state.isShiny,t),this.updateButtonState("toggle","trasera",this.state.isTrasera,a),this.updateVolumeButton(),this.elements.imagenPokemonCuadro.onerror=()=>{this.elements.imagenPokemonCuadro.src="public/Imagen_no_disponible.svg"},this.elements.imagenPokemonCuadro.src=e||"public/Imagen_no_disponible.svg"}updateAll(){const e=this.state.getAvailableGenders(),i=this.state.getAvailableSpecialForms();c.gender.forEach(t=>{const a=e.includes(t.key),s=this.state.activeGender===t.key;this.updateButtonState("gender",t.key,s,a)}),c.special.forEach(t=>{const a=i.includes(t.key),s=this.state.activeSpecialForm===t.key;this.updateButtonState("special",t.key,s,a)}),this.updateSections(),this.updateImage(),this.updateTipos()}}const w=new k;new f(w);
