import "./style.css";

const pokemon = "Charizard";
const japones = "リザードン";
const japonesTraduccion = "Lizardon";
const numeroPokemon = "0006";
const enlaceWikidex = "https://www.wikidex.net/wiki/Alcremie";
const loadingImageDelay = 150;

const pokemonJSON = {
  "forma": {
    "normal": {
      "datos": "charizard_normal",
      "imagen": [
        "https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210524165035/Charizard_HOME.png",
        "https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160817212623/Charizard.png"
      ],
      "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20210524164951/Charizard_HOME_variocolor.png"
    },
    "megaX": {
      "datos":"charizard_megaX",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20210524164940/Mega-Charizard_X_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164741/Mega-Charizard_X_HOME_variocolor.png"
    },
    "megaY": {
      "datos":"charizard_megaY",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20210524164716/Mega-Charizard_Y_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/b/bb/latest/20210524164852/Mega-Charizard_Y_HOME_variocolor.png"
    },
    "giga": {
      "datos":"charizard_giga",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20200214184340/Charizard_Gigamax_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20200214193200/Charizard_Gigamax_HOME_variocolor.png"
    }
  },
  "info": {
    "charizard_normal": {
      "tipo": ["Fuego", {"valor":"Volador", "nota": "A",}],
      "altura": ["1'7", {"valor":"4'8", "nota": "B"}],
      "peso": ["90'5", {"valor":"87'2", "nota": "A"}],
      "habilidad": [
        { "nombre": "Mar llamas" },
        { "nombre": "Poder solar", "oculta": true },
        { "nombre": {"valor":"Llamas ocultas", "nota": "B"}, "oculta": true}
      ],
      "genero": {
        "macho": {"valor":"87'5", "nota": "B"},
        "hembra": {"valor":"87'2", "nota": "A"}
      },
      "generacion": {"valor":"1", "nota": "D"},
      "categoria": ["Llama", {"valor":"Fogonazo", "nota": "A"}],
      "figura": ["3", {"valor":"1", "nota": "D"}],
      "huevo": [{"valor":"Monstruo", "nota": "C"}, "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20240213073305/Grito_de_Charizard.ogg",
      "color": ["Rojo", {"valor":"Negro", "nota": "B"}],
      "pronunciacion": [
        { "fonetica": {"valor":"'cha.ri.zard", "nota": "E"}, "zona": ["España", {"valor":"Hispanoamérica", "nota": ["A", "B", "C"]}]},
        { "fonetica": "'char.i.zard", "zona": "Hispanoamérica" }
      ]
    },
    "charizard_megaX": {
      "tipo": ["Fuego", "Dragón"],
      "altura": "1'7",
      "peso": "110'5",
      "habilidad": [
        { "nombre": {"valor":"Garra dura", "nota": "F"}, "zona":"España" },
        { "nombre": "Garras durs", "zona":"Hispanoamérica" }
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "6",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2e/latest/20140217185652/Grito_de_Mega-Charizard_X.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
    "charizard_megaY": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "peso": "100'5",
      "habilidad": [
        { "nombre": "Sequía" }
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "6",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
    "charizard_giga": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "habilidad": [
        { "nombre": "Sequía" }
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "8",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    }
  },
  "nota":{
    "A": "A partir de X generación",
    "B": "Solo en X versión",
    "C": "Antes era <a href='https://www.google.com/es'>Monstruoso</a>",
    "D": "Aunque oficialmente sea la primera, no salió hasta la <a href='https://www.google.com/es'>segunda</a>",
    "E": "Pronunciación alternativa",
    "F": "Prueba de notas"
  }
};

const datosWikidex = {
  "tipo": {
    "Acero": "https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20221208180543/Tipo_acero_EP.png",
    "Agua": "https://images.wikidexcdn.net/mwuploads/wikidex/5/59/latest/20221208180426/Tipo_agua_EP.png",
    "Bicho": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20221208180434/Tipo_bicho_EP.png",
    "Dragón": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png",
    "Eléctrico": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png",
    "Fantasma": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20221208180503/Tipo_fantasma_EP.png",
    "Fuego": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20221208180625/Tipo_fuego_EP.png",
    "Hada": "https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20221208180633/Tipo_hada_EP.png",
    "Hielo": "https://images.wikidexcdn.net/mwuploads/wikidex/1/17/latest/20221208180641/Tipo_hielo_EP.png",
    "Lucha": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20221208180651/Tipo_lucha_EP.png",
    "Normal": "https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20221208180705/Tipo_normal_EP.png",
    "Planta": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20221208180710/Tipo_planta_EP.png",
    "Psíquico": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png",
    "Roca": "https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20221208180726/Tipo_roca_EP.png",
    "Siniestro": "https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20221208180734/Tipo_siniestro_EP.png",
    "Tierra": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20221208180742/Tipo_tierra_EP.png",
    "Veneno": "https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20221208180751/Tipo_veneno_EP.png",
    "Volador": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20221208180800/Tipo_volador_EP.png",
    "Astral": "https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20231216092909/Tipo_astral_EP.png"
  },
  "color": {
    "Acero": "#cccccc",
    "Agua": "#b0e2ff",
    "Bicho": "#99cc33",
    "Dragón": "#ab82ff",
    "Eléctrico": "#ffd700",
    "Fantasma": "#778899",
    "Fuego": "#ff7f00",
    "Hada": "#ffb0ff",
    "Hielo": "#add8e6",
    "Lucha": "#ff6a6a",
    "Normal": "#ddccaa",
    "Planta": "#99ff66",
    "Psíquico": "#ffb5c5",
    "Roca": "#cd853f",
    "Siniestro": "#a9a9a9",
    "Tierra": "#deb887",
    "Veneno": "#cc88bb",
    "Volador": "#baaaff",
    "Astral": "#f1f7fb"
  },
  "figura": {
    "1": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20200214140440/Figura_1.png",
    "2": "https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20200214140740/Figura_2.png",
    "3": "https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20200214140905/Figura_3.png",
    "4": "https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20200214141009/Figura_4.png",
    "5": "https://images.wikidexcdn.net/mwuploads/wikidex/2/21/latest/20200214141122/Figura_5.png",
    "6": "https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20200214141238/Figura_6.png",
    "7": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c7/latest/20200214141337/Figura_7.png",
    "8": "https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20200214141425/Figura_8.png",
    "9": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20200214141545/Figura_9.png",
    "10": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20200214141655/Figura_10.png",
    "11": "https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20200214141809/Figura_11.png",
    "12": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20200214141912/Figura_12.png",
    "13": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20200214142011/Figura_13.png",
    "14": "https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20200214142056/Figura_14.png"
  },
  "generación": {
    "1": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20241019145047/Primera_generaci%C3%B3n.svg",
    "2": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20241019145155/Segunda_generaci%C3%B3n.svg",
    "3": "https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20241019145242/Tercera_generaci%C3%B3n.svg",
    "4": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20241019145319/Cuarta_generaci%C3%B3n.svg",
    "5": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20241019145355/Quinta_generaci%C3%B3n.svg",
    "6": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20241019145423/Sexta_generaci%C3%B3n.svg",
    "7": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20241019145454/S%C3%A9ptima_generaci%C3%B3n.svg",
    "8": "https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20241019145522/Octava_generaci%C3%B3n.svg",
    "9": "https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20241019145549/Novena_generaci%C3%B3n.svg"
  },
  "icono": {
    "macho": "https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",
    "hembra": "https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",
    "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",
    "trasera": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",
    "mega": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",
    "megaX": "https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",
    "megaY": "https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",
    "giga": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",
    "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20251112155152/Grito_Pok%C3%A9mon_%28Wikidex%29.svg",
    "artwork": "./palette.svg",
    "galeria": "./photo.svg"
  },
  "default": "https://images.wikidexcdn.net/mwuploads/wikidex/d/da/latest/20081011120239/Imagen_no_disponible.svg"
};

const configBotones = {
  gender: [
    { id: "btnMacho", key: "macho", color: "azulColor", icon: datosWikidex.icono.macho, size: "50px" },
    { id: "btnHembra", key: "hembra", color: "rojoColor", icon: datosWikidex.icono.hembra, size: "50px" }
  ],
  special: [
    { id: "btnMega", key: "mega", color: "megaColor", icon: datosWikidex.icono.mega, size: "40px" },
    { id: "btnMegaX", key: "megaX", color: "megaXColor", icon: datosWikidex.icono.megaX, size: "40px" },
    { id: "btnMegaY", key: "megaY", color: "megaYColor", icon: datosWikidex.icono.megaY, size: "40px" },
    { id: "btnGiga", key: "giga", color: "gigamaxColor", icon: datosWikidex.icono.giga, size: "28px" }
  ],
  toggle: [
    { id: "btnShiny", key: "shiny", color: "amarilloColor", icon: datosWikidex.icono.variocolor, size: "40px" },
    { id: "btnTrasera", key: "trasera", color: "verdeColor", icon: datosWikidex.icono.trasera, size: "25px" }
  ]
};

class GestorReferencias {
  constructor() {
    this.referenciasActivas = new Map();
    this.contadorReferencias = new Map();
  }

  limpiarReferenciasPokemon() {
  console.log('=== LIMPIANDO REFERENCIAS ===');
  
  // Buscar el h2 con múltiples estrategias
  const h2Anotaciones = document.querySelector('h2.destroyable.cuadroPokemon');
  console.log('h2 encontrado con clases:', h2Anotaciones);
  
  if (h2Anotaciones) {
    console.log('Eliminando h2:', h2Anotaciones.outerHTML);
    h2Anotaciones.remove();
  } else {
    // Intentar buscar por el id del span
    const spanAnotaciones = document.querySelector('span#Anotaciones');
    console.log('span#Anotaciones encontrado:', spanAnotaciones);
    if (spanAnotaciones) {
      const h2Padre = spanAnotaciones.closest('h2');
      console.log('h2 padre del span:', h2Padre);
      if (h2Padre && h2Padre.classList.contains('destroyable') && h2Padre.classList.contains('cuadroPokemon')) {
        console.log('Eliminando h2 padre:', h2Padre.outerHTML);
        h2Padre.remove();
      }
    }
  }
  
  // Eliminar li con las clases
  const existentes = document.querySelectorAll('li.destroyable.cuadroPokemon');
  console.log('li encontrados:', existentes.length);
  existentes.forEach(e => e.remove());
  
  const lista = document.querySelector('ol.references');
  if (lista && lista.children.length === 0) {
    console.log('Lista vacía, eliminando sección');
    this.eliminarSeccionAnotaciones();
  }
  
  this.referenciasActivas.clear();
  this.contadorReferencias.clear();
  
  console.log('=== FIN LIMPIEZA ===');
}

  eliminarSeccionAnotaciones() {
  // Eliminar el wrapper
  const wrapper = document.querySelector('.mw-references-wrap') || 
                  document.querySelector('#mw-references-wrap');
  if (wrapper) {
    wrapper.remove();
  }
  
  // Eliminar el h2 de Anotaciones si tiene las clases
  const h2Anotaciones = document.querySelector('h2.destroyable.cuadroPokemon');
  if (h2Anotaciones) {
    h2Anotaciones.remove();
  }
}

  asegurarSeccionAnotaciones() {
  let wrapper = document.querySelector('.mw-references-wrap');
  if (!wrapper) {
    let h2Anotaciones = null;
    const todosH2 = document.querySelectorAll('h2');
    for (const h2 of todosH2) {
      const span = h2.querySelector('span.mw-headline');
      if (span && span.textContent.includes('Anotaciones')) {
        h2Anotaciones = h2;
        break;
      }
    }
    if (!h2Anotaciones) {
      const cuerpo = document.querySelector('.mw-content-text');
      if (!cuerpo) {
        console.error('ERROR: No se encontró .mw-content-text.');
        return null;
      }
      let veaseH2 = null;
      const h2EnCuerpo = cuerpo.querySelectorAll('h2');
      for (const h2 of h2EnCuerpo) {
        const span = h2.querySelector('span.mw-headline, span#Véase_también');
        if (span && (span.textContent.includes('Véase también') || span.id === 'Véase_también')) {
          veaseH2 = h2;
          break;
        }
      }
      h2Anotaciones = document.createElement('h2');
      h2Anotaciones.className = 'destroyable cuadroPokemon'; // Añadir clases
      const titular = document.createElement('span');
      titular.className = 'mw-headline';
      titular.id = 'Anotaciones';
      titular.textContent = 'Anotaciones';
      h2Anotaciones.appendChild(titular);
      if (veaseH2) cuerpo.insertBefore(h2Anotaciones, veaseH2);
      else cuerpo.appendChild(h2Anotaciones);
    }
    wrapper = document.createElement('div');
    wrapper.className = 'mw-references-wrap';  // clase, no ID
    wrapper.id = 'mw-references-wrap';  // también ID para compatibilidad
    wrapper.style.color = 'white';
    const ol = document.createElement('ol');
    ol.className = 'references';
    wrapper.appendChild(ol);
    h2Anotaciones.insertAdjacentElement('afterend', wrapper);
  }
  return wrapper.querySelector('ol.references');
}

  // MÉTODO CORREGIDO: Procesar referencia
  procesarReferencia(letra, contexto) {
  let claves = [];
  
  // Determinar las claves (puede ser una o varias)
  if (typeof letra === 'string' && letra.trim() !== '') {
    claves = [letra];
  } else if (Array.isArray(letra)) {
    claves = letra.filter(l => typeof l === 'string' && l.trim() !== '');
  } else if (contexto && typeof contexto === 'object') {
    if (typeof contexto.nota === 'string') {
      claves = [contexto.nota];
    } else if (Array.isArray(contexto.nota)) {
      claves = contexto.nota.filter(n => typeof n === 'string' && n.trim() !== '');
    }
  }
  
  if (claves.length === 0) {
    return '';
  }

  // Procesar cada clave y generar sus referencias
  const referencias = claves.map(clave => {
    let textoNota = null;
    if (pokemonJSON && pokemonJSON.nota && pokemonJSON.nota[clave]) {
      textoNota = pokemonJSON.nota[clave];
    }
    
    if (!textoNota) {
      return '';
    }

    if (!this.referenciasActivas.has(clave)) {
      this.referenciasActivas.set(clave, { cuenta: 0, texto: textoNota });
    }
    
    const refData = this.referenciasActivas.get(clave);
    const indiceUso = refData.cuenta;
    refData.cuenta++;

    const refId = `cite_ref-${clave}_${indiceUso}`;
    const noteId = `cite_note-${clave}`;

    return `<sup id="${refId}" class="reference"><a href="#${noteId}" data-ref-key="${clave}">?</a></sup>`;
  }).filter(Boolean);

  return referencias.join('');
}

actualizarNumerosCitas() {
  // Buscar el ol con CUALQUIER variante
  const ol = document.querySelector('.mw-references-wrap ol.references') || 
             document.querySelector('#mw-references-wrap ol.references') ||
             document.querySelector('ol.references');
  
  if (!ol) {
    return;
  }
  
  const mapaNumeros = new Map();
  const todosLi = Array.from(ol.querySelectorAll('li'));
  
  todosLi.forEach((li, idx) => {
    const match = li.id.match(/^cite_note-(.+)$/);
    if (match) {
      mapaNumeros.set(match[1], idx + 1);
    }
  });
  
  const enlaces = document.querySelectorAll('a[data-ref-key]');
  
  enlaces.forEach(link => {
    const key = link.getAttribute('data-ref-key');
    const numero = mapaNumeros.get(key);
    if (numero) {
      link.textContent = numero;
    }
  });
}

  calcularNumeroReferencia(clave) {
  // Contar TODOS los <li> en ol.references, no solo los de referenciasActivas
  const ol = document.querySelector('#mw-references-wrap ol.references');
  if (!ol) return 1;
  
  // Obtener todos los li existentes
  const todosLi = ol.querySelectorAll('li');
  const existingIds = Array.from(todosLi).map(li => {
    const match = li.id.match(/^cite_note-(.+)$/);
    return match ? match[1] : null;
  }).filter(Boolean);
  
  // Combinar con las nuevas referencias
  const todasLasClaves = new Set([...existingIds, ...Array.from(this.referenciasActivas.keys())]);
  const ordenadas = Array.from(todasLasClaves).sort();
  
  return ordenadas.indexOf(clave) + 1;
}

renderizarReferencias() {
  // Si no hay referencias activas, no hacer nada
  if (this.referenciasActivas.size === 0) {
    console.log('No hay referencias para renderizar');
    return;
  }
  
  const ol = this.asegurarSeccionAnotaciones();
  if (!ol) return;
  
  const existentes = ol.querySelectorAll('li.destroyable.cuadroPokemon');
  existentes.forEach(e => e.remove());
  
  const ordenadas = Array.from(this.referenciasActivas.entries()).sort((a,b) => a[0].localeCompare(b[0]));
  
  ordenadas.forEach(([letra, datosRef]) => {
    const li = document.createElement('li');
    li.id = `cite_note-${letra}`;
    li.className = 'destroyable cuadroPokemon';
    
    ol.appendChild(li);
    
    const todosLi = Array.from(ol.querySelectorAll('li'));
    const posicionReal = todosLi.indexOf(li) + 1;
    
    let backlinksHTML = '';
    
    if (datosRef.cuenta === 1) {
      const refId = `cite_ref-${letra}_0`;
      backlinksHTML = `<span class="mw-cite-backlink"><a href="#${refId}" aria-label="Volver arriba" title="Volver arriba">↑</a></span>`;
    } else {
      const backlinks = [];
      
      for (let i = 0; i < datosRef.cuenta; i++) {
        const refId = `cite_ref-${letra}_${i}`;
        backlinks.push(`<sup><a href="#${refId}">${posicionReal},${i}</a></sup>`);
      }
      backlinksHTML = `<span class="mw-cite-backlink">↑ ${backlinks.join(' ')}</span>`;
    }
    
    li.innerHTML = `${backlinksHTML} <span class="reference-text">${datosRef.texto}</span>`;
  });
  
  this.actualizarNumerosCitas();
}

  // MÉTODO CORREGIDO: Extraer valor y procesar referencia
  extraerValorConReferencia(dato) {
  if (typeof dato === 'string') return dato;
  if (typeof dato === 'object' && dato !== null) {
    let valor = dato.valor || '';
    let referencia = '';
    
    if (dato.nota) {
      // Puede ser string o array
      referencia = this.procesarReferencia(dato.nota, dato);
    }
    
    return valor + referencia;
  }
  return '';
}

  procesarArray(arr) {
    if (!Array.isArray(arr)) return arr;
    
    return arr.map(item => this.extraerValorConReferencia(item));
  }
}

class EstadoPokemon {
  constructor() {
    this.forma = pokemonJSON.forma;
    this.info = pokemonJSON.info;
    this.pokemon = "Pikachu";
    this.generoActivo = "";
    this.formaEspecialActiva = "";
    this.esShiny = false;
    this.esTrasera = false;
    this.esArtwork = localStorage.getItem('preferArtwork') === 'true';
    this.selector1 = 0;
    this.selector2 = 0;
    this.secciones1 = [];
    this.secciones2 = [];
    this.isSeccion1 = "";
    this.isSeccion2 = "";
    this.ultimaSeccion2Nombre = "";
    this.audioActual = null;
    this.cargandoAudio = false;
    const generosDisponibles = this.getAvailableGenders();
    if (generosDisponibles.length > 0) this.generoActivo = generosDisponibles[0];
    this.initializeSections();
  }

  initializeSections() {
    this.secciones1 = this.getAvailableSections();
    if (this.secciones1.length > 0) {
      this.isSeccion1 = this.secciones1[0];
      this.secciones2 = this.getAvailableSubsections(this.isSeccion1);
      if (this.secciones2.length > 0) {
        this.isSeccion2 = this.secciones2[0];
        this.ultimaSeccion2Nombre = this.isSeccion2;
      }
    }
  }

  getAvailableGenders() {
    if (!this._cachedGenders) {
      const keys = Object.keys(this.forma);
      if (keys.includes("nogen")) {
        this._cachedGenders = [];
        return this._cachedGenders;
      }
      if (keys.includes("normal")) {
        this._cachedGenders = ["macho", "hembra"];
        if (!this.forma._duplicatedNormal) {
          const normalData = this.forma.normal;
          if (!this.forma.macho) this.forma.macho = normalData;
          if (!this.forma.hembra) this.forma.hembra = normalData;
          this.forma._duplicatedNormal = true;
        }
        return this._cachedGenders;
      }
      this._cachedGenders = keys.filter(k => k === "macho" || k === "hembra").filter(g => this.forma[g] && this.forma[g] !== "");
    }
    return this._cachedGenders;
  }

  getAvailableSpecialForms() {
    const posibles = ["mega", "megaX", "megaY", "giga"];
    return posibles.filter(f => this.forma.hasOwnProperty(f) && this.forma[f] !== "");
  }

  shouldHideSections() {
    return ["mega", "megaX", "megaY", "giga"].includes(this.formaEspecialActiva);
  }

  getCurrentFormaNode() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) return this.forma[this.formaEspecialActiva];
    const availableGenders = this.getAvailableGenders();
    if (availableGenders.length > 0 && this.generoActivo) return this.forma[this.generoActivo];
    else if (availableGenders.length > 0) {
      this.generoActivo = availableGenders[0];
      return this.forma[this.generoActivo];
    } else {
      return this.forma;
    }
  }

  getAvailableSections() {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string") return [];
    const excludeKeys = ["mega", "megaX", "megaY", "giga", "primigenio", "origen"];
    if (node.datos !== undefined) return [];
    return Object.keys(node).filter(key => !excludeKeys.includes(key));
  }

  getAvailableSubsections(mainSection) {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string") return [];
    const sectionData = node[mainSection];
    if (!sectionData || typeof sectionData === "string") return [];
    if (sectionData.datos !== undefined) return [];
    return Object.keys(sectionData);
  }

  getPokemonData() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) {
      const specialNode = this.forma[this.formaEspecialActiva];
      const datosKey = (typeof specialNode === "string") ? specialNode : specialNode.datos;
      return this.info[datosKey] || {};
    }
    const node = this.getCurrentFormaNode();
    if (!node) return {};
    if (node.datos !== undefined && typeof node.datos === "string") return this.info[node.datos] || {};
    const sectionData = node[this.isSeccion1];
    if (!sectionData) return {};
    if (typeof sectionData === "string") return this.info[sectionData] || {};
    if (sectionData.datos !== undefined) return this.info[sectionData.datos] || {};
    const sub = sectionData[this.isSeccion2];
    if (sub) {
      if (typeof sub === "string") return this.info[sub] || {};
      if (sub.datos !== undefined) return this.info[sub.datos] || {};
    }
    return {};
  }

  getCurrentImageUrls() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) {
      const node = this.forma[this.formaEspecialActiva];
      return (typeof node === "string") ? {} : node;
    }
    const node = this.getCurrentFormaNode();
    if (!node) return {};
    if (node.datos !== undefined) return node;
    const sectionData = node[this.isSeccion1];
    if (!sectionData) return {};
    if (typeof sectionData === "string") return {};
    if (sectionData.datos !== undefined) return sectionData;
    const sub = sectionData[this.isSeccion2];
    if (!sub) return {};
    if (typeof sub === "string") return {};
    return sub;
  }

  buildImageSrc() {
    const urls = this.getCurrentImageUrls();
    const getImageFromField = (field) => {
      if (!field) return null;
      if (typeof field === 'string') return field;
      if (Array.isArray(field)) {
        if (field.length === 0) return null;
        if (field.length === 1) return field[0];
        return this.esArtwork ? field[1] : field[0];
      }
      return null;
    };
    if (this.esTrasera && this.esShiny) {
      const img = getImageFromField(urls.variocolorTrasera);
      if (img) return img;
    }
    if (this.esTrasera) {
      const img = getImageFromField(urls.trasera);
      if (img) return img;
    }
    if (this.esShiny) {
      const img = getImageFromField(urls.variocolor);
      if (img) return img;
    }
    const img = getImageFromField(urls.imagen);
    if (img) return img;
    return "";
  }

  playAudio(audioFile) {
    try {
      const audio = new Audio(`public/audio/${audioFile}`);
      audio.play().catch(error => {});
      this.audioActual = audio;
    } catch (error) {}
  }
}

class InterfazPokemon {
  constructor(estado) {
    this.estado = estado;
    this.gestorReferencias = new GestorReferencias();
    this.initializeHTML();
    this.elements = this.getElements();
    this.setupEventListeners();
    this.updateAll();
    this.imageLoading = false;
    window.addEventListener('resize', () => this.handleResize());
  }

  getElements() {
    const elements = {
      imagenPokemonCuadro: document.querySelector("#imagenPokemonCuadro"),
      contenedorPokemon: document.querySelector(".contenedorPokemon"),
      seccion1: document.querySelector("#seccion1"),
      seccion2: document.querySelector("#seccion2"),
      seccion1Texto: document.querySelector("#seccion1Texto"),
      seccion2Texto: document.querySelector("#seccion2Texto"),
      contenedorInfo: document.querySelector("#contenedorInfo"),
      botonVolumen: document.querySelector("#botonVolumen"),
      botonArtwork: document.querySelector("#botonArtwork"),
      botonEnlace: document.querySelector("#botonEnlace"),
      loadingIndicator: document.querySelector("#loadingIndicator")
    };
    [...configBotones.gender, ...configBotones.special, ...configBotones.toggle].forEach(btn => {
      elements[btn.key] = document.querySelector(`#${btn.id}`);
    });
    const navButtons = {
      'btnSec1Mas': 'sec1mas',
      'btnSec1Menos': 'sec1menos',
      'btnSec2Mas': 'sec2mas',
      'btnSec2Menos': 'sec2menos'
    };
    Object.entries(navButtons).forEach(([id, key]) => {
      elements[key] = document.querySelector(`#${id}`);
    });
    return elements;
  }

  initializeHTML() {
    const colorBg = this.getBackgroundColor();
    document.querySelector("#app").innerHTML = `
      <div class="contenedorPokemon" style="background:${colorBg}">
        <div class="tituloPokemon">${pokemon}</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">${japones} (${japonesTraduccion})</div>
          <div class="numeroPokemon">#${numeroPokemon}</div>
        </div>
        <div>
        <div class="contenidoPokemon">
        <div class="contenedorImagen">
  <div class="imagenWrapper">
    <img id="imagenPokemonCuadro" class="imagenPokemon" src="${datosWikidex.default}" height="200;">
    
    <div id="loadingIndicator" class="loadingIndicator" style="display:none;">
      <div class="spinner"></div>
    </div>
  </div>

  <div id="botonArtwork" class="circuloExterno botonEsquinaSupIzq">
    <div class="circuloMedio artworkColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${datosWikidex.icono.artwork}" alt="Artwork" style="height:28px">
      </div>
    </div>
  </div>

  <div id="botonEnlace" class="circuloExterno botonEsquinaInfIzq">
    <div class="circuloMedio enlaceColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${datosWikidex.icono.galeria}" alt="Enlace" style="height:28px">
      </div>
    </div>
  </div>
  
  <div id="botonVolumen" class="circuloExterno botonEsquinaSupDer" style="display:none;">
  <div class="circuloMedio gritoColor transparente">
    <div class="circuloInterno">
      <img class="iconoSVG" src="${datosWikidex.icono.grito}" alt="Volumen" style="height:28px">
    </div>
  </div>
</div>

  <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(configBotones.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(configBotones.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(configBotones.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
        </div>
      </div>
      </div>
      

<div class="mw-content-text" style="color:white;">
    `;
  }

  generateButtons(buttons) {
    return buttons.map(btn => `
      <div id="${btn.id}" class="circuloExterno">
        <div class="circuloMedio ${btn.color} transparenteBoton">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${btn.icon}" alt="${btn.key}" style="height:${btn.size}">
          </div>
        </div>
      </div>
    `).join('');
  }

  generateSectionControls() {
    return `
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
    `;
  }

  setupEventListeners() {
    configBotones.gender.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleGenderClick(btn.key);
      });
    });

    configBotones.special.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleSpecialFormClick(btn.key);
      });
    });

    configBotones.toggle.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleToggleClick(btn.key);
      });
    });

    this.elements.sec1mas?.addEventListener("click", () => this.navigateSection(1, 1));
    this.elements.sec1menos?.addEventListener("click", () => this.navigateSection(1, -1));
    this.elements.sec2mas?.addEventListener("click", () => this.navigateSection(2, 1));
    this.elements.sec2menos?.addEventListener("click", () => this.navigateSection(2, -1));

    this.elements.botonVolumen?.addEventListener("click", () => {
      const pokemonData = this.estado.getPokemonData();
      if (this.estado.audioActual && !this.estado.audioActual.paused) {
        this.estado.audioActual.pause();
        this.estado.audioActual.currentTime = 0;
        this.estado.audioActual = null;
        this.estado.cargandoAudio = false;
        this.updateVolumeButton();
        return;
      }
      if (this.estado.cargandoAudio) return;
      if (pokemonData.grito && pokemonData.grito.startsWith("https://")) {
        this.estado.cargandoAudio = true;
        this.updateVolumeButton();
        const audio = new Audio();
        audio.addEventListener('canplaythrough', () => {
          this.estado.cargandoAudio = false;
          audio.play().then(() => {
            this.updateVolumeButton();
          }).catch(() => {
            this.estado.cargandoAudio = false;
            this.estado.audioActual = null;
            this.updateVolumeButton();
          });
        }, { once: true });
        audio.addEventListener('error', () => {
          this.estado.cargandoAudio = false;
          this.estado.audioActual = null;
          this.updateVolumeButton();
        });
        audio.addEventListener('play', () => this.updateVolumeButton());
        audio.addEventListener('pause', () => this.updateVolumeButton());
        audio.addEventListener('ended', () => {
          this.estado.audioActual = null;
          this.updateVolumeButton();
        });
        audio.src = pokemonData.grito;
        this.estado.audioActual = audio;
      }
    });

    this.elements.botonArtwork?.addEventListener("click", () => {
      this.estado.esArtwork = !this.estado.esArtwork;
      localStorage.setItem('preferArtwork', this.estado.esArtwork);
      this.updateAll();
    });

    this.elements.botonEnlace?.addEventListener("click", () => {
      window.open(enlaceWikidex, '_blank');
    });
  }

  handleResize() {
    this.updateTipos();
  }

  getBackgroundColor() {
    const pokemonData = this.estado.getPokemonData();
    if (!pokemonData.tipo || pokemonData.tipo.length === 0) return "#f4f4f4ff";
    if (pokemonData.tipo.length === 1) {
      const tipoColor = datosWikidex.color[pokemonData.tipo[0]];
      return tipoColor || "#FFFFFF";
    }
    const colores = pokemonData.tipo.map(tipo => datosWikidex.color[tipo] || "#FFFFFF");
    return `linear-gradient(to right, ${colores.join(", ")})`;
  }

  updateBackgroundColor() {
    const colorBg = this.getBackgroundColor();
    if (this.elements.contenedorPokemon) this.elements.contenedorPokemon.style.background = colorBg;
  }

  handleGenderClick(gender) {
    const availableGenders = this.estado.getAvailableGenders();
    if (availableGenders.includes(gender)) {
      this.estado.generoActivo = gender;
      this.estado.selector1 = 0;
      this.estado.selector2 = 0;
      this.estado.initializeSections();
      this.updateAll();
    }
  }

  handleSpecialFormClick(form) {
    this.estado.formaEspecialActiva = this.estado.formaEspecialActiva === form ? "" : form;
    this.estado.selector1 = 0;
    this.estado.selector2 = 0;
    this.estado.initializeSections();
    this.updateAll();
  }

  handleToggleClick(toggle) {
    const urls = this.estado.getCurrentImageUrls();
    const shinyAvailable = !!urls.variocolor;
    const traseraAvailable = !!urls.trasera || !!urls.variocolorTrasera;
    if (toggle === 'shiny' && !shinyAvailable) return;
    if (toggle === 'trasera' && !traseraAvailable) return;
    this.estado[`es${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`] =
      !this.estado[`es${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`];
    this.updateAll();
  }

  navigateSection(section, direction) {
    const selectorKey = `selector${section}`;
    const sectionsKey = `secciones${section}`;
    this.estado[selectorKey] = (this.estado[selectorKey] + direction + this.estado[sectionsKey].length) % this.estado[sectionsKey].length;
    if (section === 1) {
      const previousSeccion2Name = this.estado.ultimaSeccion2Nombre;
      this.estado.secciones2 = this.estado.getAvailableSubsections(this.estado.secciones1[this.estado.selector1]);
      const matchingIndex = this.estado.secciones2.findIndex(sec => sec === previousSeccion2Name);
      if (matchingIndex !== -1) this.estado.selector2 = matchingIndex;
      else this.estado.selector2 = 0;
      if (this.estado.secciones2.length > 0) this.estado.ultimaSeccion2Nombre = this.estado.secciones2[this.estado.selector2];
    } else {
      if (this.estado.secciones2.length > 0) this.estado.ultimaSeccion2Nombre = this.estado.secciones2[this.estado.selector2];
    }
    this.updateSections();
    this.updateImage();
    this.updateTipos();
    this.updateBackgroundColor();
  }

  updateButtonState(buttonType, key, isActive, isAvailable) {
    const element = this.elements[key];
    if (!element) return;
    const config = configBotones[buttonType]?.find(btn => btn.key === key);
    if (!config) return;
    if (!isAvailable) {
      element.className = "circuloExterno botonDeshabilitado";
      element.querySelector(".circuloMedio").className = "circuloMedio grisColor";
      element.querySelector(".circuloInterno").className = "circuloInterno";
      element.querySelector(".iconoSVG").className = "iconoSVG deshabilitado";
      element.style.pointerEvents = "none";
    } else {
      element.style.pointerEvents = "auto";
      if (isActive) {
        element.className = `circuloExterno ${config.color}`;
        element.querySelector(".circuloMedio").className = "circuloMedio";
        element.querySelector(".circuloInterno").className = `circuloInterno ${config.color}`;
        element.querySelector(".iconoSVG").className = "iconoSVG blanco";
      } else {
        element.className = "circuloExterno";
        element.querySelector(".circuloMedio").className = `circuloMedio ${config.color} transparenteBoton`;
        element.querySelector(".circuloInterno").className = "circuloInterno";
        element.querySelector(".iconoSVG").className = "iconoSVG";
      }
    }
  }

  updateSections() {
    if (this.estado.shouldHideSections()) {
      this.elements.seccion1.style.display = "none";
      this.elements.seccion2.style.display = "none";
      this.estado.isSeccion1 = "";
      this.estado.isSeccion2 = "";
      return;
    }
    this.estado.secciones1 = this.estado.getAvailableSections();
    if (this.estado.selector1 >= this.estado.secciones1.length) this.estado.selector1 = 0;
    if (this.estado.secciones1.length <= 1) {
      this.elements.seccion1.style.display = "none";
      this.estado.isSeccion1 = this.estado.secciones1[0] || "normal";
    } else {
      this.elements.seccion1.style.display = "flex";
      this.estado.isSeccion1 = this.estado.secciones1[this.estado.selector1];
      this.elements.seccion1Texto.textContent = this.estado.isSeccion1 === "normal" ? "Común" : this.estado.isSeccion1;
    }
    this.estado.secciones2 = this.estado.getAvailableSubsections(this.estado.isSeccion1);
    if (this.estado.selector2 >= this.estado.secciones2.length) this.estado.selector2 = 0;
    if (this.estado.secciones2.length <= 1) {
      this.elements.seccion2.style.display = "none";
      this.estado.isSeccion2 = this.estado.secciones2[0] || "";
    } else {
      this.elements.seccion2.style.display = "flex";
      this.estado.isSeccion2 = this.estado.secciones2[this.estado.selector2];
      this.elements.seccion2Texto.textContent = this.estado.isSeccion2;
    }
  }

  updateVolumeButton() {
    const pokemonData = this.estado.getPokemonData();
    const botonVolumen = this.elements.botonVolumen;
    if (!pokemonData.grito) {
      botonVolumen.style.display = "none";
      return;
    }
    botonVolumen.style.display = "flex";
    const circuloMedio = botonVolumen.querySelector('.circuloMedio');
    const circuloInterno = botonVolumen.querySelector('.circuloInterno');
    const img = botonVolumen.querySelector('img');
    if (this.estado.cargandoAudio) {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer';
      circuloMedio.className = 'circuloMedio gritoColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.style.display = 'none';
      let spinner = botonVolumen.querySelector('.audio-spinner');
      if (!spinner) {
        spinner = document.createElement('div');
        spinner.className = 'audio-spinner';
        circuloInterno.appendChild(spinner);
      }
      spinner.style.display = 'block';
      return;
    }
    const spinner = botonVolumen.querySelector('.audio-spinner');
    if (spinner) spinner.style.display = 'none';
    img.style.display = 'block';
    const isPlaying = this.estado.audioActual && !this.estado.audioActual.paused;
    if (isPlaying) {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer gritoColor';
      circuloMedio.className = 'circuloMedio';
      circuloInterno.className = 'circuloInterno gritoColor';
      img.className = 'iconoSVG blanco';
    } else {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer';
      circuloMedio.className = 'circuloMedio gritoColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.className = 'iconoSVG';
      img.src = datosWikidex.icono.grito;
    }
  }

  updateArtworkButton() {
    const botonArtwork = this.elements.botonArtwork;
    botonArtwork.style.display = "flex";
    const circuloMedio = botonArtwork.querySelector('.circuloMedio');
    const circuloInterno = botonArtwork.querySelector('.circuloInterno');
    const img = botonArtwork.querySelector('img');
    if (this.estado.esArtwork) {
      botonArtwork.className = 'circuloExterno botonEsquinaSupIzq artworkColor';
      circuloMedio.className = 'circuloMedio';
      circuloInterno.className = 'circuloInterno artworkColor';
      img.className = 'iconoSVG blanco';
    } else {
      botonArtwork.className = 'circuloExterno botonEsquinaSupIzq';
      circuloMedio.className = 'circuloMedio artworkColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.className = 'iconoSVG';
    }
  }

  updateTipos() {
  // Limpiar referencias anteriores
  this.gestorReferencias.limpiarReferenciasPokemon();
  
  const pokemonData = this.estado.getPokemonData();
  const contenedorInfo = this.elements.contenedorInfo;
  contenedorInfo.innerHTML = '';
  
  if (!pokemonData || Object.keys(pokemonData).length === 0) return;

  // ========== TIPOS Y GENERACIÓN ==========
  // En la sección de TIPOS Y GENERACIÓN, reemplaza por:
if ((pokemonData.tipo && pokemonData.tipo.length > 0) || pokemonData.generacion !== undefined) {
  const tiposHTML = (pokemonData.tipo && pokemonData.tipo.length > 0)
    ? pokemonData.tipo.map(tipo => {
        let tipoNombre = tipo;
        let notaHTML = '';
        
        if (typeof tipo === 'object' && tipo.valor) {
          tipoNombre = tipo.valor;
          if (tipo.nota) {
            notaHTML = this.gestorReferencias.procesarReferencia(tipo.nota, tipo);
          }
        }
        
        const imagenTipo = datosWikidex.tipo[tipoNombre] || 'ruta/por_defecto.png';
        return `<span style="white-space: nowrap;"><img src="${imagenTipo}" height="22" alt="${tipoNombre}">${notaHTML}</span>`;
      }).join(' ')
    : '';

    const tipoCard = tiposHTML ? `
      <div class="tarjeta">
        <div class="tituloTarjeta">Tipo</div>
        <div class="contenidoTarjeta">
          <div class="tiposContainer">${tiposHTML}</div>
        </div>
      </div>
    ` : `<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">—</div></div>`;

    let generacionHTML = '';
    if (pokemonData.generacion !== undefined) {
      let genValue = pokemonData.generacion;
      let genNotaHTML = '';
      
      if (typeof pokemonData.generacion === 'object' && pokemonData.generacion.valor) {
        genValue = pokemonData.generacion.valor;
        if (pokemonData.generacion.nota) {
          genNotaHTML = this.gestorReferencias.procesarReferencia(pokemonData.generacion.nota, pokemonData.generacion);
        }
      }
      
      const imgGeneracion = datosWikidex.generación[genValue] || datosWikidex.default;
      const generaciones = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena'];
      const generacionTexto = generaciones[genValue - 1] || genValue;
      
      generacionHTML = `
        <div class="tarjeta">
          <div class="tituloTarjeta">Generación</div>
          <div class="contenidoTarjeta">
            <div class="tipoGeneracionContainer">
              <img src="${imgGeneracion}" height="20" alt="${generacionTexto} generación">
              <div class="generacionSpacing"></div>${generacionTexto}${genNotaHTML}
            </div>
          </div>
        </div>
      `;
    } else {
      generacionHTML = `<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">—</div></div>`;
    }

    contenedorInfo.innerHTML += `
      <div class="contenedorMedidas">
        ${tipoCard}
        ${generacionHTML}
      </div>
    `;
  }

  // ========== GÉNERO ==========
  if (pokemonData.genero) {
    let barras = '';
    
    // En la sección de GÉNERO, reemplaza las barras por:
if (pokemonData.genero.macho) {
  let valorMacho = pokemonData.genero.macho;
  let notaMacho = '';
  if (typeof valorMacho === 'object' && valorMacho.valor) {
    if (valorMacho.nota) {
      notaMacho = this.gestorReferencias.procesarReferencia(valorMacho.nota, valorMacho);
    }
    valorMacho = valorMacho.valor;
  }
  const porcentajeMacho = parseFloat(valorMacho);
  
  const bordeMacho = porcentajeMacho === 100 ? 'border-radius: 5px;' : 'border-top-left-radius: 5px; border-bottom-left-radius: 5px;';
  barras += `
    <div class="generoContainer">
      <img src="${datosWikidex.icono.macho}" alt="Macho">
      <div class="generoBarra">
        <div class="generoBarraMacho" style="flex-basis: ${porcentajeMacho}%; ${bordeMacho}"></div>
        ${porcentajeMacho < 100 ? `<div class="generoBarraVacia" style="flex-basis: ${100 - porcentajeMacho}%;"></div>` : ''}
        <div class="generoPorcentaje"><span>${porcentajeMacho.toString().replace('.', "'")}%${notaMacho}</span></div>
      </div>
    </div>
  `;
}

if (pokemonData.genero.hembra) {
  let valorHembra = pokemonData.genero.hembra;
  let notaHembra = '';
  if (typeof valorHembra === 'object' && valorHembra.valor) {
    if (valorHembra.nota) {
      notaHembra = this.gestorReferencias.procesarReferencia(valorHembra.nota, valorHembra);
    }
    valorHembra = valorHembra.valor;
  }
  const porcentajeHembra = parseFloat(valorHembra);
  
  const bordeHembra = porcentajeHembra === 100 ? 'border-radius: 5px;' : 'border-top-left-radius: 5px; border-bottom-left-radius: 5px;';
  barras += `
    <div class="generoContainer">
      <img src="${datosWikidex.icono.hembra}" alt="Hembra">
      <div class="generoBarra">
        <div class="generoBarraHembra" style="flex-basis: ${porcentajeHembra}%; ${bordeHembra}"></div>
        ${porcentajeHembra < 100 ? `<div class="generoBarraVacia" style="flex-basis: ${100 - porcentajeHembra}%;"></div>` : ''}
        <div class="generoPorcentaje"><span>${porcentajeHembra.toString().replace('.', "'")}%${notaHembra}</span></div>
      </div>
    </div>
  `;
}
    
    contenedorInfo.innerHTML += `
      <div class="tarjetaIndividual">
        <div class="tituloTarjeta">Sexo</div>
        <div class="contenidoTarjeta">
          <div style="width: 100%;">${barras}</div>
        </div>
      </div>
    `;
  } else {
    contenedorInfo.innerHTML += `
      <div class="tarjetaIndividual">
        <div class="tituloTarjeta">Sexo</div>
        <div class="contenidoTarjeta">Sin sexo</div>
      </div>
    `;
  }

  // ========== ALTURA Y PESO ==========
  if (pokemonData.altura !== undefined || pokemonData.peso !== undefined) {
    let medidasHTML = '<div class="contenedorMedidas">';
    
    if (pokemonData.altura !== undefined) {
  let alturasArray = Array.isArray(pokemonData.altura) ? pokemonData.altura : [pokemonData.altura];
  
  const alturaHTML = alturasArray.map(alt => {
    const valorConReferencia = this.gestorReferencias.extraerValorConReferencia(alt);
    return `${valorConReferencia} m`;
  }).join('<br>');
  
  medidasHTML += `
    <div class="tarjeta">
      <div class="tituloTarjeta">Altura</div>
      <div class="contenidoTarjeta">
        <span>${alturaHTML}</span>
      </div>
    </div>
  `;
}

    if (pokemonData.peso !== undefined) {
  let pesosArray = Array.isArray(pokemonData.peso) ? pokemonData.peso : [pokemonData.peso];
  
  const pesoHTML = pesosArray.map(p => {
    const valorConReferencia = this.gestorReferencias.extraerValorConReferencia(p);
    return `${valorConReferencia} kg`;
  }).join('<br>');
  
  medidasHTML += `
    <div class="tarjeta">
      <div class="tituloTarjeta">Peso</div>
      <div class="contenidoTarjeta">
        <span>${pesoHTML}</span>
      </div>
    </div>
  `;
} else {
      medidasHTML += `
        <div class="tarjeta">
          <div class="tituloTarjeta">Peso</div>
          <div class="contenidoTarjeta">
            <span>??? kg</span>
          </div>
        </div>
      `;
    }
    
    medidasHTML += '</div>';
    contenedorInfo.innerHTML += medidasHTML;
  }

  // ========== HABILIDADES ==========
  if (pokemonData.habilidad && pokemonData.habilidad.length > 0) {
    const habilidadesNormales = pokemonData.habilidad.filter(hab => !hab.oculta);
    const habilidadesOcultas = pokemonData.habilidad.filter(hab => hab.oculta);
    let habilidadesHTML = '<div class="contenedorMedidas">';
    
    if (habilidadesNormales.length > 0) {
      const habilidadesNormalesHTML = habilidadesNormales.map(hab => {
        const nombreCompleto = this.gestorReferencias.extraerValorConReferencia(hab.nombre);
        return `<span>${nombreCompleto}</span><br>`;
      }).join('');
      
      const tituloNormal = habilidadesNormales.length === 1 ? 'Habilidad' : 'Habilidades';
      habilidadesHTML += `
        <div class="tarjeta">
          <div class="tituloTarjeta">${tituloNormal}</div>
          <div class="contenidoTarjeta">
            <div>${habilidadesNormalesHTML}</div>
          </div>
        </div>
      `;
    }
    
    if (habilidadesOcultas.length > 0) {
      const habilidadesOcultasHTML = habilidadesOcultas.map(hab => {
        const nombreCompleto = this.gestorReferencias.extraerValorConReferencia(hab.nombre);
        return `<span>${nombreCompleto}</span><br>`;
      }).join('');
      
      const tituloOculta = habilidadesOcultas.length === 1 ? 'Habilidad oculta' : 'Habilidades ocultas';
      habilidadesHTML += `
        <div class="tarjeta">
          <div class="tituloTarjeta">${tituloOculta}</div>
          <div class="contenidoTarjeta">
            <div>${habilidadesOcultasHTML}</div>
          </div>
        </div>
      `;
    }
    
    habilidadesHTML += '</div>';
    contenedorInfo.innerHTML += habilidadesHTML;
  }

  // ========== FIGURA Y COLOR ==========
  if (pokemonData.figura !== undefined || pokemonData.color) {
    const imgFigura = datosWikidex.figura[pokemonData.figura] || datosWikidex.default;
    // En la sección de FIGURA Y COLOR, reemplaza la parte de figura por:
let figuraHTML = '';
if (pokemonData.figura !== undefined) {
  if (Array.isArray(pokemonData.figura)) {
    const figurasHTML = pokemonData.figura.map(fig => {
      let figuraValor = '';
      let notaHTML = '';
      
      if (typeof fig === 'object' && fig.valor) {
        figuraValor = fig.valor;
        if (fig.nota) {
          notaHTML = this.gestorReferencias.procesarReferencia(fig.nota, fig);
        }
      } else {
        figuraValor = fig;
      }
      
      const imgFigura = datosWikidex.figura[figuraValor] || datosWikidex.default;
      return `<img src="${imgFigura}" height="30" alt="Figura ${figuraValor}">${notaHTML}`;
    }).join(' ');
    
    figuraHTML = `
      <div class="tarjeta">
        <div class="tituloTarjeta">Figura</div>
        <div class="contenidoTarjeta">
          ${figurasHTML}
        </div>
      </div>
    `;
  } else {
    const imgFigura = datosWikidex.figura[pokemonData.figura] || datosWikidex.default;
    figuraHTML = `
      <div class="tarjeta">
        <div class="tituloTarjeta">Figura</div>
        <div class="contenidoTarjeta">
          <img src="${imgFigura}" height="30" alt="Figura ${pokemonData.figura}">
        </div>
      </div>
    `;
  }
} else {
  figuraHTML = `<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">—</div></div>`;
}

    const coloresMap = {
      Azul: "#3D8BFF", Amarillo: "#FFD700", Blanco: "#EEEEEE",
      Gris: "#696969", Marrón: "#B8860B", Morado: "#6A5ACD",
      Negro: "#000000", Rojo: "#FF6347", Rosa: "#DB7093", Verde: "#228B22"
    };

    let colorCard = '';
    // En la sección de COLOR, reemplaza por:
if (pokemonData.color) {
  const coloresArray = Array.isArray(pokemonData.color) ? pokemonData.color : [pokemonData.color];
  const coloresHTML = coloresArray.map(colorItem => {
    let colorNombre = '';
    let notaHTML = '';
    
    if (typeof colorItem === 'object' && colorItem.valor) {
      colorNombre = colorItem.valor;
      if (colorItem.nota) {
        notaHTML = this.gestorReferencias.procesarReferencia(colorItem.nota, colorItem);
      }
    } else {
      colorNombre = colorItem;
    }
    
    const colorHex = coloresMap[colorNombre] || "#FFFFFF";
    return `<span class="colorMuestra" style="background-color:${colorHex};"></span><span>${colorNombre}${notaHTML}</span>`;
  }).join('');
  
  const tituloColor = coloresArray.length === 1 ? 'Color' : 'Colores';
  colorCard = `
    <div class="tarjeta">
      <div class="tituloTarjeta">${tituloColor}</div>
      <div class="contenidoTarjeta">
        <div class="colorContenedor">${coloresHTML}</div>
      </div>
    </div>
  `;
}

    contenedorInfo.innerHTML += `
      <div class="contenedorMedidas">
        ${figuraHTML}
        ${colorCard}
      </div>
    `;
  }

  // ========== CATEGORÍA Y HUEVO ==========
  if (pokemonData.categoria || (pokemonData.huevo && pokemonData.huevo.length > 0)) {
    let categoriaCard = '';
    if (pokemonData.categoria) {
      const categorias = Array.isArray(pokemonData.categoria) ? pokemonData.categoria : [pokemonData.categoria];
      const categoriasHTML = categorias.map(cat => {
        const nombreCompleto = this.gestorReferencias.extraerValorConReferencia(cat);
        return `<span>Pokémon ${nombreCompleto}</span>`;
      }).join('<br>');
      
      categoriaCard = `
        <div class="tarjeta">
          <div class="tituloTarjeta">Categoría</div>
          <div class="contenidoTarjeta">
            <div>${categoriasHTML}</div>
          </div>
        </div>
      `;
    } else {
      categoriaCard = `<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">—</div></div>`;
    }

    let huevoHTML = '';
    if (pokemonData.huevo && pokemonData.huevo.length > 0) {
      huevoHTML = pokemonData.huevo.map(grupo => {
        return this.gestorReferencias.extraerValorConReferencia(grupo);
      }).join('<br>');
    } else {
      huevoHTML = '—';
    }

    const huevoCard = `
      <div class="tarjeta">
        <div class="tituloTarjeta">Grupo huevo</div>
        <div class="contenidoTarjeta">
          <div>${huevoHTML}</div>
        </div>
      </div>
    `;

    contenedorInfo.innerHTML += `
      <div class="contenedorMedidas">
        ${categoriaCard}
        ${huevoCard}
      </div>
    `;
  }

  // ========== PRONUNCIACIÓN ==========
  if (pokemonData.pronunciacion && pokemonData.pronunciacion.length > 0) {
    const pronunciaciones = pokemonData.pronunciacion.map(p => {
      let foneticaCompleta = this.gestorReferencias.extraerValorConReferencia(p.fonetica);
      
      let zonaHTML = '';
      if (p.zona) {
        if (Array.isArray(p.zona)) {
          const zonasHTML = p.zona.map(z => {
            const zonaTexto = this.gestorReferencias.extraerValorConReferencia(z);
            if (zonaTexto.includes('España')) return '<abbr title="España">(ES)</abbr>';
            if (zonaTexto.includes('Hispanoamérica')) return '<abbr title="Hispanoamérica">(HA)</abbr>';
            return zonaTexto;
          }).join(' ');
          zonaHTML = ' ' + zonasHTML;
        } else {
          if (p.zona === 'España') zonaHTML = ' <abbr title="España">(ES)</abbr>';
          else if (p.zona === 'Hispanoamérica') zonaHTML = ' <abbr title="Hispanoamérica">(HA)</abbr>';
        }
      }
      
      return `/ ${foneticaCompleta} /${zonaHTML}`;
    }).join('<br>');
    
    contenedorInfo.innerHTML += `
      <div class="contenedorMedidas">
        <div class="tarjeta">
          <div class="tituloTarjeta">${pokemonData.pronunciacion.length === 1 ? 'Pronunciación' : 'Pronunciaciones'}</div>
          <div class="contenidoTarjeta">
            <div>${pronunciaciones}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ========== RENDERIZAR REFERENCIAS AL FINAL ==========
  this.gestorReferencias.renderizarReferencias();
  setTimeout(() => {
    this.gestorReferencias.actualizarNumerosCitas();
  }, 0);
}

  updateImage() {
    const pokemonData = this.estado.getPokemonData();
    const imageSrc = this.estado.buildImageSrc();
    const urls = this.estado.getCurrentImageUrls();
    const isShinyAvailable = !!urls.variocolor;
    const isTraseraAvailable = !!urls.trasera || !!urls.variocolorTrasera;
    if (!isShinyAvailable && this.estado.esShiny) this.estado.esShiny = false;
    if (!isTraseraAvailable && this.estado.esTrasera) this.estado.esTrasera = false;
    this.updateButtonState('toggle', 'shiny', this.estado.esShiny, isShinyAvailable);
    this.updateButtonState('toggle', 'trasera', this.estado.esTrasera, isTraseraAvailable);
    this.updateVolumeButton();
    this.updateArtworkButton();
    const testImg = new Image();
    let hasError = false;
    let loadingTimeout;
    loadingTimeout = setTimeout(() => this.showLoadingIndicator(), loadingImageDelay);
    testImg.onload = () => {
      if (!hasError) {
        clearTimeout(loadingTimeout);
        this.elements.imagenPokemonCuadro.src = imageSrc || datosWikidex.default;
        this.hideLoadingIndicator(false);
      }
    };
    testImg.onerror = () => {
      hasError = true;
      clearTimeout(loadingTimeout);
      const defaultTestImg = new Image();
      defaultTestImg.onload = () => {
        this.elements.imagenPokemonCuadro.src = datosWikidex.default;
        this.hideLoadingIndicator(false);
      };
      defaultTestImg.onerror = () => this.hideLoadingIndicator(true);
      defaultTestImg.src = datosWikidex.default;
    };
    testImg.src = imageSrc || datosWikidex.default;
  }

  showLoadingIndicator() {
    const indicator = this.elements.loadingIndicator;
    if (!indicator) return;
    indicator.style.display = 'flex';
    indicator.classList.remove('error');
    this.imageLoading = true;
  }

  hideLoadingIndicator(isError = false) {
    const indicator = this.elements.loadingIndicator;
    if (!indicator) return;
    if (isError) {
      indicator.classList.add('error');
      setTimeout(() => {
        indicator.style.display = 'none';
        indicator.classList.remove('error');
        this.imageLoading = false;
      }, 2000);
    } else {
      indicator.style.display = 'none';
      this.imageLoading = false;
    }
  }

  updateAll() {
    const availableGenders = this.estado.getAvailableGenders();
    const availableSpecialForms = this.estado.getAvailableSpecialForms();
    configBotones.gender.forEach(btn => {
      const isAvailable = availableGenders.includes(btn.key);
      const isActive = this.estado.generoActivo === btn.key;
      this.updateButtonState('gender', btn.key, isActive, isAvailable);
    });
    configBotones.special.forEach(btn => {
      const isAvailable = availableSpecialForms.includes(btn.key);
      const isActive = this.estado.formaEspecialActiva === btn.key;
      this.updateButtonState('special', btn.key, isActive, isAvailable);
    });
    this.updateSections();
    this.updateImage();
    this.updateTipos();
    this.updateBackgroundColor();
  }
}

const estadoPokemon = new EstadoPokemon();
const interfazPokemon = new InterfazPokemon(estadoPokemon);

export { GestorReferencias };
