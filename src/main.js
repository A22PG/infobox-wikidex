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
      "datos": "charizard_megaX",
      "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20210524164940/Mega-Charizard_X_HOME.png",
      "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164741/Mega-Charizard_X_HOME_variocolor.png"
    },
    "megaY": {
      "datos": "charizard_megaY",
      "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20210524164716/Mega-Charizard_Y_HOME.png",
      "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/b/bb/latest/20210524164852/Mega-Charizard_Y_HOME_variocolor.png"
    },
    "giga": {
      "datos": "charizard_giga",
      "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20200214184340/Charizard_Gigamax_HOME.png",
      "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20200214193200/Charizard_Gigamax_HOME_variocolor.png"
    }
  },
  "info": {
    "charizard_normal": {
      "tipo": ["Fuego", { "valor": "Volador", "nota": "A", }],
      "altura": ["1'7", { "valor": "4'8", "nota": "B" }],
      "peso": ["90'5", { "valor": "87'2", "nota": "A" }],
      "habilidad": [
        { "nombre": "Mar llamas" },
        { "nombre": "Poder solar", "oculta": true },
        { "nombre": { "valor": "Llamas ocultas", "nota": "B" }, "oculta": true }
      ],
      "sexo": {
        "macho": { "valor": "87.5", "nota": "B" },
        "hembra": { "valor": "12.5", "nota": "A" }
      },
      "generacion": { "valor": "1", "nota": "D" },
      "categoria": ["Llama", { "valor": "Fogonazo", "nota": "A" }],
      "figura": ["3", { "valor": "1", "nota": "D" }],
      "huevo": [{ "valor": "Monstruo", "nota": "C" }, "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20240213073305/Grito_de_Charizard.ogg",
      "color": ["Rojo", { "valor": "Negro", "nota": "B" }],
      "pronunciacion": [
        { "fonetica": { "valor": "/ 'cha.ri.zard /", "nota": "E" }, "zona": ["España", { "valor": "Hispanoamérica", "nota": ["A", "B"] }] },
        { "fonetica": "/ 'char.i.zard /", "zona": "Hispanoamérica" }
      ]
    },
    "charizard_megaX": {
      "tipo": ["Fuego", "Dragón"],
      "altura": "1'7",
      "peso": "110'5",
      "habilidad": [
        { "nombre": { "valor": "Garra dura", "nota": "F" }, "zona": "España" },
        { "nombre": "Garras durs", "zona": "Hispanoamérica" }
      ],
      "sexo": {
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
        { "fonetica": "/ 'cha.ri.zard /" }
      ]
    },
    "charizard_megaY": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "peso": "100'5",
      "habilidad": [
        { "nombre": "Sequía" }
      ],
      "sexo": {
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
        { "fonetica": "/ 'cha.ri.zard /" }
      ]
    },
    "charizard_giga": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "habilidad": [
        { "nombre": "Sequía" }
      ],
      "sexo": {
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
        { "fonetica": "/'cha.ri.zard/" }
      ]
    }
  },
  "nota": {
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
    "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20251112155152/Grito_Pokémon_%28Wikidex%29.svg",
    "artwork": "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20251117205424/Artwork_%28Wikidex%29.svg",
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
  }

  limpiarReferenciasPokemon() {
    const h2 = document.querySelector('h2.destroyable.cuadroPokemon') || 
                document.querySelector('span#Anotaciones')?.closest('h2.destroyable.cuadroPokemon');
    h2?.remove();
    
    document.querySelectorAll('li.destroyable.cuadroPokemon').forEach(e => e.remove());
    
    const lista = document.querySelector('ol.references');
    if (lista?.children.length === 0) this.eliminarSeccionAnotaciones();
    
    this.referenciasActivas.clear();
  }

  eliminarSeccionAnotaciones() {
    document.querySelector('.mw-references-wrap, #mw-references-wrap')?.remove();
    document.querySelector('h2.destroyable.cuadroPokemon')?.remove();
  }

  asegurarSeccionAnotaciones() {
    let wrapper = document.querySelector('.mw-references-wrap');
    if (!wrapper) {
      let h2Anotaciones = Array.from(document.querySelectorAll('h2')).find(h2 => 
        h2.querySelector('span.mw-headline')?.textContent.includes('Anotaciones')
      );
      
      if (!h2Anotaciones) {
        const cuerpo = document.querySelector('.mw-content-text');
        if (!cuerpo) return null;
        
        const veaseH2 = Array.from(cuerpo.querySelectorAll('h2')).find(h2 => {
          const span = h2.querySelector('span.mw-headline, span#Véase_también');
          return span && (span.textContent.includes('Véase también') || span.id === 'Véase_también');
        });
        
        h2Anotaciones = document.createElement('h2');
        h2Anotaciones.className = 'destroyable cuadroPokemon';
        const titular = document.createElement('span');
        titular.className = 'mw-headline';
        titular.id = 'Anotaciones';
        titular.textContent = 'Anotaciones';
        h2Anotaciones.appendChild(titular);
        
        if (veaseH2) cuerpo.insertBefore(h2Anotaciones, veaseH2);
        else cuerpo.appendChild(h2Anotaciones);
      }
      
      wrapper = document.createElement('div');
      wrapper.className = 'mw-references-wrap';
      wrapper.id = 'mw-references-wrap';
      wrapper.style.color = 'white';
      
      const ol = document.createElement('ol');
      ol.className = 'references';
      wrapper.appendChild(ol);
      h2Anotaciones.insertAdjacentElement('afterend', wrapper);
    }
    return wrapper.querySelector('ol.references');
  }

  procesarReferencia(letra, contexto) {
    let claves = [];
    
    if (typeof letra === 'string' && letra.trim()) {
      claves = [letra];
    } else if (Array.isArray(letra)) {
      claves = letra.filter(l => typeof l === 'string' && l.trim());
    } else if (contexto?.nota) {
      claves = Array.isArray(contexto.nota) 
        ? contexto.nota.filter(n => typeof n === 'string' && n.trim())
        : [contexto.nota];
    }
    
    if (!claves.length) return '';

    const referencias = claves.map(clave => {
      const textoNota = pokemonJSON?.nota?.[clave];
      if (!textoNota) return '';

      if (!this.referenciasActivas.has(clave)) {
        this.referenciasActivas.set(clave, { cuenta: 0, texto: textoNota });
      }
      
      const refData = this.referenciasActivas.get(clave);
      const refId = `cite_ref-${clave}_${refData.cuenta}`;
      const noteId = `cite_note-${clave}`;
      refData.cuenta++;

      return `<a href="#${noteId}" data-ref-key="${clave}" id="${refId}">?</a>`;
    }).filter(Boolean);

    return referencias.length ? ` <sup class="reference">${referencias.join(' ')}</sup>` : '';
  }

  actualizarNumerosCitas() {
    const ol = document.querySelector('.mw-references-wrap ol.references, #mw-references-wrap ol.references, ol.references');
    if (!ol) return;

    const mapaNumeros = new Map();
    Array.from(ol.querySelectorAll('li')).forEach((li, idx) => {
      const match = li.id.match(/^cite_note-(.+)$/);
      if (match) mapaNumeros.set(match[1], idx + 1);
    });

    document.querySelectorAll('a[data-ref-key]').forEach(link => {
      const numero = mapaNumeros.get(link.getAttribute('data-ref-key'));
      if (numero) link.textContent = numero;
    });
  }

  renderizarReferencias() {
    if (!this.referenciasActivas.size) return;

    const ol = this.asegurarSeccionAnotaciones();
    if (!ol) return;

    ol.querySelectorAll('li.destroyable.cuadroPokemon').forEach(e => e.remove());

    Array.from(this.referenciasActivas.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([letra, datosRef]) => {
        const li = document.createElement('li');
        li.id = `cite_note-${letra}`;
        li.className = 'destroyable cuadroPokemon';
        ol.appendChild(li);

        const posicionReal = Array.from(ol.querySelectorAll('li')).indexOf(li) + 1;
        
        const backlinksHTML = datosRef.cuenta === 1
          ? `<span class="mw-cite-backlink"><a href="#cite_ref-${letra}_0" aria-label="Volver arriba" title="Volver arriba">↑</a></span>`
          : `<span class="mw-cite-backlink">↑ ${Array.from({length: datosRef.cuenta}, (_, i) => 
              `<sup><a href="#cite_ref-${letra}_${i}">${posicionReal},${i}</a></sup>`
            ).join(' ')}</span>`;

        li.innerHTML = `${backlinksHTML} <span class="reference-text">${datosRef.texto}</span>`;
      });

    this.actualizarNumerosCitas();
  }

  extraerValorConReferencia(dato) {
    if (typeof dato === 'string') return dato;
    if (typeof dato === 'object' && dato) {
      const valor = dato.valor || '';
      const referencia = dato.nota ? this.procesarReferencia(dato.nota, dato) : '';
      return valor + referencia;
    }
    return '';
  }
}

class EstadoPokemon {
  constructor() {
    this.forma = pokemonJSON.forma;
    this.info = pokemonJSON.info;
    this.sexoActivo = "";
    this.formaEspecialActiva = "";
    this.esShiny = false;
    this.esTrasera = false;
    this.esArtwork = localStorage.getItem('preferArtwork') === 'true';
    this.selector1 = 0;
    this.selector2 = 0;
    this.ultimaSeccion2Nombre = "";
    this.audioActual = null;
    this.cargandoAudio = false;
    
    const sexosDisponibles = this.getAvailableGenders();
    if (sexosDisponibles.length) this.sexoActivo = sexosDisponibles[0];
    this.initializeSections();
  }

  initializeSections() {
    this.secciones1 = this.getAvailableSections();
    if (this.secciones1.length) {
      this.isSeccion1 = this.secciones1[0];
      this.secciones2 = this.getAvailableSubsections(this.isSeccion1);
      if (this.secciones2.length) {
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
      } else if (keys.includes("normal")) {
        this._cachedGenders = ["macho", "hembra"];
        if (!this.forma._duplicatedNormal) {
          const normalData = this.forma.normal;
          if (!this.forma.macho) this.forma.macho = normalData;
          if (!this.forma.hembra) this.forma.hembra = normalData;
          this.forma._duplicatedNormal = true;
        }
      } else {
        this._cachedGenders = keys.filter(k => (k === "macho" || k === "hembra") && this.forma[k]);
      }
    }
    return this._cachedGenders;
  }

  getAvailableSpecialForms() {
    return ["mega", "megaX", "megaY", "giga"].filter(f => this.forma[f]);
  }

  shouldHideSections() {
    return ["mega", "megaX", "megaY", "giga"].includes(this.formaEspecialActiva);
  }

  getCurrentFormaNode() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) 
      return this.forma[this.formaEspecialActiva];
    
    const availableGenders = this.getAvailableGenders();
    if (availableGenders.length) {
      if (!this.sexoActivo) this.sexoActivo = availableGenders[0];
      return this.forma[this.sexoActivo];
    }
    return this.forma;
  }

  getAvailableSections() {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string" || node.datos !== undefined) return [];
    return Object.keys(node).filter(key => !["mega", "megaX", "megaY", "giga", "primigenio", "origen"].includes(key));
  }

  getAvailableSubsections(mainSection) {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string") return [];
    const sectionData = node[mainSection];
    if (!sectionData || typeof sectionData === "string" || sectionData.datos !== undefined) return [];
    return Object.keys(sectionData);
  }

  getPokemonData() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) {
      const specialNode = this.forma[this.formaEspecialActiva];
      const datosKey = typeof specialNode === "string" ? specialNode : specialNode.datos;
      return this.info[datosKey] || {};
    }
    
    const node = this.getCurrentFormaNode();
    if (!node) return {};
    if (node.datos) return this.info[node.datos] || {};
    
    const sectionData = node[this.isSeccion1];
    if (!sectionData) return {};
    if (typeof sectionData === "string") return this.info[sectionData] || {};
    if (sectionData.datos) return this.info[sectionData.datos] || {};
    
    const sub = sectionData[this.isSeccion2];
    if (sub) {
      if (typeof sub === "string") return this.info[sub] || {};
      if (sub.datos) return this.info[sub.datos] || {};
    }
    return {};
  }

  getCurrentImageUrls() {
    if (this.formaEspecialActiva && this.forma[this.formaEspecialActiva]) {
      const node = this.forma[this.formaEspecialActiva];
      return typeof node === "string" ? {} : node;
    }
    
    const node = this.getCurrentFormaNode();
    if (!node || node.datos !== undefined) return node || {};
    
    const sectionData = node[this.isSeccion1];
    if (!sectionData || typeof sectionData === "string") return {};
    if (sectionData.datos !== undefined) return sectionData;
    
    const sub = sectionData[this.isSeccion2];
    return sub && typeof sub !== "string" ? sub : {};
  }

  buildImageSrc() {
    const urls = this.getCurrentImageUrls();
    const getImageFromField = (field) => {
      if (!field) return null;
      if (typeof field === 'string') return field;
      if (Array.isArray(field)) {
        if (!field.length) return null;
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
    return getImageFromField(urls.imagen) || "";
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
    const $ = (sel) => document.querySelector(sel);
    const elements = {
      imagenPokemonCuadro: $("#imagenPokemonCuadro"),
      contenedorPokemon: $(".contenedorPokemon"),
      seccion1: $("#seccion1"),
      seccion2: $("#seccion2"),
      seccion1Texto: $("#seccion1Texto"),
      seccion2Texto: $("#seccion2Texto"),
      contenedorInfo: $("#contenedorInfo"),
      botonVolumen: $("#botonVolumen"),
      botonArtwork: $("#botonArtwork"),
      botonEnlace: $("#botonEnlace"),
      loadingIndicator: $("#loadingIndicator")
    };
    
    [...configBotones.gender, ...configBotones.special, ...configBotones.toggle].forEach(btn => {
      elements[btn.key] = $(`#${btn.id}`);
    });
    
    ['sec1mas', 'sec1menos', 'sec2mas', 'sec2menos'].forEach((key, i) => {
      elements[key] = $(`#btn${key.charAt(0).toUpperCase() + key.slice(1).replace('mas', 'Mas').replace('menos', 'Menos')}`);
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

          ${this.createCornerButton('botonArtwork', 'botonEsquinaSupIzq', 'artworkColor', datosWikidex.icono.artwork, '28px')}
          ${this.createCornerButton('botonEnlace', 'botonEsquinaInfIzq', 'enlaceColor', datosWikidex.icono.galeria, '28px')}
          ${this.createCornerButton('botonVolumen', 'botonEsquinaSupDer', 'gritoColor', datosWikidex.icono.grito, '28px', 'none')}

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


      <br>
      <hr>
      <div class="mw-content-text" style="color:white;">
        <h2><span class="mw-headline" id="Anotaciones">Anotaciones</span></h2>
        <div class="mw-references-wrap"><ol class="references">
          <li id="cite_note-1"><span class="mw-cite-backlink"><a href="#cite_ref-1" aria-label="Volver arriba" title="Volver arriba">↑</a></span> <span class="reference-text">Esta anotación no debería eliminarse nunca, aunque se cambie la forma del Pokémon tantas veces como el usuario quiera. Tampoco debería verse reflejado el número 1 en el cuadro Pokémon.</span></li>
        </ol></div>
      </div>
    `;
  }

  createCornerButton(id, posClass, color, icon, size, display = 'flex') {
    return `
      <div id="${id}" class="circuloExterno ${posClass}" style="display:${display};">
        <div class="circuloMedio ${color} transparente${id === 'botonVolumen' ? '' : 'Boton'}">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${icon}" alt="${id}" style="height:${size}">
          </div>
        </div>
      </div>
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
    const createSection = (id, num) => `
      <div id="seccion${num}" class="seccionControles" style="display: none;">
        <div id="btnSec${num}Menos" class="seccionSelector"><span>←</span></div>
        <div id="seccion${num}Texto" class="textoSeccion">Común</div>
        <div id="btnSec${num}Mas" class="seccionSelector"><span>→</span></div>
      </div>
    `;
    return createSection('seccion1', 1) + createSection('seccion2', 2);
  }

  setupEventListeners() {
    configBotones.gender.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => this.handleGenderClick(btn.key));
    });

    configBotones.special.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => this.handleSpecialFormClick(btn.key));
    });

    configBotones.toggle.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => this.handleToggleClick(btn.key));
    });

    this.elements.sec1mas?.addEventListener("click", () => this.navigateSection(1, 1));
    this.elements.sec1menos?.addEventListener("click", () => this.navigateSection(1, -1));
    this.elements.sec2mas?.addEventListener("click", () => this.navigateSection(2, 1));
    this.elements.sec2menos?.addEventListener("click", () => this.navigateSection(2, -1));

    this.elements.botonVolumen?.addEventListener("click", () => this.handleVolumeClick());
    this.elements.botonArtwork?.addEventListener("click", () => {
      this.estado.esArtwork = !this.estado.esArtwork;
      localStorage.setItem('preferArtwork', this.estado.esArtwork);
      this.updateAll();
    });
    this.elements.botonEnlace?.addEventListener("click", () => window.open(enlaceWikidex, '_blank'));
  }

  handleVolumeClick() {
    const pokemonData = this.estado.getPokemonData();
    
    if (this.estado.audioActual && !this.estado.audioActual.paused) {
      this.estado.audioActual.pause();
      this.estado.audioActual.currentTime = 0;
      this.estado.audioActual = null;
      this.estado.cargandoAudio = false;
      this.updateVolumeButton();
      return;
    }
    
    if (this.estado.cargandoAudio || !pokemonData.grito?.startsWith("https://")) return;
    
    this.estado.cargandoAudio = true;
    this.updateVolumeButton();
    
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => {
      this.estado.cargandoAudio = false;
      audio.play().then(() => this.updateVolumeButton()).catch(() => {
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
    
    ['play', 'pause'].forEach(evt => audio.addEventListener(evt, () => this.updateVolumeButton()));
    audio.addEventListener('ended', () => {
      this.estado.audioActual = null;
      this.updateVolumeButton();
    });
    
    audio.src = pokemonData.grito;
    this.estado.audioActual = audio;
  }

  handleResize() {
    this.updateTipos();
  }

  getBackgroundColor() {
    const pokemonData = this.estado.getPokemonData();
    if (!pokemonData.tipo?.length) return "#f4f4f4ff";

    const extractValue = (tipo) => typeof tipo === 'object' && tipo.valor ? tipo.valor : tipo;
    
    if (pokemonData.tipo.length === 1) {
      return datosWikidex.color[extractValue(pokemonData.tipo[0])] || "#FFFFFF";
    }

    const colores = pokemonData.tipo.map(tipo => datosWikidex.color[extractValue(tipo)] || "#FFFFFF");
    return `linear-gradient(to right, ${colores.join(", ")})`;
  }

  updateBackgroundColor() {
    if (this.elements.contenedorPokemon) {
      this.elements.contenedorPokemon.style.background = this.getBackgroundColor();
    }
  }

  handleGenderClick(gender) {
    if (this.estado.getAvailableGenders().includes(gender)) {
      this.estado.sexoActivo = gender;
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
    const available = toggle === 'shiny' ? !!urls.variocolor : !!(urls.trasera || urls.variocolorTrasera);
    if (!available) return;
    
    const key = `es${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`;
    this.estado[key] = !this.estado[key];
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
      this.estado.selector2 = matchingIndex !== -1 ? matchingIndex : 0;
      if (this.estado.secciones2.length) this.estado.ultimaSeccion2Nombre = this.estado.secciones2[this.estado.selector2];
    } else if (this.estado.secciones2.length) {
      this.estado.ultimaSeccion2Nombre = this.estado.secciones2[this.estado.selector2];
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
    
    const circuloMedio = element.querySelector(".circuloMedio");
    const circuloInterno = element.querySelector(".circuloInterno");
    const iconoSVG = element.querySelector(".iconoSVG");
    
    if (!isAvailable) {
      element.className = "circuloExterno botonDeshabilitado";
      circuloMedio.className = "circuloMedio grisColor";
      circuloInterno.className = "circuloInterno";
      iconoSVG.className = "iconoSVG deshabilitado";
      element.style.pointerEvents = "none";
    } else {
      element.style.pointerEvents = "auto";
      if (isActive) {
        element.className = `circuloExterno ${config.color}`;
        circuloMedio.className = "circuloMedio";
        circuloInterno.className = `circuloInterno ${config.color}`;
        iconoSVG.className = "iconoSVG blanco";
      } else {
        element.className = "circuloExterno";
        circuloMedio.className = `circuloMedio ${config.color} transparenteBoton`;
        circuloInterno.className = "circuloInterno";
        iconoSVG.className = "iconoSVG";
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
    const boton = this.elements.botonArtwork;
    const circuloMedio = boton.querySelector('.circuloMedio');
    const circuloInterno = boton.querySelector('.circuloInterno');
    const img = boton.querySelector('img');
    
    if (this.estado.esArtwork) {
      boton.className = 'circuloExterno botonEsquinaSupIzq artworkColor';
      circuloMedio.className = 'circuloMedio';
      circuloInterno.className = 'circuloInterno artworkColor';
      img.className = 'iconoSVG blanco';
    } else {
      boton.className = 'circuloExterno botonEsquinaSupIzq';
      circuloMedio.className = 'circuloMedio artworkColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.className = 'iconoSVG';
    }
  }

  createCard(titulo, contenido, isEmpty = false) {
    return `
      <div class="tarjeta">
        <div class="tituloTarjeta">${titulo}</div>
        <div class="contenidoTarjeta">${isEmpty ? '—' : contenido}</div>
      </div>
    `;
  }

  updateTipos() {
    this.gestorReferencias.limpiarReferenciasPokemon();

    const pokemonData = this.estado.getPokemonData();
    const contenedorInfo = this.elements.contenedorInfo;
    contenedorInfo.innerHTML = '';

    if (!pokemonData || !Object.keys(pokemonData).length) return;

    const generaciones = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena'];

    // TIPOS Y GENERACIÓN
    if (pokemonData.tipo?.length || pokemonData.generacion !== undefined) {
      const tiposHTML = pokemonData.tipo?.length 
        ? pokemonData.tipo.map(tipo => {
            const tipoNombre = typeof tipo === 'object' && tipo.valor ? tipo.valor : tipo;
            const notaHTML = tipo.nota ? this.gestorReferencias.procesarReferencia(tipo.nota, tipo) : '';
            const imagenTipo = datosWikidex.tipo[tipoNombre] || 'ruta/por_defecto.png';
            return `<span style="white-space: nowrap;"><img src="${imagenTipo}" height="22" alt="${tipoNombre}">${notaHTML}</span>`;
          }).join(' ')
        : '';

      const tipoCard = tiposHTML 
        ? this.createCard(pokemonData.tipo.length > 1 ? 'Tipos' : 'Tipo', `<div class="tiposContainer">${tiposHTML}</div>`)
        : this.createCard('Tipo', '', true);

      let generacionHTML = '';
      if (pokemonData.generacion !== undefined) {
        const genArray = Array.isArray(pokemonData.generacion) ? pokemonData.generacion : [pokemonData.generacion];
        
        const generacionesHTML = genArray.map(gen => {
          const genValue = typeof gen === 'object' && gen.valor ? gen.valor : gen;
          const genNotaHTML = gen.nota ? this.gestorReferencias.procesarReferencia(gen.nota, gen) : '';
          const imgGeneracion = datosWikidex.generación[genValue] || datosWikidex.default;
          const generacionTexto = generaciones[genValue - 1] || genValue;
          
          return `<div class="tipoGeneracionContainer">
            <img src="${imgGeneracion}" height="20" alt="${generacionTexto} generación">
            &nbsp;${generacionTexto}&nbsp;${genNotaHTML}
          </div>`;
        }).join('<br>');
        
        generacionHTML = this.createCard(genArray.length === 1 ? 'Generación' : 'Generaciones', generacionesHTML);
      } else {
        generacionHTML = this.createCard('Generación', '', true);
      }

      contenedorInfo.innerHTML += `<div class="contenedorMedidas">${tipoCard}${generacionHTML}</div>`;
    }

    // GÉNERO
    if (pokemonData.sexo) {
      const createBarraGenero = (tipo, icono, valor, borde) => {
        const valorFinal = typeof valor === 'object' && valor.valor ? valor.valor : valor;
        const notaHTML = valor.nota ? this.gestorReferencias.procesarReferencia(valor.nota, valor) : '';
        const porcentaje = parseFloat(valorFinal);
        const estiloBorde = porcentaje === 100 ? 'border-radius: 5px;' : 'border-top-left-radius: 5px; border-bottom-left-radius: 5px;';
        
        return `
          <div class="sexoContainer">
            <img src="${icono}" alt="${tipo}">
            <div class="sexoBarra">
              <div class="sexoBarra${tipo}" style="flex-basis: ${porcentaje}%; ${estiloBorde}"></div>
              ${porcentaje < 100 ? `<div class="sexoBarraVacia" style="flex-basis: ${100 - porcentaje}%;"></div>` : ''}
              <div class="sexoPorcentaje"><span>${porcentaje.toString().replace('.', "'")}%${notaHTML}</span></div>
            </div>
          </div>
        `;
      };

      const barras = [
        pokemonData.sexo.macho ? createBarraGenero('Macho', datosWikidex.icono.macho, pokemonData.sexo.macho) : '',
        pokemonData.sexo.hembra ? createBarraGenero('Hembra', datosWikidex.icono.hembra, pokemonData.sexo.hembra) : ''
      ].filter(Boolean).join('');

      contenedorInfo.innerHTML += `
        <div class="tarjetaIndividual">
          <div class="tituloTarjeta">Sexo</div>
          <div class="contenidoTarjeta"><div style="width: 100%;">${barras}</div></div>
        </div>
      `;
    } else {
      contenedorInfo.innerHTML += `
        <div class="tarjetaIndividual">
          <div class="tituloTarjeta">Sexo</div>
          <div class="contenidoTarjeta"><i>Desconocido</i></div>
        </div>
      `;
    }

    // ALTURA Y PESO
    if (pokemonData.altura !== undefined || pokemonData.peso !== undefined) {
      const createMedidaCard = (titulo, valores, unidad, defaultValue = '???') => {
        if (valores === undefined) return this.createCard(titulo, `<span>${defaultValue} ${unidad}</span>`);
        
        const valoresArray = Array.isArray(valores) ? valores : [valores];
        const html = valoresArray.map(v => {
          const valor = typeof v === 'object' && v.valor ? v.valor : v;
          const notaHTML = v.nota ? this.gestorReferencias.procesarReferencia(v.nota, v) : '';
          return `${valor} ${unidad}${notaHTML}`;
        }).join('<br>');
        
        const tituloFinal = valoresArray.length === 1 ? titulo : titulo + 's';
        return this.createCard(tituloFinal, `<span>${html}</span>`);
      };

      contenedorInfo.innerHTML += `
        <div class="contenedorMedidas">
          ${createMedidaCard('Altura', pokemonData.altura, 'm')}
          ${createMedidaCard('Peso', pokemonData.peso, 'kg')}
        </div>
      `;
    }

    // HABILIDADES
    if (pokemonData.habilidad?.length) {
      const habilidadesNormales = pokemonData.habilidad.filter(hab => !hab.oculta);
      const habilidadesOcultas = pokemonData.habilidad.filter(hab => hab.oculta);
      
      const createHabilidadCard = (habilidades, titulo) => {
        if (!habilidades.length) return '';
        const html = habilidades.map(hab => {
          const nombreCompleto = this.gestorReferencias.extraerValorConReferencia(hab.nombre);
          return `<span>${nombreCompleto}</span><br>`;
        }).join('');
        return this.createCard(titulo, `<div>${html}</div>`);
      };

      contenedorInfo.innerHTML += `
        <div class="contenedorMedidas">
          ${createHabilidadCard(habilidadesNormales, habilidadesNormales.length === 1 ? 'Habilidad' : 'Habilidades')}
          ${createHabilidadCard(habilidadesOcultas, habilidadesOcultas.length === 1 ? 'Habilidad oculta' : 'Habilidades ocultas')}
        </div>
      `;
    }

    // FIGURA Y COLOR
    if (pokemonData.figura !== undefined || pokemonData.color) {
      let figuraHTML = '';
      if (pokemonData.figura !== undefined) {
        const figurasArray = Array.isArray(pokemonData.figura) ? pokemonData.figura : [pokemonData.figura];
        const figurasHTMLContent = figurasArray.map(fig => {
          const figuraValor = typeof fig === 'object' && fig.valor ? fig.valor : fig;
          const notaHTML = fig.nota ? this.gestorReferencias.procesarReferencia(fig.nota, fig) : '';
          const imgFigura = datosWikidex.figura[figuraValor] || datosWikidex.default;
          return `<span style="white-space: nowrap; margin-right: 8px;"><img src="${imgFigura}" height="30" alt="Figura ${figuraValor}">${notaHTML}</span>`;
        }).join('');
        
        figuraHTML = this.createCard(figurasArray.length === 1 ? 'Figura' : 'Figuras', figurasHTMLContent);
      } else {
        figuraHTML = this.createCard('Figura', '', true);
      }

      const coloresMap = {
        Azul: "#3D8BFF", Amarillo: "#FFD700", Blanco: "#EEEEEE",
        Gris: "#696969", Marrón: "#B8860B", Morado: "#6A5ACD",
        Negro: "#000000", Rojo: "#FF6347", Rosa: "#DB7093", Verde: "#228B22"
      };

      let colorCard = '';
      if (pokemonData.color) {
        const coloresArray = Array.isArray(pokemonData.color) ? pokemonData.color : [pokemonData.color];
        const coloresHTML = coloresArray.map(colorItem => {
          const colorNombre = typeof colorItem === 'object' && colorItem.valor ? colorItem.valor : colorItem;
          const notaHTML = colorItem.nota ? this.gestorReferencias.procesarReferencia(colorItem.nota, colorItem) : '';
          const colorHex = coloresMap[colorNombre] || "#FFFFFF";
          return `<span class="colorMuestra" style="background-color:${colorHex};"></span><span>${colorNombre}${notaHTML}</span>`;
        }).join('');
        
        colorCard = this.createCard(coloresArray.length === 1 ? 'Color' : 'Colores', `<div class="colorContenedor">${coloresHTML}</div>`);
      }

      contenedorInfo.innerHTML += `<div class="contenedorMedidas">${figuraHTML}${colorCard}</div>`;
    }

    // CATEGORÍA Y HUEVO
    if (pokemonData.categoria || pokemonData.huevo?.length) {
      let categoriaCard = '';
      if (pokemonData.categoria) {
        const categorias = Array.isArray(pokemonData.categoria) ? pokemonData.categoria : [pokemonData.categoria];
        const categoriasHTML = categorias.map(cat => {
          const nombreCompleto = this.gestorReferencias.extraerValorConReferencia(cat);
          return `<span>Pokémon ${nombreCompleto}</span>`;
        }).join('<br>');
        categoriaCard = this.createCard(categorias.length === 1 ? 'Categoría' : 'Categorías', `<div>${categoriasHTML}</div>`);
      } else {
        categoriaCard = this.createCard('Categoría', '', true);
      }

      const huevoHTML = pokemonData.huevo?.length 
        ? pokemonData.huevo.map(grupo => this.gestorReferencias.extraerValorConReferencia(grupo)).join('<br>')
        : '—';
      
      const huevoCard = this.createCard(
        pokemonData.huevo?.length > 1 ? 'Grupos huevo' : 'Grupo huevo',
        `<div>${huevoHTML}</div>`
      );

      contenedorInfo.innerHTML += `<div class="contenedorMedidas">${categoriaCard}${huevoCard}</div>`;
    }

    // PRONUNCIACIÓN
    if (pokemonData.pronunciacion?.length) {
      const pronunciaciones = pokemonData.pronunciacion.map(p => {
        const foneticaCompleta = this.gestorReferencias.extraerValorConReferencia(p.fonetica);

        let zonaHTML = '';
        if (p.zona) {
          const zonasArray = Array.isArray(p.zona) ? p.zona : [p.zona];
          const zonasHTMLParts = zonasArray.map(z => {
            const zonaTexto = typeof z === 'object' && z.valor ? z.valor : z;
            const notaZona = z.nota ? this.gestorReferencias.procesarReferencia(z.nota, z) : '';
            
            let abreviatura = '';
            if (zonaTexto.includes('España')) abreviatura = `<abbr title="España">(ES)</abbr>`;
            else if (zonaTexto.includes('Hispanoamérica')) abreviatura = `<abbr title="Hispanoamérica">(HA)</abbr>`;
            else abreviatura = zonaTexto;
            
            return abreviatura + notaZona;
          }).join(' ');
          
          zonaHTML = ' ' + zonasHTMLParts;
        }

        return `${foneticaCompleta}${zonaHTML ? `&nbsp;${zonaHTML}` : ''}`;
      }).join('<br>');

      contenedorInfo.innerHTML += `
        <div class="contenedorMedidas">
          ${this.createCard(pokemonData.pronunciacion.length === 1 ? 'Pronunciación' : 'Pronunciaciones', `<div>${pronunciaciones}</div>`)}
        </div>
      `;
    }

    this.gestorReferencias.renderizarReferencias();
    setTimeout(() => this.gestorReferencias.actualizarNumerosCitas(), 0);
  }

  updateImage() {
    const imageSrc = this.estado.buildImageSrc();
    const urls = this.estado.getCurrentImageUrls();
    const isShinyAvailable = !!urls.variocolor;
    const isTraseraAvailable = !!(urls.trasera || urls.variocolorTrasera);
    
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
      const isActive = this.estado.sexoActivo === btn.key;
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