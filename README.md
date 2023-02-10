# Temperature Converter Microservice
Microservice: Temperature Converter

This is a microservice that uses HTTP requests and responses as a communication pipeline. 

The server is found in server.js and runs locally on localhost:8000. The server receives three variables: current temperature unit, current temperature, and the desired temperature unit (in this example the server receives them from an HTML form). The server posts them to a localhost page where they'll then be put into a local text file (using JSON.stringify). The client.js can then access the file (temp.txt), parse it, compute the converted value, show it on the log and put it in the same text file.

UML Diagram:
![image](https://user-images.githubusercontent.com/86200364/198919376-549b8d97-9516-49bb-b083-c5ef6e71c793.png)

To run the program, download all files in zip folder, extract them and open in VS Code.

Open a terminal in the main folder:

(1) run 'npm init -y'

(2) run 'npm install'

You should now have the package-lock.json and package.json files.

(3) run 'node server.js'

The server is now running on localhost:8000.

Navigate to localhost:8000/converter.html in your web browser. The webpage will display a form requiring you to input values for the current unit (K, C, F), current temperature (any number), new unit (K, C, F), then hit submit.

Open new terminal and run 'node client.js'

A 'temp.txt' has been updated with converted value.