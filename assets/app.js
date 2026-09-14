const SHEET_ID="1hf3f-CiZBLLPSdHzhOzVkLP6RPykOHHmIj2oqxLFY7E";
const COUNTRIES={"nicaragua":"Nicaragua","guatemala":"Guatemala","el-salvador":"El Salvador","burkina-faso":"Burkina Faso","senegal":"Senegal","mali":"Mali"};
const MONTHS=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];
const SNAPSHOT=window.TS_SNAPSHOT||{};
const ORDER=Object.keys(COUNTRIES);
const qs=new URLSearchParams(location.search);
if(qs.has("embed"))document.body.classList.add("embed");
let country=COUNTRIES[qs.get("pais")]?qs.get("pais"):"nicaragua";
let events=[],index=0,requestToken=0;
const CACHE={};
const $=s=>document.querySelector(s),media=$("#media"),strip=$("#strip"),bar=$("#bar");

function esc(v){return String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function cell(row,i){const x=row?.c?.[i];return x?{raw:x.v??"",fmt:x.f??""}:{raw:"",fmt:""}}
function textCell(x){return String(x?.fmt||x?.raw||"").trim()}
function driveId(url){let s=String(url||"").trim(),m=s.match(/drive\.google\.com\/file\/d\/([^/?#]+)/i);if(m)return m[1];m=s.match(/[?&]id=([^&#]+)/i);if(m&&/drive\.google\.com/i.test(s))return decodeURIComponent(m[1]);m=s.match(/lh3\.googleusercontent\.com\/d\/([^=/?#]+)/i);return m?m[1]:""}
function serialDate(n){const num=Number(n);if(!Number.isFinite(num))return null;const ms=(num-25569)*86400000,d=new Date(ms);return Number.isFinite(d.getTime())?d:null}
function looksSerial(v){const n=Number(v);return Number.isFinite(n)&&n>30000&&n<80000}
function formatSerial(v){const d=serialDate(v);return d?`${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`:String(v)}
function yearFromCell(x){for(const v of [x.raw,x.fmt]){if(typeof v==="number"){if(v>=1900&&v<=2200)return Math.round(v);if(looksSerial(v)){const d=serialDate(v);if(d)return d.getUTCFullYear()}}const s=String(v||"").trim();if(!s)continue;if(/^\d{4}$/.test(s))return +s;let m=s.match(/Date\((\d{4}),/);if(m)return +m[1];m=s.match(/(19|20)\d{2}/);if(m)return +m[0];if(looksSerial(s)){const d=serialDate(+s);if(d)return d.getUTCFullYear()}}return 0}
function visibleDate(x,fallback){for(const v of [x.fmt,x.raw]){if(v===null||v===undefined||v==="")continue;if(typeof v==="number"){if(v>=1900&&v<=2200)return String(Math.round(v));if(looksSerial(v))return formatSerial(v)}const s=String(v).trim();if(!s)continue;if(/^\d{5}(?:\.\d+)?$/.test(s)&&looksSerial(s))return formatSerial(+s);if(/^(19|20)\d{2}$/.test(s))return s;if(/^Date\(/.test(s)){const m=s.match(/Date\((\d+),(\d+),(\d+)/);if(m)return `${+m[3]} ${MONTHS[+m[2]]} ${+m[1]}`}return s}const f=String(fallback||"").trim();if(/^\d{4}-\d{2}-\d{2}$/.test(f)){const [y,m,d]=f.split('-').map(Number);return `${d} ${MONTHS[m-1]} ${y}`}if(/^\d{4}-\d{2}$/.test(f)){const [y,m]=f.split('-').map(Number);return `${MONTHS[m-1]} ${y}`}return f}
function sortKey(x){const r=x.raw;if(typeof r==="number"){if(r>=1900&&r<=2200)return r*10000;if(looksSerial(r)){const d=serialDate(r);return d?d.getUTCFullYear()*10000+(d.getUTCMonth()+1)*100+d.getUTCDate():0}}const s=String(r||x.fmt||"").trim();if(looksSerial(s)){const d=serialDate(+s);return d?d.getUTCFullYear()*10000+(d.getUTCMonth()+1)*100+d.getUTCDate():0}let m=s.match(/Date\((\d+),(\d+),(\d+)/);if(m)return (+m[1])*10000+(+m[2]+1)*100+(+m[3]);m=s.match(/(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/);return m?(+m[1])*10000+(+(m[2]||1))*100+(+(m[3]||1)):0}
function instagramCode(source){const m=String(source||"").match(/instagram\.com\/(?:p|reel)\/([^/?#]+)/i);return m?m[1]:""}

function imageCandidates(e){
  const out=[],seen=new Set(),add=u=>{u=String(u||"").trim();if(u&&!seen.has(u)){seen.add(u);out.push(u)}};
  const id=driveId(e.image);
  if(id){
    add(`https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w2000`);
    add(`https://lh3.googleusercontent.com/d/${encodeURIComponent(id)}=w2000`);
    add(`https://drive.google.com/uc?export=view&id=${encodeURIComponent(id)}`);
  } else if(e.image){
    add(e.image);
  }
  const code=instagramCode(e.source);
  if(code){
    add(`https://www.instagram.com/p/${code}/media/?size=l`);
    add(`https://www.instagram.com/p/${code}/media?size=l`);
  }
  return out;
}

function parseRows(table){
  const out=[];
  for(const row of table?.rows||[]){
    const id=textCell(cell(row,0)),start=cell(row,1),visible=cell(row,3),type=cell(row,4),title=cell(row,5),summary=cell(row,6),img=cell(row,7),cap=cell(row,8),alt=cell(row,9),src=cell(row,10),srcText=cell(row,11),featured=cell(row,12);
    const t=textCell(title);if(!t||t==="Título")continue;
    out.push({id,date:visibleDate(visible,textCell(start)),year:yearFromCell(start),group:textCell(type)||"Hito",title:t,text:textCell(summary),image:textCell(img),imageLabel:textCell(cap),imageAlt:textCell(alt)||t,source:textCell(src),sourceText:textCell(srcText)||"Fuente",featured:/^(SI|SÍ|YES|TRUE|1)$/i.test(textCell(featured)),_sort:sortKey(start)});
  }
  out.sort((a,b)=>a._sort-b._sort||a.title.localeCompare(b.title,'es'));
  return out;
}

function snapshotEvents(slug){
  const arr=SNAPSHOT?.[slug]?.events;
  return Array.isArray(arr)?arr.map(e=>({...e})):[];
}
function mergeWithSnapshot(slug,live){
  const base=new Map(snapshotEvents(slug).map(e=>[e.id,e]));
  return live.map((e,i)=>{
    const b=base.get(e.id)||snapshotEvents(slug)[i]||{};
    return {
      ...b,...e,
      id:e.id||b.id||`${slug}-${String(i+1).padStart(2,'0')}`,
      date:e.date||b.date||'', year:e.year||b.year||0, group:e.group||b.group||'Hito',
      title:e.title||b.title||'', text:e.text||b.text||'',
      image:e.image||b.image||'', imageLabel:e.imageLabel||b.imageLabel||'', imageAlt:e.imageAlt||b.imageAlt||e.title||b.title||'',
      source:e.source||b.source||'', sourceText:e.sourceText||b.sourceText||'Fuente',
      _sort:e._sort||b._sort||0
    };
  });
}

function jsonp(slug){
  if(CACHE[slug])return Promise.resolve(CACHE[slug]);
  return new Promise((resolve,reject)=>{
    const token=++requestToken,cb=`__ts_${slug.replace(/-/g,"_")}_${Date.now()}`,script=document.createElement("script"),timer=setTimeout(()=>finish(new Error("La hoja tardó demasiado en responder")),9000);
    function finish(err,obj){clearTimeout(timer);try{delete window[cb]}catch(_){}script.remove();if(token!==requestToken&&!err){reject(new Error('Petición sustituida'));return}if(err)reject(err);else if(!obj||obj.status&&obj.status!=="ok")reject(new Error(obj?.errors?.[0]?.detailed_message||obj?.errors?.[0]?.message||"Google Sheets no devolvió datos públicos"));else{CACHE[slug]=obj;resolve(obj)}}
    window[cb]=obj=>finish(null,obj);
    script.onerror=()=>finish(new Error("No se pudo leer Google Sheets"));
    script.src=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json;responseHandler:${cb}&sheet=${encodeURIComponent(COUNTRIES[slug])}&headers=1&t=${Date.now()}`;
    document.head.appendChild(script);
  });
}

function updateEmbed(){const base=location.origin+location.pathname,url=`${base}?pais=${encodeURIComponent(country)}&embed=1`,code=`<iframe\n  src="${url}"\n  title="Nuestra historia de Treball Solidari en ${COUNTRIES[country]}"\n  width="100%"\n  height="820"\n  loading="lazy"\n  style="display:block;width:100%;max-width:100%;border:0;"\n></iframe>`;$("#embedUrl").textContent=url;$("#embedCode").textContent=code;return code}
function updateHeader(mode="snapshot"){const y=events.map(e=>e.year).filter(Boolean);$("#pageTitle").textContent=`Nuestra historia en ${COUNTRIES[country]}`;$("#statEvents").textContent=`${events.length} hitos`;$("#statYears").textContent=y.length?`${Math.min(...y)}–${Math.max(...y)}`:"—";$("#statPhotos").textContent=`${events.filter(e=>imageCandidates(e).length).length} hitos con imagen`;document.querySelectorAll(".country").forEach(b=>b.classList.toggle("active",b.dataset.slug===country));document.title=`TS · ${COUNTRIES[country]} · Timeline`;const st=$("#syncState");if(st)st.textContent=mode==="live"?"Datos sincronizados con Google Sheets":"Mostrando copia segura · sincronización automática en segundo plano";updateEmbed()}
function fallback(e,failed=false){media.classList.remove("contain");media.innerHTML=`<div class="mediaFallback"><div><small>${failed?"Imagen no disponible temporalmente":"Sin imagen asociada"}</small><strong>${esc(e.date)}<br>${esc(COUNTRIES[country])}</strong></div></div>`}
function renderMedia(e){media.classList.remove("contain");const urls=imageCandidates(e);if(!urls.length){fallback(e);return}let pos=0;media.innerHTML=`<img alt="${esc(e.imageAlt||e.title)}" decoding="async"><button class="fitToggle" type="button">Ver completa</button>${e.imageLabel?`<div class="caption">${esc(e.imageLabel)}</div>`:""}`;const img=media.querySelector("img"),btn=media.querySelector(".fitToggle");btn.onclick=()=>{const on=media.classList.toggle("contain");btn.textContent=on?"Rellenar marco":"Ver completa"};const tryNext=()=>{if(pos>=urls.length){fallback(e,true);return}img.src=urls[pos++]};img.onerror=tryNext;tryNext()}
function buildStrip(){strip.innerHTML="";events.forEach((e,k)=>{const b=document.createElement("button");b.type="button";b.className="event"+(e.featured?" featured":"");b.innerHTML=`<b>${esc(e.date)}</b><span>${esc(e.title)}</span>`;b.onclick=()=>{index=k;render()};strip.appendChild(b)})}
function prefetch(k){const e=events[k];if(!e)return;const u=imageCandidates(e)[0];if(u){const im=new Image();im.src=u}}
function render(){if(!events.length)return;const e=events[index];renderMedia(e);$("#date").textContent=e.date;$("#title").textContent=e.title;$("#text").textContent=e.text;$("#tag").textContent=e.group==="Proyectos"?"Proyecto":e.group;$("#source").href=e.source||"#";$("#source").textContent=e.source?`Ver ${String(e.sourceText||'fuente').toLowerCase()} ↗`:"";$("#source").style.display=e.source?"inline-block":"none";[...strip.children].forEach((b,k)=>b.classList.toggle("active",k===index));bar.style.width=((index+1)/events.length*100)+"%";$("#count").textContent=`${index+1} / ${events.length}`;$("#prev").disabled=index===0;$("#next").disabled=index===events.length-1;strip.children[index]?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',inline:"center",block:"nearest"});prefetch(index+1)}
function showEvents(arr,mode){events=arr;if(!events.length)return false;index=events.length-1;$("#loading").hidden=true;$("#stage").hidden=false;$("#rail").hidden=false;updateHeader(mode);buildStrip();render();return true}
async function refreshLive(slug){
  try{
    const obj=await jsonp(slug),live=parseRows(obj.table);
    if(!live.length)return;
    const currentId=events[index]?.id;
    events=mergeWithSnapshot(slug,live);
    index=Math.max(0,currentId?events.findIndex(e=>e.id===currentId):events.length-1);
    if(index<0)index=events.length-1;
    updateHeader("live");buildStrip();render();
  }catch(err){console.warn("TS timelines: se mantiene la copia segura",err)}
}
async function setCountry(slug){
  if(!COUNTRIES[slug])return;
  country=slug;requestToken++;
  const p=new URLSearchParams(location.search);p.set("pais",slug);history.replaceState(null,"",location.pathname+"?"+p.toString());
  $("#loading").hidden=false;$("#loading").innerHTML="<strong>Cargando historia…</strong>Preparando los hitos de Treball Solidari.";$("#stage").hidden=true;$("#rail").hidden=true;
  document.querySelectorAll(".country").forEach(b=>b.classList.toggle("active",b.dataset.slug===slug));updateEmbed();
  const safe=snapshotEvents(slug);
  if(!showEvents(safe,"snapshot")){$("#loading").hidden=false;$("#loading").innerHTML=`<strong>No hay hitos disponibles.</strong>No existe una copia segura para ${esc(COUNTRIES[slug])}.`;return}
  refreshLive(slug);
}
function countries(){const n=$("#countries");ORDER.forEach(slug=>{const b=document.createElement("button");b.type="button";b.className="country";b.dataset.slug=slug;b.textContent=COUNTRIES[slug];b.onclick=()=>setCountry(slug);n.appendChild(b)})}
$("#prev").onclick=()=>{if(index>0){index--;render()}};$("#next").onclick=()=>{if(index<events.length-1){index++;render()}};
let sx=0;$("#stage").addEventListener("touchstart",e=>sx=e.changedTouches[0].clientX,{passive:true});$("#stage").addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-sx;if(dx>60&&index>0){index--;render()}if(dx<-60&&index<events.length-1){index++;render()}},{passive:true});
$("#copyEmbed").onclick=async()=>{const code=updateEmbed(),b=$("#copyEmbed");try{await navigator.clipboard.writeText(code)}catch(_){const t=document.createElement("textarea");t.value=code;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove()}b.textContent="Copiado ✓";setTimeout(()=>b.textContent="Copiar código",1600)};
document.addEventListener("keydown",e=>{if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName))return;if(e.key==="ArrowLeft"&&index>0){index--;render()}if(e.key==="ArrowRight"&&index<events.length-1){index++;render()}});
countries();setCountry(country);
