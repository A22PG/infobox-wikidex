(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const r={macho:{normal:"pikachu_normal","Con gorra":{Original:"pikachu_gorra",Hoenn:"pikachu_gorra",Sinnoh:"pikachu_gorra",Teselia:"pikachu_gorra",Kalos:"pikachu_gorra",Alola:"pikachu_gorra",Compañero:"pikachu_gorra",Trotamundos:"pikachu_gorra"}},hembra:"pikachu_normal",giga:"pikachu_giga",mega:""},h={pikachu_normal:{tipo:["Eléctrico","Eléctrico"],altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Otro"},{nombre:"Pararrayos",oculta:!0}],generacion:"1",categoria:"Ratón",figura:"8",huevo:["Campo","Hada"],grito:"Grito_de_Pikachu_en_la_sexta_generación.mp3",genero:{macho:"80",hembra:"49"},color:"Amarillo",pronunciacion:[{fonetica:"pi.ˈka.chu",zona:"España"},{fonetica:"ˈpi.ka.chu",zona:"Hispanoamérica",nota:["Nota 1","Nota 2"]}]},pikachu_gorra:{tipo:["Eléctrico"],variocolor:!1,altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"7",categoria:"Ratón",figura:"8",grito:"Grito_de_Hitmonlee.mp3"},pikachu_giga:{tipo:["Eléctrico"],altura:21,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}],generacion:"8",categoria:"Ratón"}},c={gender:[{id:"btnMacho",key:"macho",color:"azulColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",size:"50px"},{id:"btnHembra",key:"hembra",color:"rojoColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",size:"50px"}],special:[{id:"btnMega",key:"mega",color:"megaColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",size:"40px"},{id:"btnMegaX",key:"megaX",color:"megaXColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",size:"40px"},{id:"btnMegaY",key:"megaY",color:"megaYColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",size:"40px"},{id:"btnGiga",key:"giga",color:"gigamaxColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",size:"28px"}],toggle:[{id:"btnShiny",key:"shiny",color:"amarilloColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",size:"40px"},{id:"btnTrasera",key:"trasera",color:"verdeColor",icon:"https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",size:"25px"}]};class u{constructor(){this.pokemon="Pikachu",this.activeGender="",this.activeSpecialForm="",this.isShiny=!1,this.isTrasera=!1,this.selector1=0,this.selector2=0,this.secciones1=[],this.secciones2=[],this.isSeccion1="",this.isSeccion2="",this.currentAudio=null;const e=this.getAvailableGenders();e.length>0&&(this.activeGender=e[0]),this.initializeSections()}initializeSections(){this.secciones1=this.getAvailableSections(),this.secciones1.length>0&&(this.isSeccion1=this.secciones1[0],this.secciones2=this.getAvailableSubsections(this.isSeccion1),this.secciones2.length>0&&(this.isSeccion2=this.secciones2[0]))}getAvailableGenders(){return["macho","hembra"].filter(e=>r.hasOwnProperty(e))}getAvailableSpecialForms(){return["mega","megaX","megaY","giga","primigenio","origen"].filter(e=>r.hasOwnProperty(e))}shouldHideSections(){return["mega","megaX","megaY","giga"].includes(this.activeSpecialForm)}getCurrentData(){let e=null;if(this.activeSpecialForm&&r[this.activeSpecialForm])e=r[this.activeSpecialForm];else{const t=this.getAvailableGenders();t.length>0&&this.activeGender?e=r[this.activeGender]:t.length>0?(this.activeGender=t[0],e=r[this.activeGender]):e=r}return e}getAvailableSections(){const e=this.getCurrentData();if(!e||typeof e=="string")return[];const t=["mega","megaX","megaY","giga","primigenio","origen"];return Object.keys(e).filter(i=>!t.includes(i)&&(typeof e[i]=="string"||typeof e[i]=="object"))}getAvailableSubsections(e){const t=this.getCurrentData();if(!t||typeof t=="string")return[];const i=t[e];return!i||typeof i=="string"?[]:Object.keys(i)}getPokemonData(){if(this.activeSpecialForm&&r[this.activeSpecialForm]){const i=r[this.activeSpecialForm];if(typeof i=="string")return h[i]||{}}const e=this.getCurrentData();let t="";if(typeof e=="string")t=e;else if(e){const i=e[this.isSeccion1];typeof i=="string"?t=i:i&&this.isSeccion2&&(t=i[this.isSeccion2])}return h[t]||{}}buildImageName(){let e=this.pokemon;this.activeSpecialForm?e+=`_${this.activeSpecialForm}`:(this.getAvailableGenders().length>0&&(e+=`_${this.activeGender}`),this.isSeccion1&&this.isSeccion1!=="normal"&&(e+=`_${this.isSeccion1}`)),this.isSeccion2&&(e+=`_${this.isSeccion2}`);const t=this.getPokemonData();return this.isTrasera&&t.trasera===!0&&(e+="_trasera"),this.isShiny&&t.variocolor!==!1&&(e+="_variocolor"),e+"_HOME.png"}playAudio(e){try{const t=new Audio(`public/audio/${e}`);t.play().catch(i=>{}),this.currentAudio=t}catch{}}}class v{constructor(e){this.state=e,this.initializeHTML(),this.elements=this.getElements(),this.setupEventListeners(),this.updateAll(),window.addEventListener("resize",()=>this.handleResize())}getElements(){const e={imagenPokemonCuadro:document.querySelector("#imagenPokemonCuadro"),seccion1:document.querySelector("#seccion1"),seccion2:document.querySelector("#seccion2"),seccion1Texto:document.querySelector("#seccion1Texto"),seccion2Texto:document.querySelector("#seccion2Texto"),contenedorInfo:document.querySelector("#contenedorInfo"),botonVolumen:document.querySelector("#botonVolumen")};return[...c.gender,...c.special,...c.toggle].forEach(i=>{e[i.key]=document.querySelector(`#${i.id}`)}),Object.entries({btnSec1Mas:"sec1mas",btnSec1Menos:"sec1menos",btnSec2Mas:"sec2mas",btnSec2Menos:"sec2menos"}).forEach(([i,a])=>{e[a]=document.querySelector(`#${i}`)}),e}initializeHTML(){document.querySelector("#app").innerHTML=`
      <div class="contenedorPokemon">
        <div class="tituloPokemon">'''Pikachu'''</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">ピカチュウ (Pikachu)</div>
          <div class="numeroPokemon">#0025</div>
        </div>
        <div class="contenedorImagen">
          <img id="imagenPokemonCuadro" class="imagenPokemon" src="public/Dialga_HOME.png" height="200;">
          
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
    `}setupEventListeners(){var e,t,i,a,s;c.gender.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleGenderClick(o.key)})}),c.special.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleSpecialFormClick(o.key)})}),c.toggle.forEach(o=>{var n;(n=this.elements[o.key])==null||n.addEventListener("click",()=>{this.handleToggleClick(o.key)})}),(e=this.elements.sec1mas)==null||e.addEventListener("click",()=>this.navigateSection(1,1)),(t=this.elements.sec1menos)==null||t.addEventListener("click",()=>this.navigateSection(1,-1)),(i=this.elements.sec2mas)==null||i.addEventListener("click",()=>this.navigateSection(2,1)),(a=this.elements.sec2menos)==null||a.addEventListener("click",()=>this.navigateSection(2,-1)),(s=this.elements.botonVolumen)==null||s.addEventListener("click",()=>{this.handleVolumeClick()})}handleResize(){this.updateTipos()}handleGenderClick(e){this.state.getAvailableGenders().includes(e)&&(this.state.activeGender=e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll())}handleSpecialFormClick(e){this.state.activeSpecialForm=this.state.activeSpecialForm===e?"":e,this.state.selector1=0,this.state.selector2=0,this.state.initializeSections(),this.updateAll()}handleToggleClick(e){const t=this.state.getPokemonData();e==="shiny"&&t.variocolor===!1||e==="trasera"&&t.trasera!==!0||(this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`]=!this.state[`is${e.charAt(0).toUpperCase()+e.slice(1)}`],this.updateAll())}handleVolumeClick(){const e=this.state.getPokemonData();e.grito&&this.state.playAudio(e.grito)}navigateSection(e,t){const i=`selector${e}`,a=`secciones${e}`;this.state[i]=(this.state[i]+t+this.state[a].length)%this.state[a].length,e===1&&(this.state.selector2=0),this.updateSections(),this.updateImage(),this.updateTipos()}updateButtonState(e,t,i,a){var n;const s=this.elements[t];if(!s)return;const o=(n=c[e])==null?void 0:n.find(l=>l.key===t);o&&(a?(s.style.pointerEvents="auto",i?(s.className=`circuloExterno ${o.color}`,s.querySelector(".circuloMedio").className="circuloMedio",s.querySelector(".circuloInterno").className=`circuloInterno ${o.color}`,s.querySelector(".iconoSVG").className="iconoSVG blanco"):(s.className="circuloExterno",s.querySelector(".circuloMedio").className=`circuloMedio ${o.color} transparente`,s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG")):(s.className="circuloExterno botonDeshabilitado",s.querySelector(".circuloMedio").className="circuloMedio grisColor",s.querySelector(".circuloInterno").className="circuloInterno",s.querySelector(".iconoSVG").className="iconoSVG deshabilitado",s.style.pointerEvents="none"))}updateSections(){if(this.state.shouldHideSections()){this.elements.seccion1.style.display="none",this.elements.seccion2.style.display="none",this.state.isSeccion1="",this.state.isSeccion2="";return}this.state.secciones1=this.state.getAvailableSections(),this.state.selector1>=this.state.secciones1.length&&(this.state.selector1=0),this.state.secciones1.length<=1?(this.elements.seccion1.style.display="none",this.state.isSeccion1=this.state.secciones1[0]||"normal"):(this.elements.seccion1.style.display="flex",this.state.isSeccion1=this.state.secciones1[this.state.selector1],this.elements.seccion1Texto.textContent=this.state.isSeccion1==="normal"?"Común":this.state.isSeccion1),this.state.secciones2=this.state.getAvailableSubsections(this.state.isSeccion1),this.state.selector2>=this.state.secciones2.length&&(this.state.selector2=0),this.state.secciones2.length<=1?(this.elements.seccion2.style.display="none",this.state.isSeccion2=this.state.secciones2[0]||""):(this.elements.seccion2.style.display="flex",this.state.isSeccion2=this.state.secciones2[this.state.selector2],this.elements.seccion2Texto.textContent=this.state.isSeccion2)}updateVolumeButton(){const e=this.state.getPokemonData(),t=this.elements.botonVolumen;e.grito?t.style.display="flex":t.style.display="none"}updateTipos(){const e=this.state.getPokemonData(),t=this.elements.contenedorInfo;if(t.innerHTML="",!(!e||Object.keys(e).length===0)){if(e.tipo&&e.tipo.length>0||e.generacion!==void 0){const i=e.tipo&&e.tipo.length>0?e.tipo.map(o=>`<img src="public/Tipo_${o}_WikiDex.svg" height="25" alt="${o}">`).join(""):"";let a="";if(e.generacion!==void 0){const n=["Primera","Segunda","Tercera","Cuarta","Quinta","Sexta","Séptima","Octava","Novena","Décima","Undécima","Duodécima"][e.generacion-1]||e.generacion;a=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Generación</div>
            <div class="contenidoTarjeta">
              <div class="tipoGeneracionContainer">
                <img src="public/${n}_generación.svg" height="20" alt="${n} generación"><div class="generacionSpacing"></div>${n}
              </div>
            </div>
          </div>
        `}const s=i?`
        <div class="tarjeta">
          <div class="tituloTarjeta">Tipo</div>
          <div class="contenidoTarjeta">
            <div class="tiposContainer">${i}</div>
          </div>
        </div>
      `:'<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">–</div></div>';t.innerHTML+=`
        <div class="contenedorMedidas">
          ${s}
          ${a||'<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">–</div></div>'}
        </div>
      `}if(e.genero){let i="";e.genero.macho>0&&(i+=`
          <div class="generoContainer">
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg">
            <div class="generoBarra">
              <div class="generoBarraMacho" style="flex-basis: ${e.genero.macho}%;">
              </div>
              <div class="generoBarraVacia" style="flex-basis: ${100-e.genero.macho}%;">
              </div>
              <div class="generoPorcentaje">
                <span>${e.genero.macho}%</span>
              </div>
            </div>
          </div>
        `),e.genero.hembra>0&&(i+=`
          <div class="generoContainer">
            <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg">
            <div class="generoBarra">
              <div class="generoBarraHembra" style="flex-basis: ${e.genero.hembra}%;">
              </div>
              <div class="generoBarraVacia" style="flex-basis: ${100-e.genero.hembra}%;">
              </div>
              <div class="generoPorcentaje">
                <span>${e.genero.hembra}%</span>
              </div>
            </div>
          </div>
        `),t.innerHTML+=`
        <div class="tituloTarjeta">Género</div>
        <div class="contenidoTarjeta">
          <div style="width: 100%;">
          ${i}
          </div>
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
        `,i+="</div>",t.innerHTML+=i}if(e.habilidad&&e.habilidad.length>0){const i=e.habilidad.filter(o=>!o.oculta),a=e.habilidad.filter(o=>o.oculta);let s='<div class="contenedorMedidas">';if(i.length>0){const o=i.map(l=>`<span>${l.nombre}</span><br>`).join(""),n=i.length===1?"Habilidad":"Habilidades";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}if(a.length>0){const o=a.map(l=>`<span>${l.nombre}</span><br>`).join(""),n=a.length===1?"Habilidad oculta":"Habilidades ocultas";s+=`
          <div class="tarjeta">
            <div class="tituloTarjeta">${n}</div>
            <div class="contenidoTarjeta">
              <div>${o}</div>
            </div>
          </div>
        `}s+="</div>",t.innerHTML+=s}if(e.figura!==void 0||e.color){let i="";e.figura!==void 0?i=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Figura</div>
            <div class="contenidoTarjeta">
              <img src="public/Figura_${e.figura}.png" height="30" alt="Figura ${e.figura}">
            </div>
          </div>
        `:i='<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">–</div></div>';const s={Azul:"#3D8BFF",Amarillo:"#FFD700",Blanco:"#EEEEEE",Gris:"#696969",Marrón:"#B8860B",Morado:"#6A5ACD",Negro:"#000000",Rojo:"#FF6347",Rosa:"#DB7093",Verde:"#228B22"}[e.color]||"#FFFFFF";let o="";e.color?o=`
          <div class="tarjeta">
            <div class="tituloTarjeta">Color</div>
            <div class="contenidoTarjeta">
              <div class="figuraColorContainer">
                <span class="colorMuestra" style="background-color:${s};"></span>
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
      `:'<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">–</div></div>';let a="";e.huevo&&e.huevo.length>0?a=e.huevo.map(o=>`<span>${typeof o=="string"?o:o.nombre}</span>`).join("<br>"):a="–";const s=`
        <div class="tarjeta">
          <div class="tituloTarjeta">Grupo huevo</div>
          <div class="contenidoTarjeta">
            <div>${a}</div>
          </div>
        </div>
      `;t.innerHTML+=`
        <div class="contenedorMedidas">
          ${i}
          ${s}
        </div>
      `}if(e.pronunciacion&&e.pronunciacion.length>0){let i="";const a=e.pronunciacion.map(s=>{let o="";s.zona==="España"?o=' <abbr title="España">(ES)</abbr>':s.zona==="Hispanoamérica"&&(o=' <abbr title="Hispanoamérica">(HA)</abbr>');let n="";return s.nota&&s.nota.length>0&&(n=s.nota.map(l=>`<ref>${l}</ref>`).join("")),`/ ${s.fonetica} /${o}${n}`}).join("<br>");i+=`
        <div class="tituloTarjeta">${e.pronunciacion.length===1?"Pronunciación":"Pronunciaciones"}</div>
        <div class="contenidoTarjeta">
          <div>${a}</div>
        </div>
      `,t.innerHTML+=i}}}updateImage(){const e=this.state.getPokemonData(),t=this.state.buildImageName(),i=e.variocolor!==!1,a=e.trasera===!0;!i&&this.state.isShiny&&(this.state.isShiny=!1),!a&&this.state.isTrasera&&(this.state.isTrasera=!1),this.updateButtonState("toggle","shiny",this.state.isShiny,i),this.updateButtonState("toggle","trasera",this.state.isTrasera,a),this.updateVolumeButton(),this.elements.imagenPokemonCuadro.onerror=()=>{this.elements.imagenPokemonCuadro.src="public/Imagen_no_disponible.svg"},this.elements.imagenPokemonCuadro.src="public/"+t}updateAll(){const e=this.state.getAvailableGenders(),t=this.state.getAvailableSpecialForms();c.gender.forEach(i=>{const a=e.includes(i.key),s=this.state.activeGender===i.key;this.updateButtonState("gender",i.key,s,a)}),c.special.forEach(i=>{const a=t.includes(i.key),s=this.state.activeSpecialForm===i.key;this.updateButtonState("special",i.key,s,a)}),this.updateSections(),this.updateImage(),this.updateTipos()}}const m=new u;new v(m);
