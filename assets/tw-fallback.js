(function(){
  function ensureTailwind(){
    try{
      var test=document.createElement('div');
      test.className='hidden';
      document.body.appendChild(test);
      var ok=getComputedStyle(test).display==='none';
      test.remove();
      if(!ok){
        var link=document.createElement('link');
        link.rel='stylesheet';
        link.href='https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
        document.head.appendChild(link);
        // Inline basic structural fallback
        var style=document.createElement('style');
        style.textContent=`
          html,body{height:100%;margin:0;background:#0b0b0e;color:#e5e7eb;font-family:sans-serif}
          body>div:first-of-type{display:flex;min-height:100vh;height:100vh;overflow:hidden}
          body>div:first-of-type>aside{width:256px;flex:0 0 256px;border-right:1px solid rgba(255,255,255,.1);background:#0b0b0e;padding:16px;display:flex;flex-direction:column}
          body>div:first-of-type>main{flex:1 1 auto;display:flex;flex-direction:column;min-width:0;overflow:hidden}
          body>div:first-of-type>main>div:first-child{height:75px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;border-bottom:1px solid rgba(255,255,255,.1);background:rgba(12,12,14,.7);backdrop-filter:blur(6px)}
          body>div:first-of-type>main>div:nth-child(2){flex:1 1 auto;overflow:auto;padding:24px}
          img{max-width:100%;height:auto}
          a,button{color:inherit;cursor:pointer}
          table{width:100%;border-collapse:collapse}
          th,td{padding:8px;text-align:left;border-bottom:1px solid rgba(255,255,255,.1)}
          /* Basic brown tint */
          :root{--brown-tint:rgba(139,94,60,0.15)}
          body{background-color:var(--brown-tint)}
        `;
        document.head.appendChild(style);
      }
    }catch(e){/* noop */}
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', ensureTailwind);
  }else{ ensureTailwind(); }
})();


