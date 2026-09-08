#Master Prompt

ROLE: You are a senior front-end developer building a React web app.
GOAL:
Build the front end of HawkerHunt, a discovery tool for hungry diners looking for a hawker centre.
Their one job is:
"Tell the app what I feel like eating, get a nearby hawker centre recommended, and place an order there."
SCREENS:
Discover Food
Show a short set of filters the diner can tap:
Craving (e.g. Noodles, Rice, Soup, Snacks, Drinks)
Budget (Under $5, $5–$8, Above $8)
Dietary (Any, Halal, Vegetarian)
Distance (Within 500m, Within 1km, Within 2km)
Show the diner's current filter selections in a summary bar.
Show a "Find a hawker centre" button that becomes active once at least one craving is chosen.
Recommendation + Nearby
When the user clicks "Find a hawker centre", show ONE recommended hawker centre with:
Hawker centre name
Distance
Crowd level (Low, Medium, High)
Opening hours
Number of stalls matching the diner's craving
Average price for the craving
Why it was recommended (one short line, e.g. "Closest centre with 4 Halal noodle stalls")
Below it, show 3–5 invented nearby alternative hawker centres with:
Hawker centre name
Distance
Crowd level
Number of matching stalls
Average price
Let the diner keep the recommended centre or swap to an alternative.
Once a centre is selected, show the matching stalls at that centre as cards with:
Stall name
Signature dish
Price
Rating
Wait time
Tags (e.g. Halal, Vegetarian, Spicy)
Each stall card has an "Order here" button.
Confirmation and Order
When the user clicks "Order here", show an order summary with:
Hawker centre name and distance
Stall name
Dish name
Quantity (default 1, adjustable with + and −)
Price per item and total
Estimated ready time
Let the diner press:
"Confirm Order"
After confirming, show a clear success state:
Order number
Hawker centre and stall
Dish
Estimated ready time
Status: Ordered
Provide a "Back to Discover" button that returns to the Discover Food screen without reloading the page.
The user knows it worked when:
"the order number appears with a green Ordered badge."
DATA:
Keep ALL invented data in ONE separate file.
Example:
src/data/hawkerData.js
Use only fictional:
hawker centre names
stall names
dish names
prices
distances
crowd levels
opening hours
ratings
wait times
order numbers
Include at least 6 hawker centres and at least 15 stalls spread across them.
Every craving filter must match at least one stall in at least two hawker centres.
DESIGN:
Make it simple, clean, and mobile-first.
Use:
White/light grey background
Dark text
Green for Ordered / success and Low crowd
Amber for Medium crowd and wait times over 15 minutes
Red for High crowd and sold-out stalls (include at least 2 sold-out stalls with a disabled button)
Large, readable buttons and text
Mobile should use simple stacked cards.
Desktop can use a card grid.
SCOPE:
Front end only.
Do NOT:
call Gemini
call any AI model
call any outside service
fetch from any URL
use maps or GPS (use invented distances only)
use a database
create login
create accounts
take real payment
use real hawker centre, stall, or brand names
add extra features
Use React state so screens change without reloading the page.
When finished, list the files created and what each file contains.
If you make a choice I did not specify, explain it in ONE short line.



