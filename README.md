# Project: ToGo-list using mapBox gl

## Solution:

1.	I started to access token.  I got token key after I registered from mapbox.com using free plan.
2.	I also used mapbox style url.
3.	I also understand in documentation that I need to use geojson data. I created using mapbox studio.
4.	In my project i made geojson file with properties and 14 countries.
5.	I got tips from mapbox example and build my project with my own geojson data and I succeed to show the map with my geojson image marks.
6.	After that I research how make toGo-list. I found an example that makes toGo-list of all my data. I do that and I get 14 countries in my to do list. But it was not what I wanted. I want to click and confirm and show to the list.
I tried to make mapbox popup clickable to confirm and add to the list but not succeeded.
Then I searched another alternative and find function get value.
Then I fixed the code in the function that load all data files ToGo-list so it’s only load one and also load input text.
7.	Then I found example how to click ToGo-list. I coded in my script.js file. First, I got problem with this because It only show the first index and caught error after the second index. After many hours of testing I found the error. And it was so very little to change.
8.	I created remove button in ToGo-list. When you click on the button which item in the list you want to remove. I got problem to reference toGo-list but I found the solution. The solution was to access the variable that stored list items.
9.	Search filter. I created a form which you can filter the items in the list you created. I got this to work in this way. You can type a text in input field. Then I used the first letter uppercase and match with toGo-list using for loop. I have some issues to find the name_place from the toGo-list data. The issue was fixed by getting the value of the element.
This is my solution. For each item list that not match I remove that list item from toGo-list and also store the removed data in an array.
There is some bug in script that sometimes filter to much. My solution is the filter.
To restore the data from array is not in this case yet. Its possible to do but you must have some dialog in the form.

10.	Just now there is horrible issues that’s out of my control. Its like this, suddenly on my computer the form filter is not really working its like no console working in that section and it seems that its coming more than one data. Console output result is two times and the code are not working.
I solved the issue this morning on my computer. I wrote again the code that I made to make for me to see what’s really the problem on my code. I didn’t find the problem. And its suddenly worked again at my computer.
11.	After, I commit changes from local to Github with working code. But when I download the project to my other computer, the issue is still there.
So, I believe if you download the code you got the same problem I the filter section.
