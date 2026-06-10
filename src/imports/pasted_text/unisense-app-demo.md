Yes, I understand now. You want **clickable app demo screens** in Figma:

When user clicks **Get Recommendations**, it should open a full **AI Recommendation system page/demo**.
When user clicks **Chat with AI / Open Chat**, it should open a full **chatbot page/demo**.

Use this prompt in Figma AI:

```text
Update this existing UniSense Student Portal design and turn it into a clickable app demo/prototype.

Important:
Do not redesign the current dashboard. Keep the same dark theme, purple accent color, rounded cards, navbar, logo, spacing, and typography. Use the current screen as the Home/Dashboard screen.

Create two new demo screens and connect them with prototype interactions:

1. AI Recommendation Demo Screen
This screen opens when the user clicks the “Get Recommendations” button on the AI Recommendations card.

Screen title:
AI Recommendations

Keep the same top navbar and UniSense branding.

Page layout:
- Left side: student preference form
- Middle/right side: recommendation results
- Bottom section: fit score explanation and similar programs

Preference form card:
Title: “Your Preferences”
Fields:
- Field of Study: Computer Science
- Degree Level: Bachelor
- Preferred Country: Malaysia
- Budget Range: $5,000 – $15,000
- Intake: September
Button: “Generate Recommendations”

Recommendation results section:
Title: “Recommended Programs For You”

Create 3 recommendation cards:

Card 1:
Program: Bachelor of Computer Science
University: Universiti Teknologi Malaysia
Country: Malaysia
Degree Level: Bachelor
Tuition Fee: $6,000 – $12,000
Duration: 4 years
Fit Score: 92%
AI Reason: “This program strongly matches your preferred field, country, budget, and degree level.”
Buttons: “View Details”, “Save”, “Compare”

Card 2:
Program: Bachelor of Software Engineering
University: University of Malaya
Country: Malaysia
Degree Level: Bachelor
Tuition Fee: $7,000 – $14,000
Duration: 4 years
Fit Score: 88%
AI Reason: “This program matches your software interest and is within your budget range.”
Buttons: “View Details”, “Save”, “Compare”

Card 3:
Program: Bachelor of Information Technology
University: Asia Pacific University
Country: Malaysia
Degree Level: Bachelor
Tuition Fee: $8,000 – $15,000
Duration: 3 years
Fit Score: 84%
AI Reason: “This is a suitable alternative with similar academic focus and intake availability.”
Buttons: “View Details”, “Save”, “Compare”

Fit Score Breakdown card:
Title: “Why this program matches you”
Show progress bars:
- Field Match: 95%
- Degree Match: 100%
- Country Match: 90%
- Fee Match: 85%
- Duration Match: 80%

Similar Programs section:
Title: “Similar Programs”
Create small horizontal cards:
- Software Engineering — 91%
- Data Science — 87%
- Information Systems — 83%
- Artificial Intelligence — 80%

Add a back button:
“Back to Dashboard”

Prototype interactions:
- From Dashboard, clicking “Get Recommendations” opens the AI Recommendation Demo Screen.
- From AI Recommendation Demo Screen, clicking “Back to Dashboard” returns to the Dashboard.


2. Chatbot Demo Screen
This screen opens when the user clicks “Open Chat” on the Chat with AI card.

Screen title:
UniSense AI Assistant

Keep the same dark theme and top navbar.

Page layout:
- Main chatbot conversation area
- Right side panel showing extracted preferences and suggested actions

Chat area:
Show a realistic demo conversation:

AI:
“Hi! I’m UniSense AI. Tell me what kind of university program you are looking for.”

User:
“I want a Bachelor program in Computer Science in Malaysia under $15,000.”

AI:
“Great! I found your preferences: Bachelor degree, Computer Science, Malaysia, and budget under $15,000.”

AI:
“Would you like me to generate recommendations based on this?”

User:
“Yes, show me the best options.”

AI:
“Here are the top matches: Bachelor of Computer Science at UTM, Bachelor of Software Engineering at UM, and Bachelor of IT at APU.”

AI:
“UTM has the highest fit score because it matches your field, country, degree level, and budget.”

At the bottom:
Input field placeholder:
“Ask about programs, fees, countries, or recommendations...”

Send button:
“Send”

Right side panel:
Title: “Detected Preferences”
Show:
- Field: Computer Science
- Degree: Bachelor
- Country: Malaysia
- Budget: Under $15,000
- Intent: Get recommendation
- Confidence Score: 94%

Suggested action buttons:
- “Generate Recommendations”
- “Show Similar Programs”
- “Compare Top Programs”

Add a back button:
“Back to Dashboard”

Prototype interactions:
- From Dashboard, clicking “Open Chat” opens the Chatbot Demo Screen.
- From Chatbot Demo Screen, clicking “Back to Dashboard” returns to the Dashboard.
- From Chatbot Demo Screen, clicking “Generate Recommendations” opens the AI Recommendation Demo Screen.

Design requirements:
- Keep everything consistent with the existing UniSense dark UI.
- Use purple for AI recommendation actions.
- Use green/teal for chatbot highlights.
- Use rounded cards, soft shadows, and clean spacing.
- Make it feel like a real working student app demo, not a report.
- Do not remove the current dashboard cards.
- Add smooth prototype navigation between Dashboard, AI Recommendation Demo, and Chatbot Demo.
```
