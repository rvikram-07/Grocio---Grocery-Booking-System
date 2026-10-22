(()=>{
 const G=window.Grocio;
 G.renderShell();
 const currentOrder=G.read("grocio_last_order",null);
 const order=G.orders().find(o=>o.id===currentOrder)||G.orders()[0]||null;
 const orderBox=document.getElementById("review-order");
 if(order){orderBox.textContent=`Order ${order.id} · Total ${G.money(order.total)}`;}else{orderBox.textContent="Your recent grocery order";}
 const form=document.getElementById("review-form"), stars=[...document.querySelectorAll(".star")], label=document.getElementById("rating-label");
 const labels={1:"Poor",2:"Fair",3:"Good",4:"Very good",5:"Excellent"};let rating=0;
 function paint(value){stars.forEach((s,i)=>{s.classList.toggle("selected",i<value);s.setAttribute("aria-pressed",String(i+1===value));});label.textContent=value?`${value} out of 5 stars — ${labels[value]}`:"Choose a rating";}
 stars.forEach(s=>{s.addEventListener("click",()=>{rating=Number(s.dataset.rating);paint(rating);});s.addEventListener("mouseenter",()=>stars.forEach((x,i)=>x.classList.toggle("hovered",i<Number(s.dataset.rating))));s.addEventListener("focus",()=>stars.forEach((x,i)=>x.classList.toggle("hovered",i<Number(s.dataset.rating))));});
 document.querySelector(".star-picker").addEventListener("mouseleave",()=>stars.forEach(x=>x.classList.remove("hovered")));
 form.addEventListener("submit",e=>{e.preventDefault();if(!rating){label.textContent="Please choose a star rating before submitting.";label.classList.add("rating-error");return;}label.classList.remove("rating-error");let reviews=[];try{reviews=JSON.parse(localStorage.getItem("grocio_reviews")||"[]");}catch{}reviews.push({orderId:order?.id||null,rating,topic:document.getElementById("review-topic").value,comment:document.getElementById("review-comment").value.trim(),createdAt:new Date().toISOString()});localStorage.setItem("grocio_reviews",JSON.stringify(reviews));form.hidden=true;document.getElementById("review-success").hidden=false;});
})();
