# SpaceXProgLaunchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
or 
Run 'npm run serve:ssr'.

	

 ### What does this app do?

This application is a collection of data which allows the user to find details of the spaceships those were launched by SpaceX. The app consists all the records in details like year of launch, year of landing, successful landing history, reason for failure and many others. One can filter the records being displayed by selecting their choice in the application.

 #### Prerequisites
•	Angular CLI
•	Node.js
•	NPM

##### Technologies this app uses:
Framework used :- Angular.
Other Technologies used :-  HTML, CSS, BOOTSTRAP(4)

 ## Setup:
 Download the project dependencies
1.	Use npm install to download the needed depenedencies for this project.
2.	Don't forget to install the Angular CLI if you haven't already.
3 .Clone or download the repo.
1.	After step 3 , open the folder using Visual Studio Code.
2.	For further running the application NPM must be present in the machine in which we are expecting this application to run.
3.	Route to the folder in which the folder is saved using NPM.
4.	Use the following commands to run the application –   “npm run serve:ssr”  or  “ ng serve” 

### Approach:
1.	At first one common application is created using NPM by running the command ng new appName.
2.	After the folder has been created with all the required folders that will be used to create this application, Bootstrap also needed to be installed in order to make the application supports all the used Bootstrap4 codes. We also need to import <link  href = “……”> in index(HTML) file to make it available for all other folders.
3.	Created all other required files like Service file, model(wrapper)file using NPM.
4.	Imported all the given API Urls using observable in Service file of the project, and made it available for other files to use in order to get the data coming from a particular API in required places.
5.	Created given views( consists of buttons and cards) in HTML page and styled it using CSS and Bootstrap. The view has been made dynamic which changes according to the data coming from a particular API on filter events.
6.	The view has been made responsive which will change in accordance with the screen size( Mobile, Tablet and Desktop/Laptop with the help of media query in CSS.
7.	In TS file the service has been injected and its data has been stored in a locally created array( must be of model type in order to maintain the dataNames and dataTypes with the API ).
8.	This locally stored data/array is then used for iteration in HTML files using ngFor (Structural Directive) to manipulate the Card’s data and dynamically render them as per requirement.
9.	 The user also has a choice to filter the data being displayed by using certain filter criteria provided in the app. The filtered event is then handled in the ts file according to that different APIs are being used.
10.	 Server side rendering has been incorporated in order to enhance the performance and implement fast rendering.

# Screenshots of Main & Filtered views:
1.	Main View (Start Page):






 ![Screenshot (13)](https://user-images.githubusercontent.com/31484393/96388278-86a32380-11c5-11eb-8397-b975a56c5d7d.png)









# Filtered page ( All 3 possible filters applied : Launch Successful, land successful and Launch Year – 2014)






 
 ![Screenshot (15)](https://user-images.githubusercontent.com/31484393/96388281-8a36aa80-11c5-11eb-986b-19724a806b55.png)
 
 
 
 
 
 
 
 
 ![Screenshot (7)](https://user-images.githubusercontent.com/31484393/96388288-91f64f00-11c5-11eb-8b0e-6bea51055fb1.png)
 
 
 
 
 
 
 
 
 ![Screenshot (8)](https://user-images.githubusercontent.com/31484393/96388467-966f3780-11c6-11eb-8210-c8b2b9b2e1b1.png)
 
 
 
 
 
 
 
 
![Screenshot (9)](https://user-images.githubusercontent.com/31484393/96388470-9bcc8200-11c6-11eb-9121-67d326770fa5.png)

 
 
 
 



 





# Lighthouse score  


 
 
 ![Screenshot (3)](https://user-images.githubusercontent.com/31484393/96388475-a4bd5380-11c6-11eb-9fdf-6b7c4240fd9e.png)






