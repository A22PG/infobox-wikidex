(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))x(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const v of t.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&x(v)}).observe(document,{childList:!0,subtree:!0});function L(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function x(e){if(e.ep)return;e.ep=!0;const t=L(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em;">
  <div style="text-align:center; font-size:2em; padding:.5em;">'''Pikachu'''</div>
  <div style="display: flex; align-items: center;">
    <div style="flex: 25%; text-align: left; white-space: nowrap;">ピカチュウ (Pikachu)</div>
    <div style="flex: 75%; text-align: right;">#0025</div>
  </div>
  <div style="min-width:425px; max-width:425px; border-radius:25px; background:#fff; padding:1em; text-align:center">
    <img id="imagenPokemonCuadro" src="public/Pikachu_hembra_HOME.png" height="200;">
    <hr style="border: 2px solid #dddddd; border-radius: 5px;">
    <div style="display:flex; align-items: center; justify-content: space-around">
      <!-- Masculino -->
      <div id="btnMacho" class="outer-circle">
        <div class="middle-circle blue transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Símbolo masculino">
          </div>
        </div>
      </div>
      <!-- Femenino -->
      <div id="btnHembra" class="outer-circle red">
        <div class="middle-circle">
          <div class="inner-circle red">
            <img class="svg-icon white" src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Símbolo femenino">
          </div>
        </div>
      </div>
      <div style="width: 2px; height: 100px; background: #dddddd;"></div>
      <!-- Variocolor -->
      <div id="btnShiny" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20220508212633/Variocolor_icon_HOME.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
    </div>

    <!-- Sección 1 -->
    <div id="seccion1" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
      <div id="btnSec1Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8592;</span>
      </div>
      <div id="seccion1Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
      <div id="btnSec1Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8594;</span>
      </div>
    </div>

    <!-- Sección 2 -->
    <div id="seccion2" style="display: none; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
      <div id="btnSec2Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8592;</span>
      </div>
      <div id="seccion2Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
      <div id="btnSec2Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8594;</span>
      </div>
    </div>

  </div>
</div>
`;const b={normal:{normal:{tipo:["Eléctrico"],altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}]},"Con gorra":{pikachu_gorras:{tipo:["Eléctrico"],genero:"m",altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}]},Prueba:{tipo:["Eléctrico"],genero:"m",altura:40,peso:684,habilidad:[{nombre:"Electricidad Dinámica"},{nombre:"Paraguas",oculta:!1}]}}}};let g=0,s=0,m=Object.keys(b.normal),a=[],o=m[0],u="Común",w="Pikachu",p=!1,y=!0,S=!1,l="";const k=document.querySelector("#imagenPokemonCuadro"),i=document.querySelector("#btnMacho"),c=document.querySelector("#btnHembra"),d=document.querySelector("#btnShiny"),M=document.querySelector("#btnSec1Mas"),E=document.querySelector("#btnSec1Menos"),P=document.querySelector("#btnSec2Mas"),j=document.querySelector("#btnSec2Menos"),C=document.querySelector("#seccion1Texto"),O=document.querySelector("#seccion2Texto"),q=document.querySelector("#seccion2");i.addEventListener("click",()=>{p=!p,y=!y,i.classList.toggle("blue"),i.querySelector(".middle-circle").classList.toggle("blue"),i.querySelector(".middle-circle").classList.toggle("transparent"),i.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),i.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),h()});c.addEventListener("click",()=>{p=!p,y=!y,c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),i.classList.toggle("blue"),i.querySelector(".middle-circle").classList.toggle("blue"),i.querySelector(".middle-circle").classList.toggle("transparent"),i.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),i.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),h()});d.addEventListener("click",()=>{S=!S,d.classList.toggle("yellow"),d.querySelector(".middle-circle").classList.toggle("yellow"),d.querySelector(".middle-circle").classList.toggle("transparent"),d.querySelector(".inner-circle").classList.toggle("yellow"),d.querySelector(".svg-icon").classList.toggle("white"),h()});M.addEventListener("click",()=>{g=(g+1)%m.length,s=0,f()});E.addEventListener("click",()=>{g=(g-1+m.length)%m.length,s=0,f()});P.addEventListener("click",()=>{s=(s+1)%a.length,f()});j.addEventListener("click",()=>{s=(s-1+a.length)%a.length,f()});function f(){o=m[g],C.textContent=o==="normal"?"Común":o;const r=b.normal[o];typeof r=="object"&&!r.tipo?(a=Object.keys(r),u=a[s],O.textContent=u,q.style.display="flex"):(a=[],u="Común",q.style.display="none"),h()}function h(){l=w,l+=p?"_macho":y?"_hembra":"",o!=="normal"&&(l+=`_${o}`),u!=="Común"&&(l+=`_${u}`),S&&(l+="_variocolor"),l+="_HOME.png",k.src="public/"+l,console.log(l);let r=o==="normal"?b.normal.normal:b.normal[o][u];console.log("🧾 Datos del Pokémon:"),console.log("• Tipo:",r.tipo.join(", ")),console.log(`• Altura: ${r.altura} m`),console.log(`• Peso: ${r.peso} kg`),console.log("• Habilidades:"),r.habilidad.forEach(n=>{console.log(`  - ${n.nombre}${n.oculta?" (Oculta)":""}`)})}f();
