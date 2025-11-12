(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const p="Charizard",v="リザードン",f="Lizardon",k="0006",g="https://www.wikidex.net/wiki/Alcremie",w=150,m={forma:{normal:{datos:"charizard_normal",imagen:["https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210524165035/Charizard_HOME.png","https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160817212623/Charizard.png"],variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20210524164951/Charizard_HOME_variocolor.png"},megaX:{datos:"charizard_megaX",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20210524164940/Mega-Charizard_X_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164741/Mega-Charizard_X_HOME_variocolor.png"},megaY:{datos:"charizard_megaY",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20210524164716/Mega-Charizard_Y_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/b/bb/latest/20210524164852/Mega-Charizard_Y_HOME_variocolor.png"},giga:{datos:"charizard_giga",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20200214184340/Charizard_Gigamax_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20200214193200/Charizard_Gigamax_HOME_variocolor.png"}},info:{charizard_normal:{tipo:["Fuego","Volador"],altura:"1'7",peso:"90'5",habilidad:[{nombre:"Mar llamas"},{nombre:"Poder solar",oculta:!0}],genero:{macho:"87.5",hembra:"12.5"},generacion:"1",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20240213073305/Grito_de_Charizard.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"'cha.ri.zard"}]},charizard_megaX:{tipo:["Fuego","Dragón"],altura:"1'7",peso:"110'5",habilidad:[{nombre:"Garra dura"}],genero:{macho:"87.5",hembra:"12.5"},generacion:"6",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/2/2e/latest/20140217185652/Grito_de_Mega-Charizard_X.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"'cha.ri.zard"}]},charizard_megaY:{tipo:["Fuego","Volador"],altura:"1'7",peso:"100'5",habilidad:[{nombre:"Sequía"}],genero:{macho:"87.5",hembra:"12.5"},generacion:"6",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"'cha.ri.zard"}]},charizard_giga:{tipo:["Fuego","Volador"],altura:"1'7",habilidad:[{nombre:"Sequía"}],genero:{macho:"87.5",hembra:"12.5"},generacion:"8",categoria:["Llama"],figura:"6",huevo:["Monstruo","Dragón"],grito:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",color:["Rojo","Negro"],pronunciacion:[{fonetica:"'cha.ri.zard"}]}}},c={tipo:{Acero:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20221208180543/Tipo_acero_EP.png",Agua:"https://images.wikidexcdn.net/mwuploads/wikidex/5/59/latest/20221208180426/Tipo_agua_EP.png",Bicho:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20221208180434/Tipo_bicho_EP.png",Dragón:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png",Eléctrico:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png",Fantasma:"https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20221208180503/Tipo_fantasma_EP.png",Fuego:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20221208180625/Tipo_fuego_EP.png",Hada:"https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20221208180633/Tipo_hada_EP.png",Hielo:"https://images.wikidexcdn.net/mwuploads/wikidex/1/17/latest/20221208180641/Tipo_hielo_EP.png",Lucha:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20221208180651/Tipo_lucha_EP.png",Normal:"https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20221208180705/Tipo_normal_EP.png",Planta:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20221208180710/Tipo_planta_EP.png",Psíquico:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png",Roca:"https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20221208180726/Tipo_roca_EP.png",Siniestro:"https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20221208180734/Tipo_siniestro_EP.png",Tierra:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20221208180742/Tipo_tierra_EP.png",Veneno:"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20221208180751/Tipo_veneno_EP.png",Volador:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20221208180800/Tipo_volador_EP.png",Astral:"https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20231216092909/Tipo_astral_EP.png"},color:{Acero:"#cccccc",Agua:"#b0e2ff",Bicho:"#99cc33",Dragón:"#ab82ff",Eléctrico:"#ffd700",Fantasma:"#778899",Fuego:"#ff7f00",Hada:"#ffb0ff",Hielo:"#add8e6",Lucha:"#ff6a6a",Normal:"#ddccaa",Planta:"#99ff66",Psíquico:"#ffb5c5",Roca:"#cd853f",Siniestro:"#a9a9a9",Tierra:"#deb887",Veneno:"#cc88bb",Volador:"#baaaff",Astral:"#f1f7fb"},figura:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20200214140440/Figura_1.png",2:"https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20200214140740/Figura_2.png",3:"https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20200214140905/Figura_3.png",4:"https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20200214141009/Figura_4.png",5:"https://images.wikidexcdn.net/mwuploads/wikidex/2/21/latest/20200214141122/Figura_5.png",6:"https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20200214141238/Figura_6.png",7:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c7/latest/20200214141337/Figura_7.png",8:"https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20200214141425/Figura_8.png",9:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20200214141545/Figura_9.png",10:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20200214141655/Figura_10.png",11:"https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20200214141809/Figura_11.png",12:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20200214141912/Figura_12.png",13:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20200214142011/Figura_13.png",14:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20200214142056/Figura_14.png"},generación:{1:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20241019145047/Primera_generaci%C3%B3n.svg",2:"https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20241019145155/Segunda_generaci%C3%B3n.svg",3:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20241019145242/Tercera_generaci%C3%B3n.svg",4:"https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20241019145319/Cuarta_generaci%C3%B3n.svg",5:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20241019145355/Quinta_generaci%C3%B3n.svg",6:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20241019145423/Sexta_generaci%C3%B3n.svg",7:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20241019145454/S%C3%A9ptima_generaci%C3%B3n.svg",8:"https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20241019145522/Octava_generaci%C3%B3n.svg",9:"https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20241019145549/Novena_generaci%C3%B3n.svg"},icono:{macho:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",hembra:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",trasera:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",mega:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",megaX:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",megaY:"https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",giga:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",grito:"https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20251112155152/Grito_Pok%C3%A9mon_%28Wikidex%29.svg",artwork:"./palette.svg",galeria:"./photo.svg"},default:"https://images.wikidexcdn.net/mwuploads/wikidex/d/da/latest/20081011120239/Imagen_no_disponible.svg"},u={gender:[{id:"btnMacho",key:"macho",color:"azulColor",icon:c.icono.macho,size:"50px"},{id:"btnHembra",key:"hembra",color:"rojoColor",icon:c.icono.hembra,size:"50px"}],special:[{id:"btnMega",key:"mega",color:"megaColor",icon:c.icono.mega,size:"40px"},{id:"btnMegaX",key:"megaX",color:"megaXColor",icon:c.icono.megaX,size:"40px"},{id:"btnMegaY",key:"megaY",color:"megaYColor",icon:c.icono.megaY,size:"40px"},{id:"btnGiga",key:"giga",color:"gigamaxColor",icon:c.icono.giga,size:"28px"}],toggle:[{id:"btnShiny",key:"shiny",color:"amarilloColor",icon:c.icono.variocolor,size:"40px"},{id:"btnTrasera",key:"trasera",color:"verdeColor",icon:c.icono.trasera,size:"25px"}]};class x{constructor(){this.forma=m.forma,this.info=m.info,this.pokemon="Pikachu",this.activeGender="",this.activeSpecialForm="",this.isShiny=!1,this.isTrasera=!1,this.isArtwork=localStorage.getItem("preferArtwork")==="true",this.selector1=0,this.selector2=0,this.secciones1=[],this.secciones2=[],this.isSeccion1="",this.isSeccion2="",this.lastSeccion2Name="",this.currentAudio=null,this.isLoadingAudio=!1;const e=this.getAvailableGenders();e.length>0&&(this.activeGender=e[0]),this.initializeSections()}initializeSections(){this.secciones1=this.getAvailableSections(),this.secciones1.length>0&&(this.isSeccion1=this.secciones1[0],this.secciones2=this.getAvailableSubsections(this.isSeccion1),this.secciones2.length>0&&(this.isSeccion2=this.secciones2[0],this.lastSeccion2Name=this.isSeccion2))}getAvailableGenders(){if(!this._cachedGenders){const e=Object.keys(this.forma);if(e.includes("nogen"))return this._cachedGenders=[],this._cachedGenders;if(e.includes("normal")){if(this._cachedGenders=["macho","hembra"],!this.forma._duplicatedNormal){const t=this.forma.normal;this.forma.macho||(this.forma.macho=t),this.forma.hembra||(this.forma.hembra=t),this.forma._duplicatedNormal=!0}return this._cachedGenders}this._cachedGenders=e.filter(t=>t==="macho"||t==="hembra").filter(t=>this.forma[t]&&this.forma[t]!=="")}return this._cachedGenders}getAvailableSpecialForms(){return["mega","megaX","megaY","giga"].filter(t=>this.forma.hasOwnProperty(t)&&this.forma[t]!=="")}shouldHideSections(){return["mega","megaX","megaY","giga"].includes(this.activeSpecialForm)}getCurrentFormaNode(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm])return this.forma[this.activeSpecialForm];{const e=this.getAvailableGenders();return e.length>0&&this.activeGender?this.forma[this.activeGender]:e.length>0?(this.activeGender=e[0],this.forma[this.activeGender]):this.forma}}getAvailableSections(){const e=this.getCurrentFormaNode();if(!e||typeof e=="string")return[];const t=["mega","megaX","megaY","giga","primigenio","origen"];return e.datos!==void 0?[]:Object.keys(e).filter(a=>!t.includes(a))}getAvailableSubsections(e){const t=this.getCurrentFormaNode();if(!t||typeof t=="string")return[];const a=t[e];return!a||typeof a=="string"?[]:a.datos!==void 0?[]:Object.keys(a)}getPokemonData(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const i=this.forma[this.activeSpecialForm],s=typeof i=="string"?i:i.datos;return this.info[s]||{}}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0&&typeof e.datos=="string")return this.info[e.datos]||{};const t=e[this.isSeccion1];if(!t)return{};if(typeof t=="string")return this.info[t]||{};if(t.datos!==void 0)return this.info[t.datos]||{};const a=t[this.isSeccion2];if(a){if(typeof a=="string")return this.info[a]||{};if(a.datos!==void 0)return this.info[a.datos]||{}}return{}}getCurrentImageUrls(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const i=this.forma[this.activeSpecialForm];return typeof i=="string"?{}:i}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0)return e;const t=e[this.isSeccion1];if(!t)return{};if(typeof t=="string")return{};if(t.datos!==void 0)return t;const a=t[this.isSeccion2];return a?typeof a=="string"?{}:a:{}}buildImageSrc(){const e=this.getCurrentImageUrls(),t=i=>i?typeof i=="string"?i:Array.isArray(i)?i.length===0?null:i.length===1?i[0]:this.isArtwork?i[1]:i[0]:null:null;if(this.isTrasera&&this.isShiny){const i=t(e.variocolorTrasera);if(i)return i}if(this.isTrasera){const i=t(e.trasera);if(i)return i}if(this.isShiny){const i=t(e.variocolor);if(i)return i}const a=t(e.imagen);return a||""}playAudio(e){try{const t=new Audio(`public/audio/${e}`);t.play().catch(a=>{}),this.currentAudio=t}catch{}}}class b{constructor(e){this.state=e,this.initializeHTML(),this.elements=this.getElements(),this.setupEventListeners(),this.updateAll(),this.imageLoading=!1,window.addEventListener("resize",()=>this.handleResize())}getElements(){const e={imagenPokemonCuadro:document.querySelector("#imagenPokemonCuadro"),contenedorPokemon:document.querySelector(".contenedorPokemon"),seccion1:document.querySelector("#seccion1"),seccion2:document.querySelector("#seccion2"),seccion1Texto:document.querySelector("#seccion1Texto"),seccion2Texto:document.querySelector("#seccion2Texto"),contenedorInfo:document.querySelector("#contenedorInfo"),botonVolumen:document.querySelector("#botonVolumen"),botonArtwork:document.querySelector("#botonArtwork"),botonEnlace:document.querySelector("#botonEnlace"),loadingIndicator:document.querySelector("#loadingIndicator")};return[...u.gender,...u.special,...u.toggle].forEach(a=>{e[a.key]=document.querySelector(`#${a.id}`)}),Object.entries({btnSec1Mas:"sec1mas",btnSec1Menos:"sec1menos",btnSec2Mas:"sec2mas",btnSec2Menos:"sec2menos"}).forEach(([a,i])=>{e[i]=document.querySelector(`#${a}`)}),e}initializeHTML(){const e=this.getBackgroundColor();document.querySelector("#app").innerHTML=`
      <div class="contenedorPokemon" style="background:${e}">
        <div class="tituloPokemon">${p}</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">${v} (${f})</div>
          <div class="numeroPokemon">#${k}</div>
        </div>
        <div>
        <div class="contenidoPokemon">
        <div class="contenedorImagen">
  <div class="imagenWrapper">
    <img id="imagenPokemonCuadro" class="imagenPokemon" src="${c.default}" height="200;">
    
    <div id="loadingIndicator" class="loadingIndicator" style="display:none;">
      <div class="spinner"></div>
    </div>
  </div>

  <div id="botonArtwork" class="circuloExterno botonEsquinaSupIzq">
    <div class="circuloMedio artworkColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${c.icono.artwork}" alt="Artwork" style="height:28px">
      </div>
    </div>
  </div>

  <div id="botonEnlace" class="circuloExterno botonEsquinaInfIzq">
    <div class="circuloMedio enlaceColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${c.icono.galeria}" alt="Enlace" style="height:28px">
      </div>
    </div>
  </div>
  
  <div id="botonVolumen" class="circuloExterno botonEsquinaSupDer" style="display:none;">
  <div class="circuloMedio gritoColor transparente">
    <div class="circuloInterno">
      <img class="iconoSVG" src="${c.icono.grito}" alt="Volumen" style="height:28px">
    </div>
  </div>
</div>

  <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(u.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(u.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(u.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
        </div>
      </div>
    `}generateButtons(e){return e.map(t=>`
      <div id="${t.id}" class="circuloExterno">
        <div class="circuloMedio ${t.color} transparenteBoton">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${t.icon}" alt="${t.key}" style="height:${t.size}">
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
    `}setupEventListeners(){var e,t,a,i,s,o,r,n;u.gender.forEach(l=>{var d;(d=this.elements[l.key])==null||d.addEventListener("click",()=>{this.handleGenderClick(l.key)})}),u.special.forEach(l=>{var d;(d=this.elements[l.key])==null||d.addEventListener("click",()=>{this.handleSpecialFormClick(l.key)})}),u.toggle.forEach(l=>{var d;(d=this.elements[l.key])==null||d.addEventListener("click",()=>{this.handleToggleClick(l.key)})}),(e=this.elements.sec1mas)==null||e.addEventListener("click",()=>this.navigateSection(1,1)),(t=this.elements.sec1menos)==null||t.addEventListener("click",()=>this.navigateSection(1,-1)),(a=this.elements.sec2mas)==null||a.addEventListener("click",()=>this.navigateSection(2,1)),(i=this.elements.sec2menos)==null||i.addEventListener("click",()=>this.navigateSection(2,-1)),(s=this.elements.botonVolumen)==null||s.addEventListener("click",()=>{const l=this.state.getPokemonData();if(this.state.currentAudio&&!this.state.currentAudio.paused){this.state.currentAudio.pause(),this.state.currentAudio.currentTime=0,this.state.currentAudio=null,this.state.isLoadingAudio=!1,this.updateVolumeButton();return}if(!this.state.isLoadingAudio&&l.grito&&l.grito.startsWith("https://")){this.state.isLoadingAudio=!0,this.updateVolumeButton();const d=new Audio;d.addEventListener("canplaythrough",()=>{this.state.isLoadingAudio=!1,d.play().then(()=>{this.updateVolumeButton()}).catch(()=>{this.state.isLoadingAudio=!1,this.state.currentAudio=null,this.updateVolumeButton()})},{once:!0}),d.addEventListener("error",()=>{this.state.isLoadingAudio=!1,this.state.currentAudio=null,this.updateVolumeButton()}),d.addEventListener("play",()=>{this.updateVolumeButton()}),d.addEventListener("pause",()=>{this.updateVolumeButton()}),d.addEventListener("ended",()=>{this.state.currentAudio=null,this.updateVolumeButton()}),d.src=l.grito,this.state.currentAudio=d}}),(o=this.elements.botonArtwork)==null||o.addEventListener("click",()=>{this.state.isArtwork=!this.state.isArtwork,localStorage.setItem("preferArtwork",this.state.isArtwork),this.updateAll()}),(r=this.elements.botonEnlace)==null||r.addEventListener("click",()=>{window.location.href=g}),(n=this.elements.botonEnlace)==null||n.addEventListener("click",()=>{window.open(g,"_blank")})}handleVolumeClick(){const e=this.state.getPokemonData();e.grito&&this.state.playAudio(e.grito)}handleResize(){this.updateTipos()}getBackgroundColor(){const e=this.state.getPokemonData();return!e.tipo||e.tipo.length===0?"#f4f4f4ff":e.tipo.length===1?c.color[e.tipo[0]]||"#FFFFFF":`linear-gradient(to right, ${e.tipo.map(a=>c.color[a]||"#FFFFFF").join(", ")})`}updateBackgroundColor(){const e=this.getBackgroundColor();this.elements.contenedorPokemon&&(this.elements.contenedorPokemon.style.background=e)}handleGenderClick(e){this.state.getAvailableGenders().includes(e)&&(this.state.activeGender=e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll())}handleSpecialFormClick(e){this.state.activeSpecialForm=this.state.activeSpecialForm===e?"":e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll()}handleToggleClick(e){const t=this.state.getCurrentImageUrls(),a=!!t.variocolor,i=!!t.trasera||!!t.variocolorTrasera;e==="shiny"&&!a||e==="trasera"&&!i||(this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`]=!this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`],this.updateAll())}handleArtworkClick(){this.state.isArtwork=!this.state.isArtwork,this.updateAll()}playAudio(e){try{const t=new Audio(e);t.play().catch(),this.currentAudio=t}catch(t){console.log(t)}}navigateSection(e,t){const a=`selector${e}`,i=`secciones${e}`;if(this.state[a]=(this.state[a]+t+this.state[i].length)%this.state[i].length,e===1){const s=this.state.lastSeccion2Name;this.state.secciones2=this.state.getAvailableSubsections(this.state.secciones1[this.state.selector1]);const o=this.state.secciones2.findIndex(r=>r===s);o!==-1?this.state.selector2=o:this.state.selector2=0,this.state.secciones2.length>0&&(this.state.lastSeccion2Name=this.state.secciones2[this.state.selector2])}else this.state.secciones2.length>0&&(this.state.lastSeccion2Name=this.state.secciones2[this.state.selector2]);this.updateSections(),this.updateImage(),this.updateTipos(),this.updateBackgroundColor()}updateButtonState(e,t,a,i){var r;const s=this.elements[t];if(!s)return;const o=(r=u[e])==null?void 0:r.find(n=>n.key===t);o&&(i?(s.style.pointerEvents="auto",a?(s.className=`circuloExterno ${o.color}`,s.querySelector(".circuloMedio").className="circuloMedio",s.querySelector(".circuloInterno").className=`circuloInterno ${o.color}`,s.querySelector(".iconoSVG").className="iconoSVG blanco"):(s.className="circuloExterno",s.querySelector(".circuloMedio").className=`circuloMedio ${o.color} transparenteBoton`,s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG")):(s.className="circuloExterno botonDeshabilitado",s.querySelector(".circuloMedio").className="circuloMedio grisColor",s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG deshabilitado",s.style.pointerEvents="none"))}updateSections(){if(this.state.shouldHideSections()){this.elements.seccion1.style.display="none",this.elements.seccion2.style.display="none",this.state.isSeccion1="",this.state.isSeccion2="";return}this.state.secciones1=this.state.getAvailableSections(),this.state.selector1>=this.state.secciones1.length&&(this.state.selector1=0),this.state.secciones1.length<=1?(this.elements.seccion1.style.display="none",this.state.isSeccion1=this.state.secciones1[0]||"normal"):(this.elements.seccion1.style.display="flex",this.state.isSeccion1=this.state.secciones1[this.state.selector1],this.elements.seccion1Texto.textContent=this.state.isSeccion1==="normal"?"Común":this.state.isSeccion1),this.state.secciones2=this.state.getAvailableSubsections(this.state.isSeccion1),this.state.selector2>=this.state.secciones2.length&&(this.state.selector2=0),this.state.secciones2.length<=1?(this.elements.seccion2.style.display="none",this.state.isSeccion2=this.state.secciones2[0]||""):(this.elements.seccion2.style.display="flex",this.state.isSeccion2=this.state.secciones2[this.state.selector2],this.elements.seccion2Texto.textContent=this.state.isSeccion2)}updateVolumeButton(){const e=this.state.getPokemonData(),t=this.elements.botonVolumen;if(!e.grito){t.style.display="none";return}t.style.display="flex";const a=t.querySelector(".circuloMedio"),i=t.querySelector(".circuloInterno"),s=t.querySelector("img");if(this.state.isLoadingAudio){t.className="circuloExterno botonEsquinaSupDer",a.className="circuloMedio gritoColor transparenteBoton",i.className="circuloInterno",s.style.display="none";let n=t.querySelector(".audio-spinner");n||(n=document.createElement("div"),n.className="audio-spinner",i.appendChild(n)),n.style.display="block";return}const o=t.querySelector(".audio-spinner");o&&(o.style.display="none"),s.style.display="block",this.state.currentAudio&&!this.state.currentAudio.paused?(t.className="circuloExterno botonEsquinaSupDer gritoColor",a.className="circuloMedio",i.className="circuloInterno gritoColor",s.className="iconoSVG blanco"):(t.className="circuloExterno botonEsquinaSupDer",a.className="circuloMedio gritoColor transparenteBoton",i.className="circuloInterno",s.className="iconoSVG",s.src=c.icono.grito)}updateArtworkButton(){const e=this.elements.botonArtwork;e.style.display="flex";const t=e.querySelector(".circuloMedio"),a=e.querySelector(".circuloInterno"),i=e.querySelector("img");this.state.isArtwork?(e.className="circuloExterno botonEsquinaSupIzq artworkColor",t.className="circuloMedio",a.className="circuloInterno artworkColor",i.className="iconoSVG blanco"):(e.className="circuloExterno botonEsquinaSupIzq",t.className="circuloMedio artworkColor transparenteBoton",a.className="circuloInterno",i.className="iconoSVG")}updateTipos(){const e=this.state.getPokemonData(),t=this.elements.contenedorInfo;if(t.innerHTML="",!(!e||Object.keys(e).length===0)){if(e.tipo&&e.tipo.length>0||e.generacion!==void 0){const a=e.tipo&&e.tipo.length>0?e.tipo.map(r=>`<img src="${c.tipo[r]||"ruta/por_defecto.png"}" height="22" alt="${r}">`).join(""):"",i=c.generación[e.generacion]||c.default;let s="";if(e.generacion!==void 0){const n=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima","Octava","Novena","Décima","Undécima","Duodécima"][e.generacion-1]||e.generacion;s=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Generación</div>
            <div class="contenidoTarjeta">
              <div class="tipoGeneracionContainer">
                <img src="${i}" height="20" alt="${n} generación"><div class="generacionSpacing"></div>${n}
              </div>
            </div>
          </div>
        `}const o=a?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Tipo</div>
          <div class="contenidoTarjeta">
            <div class="tiposContainer">${a}</div>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">–</div></div>';t.innerHTML+=`
        <div class="contenedorMedidas">
          ${o}
          ${s||'<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">–</div></div>'}
        </div>
      `}if(e.genero){let a="";if(e.genero.macho>0){const i=parseFloat(e.genero.macho);a+=`
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Macho">
        <div class="generoBarra">
          <div class="generoBarraMacho" style="flex-basis: ${i}%; ${i===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;"}"></div>
          ${i<100?`<div class="generoBarraVacia" style="flex-basis: ${100-i}%;"></div>`:""}
          <div class="generoPorcentaje"><span>${i.toString().replace(".","'")}%</span></div>
        </div>
      </div>
    `}if(e.genero.hembra>0){const i=parseFloat(e.genero.hembra);a+=`
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Hembra">
        <div class="generoBarra">
          <div class="generoBarraHembra" style="flex-basis: ${i}%; ${i===100?"border-radius: 5px;":"border-top-left-radius: 5px; border-bottom-left-radius: 5px;"}"></div>
          ${i<100?`<div class="generoBarraVacia" style="flex-basis: ${100-i}%;"></div>`:""}
          <div class="generoPorcentaje"><span>${i.toString().replace(".","'")}%</span></div>
        </div>
      </div>
    `}t.innerHTML+=`
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        <div style="width: 100%;">${a}</div>
      </div>
    </div>
  `}else t.innerHTML+=`
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        Sin género
      </div>
    </div>
  `;if(e.altura!==void 0||e.peso!==void 0){let a='<div class="contenedorMedidas">';e.altura!==void 0&&(a+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Altura</div>
            <div class="contenidoTarjeta">
              <span>${e.altura} m</span>
            </div>
          </div>
        `),e.peso!==void 0?a+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>${e.peso} kg</span>
            </div>
          </div>
        `:a+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>??? kg</span>
            </div>
          </div>
        `,a+="</div>",t.innerHTML+=a}if(e.habilidad&&e.habilidad.length>0){const a=e.habilidad.filter(o=>!o.oculta),i=e.habilidad.filter(o=>o.oculta);let s='<div class="contenedorMedidas">';if(a.length>0){const o=a.map(n=>`<span>${n.nombre}</span><br>`).join(""),r=a.length===1?"Habilidad":"Habilidades";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${r}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}if(i.length>0){const o=i.map(n=>`<span>${n.nombre}</span><br>`).join(""),r=i.length===1?"Habilidad oculta":"Habilidades ocultas";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${r}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}s+="</div>",t.innerHTML+=s}if(e.figura!==void 0||e.color){const a=c.figura[e.figura]||c.default;let i="";e.figura!==void 0?i=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Figura</div>
            <div class="contenidoTarjeta">
              <img src="${a}" height="30" alt="Figura ${e.figura}">
            </div>
          </div>
        `:i='<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">–</div></div>';const s={Azul:"#3D8BFF",Amarillo:"#FFD700",Blanco:"#EEEEEE",Gris:"#696969",Marrón:"#B8860B",Morado:"#6A5ACD",Negro:"#000000",Rojo:"#FF6347",Rosa:"#DB7093",Verde:"#228B22"};s[e.color];let o="";if(e.color){const r=Array.isArray(e.color)?e.color:[e.color],n=r.map(d=>`<span class="colorMuestra" style="background-color:${s[d]||"#FFFFFF"};"></span><span>${d}</span>`).join("");o=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${r.length===1?"Color":"Colores"}</div>
            <div class="contenidoTarjeta">
              <div class="colorContenedor">${n}</div>
            </div>
          </div>
        `}else o='<div class="tarjeta"><div class="tituloTarjeta">Color</div><div class="contenidoTarjeta">—</div></div>';t.innerHTML+=`
        <div class="contenedorMedidas">
          ${i}
          ${o}
        </div>
      `}if(e.categoria||e.huevo&&e.huevo.length>0){let a="";e.categoria?a=`
      <div class="tarjeta">
        <div class="tituloTarjeta">Categoría</div>
        <div class="contenidoTarjeta">
          <div>${(Array.isArray(e.categoria)?e.categoria:[e.categoria]).map(n=>{if(typeof n=="string")return`<span>Pokémon ${n}</span>`;{const l=n.nota?n.nota.map(d=>`<ref>${d}</ref>`).join(""):"";return`<span>Pokémon ${n.nombre||n.valor||n}${l}</span>`}}).join("<br>")}</div>
        </div>
      </div>
    `:a='<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">—</div></div>';let i="";e.huevo&&e.huevo.length>0?i=e.huevo.map(o=>{if(typeof o=="string")return`<span>${o}</span>`;{const r=o.nota?o.nota.map(n=>`<ref>${n}</ref>`).join(""):"";return`<span>${o.nombre||o}${r}</span>`}}).join("<br>"):i="—";const s=`
    <div class="tarjeta">
      <div class="tituloTarjeta">Grupo huevo</div>
      <div class="contenidoTarjeta">
        <div>${i}</div>
      </div>
    </div>
  `;t.innerHTML+=`
    <div class="contenedorMedidas">
      ${a}
      ${s}
    </div>
  `}if(e.pronunciacion&&e.pronunciacion.length>0){let a="";const i=e.pronunciacion.map(s=>{let o="";s.zona==="España"?o=' <abbr title="España">(ES)</abbr>':s.zona==="Hispanoamérica"&&(o=' <abbr title="Hispanoamérica">(HA)</abbr>');let r="";return s.nota&&s.nota.length>0&&(r=s.nota.map(n=>`<ref>${n}</ref>`).join("")),`/ ${s.fonetica} /${o}${r}`}).join("<br>");a+=`
      <div class="contenedorMedidas">
      <div class="tarjeta">
        <div class="tituloTarjeta">${e.pronunciacion.length===1?"Pronunciación":"Pronunciaciones"}</div>
        <div class="contenidoTarjeta">
          <div>${i}</div>
        </div>
        </div>
        </div>
      `,t.innerHTML+=a}}}updateImage(){this.state.getPokemonData();const e=this.state.buildImageSrc(),t=this.state.getCurrentImageUrls(),a=!!t.variocolor,i=!!t.trasera||!!t.variocolorTrasera;!a&&this.state.isShiny&&(this.state.isShiny=!1),!i&&this.state.isTrasera&&(this.state.isTrasera=!1),this.updateButtonState("toggle","shiny",this.state.isShiny,a),this.updateButtonState("toggle","trasera",this.state.isTrasera,i),this.updateVolumeButton(),this.updateArtworkButton();const s=new Image;let o=!1,r;r=setTimeout(()=>{this.showLoadingIndicator()},w),s.onload=()=>{o||(clearTimeout(r),this.elements.imagenPokemonCuadro.src=e,this.hideLoadingIndicator(!1))},s.onerror=()=>{o=!0,clearTimeout(r);const n=new Image;n.onload=()=>{this.elements.imagenPokemonCuadro.src=c.default,this.hideLoadingIndicator(!1)},n.onerror=()=>{this.hideLoadingIndicator(!0)},n.src=c.default},s.src=e||c.default}showLoadingIndicator(){const e=this.elements.loadingIndicator;e&&(e.style.display="flex",e.classList.remove("error"),this.imageLoading=!0)}hideLoadingIndicator(e=!1){const t=this.elements.loadingIndicator;t&&(e?(t.classList.add("error"),setTimeout(()=>{t.style.display="none",t.classList.remove("error"),this.imageLoading=!1},2e3)):(t.style.display="none",this.imageLoading=!1))}showLoadingIndicator(){const e=this.elements.loadingIndicator;e.style.display="flex",e.classList.remove("error"),this.imageLoading=!0}hideLoadingIndicator(e=!1){const t=this.elements.loadingIndicator;e?(t.classList.add("error"),setTimeout(()=>{t.style.display="none",t.classList.remove("error"),this.imageLoading=!1},2e3)):(t.style.display="none",this.imageLoading=!1)}updateAll(){const e=this.state.getAvailableGenders(),t=this.state.getAvailableSpecialForms();u.gender.forEach(a=>{const i=e.includes(a.key),s=this.state.activeGender===a.key;this.updateButtonState("gender",a.key,s,i)}),u.special.forEach(a=>{const i=t.includes(a.key),s=this.state.activeSpecialForm===a.key;this.updateButtonState("special",a.key,s,i)}),this.updateSections(),this.updateImage(),this.updateTipos(),this.updateBackgroundColor()}}const y=new x;new b(y);
