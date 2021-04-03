# Interview App

Creates interview slates for hiring managers, documents interview feedback in one
dashboard and averages the recommendations from the interviewers.

# Core Concepts

This is based on interview science applied in most big tech companies.

After getting the rubric the function then accesses a model of questions to randomly get the right mix of questions (and not repeat any). It uses .map and recursion to create that mix.

I created an API with mongo to save the final slate and use a unique ID for that slate to be shared. Importantly, the questions are not looped through again. The whole slate needs to be statically saved to the database so no updates to the questions change it.

# Technology Used
- React and React Router to navigate.
- Vanilla Javascript for checking the rubric and create the slate with the questions.
- Express APIs and Mongo
- Bootstrap

# Wins
- I really wanted to understand APIs better and make my own. It took nearly all my time on the project but I'm happy it finally works!
- This app also happens to be a demo I will use in Google. Engineers want an update to QDroid in Google (which spits out a single question) to be more sophisticated and make sure engineers don't duplicate questions on our interviews.
- The app was designed mobile first. It needs some work on sizing and style but it's certainly easier to do mobile first!

# Challenges 
- My API was really difficult to make. I just didn't understand routes well and I needed over a week to figure it out.
- My React Router is bugging out by not showing my other pages.
- Bootstrap throws some container bugs that I don't understand yet. It's a new library for me and I need to keep learning more about it.
