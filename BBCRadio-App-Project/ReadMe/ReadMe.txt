BBC Test Team Candidate Exercise by Olajide Ogunlesi V1.0

Project Name : BBCRadio-App-Project

My project was written in Data Framework with Cucumber JVM with the pre written scenarios from existing BBC Radio product in which I  designed the framework in such a way that the feature file will control the full application. [Please note that I will rewrite the program in Ruby language once I get use to Ruby syntax I am studying at the moment at Lynda.com. if I am invited for interview I will try to bring it along]


***NOTE: Please dowmload the project folder into your local machine driectory and make note of the path to be used in executing the program at command prompt.*****


1. File list
------------
-RadioNavDrawerTest.java
-Runner.java  [to be used to execute project in eclipse IDE with junit]
-WebConnector.java
-env.properties [Used to setup project environment]
-OR.properties
-prod_config.properties
-log4j.properties  - [application log]
-radionavdrawer.feature 
-scenarioexercise.feature [can be found inside Folder name ScenarioExercise]
-pom.xml [to be used to execute project at command prompt]


My program can be built either through Eclipse IDE by runner.java file with junit or at command prompt with the pom.xml by making your local machine directory point to where the pom.xml reside in the project and type this command at prompt   [mvn integration-test].



2. Design
---------
A -The first thing I did was to download the Maven Dependencies jar files for Cucumber, Selenium, Junit and Log4j which I wanted in my pom.xml

  - On this pom.xml file in my local directory folder on my machine I generated and built all my required files for my project at command prompt using these following command

 [mvn archetype:generate and mvn eclipse:eclipse]

  - I imported all the files generated into my eclipse IDE to  start working on it.

  - I created 2 src/main folders 
          >1. src/main/java
          >2. src/main/resources

  - In src/main/java  - I created created 4  new packages as per industry standard
     >com.myselenium.app.bbcradionav.drawer kept my RadiNavDrawerTest class file inside 
     >com.myselenium.app.bbcradionav.config kept all my properties file[env.properties, OR.properties, prod_config.properties]
     >com.myselenium.app.bbcradionav.testcases kept my RadioNavTest class file
     >com.myselenium.app.bbcradionav.util kept my WebConnector class file
   
  - In src/main/ resources - I created a folder named com.myselenium.app.bbcradionav.drawer and kept my log4j.properties and radionavdrawer.feature 

  - I designed the application to run simultaneously on  3 diffrerent browser type, you only need to include the browser name in radionavdrawer.feature but I only included Chrome now. 

3 Architecture of my Application
--------------------------------


 My application has 3 layers

  > 1. First Layer  - Feature File
  > 2. Second Layer - Java Step File
  > 3. Third Layer  - WebConnector class File
                   
Corresponding to the feature files the java step file will be called and all these java step files will in turn call WebConnector class file to fire the command which also has a function implementing singleton pattern design behaviour.

            

- I kept all my browser type exe files in my project.





3. Test Report

 - if you run it in eclipse IDE, you can pick up test report undr the folder named target created each time you run the program.
 - if you run it in command prompt the report will be created in C:\testing\Application.log each time you run the program.



 