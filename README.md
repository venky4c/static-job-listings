# static-job-listings

![Live Project](https://gifted-borg-fb4add.netlify.app)

![Alt Link](https://github.com/venky4c/static-job-listings/blob/master/dist/src/JobListings.gif)

Learnings:
- CSS: **Bulma framework for CSS**. This is a breeze to implement and has a very short learning curve. The best part is that it is **web 
responseive** by default. We need very little to zero efforts to make it look good for mobiles and tablets.
SVG had to be positioned differently in mobile compared to desktop. Use of cards, box shadow feature, showing left border 
on hover for just the desktop version etc were all nice features to implement.
> JSS: This data has nesting upto 3 levels and it was a challenge to filter data based on user input selection based on intermediate
levels of data nesting.
- React: Using state for array data type and **making the manipulation of data as pure without side effects by using spread operator**.
*Using callback function for state management by passing the functions as props to the required classes, for the removing of buttons inside
the searchbar.*
