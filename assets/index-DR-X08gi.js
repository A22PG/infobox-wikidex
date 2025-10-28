(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const d={forma:{macho:{normal:{datos:"pikachu_normal",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20200214192043/Pikachu_HOME.png",variocolor:"https://images.wikidexcdn.net/mwuploads/wikidex/a/af/latest/20170907162616/Pikachu_Kalos.png"},"Con gorra":{Original:{datos:"pikachu_gorra",imagen:"public/pikachu_gorra_HOME.png",variocolor:!1},Hoenn:{datos:"pikachu_gorra",imagen:"public/pikachu_gorra_HOME.png",variocolor:!1}}},hembra:{datos:"pikachu_normal",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20200214185804/Pikachu_HOME_hembra.png",variocolor:"public/pikachu_normal_variocolor_HOME.png"},giga:{datos:"pikachu_giga",imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/d/d8/latest/20191016155951/Pikachu_Gigamax.png"},mega:""},info:{pikachu_normal:{tipo:["Eléctrico","Eléctrico"],altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Otro"},{nombre:"Pararrayos",oculta:!0}],generacion:"1",categoria:"Ratón",figura:"8",huevo:["Campo","Hada"],grito:"Grito_de_Pikachu_en_la_sexta_generación.mp3",genero:{macho:"80",hembra:"49"},color:"Amarillo",pronunciacion:[{fonetica:"pi.ˈka.chu",zona:"España"},{fonetica:"ˈpi.ka.chu",zona:"Hispanoamérica",nota:["Nota 1","Nota 2"]}]},pikachu_gorra:{tipo:["Eléctrico"],variocolor:!1,altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"7",categoria:"Ratón",figura:"8",grito:"Grito_de_Hitmonlee.mp3"},pikachu_giga:{tipo:["Eléctrico"],altura:21,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"8",categoria:"Ratón"}}},r={gender:[{id:"btnMacho",key:"macho",color:"azulColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",size:"50px"},{id:"btnHembra",key:"hembra",color:"rojoColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",size:"50px"}],special:[{id:"btnMega",key:"mega",color:"megaColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",size:"40px"},{id:"btnMegaX",key:"megaX",color:"megaXColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",size:"40px"},{id:"btnMegaY",key:"megaY",color:"megaYColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",size:"40px"},{id:"btnGiga",key:"giga",color:"gigamaxColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",size:"28px"}],toggle:[{id:"btnShiny",key:"shiny",color:"amarilloColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",size:"40px"},{id:"btnTrasera",key:"trasera",color:"verdeColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",size:"25px"}]};class u{constructor(){this.forma=d.forma,this.info=d.info,this.pokemon="Pikachu",this.activeGender="",this.activeSpecialForm="",this.isShiny=!1,this.isTrasera=!1,this.selector1=0,this.selector2=0,this.secciones1=[],this.secciones2=[],this.isSeccion1="",this.isSeccion2="",this.currentAudio=null;const e=this.getAvailableGenders();e.length>0&&(this.activeGender=e[0]),this.initializeSections()}initializeSections(){this.secciones1=this.getAvailableSections(),this.secciones1.length>0&&(this.isSeccion1=this.secciones1[0],this.secciones2=this.getAvailableSubsections(this.isSeccion1),this.secciones2.length>0&&(this.isSeccion2=this.secciones2[0]))}getAvailableGenders(){return Object.keys(this.forma).filter(e=>e==="macho"||e==="hembra").filter(e=>this.forma.hasOwnProperty(e)&&this.forma[e]!=="")}getAvailableSpecialForms(){return["mega","megaX","megaY","giga","primigenio","origen"].filter(t=>this.forma.hasOwnProperty(t)&&this.forma[t]!=="")}shouldHideSections(){return["mega","megaX","megaY","giga"].includes(this.activeSpecialForm)}getCurrentFormaNode(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm])return this.forma[this.activeSpecialForm];{const e=this.getAvailableGenders();return e.length>0&&this.activeGender?this.forma[this.activeGender]:e.length>0?(this.activeGender=e[0],this.forma[this.activeGender]):this.forma}}getAvailableSections(){const e=this.getCurrentFormaNode();if(!e||typeof e=="string")return[];const t=["mega","megaX","megaY","giga","primigenio","origen"];return e.datos!==void 0?[]:Object.keys(e).filter(i=>!t.includes(i))}getAvailableSubsections(e){const t=this.getCurrentFormaNode();if(!t||typeof t=="string")return[];const i=t[e];return!i||typeof i=="string"?[]:i.datos!==void 0?[]:Object.keys(i)}getPokemonData(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const s=this.forma[this.activeSpecialForm],a=typeof s=="string"?s:s.datos;return this.info[a]||{}}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0&&typeof e.datos=="string")return this.info[e.datos]||{};const t=e[this.isSeccion1];if(!t)return{};if(typeof t=="string")return this.info[t]||{};if(t.datos!==void 0)return this.info[t.datos]||{};const i=t[this.isSeccion2];if(i){if(typeof i=="string")return this.info[i]||{};if(i.datos!==void 0)return this.info[i.datos]||{}}return{}}getCurrentImageUrls(){if(this.activeSpecialForm&&this.forma[this.activeSpecialForm]){const s=this.forma[this.activeSpecialForm];return typeof s=="string"?{}:s}const e=this.getCurrentFormaNode();if(!e)return{};if(e.datos!==void 0)return e;const t=e[this.isSeccion1];if(!t)return{};if(typeof t=="string")return{};if(t.datos!==void 0)return t;const i=t[this.isSeccion2];return i?typeof i=="string"?{}:i:{}}buildImageSrc(){const e=this.getCurrentImageUrls();return this.isTrasera&&this.isShiny&&e.variocolorTrasera?e.variocolorTrasera:this.isTrasera&&e.trasera?e.trasera:this.isShiny&&e.variocolor?e.variocolor:e.imagen?e.imagen:""}playAudio(e){try{const t=new Audio(`public/audio/${e}`);t.play().catch(i=>{}),this.currentAudio=t}catch{}}}class h{constructor(e){this.state=e,this.initializeHTML(),this.elements=this.getElements(),this.setupEventListeners(),this.updateAll(),window.addEventListener("resize",()=>this.handleResize())}getElements(){const e={imagenPokemonCuadro:document.querySelector("#imagenPokemonCuadro"),seccion1:document.querySelector("#seccion1"),seccion2:document.querySelector("#seccion2"),seccion1Texto:document.querySelector("#seccion1Texto"),seccion2Texto:document.querySelector("#seccion2Texto"),contenedorInfo:document.querySelector("#contenedorInfo"),botonVolumen:document.querySelector("#botonVolumen")};return[...r.gender,...r.special,...r.toggle].forEach(i=>{e[i.key]=document.querySelector(`#${i.id}`)}),Object.entries({btnSec1Mas:"sec1mas",btnSec1Menos:"sec1menos",btnSec2Mas:"sec2mas",btnSec2Menos:"sec2menos"}).forEach(([i,s])=>{e[s]=document.querySelector(`#${i}`)}),e}initializeHTML(){document.querySelector("#app").innerHTML=`
      <div class="contenedorPokemon">
        <div class="tituloPokemon">'''Pikachu'''</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">ピカチュウ (Pikachu)</div>
          <div class="numeroPokemon">#0025</div>
        </div>
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
              ${this.generateButtons(r.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(r.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(r.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
      </div>
    `}generateButtons(e){return e.map(t=>`
      <div id="${t.id}" class="circuloExterno">
        <div class="circuloMedio ${t.color} transparente">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${t.icon}" alt="${t.key}" style="height:${t.size}">
          </div>
        </div>
      </div>
    `).join("")}generateSectionControls(){return`
      <div id="seccion1" class="seccionControles">
        <div id="btnSec1Menos" class="seccionSelector">
          <span>↑</span>
        </div>
        <div id="seccion1Texto" class="textoSeccion">Común</div>
        <div id="btnSec1Mas" class="seccionSelector">
          <span>↓</span>
        </div>
      </div>
      <div id="seccion2" class="seccionControles" style="display: none;">
        <div id="btnSec2Menos" class="seccionSelector">
          <span>↑</span>
        </div>
        <div id="seccion2Texto" class="textoSeccion">Común</div>
        <div id="btnSec2Mas" class="seccionSelector">
          <span>↓</span>
        </div>
      </div>
    `}setupEventListeners(){var e,t,i,s,a;r.gender.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleGenderClick(o.key)})}),r.special.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleSpecialFormClick(o.key)})}),r.toggle.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleToggleClick(o.key)})}),(e=this.elements.sec1mas)==null||e.addEventListener("click",()=>this.navigateSection(1,1)),(t=this.elements.sec1menos)==null||t.addEventListener("click",()=>this.navigateSection(1,-1)),(i=this.elements.sec2mas)==null||i.addEventListener("click",()=>this.navigateSection(2,1)),(s=this.elements.sec2menos)==null||s.addEventListener("click",()=>this.navigateSection(2,-1)),(a=this.elements.botonVolumen)==null||a.addEventListener("click",()=>{this.handleVolumeClick()})}handleResize(){this.updateTipos()}handleGenderClick(e){this.state.getAvailableGenders().includes(e)&&(this.state.activeGender=e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll())}handleSpecialFormClick(e){this.state.activeSpecialForm=this.state.activeSpecialForm===e?"":e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll()}handleToggleClick(e){const t=this.state.getCurrentImageUrls(),i=!!t.variocolor,s=!!t.trasera||!!t.variocolorTrasera;e==="shiny"&&!i||e==="trasera"&&!s||(this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`]=!this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`],this.updateAll())}handleVolumeClick(){const e=this.state.getPokemonData();e.grito&&this.state.playAudio(e.grito)}navigateSection(e,t){const i=`selector${e}`,s=`secciones${e}`;this.state[i]=(this.state[i]+t+this.state[s].length)%this.state[s].length,e===1&&(this.state.selector2=0),this.updateSections(),this.updateImage(),this.updateTipos()}updateButtonState(e,t,i,s){var n;const a=this.elements[t];if(!a)return;const o=(n=r[e])==null?void 0:n.find(c=>c.key===t);o&&(s?(a.style.pointerEvents="auto",i?(a.className=`circuloExterno ${o.color}`,a.querySelector(".circuloMedio").className="circuloMedio",a.querySelector(".circuloInterno").className=`circuloInterno ${o.color}`,a.querySelector(".iconoSVG").className="iconoSVG blanco"):(a.className="circuloExterno",a.querySelector(".circuloMedio").className=`circuloMedio ${o.color} transparente`,a.querySelector(".circuloInterno").className="circuloInterno",a.querySelector(".iconoSVG").className="iconoSVG")):(a.className="circuloExterno botonDeshabilitado",a.querySelector(".circuloMedio").className="circuloMedio grisColor",a.querySelector(".circuloInterno").className="circuloInterno",a.querySelector(".iconoSVG").className="iconoSVG deshabilitado",a.style.pointerEvents="none"))}updateSections(){if(this.state.shouldHideSections()){this.elements.seccion1.style.display="none",this.elements.seccion2.style.display="none",this.state.isSeccion1="",this.state.isSeccion2="";return}this.state.secciones1=this.state.getAvailableSections(),this.state.selector1>=this.state.secciones1.length&&(this.state.selector1=0),this.state.secciones1.length<=1?(this.elements.seccion1.style.display="none",this.state.isSeccion1=this.state.secciones1[0]||"normal"):(this.elements.seccion1.style.display="flex",this.state.isSeccion1=this.state.secciones1[this.state.selector1],this.elements.seccion1Texto.textContent=this.state.isSeccion1==="normal"?"Común":this.state.isSeccion1),this.state.secciones2=this.state.getAvailableSubsections(this.state.isSeccion1),this.state.selector2>=this.state.secciones2.length&&(this.state.selector2=0),this.state.secciones2.length<=1?(this.elements.seccion2.style.display="none",this.state.isSeccion2=this.state.secciones2[0]||""):(this.elements.seccion2.style.display="flex",this.state.isSeccion2=this.state.secciones2[this.state.selector2],this.elements.seccion2Texto.textContent=this.state.isSeccion2)}updateVolumeButton(){const e=this.state.getPokemonData(),t=this.elements.botonVolumen;e.grito?t.style.display="flex":t.style.display="none"}updateTipos(){const e=this.state.getPokemonData(),t=this.elements.contenedorInfo;if(t.innerHTML="",!(!e||Object.keys(e).length===0)){if(e.tipo&&e.tipo.length>0||e.generacion!==void 0){const i=e.tipo&&e.tipo.length>0?e.tipo.map(o=>`<img src="public/Tipo_${o}_WikiDex.svg" height="25" alt="${o}">`).join(""):"";let s="";if(e.generacion!==void 0){const n=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima","Octava","Novena","Décima","Undécima","Duodécima"][e.generacion-1]||e.generacion;s=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Generación</div>
            <div class="contenidoTarjeta">
              <div class="tipoGeneracionContainer">
                <img src="public/${n}_generación.svg" height="20" alt="${n} generación"><div class="generacionSpacing"></div>${n}
              </div>
            </div>
          </div>
        `}const a=i?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Tipo</div>
          <div class="contenidoTarjeta">
            <div class="tiposContainer">${i}</div>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">–</div></div>';t.innerHTML+=`
        <div class="contenedorMedidas">
          ${a}
          ${s||'<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">–</div></div>'}
        </div>
      `}if(e.genero){let i="";e.genero.macho>0&&(i+=`
          <div class="generoContainer">
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg">
            <div class="generoBarra">
              <div class="generoBarraMacho" style="flex-basis: ${e.genero.macho}%;"></div>
              <div class="generoBarraVacia" style="flex-basis: ${100-e.genero.macho}%;"></div>
              <div class="generoPorcentaje"><span>${e.genero.macho}%</span></div>
            </div>
          </div>
        `),e.genero.hembra>0&&(i+=`
          <div class="generoContainer">
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg">
            <div class="generoBarra">
              <div class="generoBarraHembra" style="flex-basis: ${e.genero.hembra}%;"></div>
              <div class="generoBarraVacia" style="flex-basis: ${100-e.genero.hembra}%;"></div>
              <div class="generoPorcentaje"><span>${e.genero.hembra}%</span></div>
            </div>
          </div>
        `),t.innerHTML+=`
        <div class="tituloTarjeta">Género</div>
        <div class="contenidoTarjeta">
          <div style="width: 100%;">${i}</div>
        </div>
      `}else t.innerHTML+=`
        <div class="tituloTarjeta">Género</div>
        <div class="contenidoTarjeta">
          Sin género
        </div>
      `;if(e.altura!==void 0||e.peso!==void 0){let i='<div class="contenedorMedidas">';e.altura!==void 0&&(i+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Altura</div>
            <div class="contenidoTarjeta">
              <span>${e.altura} m.</span>
            </div>
          </div>
        `),e.peso!==void 0?i+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>${e.peso} kg.</span>
            </div>
          </div>
        `:i+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>??? kg</span>
            </div>
          </div>
        `,i+="</div>",t.innerHTML+=i}if(e.habilidad&&e.habilidad.length>0){const i=e.habilidad.filter(o=>!o.oculta),s=e.habilidad.filter(o=>o.oculta);let a='<div class="contenedorMedidas">';if(i.length>0){const o=i.map(c=>`<span>${c.nombre}</span><br>`).join(""),n=i.length===1?"Habilidad":"Habilidades";a+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}if(s.length>0){const o=s.map(c=>`<span>${c.nombre}</span><br>`).join(""),n=s.length===1?"Habilidad oculta":"Habilidades ocultas";a+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}a+="</div>",t.innerHTML+=a}if(e.figura!==void 0||e.color){let i="";e.figura!==void 0?i=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Figura</div>
            <div class="contenidoTarjeta">
              <img src="public/Figura_${e.figura}.png" height="30" alt="Figura ${e.figura}">
            </div>
          </div>
        `:i='<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">–</div></div>';const a={Azul:"#3D8BFF",Amarillo:"#FFD700",Blanco:"#EEEEEE",Gris:"#696969",Marrón:"#B8860B",Morado:"#6A5ACD",Negro:"#000000",Rojo:"#FF6347",Rosa:"#DB7093",Verde:"#228B22"}[e.color]||"#FFFFFF";let o="";e.color?o=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Color</div>
            <div class="contenidoTarjeta">
              <div class="figuraColorContainer">
                <span class="colorMuestra" style="background-color:${a};"></span>
                ${e.color}
              </div>
            </div>
          </div>
        `:o='<div class="tarjeta"><div class="tituloTarjeta">Color</div><div class="contenidoTarjeta">–</div></div>',t.innerHTML+=`
        <div class="contenedorMedidas">
          ${i}
          ${o}
        </div>
      `}if(e.categoria||e.huevo&&e.huevo.length>0){const i=e.categoria?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Categoría</div>
          <div class="contenidoTarjeta">
            <span>Pokémon ${e.categoria}</span>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">–</div></div>';let s="";e.huevo&&e.huevo.length>0?s=e.huevo.map(o=>`<span>${typeof o=="string"?o:o.nombre}</span>`).join("<br>"):s="–";const a=`
        <div class="tarjeta">
          <div class="tituloTarjeta">Grupo huevo</div>
          <div class="contenidoTarjeta">
            <div>${s}</div>
          </div>
        </div>
      `;t.innerHTML+=`
        <div class="contenedorMedidas">
          ${i}
          ${a}
        </div>
      `}if(e.pronunciacion&&e.pronunciacion.length>0){let i="";const s=e.pronunciacion.map(a=>{let o="";a.zona==="España"?o=' <abbr title="España">(ES)</abbr>':a.zona==="Hispanoamérica"&&(o=' <abbr title="Hispanoamérica">(HA)</abbr>');let n="";return a.nota&&a.nota.length>0&&(n=a.nota.map(c=>`<ref>${c}</ref>`).join("")),`/ ${a.fonetica} /${o}${n}`}).join("<br>");i+=`
        <div class="tituloTarjeta">${e.pronunciacion.length===1?"Pronunciación":"Pronunciaciones"}</div>
        <div class="contenidoTarjeta">
          <div>${s}</div>
        </div>
      `,t.innerHTML+=i}}}updateImage(){this.state.getPokemonData();const e=this.state.buildImageSrc(),t=this.state.getCurrentImageUrls(),i=!!t.variocolor,s=!!t.trasera||!!t.variocolorTrasera;!i&&this.state.isShiny&&(this.state.isShiny=!1),!s&&this.state.isTrasera&&(this.state.isTrasera=!1),this.updateButtonState("toggle","shiny",this.state.isShiny,i),this.updateButtonState("toggle","trasera",this.state.isTrasera,s),this.updateVolumeButton(),this.elements.imagenPokemonCuadro.onerror=()=>{this.elements.imagenPokemonCuadro.src="public/Imagen_no_disponible.svg"},this.elements.imagenPokemonCuadro.src=e||"public/Imagen_no_disponible.svg"}updateAll(){const e=this.state.getAvailableGenders(),t=this.state.getAvailableSpecialForms();r.gender.forEach(i=>{const s=e.includes(i.key),a=this.state.activeGender===i.key;this.updateButtonState("gender",i.key,a,s)}),r.special.forEach(i=>{const s=t.includes(i.key),a=this.state.activeSpecialForm===i.key;this.updateButtonState("special",i.key,a,s)}),this.updateSections(),this.updateImage(),this.updateTipos()}}const v=new u;new h(v);
