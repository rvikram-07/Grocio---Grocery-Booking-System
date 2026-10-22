(() => {
 const G=window.Grocio,$=G.$;G.renderShell();let mode="login";
 const tabLogin=$("#tab-login"),tabSignup=$("#tab-signup"),nameWrap=$("#signup-name-wrap"),form=$("#auth-form");
 const setMode=m=>{mode=m;tabLogin.classList.toggle("active",m==="login");tabSignup.classList.toggle("active",m==="signup");tabLogin.setAttribute("aria-selected",String(m==="login"));tabSignup.setAttribute("aria-selected",String(m==="signup"));nameWrap.classList.toggle("hidden",m!=="signup");$("#login-submit").textContent=m==="login"?"Continue":"Create account";$("#auth-password").autocomplete=m==="login"?"current-password":"new-password";};
 tabLogin.onclick=()=>setMode("login");tabSignup.onclick=()=>setMode("signup");
 $("#toggle-password").onclick=()=>{const p=$("#auth-password"),show=p.type==="password";p.type=show?"text":"password";$("#toggle-password").textContent=show?"Hide":"Show";$("#toggle-password").setAttribute("aria-label",show?"Hide password":"Show password")};
 const error=(id,msg)=>{$("#error-"+id).textContent=msg};
 form.addEventListener("submit",e=>{e.preventDefault();["name","email","phone","password"].forEach(k=>error(k,""));let valid=true;const name=$("#auth-name").value.trim(),email=$("#auth-email").value.trim(),phone=$("#auth-phone").value.trim(),password=$("#auth-password").value;
 if(mode==="signup"&&name.length<2){error("name","Enter your name (at least 2 characters).");valid=false}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error("email","Enter a valid email address.");valid=false}
 if(!/^\d{10}$/.test(phone)){error("phone","Enter a 10-digit phone number.");valid=false}
 if(!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password)){error("password","Use at least 8 characters, including a letter and a number.");valid=false}
 if(!valid)return;
 const u={name:mode==="signup"?name:(email.split("@")[0]||"Grocio shopper"),email,phone,createdAt:Date.now()};G.write("grocio_user",u);G.toast(`Welcome ${u.name.split(" ")[0]}!`);const next=new URLSearchParams(location.search).get("next");location.href=next==="checkout"?"checkout.html":"orders.html";
 });
})();