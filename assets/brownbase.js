// Shared helpers (global namespace for file:// compatibility)
(function(global){
  function navInit(active){
    document.querySelectorAll('.nav a').forEach(a=>{
      if(a.dataset.route===active) a.classList.add('active');
    });
  }

  function modalInit(){
    const modal=document.getElementById('modal');
    if(!modal) return {open(){},close(){}};
    const close=()=>modal.classList.remove('show');
    modal.addEventListener('click',e=>{ if(e.target===modal) close();});
    return {
      open(html,title=''){
        modal.querySelector('main').innerHTML=html;
        modal.querySelector('header strong').textContent=title;
        modal.classList.add('show');
      },
      close
    };
  }

  async function fetchMarkets(perPage=10){
    try{
      const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&price_change_percentage=24h`;
      const res=await fetch(url,{headers:{'accept':'application/json'}});
      if(!res.ok) throw new Error('Network');
      return await res.json();
    }catch(e){
      return [
        {id:'bitcoin', name:'Bitcoin', symbol:'btc', image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', current_price:67123, market_cap:1324000000000, price_change_percentage_24h:0.54},
        {id:'ethereum', name:'Ethereum', symbol:'eth', image:'https://assets.coingecko.com/coins/images/279/large/ethereum.png', current_price:3180, market_cap:382000000000, price_change_percentage_24h:-0.41},
        {id:'solana', name:'Solana', symbol:'sol', image:'https://assets.coingecko.com/coins/images/4128/large/solana.png', current_price:156.22, market_cap:70000000000, price_change_percentage_24h:1.92}
      ];
    }
  }

  function layoutShell(title){
    return `
  <div class="layout">
    <aside class="side">
      <div class="logo">
        <div class="cmark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 4a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"/></svg></div>
        <div class="brand">niggabase</div>
      </div>
      <nav class="nav">
        <a href="brownbase-dashboard.html" data-route="home"><span class="icon">🏠</span><span class="label">Home</span></a>
        <a href="assets.html" data-route="assets"><span class="icon">📦</span><span class="label">My assets</span></a>
        <a href="transactions.html" data-route="transactions"><span class="icon">↔️</span><span class="label">Transactions</span></a>
        <a href="explore.html" data-route="explore"><span class="icon">🧭</span><span class="label">Explore</span></a>
        <a href="derivatives.html" data-route="derivatives"><span class="icon">🧮</span><span class="label">Derivatives</span></a>
        <a href="taxes.html" data-route="taxes"><span class="icon">🧾</span><span class="label">Taxes</span></a>
        <a href="one.html" data-route="one"><span class="icon">⭐</span><span class="label">niggabase One</span></a>
        <a href="credit-card.html" data-route="credit"><span class="icon">💳</span><span class="label">Credit card</span></a>
        <a href="invite.html" data-route="invite"><span class="icon">👥</span><span class="label">Invite friends</span></a>
        <a href="debit-card.html" data-route="debit"><span class="icon">🏧</span><span class="label">Debit card</span></a>
        <a href="rewards.html" data-route="rewards"><span class="icon">🏆</span><span class="label">Rewards</span></a>
        <a href="more.html" data-route="more"><span class="icon">⋯</span><span class="label">More</span></a>
      </nav>
      <div class="grow"></div>
      <div class="footer">Advanced</div>
    </aside>
    <main>
      <div class="topbar"><strong>${title}</strong><div class="search"><span>🔎</span><input placeholder="Search"></div><button class="btn btn-ghost">🔔</button><button class="btn btn-ghost">❔</button><button class="btn btn-ghost">🟦</button></div>
      <div class="container" id="content"></div>
    </main>
  </div>
  <div class="modal" id="modal"><div class="dialog"><header><strong></strong><button class="btn btn-ghost" id="m-close">✕</button></header><main></main><footer><button class="btn btn-ghost" id="m-cancel">Cancel</button><button class="btn btn-primary" id="m-confirm">Confirm</button></footer></div></div>
  <div class="joke banner">${getJoke()}</div>
  `;
  }

  function getJoke() {
    const jokes = [
      "niggabase: Finna turn trap moves to real stacks, deadass",
      "Hustle silent with this—shine or get left behind",
      "On god, flip coins like work, beat the game",
      "Real ones stack here—stay sharp or starve",
      "Deadass, level up yo bag or stay in the dirt"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  global.BB = { navInit, modalInit, fetchMarkets, layoutShell };
})(window);


