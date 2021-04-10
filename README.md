# Interview App

This app helps hiring teams create, document and track SWE interviews. 

# MVP Concepts

- Tech hiring managers and recruiters need to make structured interview slates. The slates use different types of questions depending on level and candidate domain.
- Making slates consistent to the level and domain is important so candidates can be benchmarked. However, the questions need to be randomly chosen by a rubric engine so the same questions aren't asked each time.
- The next step is organizing the slates by each candidate. Team members need to paste the code, write live notes during the interview and give a percentile score relative to other engineers they've seen at that level.
- The next steps will be adding auth and user profiles. The scoring will also be more complex to breakdown different types of scoring and calculate averages for each candidate. An email system needs to be added to send interviewers an invite.

# Technology Used
- Material UI
- React and React Router to navigate
- Vanilla Javascript for rubric engine (slate creator)
- Express APIs and Mongo


# Wins
- The core of this app is the rubric engine. It automates a strategic part of recruiting work and makes sure the interviews are structured. Lack of interview structure is one of the biggest issues in hiring.
- I wanted to learn Material UI since I work at Google but used React for this app. I found it to be really simple after learning how it works. I can see how powerful it is in a larger teams. 
- The overall UI can be improved easily thanks to MUI. I kept the design professional and corporate because this is a business side product.
- The interview scorecards will be very useful when they gather percentile scores. 

# Challenges 
- I got VERY stuck on my API. First, I had an issue with Rails on my new M1 Mac so I switched back to Node.js. Then it took me two weeks to realized I built my schema incorrectly.
- Due to the schema issue, the whole object for a candidate slate needs to be saved through a put route. That's a big issue because multiple people will need to work on their interview on the slate at the same time. It will overwrite everyone elses work when the last person saves.
- Material UI is very cool but it's extremely different from anything else I worked with. I needed over a week just to understand some basics.

# Next Steps
- Flatten out the schema into: slate, questions, users and scores.
- Adding auth and user profiles.
- Move the question and rubric models to Mongo and create routes.
- Add edit forms for interviewers and add their emails.
- Send invite emails to interviewers.
