# Sample-Project
FullStack App with React, SpringBoot and MongoDb

1.Clone the Repository folder.
2.Open the downloaded folder using Vscode.
3.Frontend folder contains the react, bootstrap etc. 
4.Backend Folder contains SpringBoot,MongoDb.

How to run Frontend?

1.Navigate using cmd to Frontend.
2.Type npm install to get node modules.
3.Type npm start to start the node server which runs at http://locahost:3000.
4.After submiting the requied information in the register form, the validated data from MomgoDb will be returned to a table on the rightside of the form. 

How to run Backend?

1. Open a new Terminal in Vscode and navigate using cmd to Backend/sampleapp.
2. In src/main/java, Open the SampleappApplication.java file
3. Click the Run option on top of public static void main().
4. The SpringBoot server will start running on http://localhost:8080, plz put the link in the browser to see the live reload.
5. if Whitelabel errorpage appears it means that server is running.
6. RestApis are witten in RegisterController.java in resource folder.
7. Validation is done in the RegisterController.java

Database Used
1.Atlas Mongodb.

2.Create an Account in Atlas Mongodb.

3.create an Organization and create a Project.

4.Create free cluster in any cloud such as aws,gcp or azure.

4.After the cluster creation, configure the cluster using clicking the connect button.
5.On the "Setup Connection Security" click the IP whitelist and add IP address : 0.0.0.0/0 to anywhere.
6.Click the connection method button.
7.Select Connect your Application.
8.Select your driver as "Java" and Version as "4.1 or later".
9.Copy your connection String and paste it in applications.properties such as 
    spring.data.mongodb.uri = connection String link
  and Specifying your dbusername,dbpassword and database.
10.create a database by clicking the collection button in project page.
11 add the foolowing string to your application.properties:
     spring.data.mongodb.database=sampledb
     spring.output.ansi.enabled=ALWAYS
12. So the entire application.properties will look like following:
    spring.data.mongodb.uri=connection string
    spring.data.mongodb.database=your_database_name
    spring.output.ansi.enabled=ALWAYS
13.then run the SampleappApplication and the Backend is successfully connected to Mongodb.
