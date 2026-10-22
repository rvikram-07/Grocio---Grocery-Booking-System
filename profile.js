(() => {
  const G = window.Grocio, $ = G.$, root = $("#profile-content");
  G.renderShell();
  const user = G.user();
  if (!user) {
    root.innerHTML = `<section class="profile-card profile-guest"><div class="profile-avatar">♙</div><h2>Log in to view your profile</h2><p class="muted">Your account details and order history will appear here after you log in.</p><a class="btn btn-primary" href="login.html">Login / Create account</a></section>`;
    return;
  }
  const initials = String(user.name || "G").trim().split(/\s+/).slice(0,2).map(part => part[0] || "").join("").toUpperCase();
  const orders = G.orders();
  const reviews = G.read("grocio_reviews", []);
  root.innerHTML = `
    <section class="profile-card">
      <div class="profile-hero"><div class="profile-avatar">${G.esc(initials || "G")}</div><div><p class="eyebrow">Signed in to Grocio</p><h2>${G.esc(user.name || "Grocio shopper")}</h2><p class="muted">Member since ${new Date(user.createdAt || Date.now()).toLocaleDateString("en-IN", {day:"numeric",month:"long",year:"numeric"})}</p></div></div>
      <div class="profile-details"><div class="profile-detail"><span>Full name</span><strong>${G.esc(user.name || "Not provided")}</strong></div><div class="profile-detail"><span>Email address</span><strong>${G.esc(user.email || "Not provided")}</strong></div><div class="profile-detail"><span>Phone number</span><strong>${G.esc(user.phone || "Not provided")}</strong></div></div>
      <div class="profile-stats"><div><strong>${orders.length}</strong><span>Orders</span></div><div><strong>${reviews.length}</strong><span>Reviews submitted</span></div></div>
      <div class="profile-actions"><a class="btn btn-primary" href="orders.html">View order history →</a><a class="btn btn-outline" href="products.html">Continue shopping</a><button class="btn btn-danger" id="logout-btn" type="button">Log out</button></div>
      <p class="profile-note">This is a frontend demo. Account information is stored in this browser only.</p>
    </section>`;
  $("#logout-btn").addEventListener("click", () => {
    if (!window.confirm("Are you sure you want to log out of Grocio?")) return;
    localStorage.removeItem("grocio_user");
    location.href = "index.html?loggedout=1";
  });
})();
