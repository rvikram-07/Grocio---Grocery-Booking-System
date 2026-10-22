# Grocio v2.0

Milestone 3: complete browse-to-order workflow with validated address, delivery slots, mock UPI/card/COD, order confirmation, history, reorder, responsive mobile navigation, and Selenium-ready test IDs.

This snapshot is self-contained and opens by double-clicking `index.html`. For the final complete flow, use the `grocio-v2.0` snapshot. See the top-level README for the full test-ID catalogue and mock coupon rules.


## Product image correction (v2.0)
All 36 products now use local, product-specific grocery photos under `assets/products/`. These match the product record and do not depend on unrelated remote stock photos or an internet connection. The illustrations use matching grocery emoji with Grocio's category colours. To replace any illustration with a photograph later, update that product's `image` field in `js/data.js` and add the corresponding local asset.


### Order reviews
After order confirmation, customers can open the review page, choose a 1–5 star rating, select a feedback topic, and optionally leave a comment. Demo reviews are stored locally in the browser under `grocio_reviews` (no backend).

## Account profile and logout (Version 2.0 update)
- Signed-in users can open **My profile** from the account link in the header or mobile navigation.
- The profile page displays the saved name, email, phone number, member-since date, order count, and submitted review count.
- **Log out** asks for confirmation, clears the current browser's signed-in user state, and returns to the home page.
- This is a frontend-only demonstration: account data is stored in LocalStorage and is not authenticated by a server.
