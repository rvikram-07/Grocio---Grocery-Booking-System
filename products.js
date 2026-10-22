(() => {
 const G=window.Grocio,D=G.D,$=G.$;G.renderShell();
 const params=new URLSearchParams(location.search);let category=params.get("category")||"all",query=(params.get("q")||"").trim().toLowerCase(),tag=params.get("tag")||"";
 const side=$("#side-categories");
 const allCats=[{id:"all",name:"All groceries",icon:"✦"},...D.categories];
 side.innerHTML=allCats.map(c=>`<button class="side-category ${category===c.id?"active":""}" data-category="${c.id}" data-testid="category-${c.id}"><span>${c.icon}</span>${c.name}</button>`).join("");
 const render=()=>{
  let items=D.products.filter(p=>(category==="all"||p.category===category)&&(!query||p.name.toLowerCase().includes(query)||p.category.toLowerCase().includes(query)||D.categories.find(c=>c.id===p.category)?.name.toLowerCase().includes(query))&&(!tag||p.tags.includes(tag))&&p.price<=Number($("#price-range").value)&&(!$("#stock-only").checked||p.inStock));
  const sort=$("#sort-select").value;if(sort==="price-asc")items.sort((a,b)=>a.price-b.price);if(sort==="price-desc")items.sort((a,b)=>b.price-a.price);if(sort==="discount")items.sort((a,b)=>(b.mrp-b.price)/b.mrp-(a.mrp-a.price)/a.mrp);
  const cat=D.categories.find(c=>c.id===category);$("#listing-title").textContent=query?`Search: “${query}”`:cat?.name||"All groceries";$("#result-count").textContent=`${items.length} ${items.length===1?"product":"products"}${query?" found":""}`;$("#price-value").textContent=G.money($("#price-range").value);$("#product-grid").innerHTML=items.map(G.productCard).join("");$("#empty-state").classList.toggle("hidden",items.length>0);$("#product-grid").classList.toggle("hidden",!items.length);
 };
 side.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;category=b.dataset.category;side.querySelectorAll(".side-category").forEach(x=>x.classList.toggle("active",x===b));params.set("category",category);history.replaceState(null,"",`${location.pathname}?${params.toString()}`);render()});
 ["sort-select","stock-only","price-range"].forEach(id=>$("#"+id).addEventListener("input",render));
 G.bindActions();render();
})();