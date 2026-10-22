/* Grocio mock catalogue. Product photos are illustrative public image URLs; emoji are the offline fallback. */
window.GrocioData = (() => {
 const categories = [
  {id:"fruits",name:"Fresh Fruits",short:"Fruits",icon:"🍎",color:"#FFF1F2"},
  {id:"vegetables",name:"Fresh Vegetables",short:"Vegetables",icon:"🥦",color:"#F0FDF4"},
  {id:"dairy",name:"Dairy & Eggs",short:"Dairy",icon:"🥛",color:"#EFF6FF"},
  {id:"snacks",name:"Snacks",short:"Snacks",icon:"🍿",color:"#FFF7ED"},
  {id:"beverages",name:"Beverages",short:"Beverages",icon:"🧃",color:"#FDF4FF"},
  {id:"bakery",name:"Bakery",short:"Bakery",icon:"🍞",color:"#FFFBEB"},
  {id:"household",name:"Household",short:"Household",icon:"🧽",color:"#F0FDFA"},
  {id:"personal-care",name:"Personal Care",short:"Personal Care",icon:"🧴",color:"#F5F3FF"},
  {id:"staples",name:"Daily Staples",short:"Staples",icon:"🌾",color:"#F7FEE7"}
 ];
 const raw = [
 ["p01","Banana Robusta","fruits",42,50,"6 pcs","🍌",4.7,true,"Naturally sweet bananas, perfect for breakfast or smoothies.",["fresh","bestseller"]],
 ["p02","Shimla Apples","fruits",149,180,"4 pcs","🍎",4.6,true,"Crisp apples selected for everyday snacking.",["fresh","deal"]],
 ["p03","Sweet Orange","fruits",69,85,"500 g","🍊",4.5,true,"Juicy oranges with a bright, refreshing taste.",["fresh"]],
 ["p04","Green Grapes","fruits",79,99,"500 g","🍇",4.4,true,"Seedless-style table grapes, washed before serving.",["fresh","deal"]],
 ["p05","Alphonso Mango","fruits",129,160,"2 pcs","🥭",4.8,false,"Seasonal mangoes with a rich, tropical aroma.",["fresh"]],
 ["p06","Fresh Strawberries","fruits",99,125,"200 g","🍓",4.5,true,"Bright, fragrant berries for desserts and bowls.",["fresh","deal"]],
 ["p07","Tomato Local","vegetables",28,35,"500 g","🍅",4.3,true,"Ripe tomatoes for curries, salads, and sauces.",["fresh","bestseller"]],
 ["p08","Potato","vegetables",32,40,"1 kg","🥔",4.5,true,"Everyday potatoes for roasting, frying, and curries.",["fresh"]],
 ["p09","Onion","vegetables",36,45,"1 kg","🧅",4.4,true,"Kitchen essential onions with a balanced flavour.",["fresh","bestseller"]],
 ["p10","Green Capsicum","vegetables",34,42,"250 g","🫑",4.2,true,"Crunchy capsicum for stir-fries and salads.",["fresh"]],
 ["p11","Baby Spinach","vegetables",25,32,"200 g","🥬",4.6,true,"Tender green leaves for quick, nourishing meals.",["fresh","deal"]],
 ["p12","Broccoli","vegetables",59,75,"1 pc","🥦",4.4,false,"Fresh broccoli florets, great steamed or roasted.",["fresh"]],
 ["p13","Farm Fresh Milk","dairy",32,35,"500 ml","🥛",4.7,true,"Pasteurised milk for tea, coffee, and daily nutrition.",["bestseller"]],
 ["p14","Classic Curd","dairy",35,42,"400 g","🥣",4.5,true,"Creamy curd with a smooth texture.",["bestseller","deal"]],
 ["p15","Brown Eggs","dairy",78,90,"6 pcs","🥚",4.6,true,"A convenient pack of fresh eggs for your meals.",["bestseller"]],
 ["p16","Salted Butter","dairy",58,65,"100 g","🧈",4.5,true,"Rich butter for toast, cooking, and baking.",["deal"]],
 ["p17","Cheddar Cheese Slices","dairy",119,145,"200 g","🧀",4.4,true,"Smooth cheese slices for sandwiches and burgers.",[]],
 ["p18","Potato Chips","snacks",20,25,"52 g","🍟",4.3,true,"Crunchy, savoury chips for snack time.",["bestseller","deal"]],
 ["p19","Masala Peanuts","snacks",35,45,"150 g","🥜",4.2,true,"Roasted peanuts tossed with a bold spice mix.",["deal"]],
 ["p20","Oat Cookies","snacks",49,60,"200 g","🍪",4.5,true,"Golden cookies with a comforting oat crunch.",[]],
 ["p21","Dark Chocolate","snacks",89,110,"80 g","🍫",4.7,true,"A rich cocoa treat for a little sweet moment.",["deal"]],
 ["p22","Orange Juice","beverages",75,90,"1 L","🧃",4.4,true,"A refreshing citrus drink served chilled.",["deal"]],
 ["p23","Sparkling Water","beverages",35,45,"750 ml","🫧",4.2,true,"Crisp bubbles with a clean, refreshing finish.",[]],
 ["p24","Filter Coffee","beverages",129,155,"200 g","☕",4.6,true,"Aromatic coffee powder for a comforting cup.",["bestseller"]],
 ["p25","Whole Wheat Bread","bakery",42,50,"400 g","🍞",4.5,true,"Soft sliced bread made for everyday breakfasts.",["bestseller"]],
 ["p26","Butter Croissant","bakery",55,65,"2 pcs","🥐",4.4,true,"Flaky, buttery pastries for a café-style treat.",["deal"]],
 ["p27","Chocolate Muffins","bakery",69,85,"2 pcs","🧁",4.5,true,"Soft chocolate muffins for a sweet break.",[]],
 ["p28","Dish Wash Liquid","household",99,125,"500 ml","🧽",4.3,true,"Everyday dishwashing liquid for a clean kitchen.",["deal"]],
 ["p29","Laundry Detergent","household",149,179,"1 kg","🫧",4.4,true,"A dependable detergent for everyday laundry.",[]],
 ["p30","Kitchen Towels","household",69,80,"2 rolls","🧻",4.1,true,"Absorbent kitchen rolls for quick clean-ups.",[]],
 ["p31","Hand Wash","personal-care",79,99,"250 ml","🧴",4.5,true,"Gentle hand wash for a fresh, clean feel.",["deal"]],
 ["p32","Herbal Shampoo","personal-care",159,199,"340 ml","🧴",4.4,true,"Daily shampoo with a fresh herbal fragrance.",[]],
 ["p33","Soft Toothbrush","personal-care",45,55,"1 pc","🪥",4.2,true,"Soft bristles designed for daily oral care.",[]],
 ["p34","Toor Dal","staples",89,105,"500 g","🌾",4.6,true,"Everyday lentils for comforting homemade dal.",["bestseller"]],
 ["p35","Basmati Rice","staples",179,220,"1 kg","🍚",4.7,true,"Long-grain rice with a fragrant aroma.",["deal"]],
 ["p36","Whole Wheat Atta","staples",59,70,"1 kg","🌾",4.5,true,"Wheat flour for soft rotis and everyday cooking.",[]]
 ];
 const products = raw.map(([id,name,category,price,mrp,unit,emoji,rating,inStock,description,tags])=>({
  id,name,category,price,mrp,unit,emoji,rating,inStock,description,tags,
  // Local product photos avoid unrelated stock images and work offline.
  image:`assets/products/${id}.jpg`
 }));
 return {categories,products,cities:["Vellore, Tamil Nadu","Katpadi, Vellore","Chennai, Tamil Nadu","Bengaluru, Karnataka","Coimbatore, Tamil Nadu","Hyderabad, Telangana"],slides:[
 {eyebrow:"A little welcome treat",title:"₹0 delivery on your first order.",copy:"Fill your basket with everyday essentials and enjoy a fresh start.",cta:"Start shopping"},
 {eyebrow:"Fresh from the market",title:"A fresher kind of everyday.",copy:"Colourful produce, carefully picked for your kitchen.",cta:"Shop fresh"},
 {eyebrow:"Good value, every day",title:"Little prices. Big grocery energy.",copy:"Discover deals on the things you reach for most.",cta:"Find a deal"}
 ]};
})();