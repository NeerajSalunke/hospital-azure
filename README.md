# Hospital Website Using Azure

Hospital Website is designed in a way where a user or patient can:
- Get info about Hospital
- Book Appointments
- Chat with ChatBot to get quick answers
- Get details about Vaccination

Azure Services used in this project:
- Azure App Service
- Azure AD
- Azure Storage
- Web apps
- Azure QnA maker
- Azure Web App Bot

Frameworks and Technologies used:
- ReactJS
- EmailJS
- Bootstrap CSS

## Applications of Azure Services used in this website

- **Azure App Service** is used to host the website.
- Using **Azure AD**, sign in page is designed to allow users to sign in while booking appointment with the doctor. 
- Important Guides and Files available on Vaccination page are stored on Cloud using **Azure Storage**
- Chatbot on the website is designed using **Azure Qna Maker** and Integrated on the website using **Azure Web App Bot** 

## Steps to run this program
- To allow Javascript apps to authenticate users using Azure AD
```bash
npm install @azure/msal-browser
```
- To run on local machine
```bash
npm start
```
- To host as a website, use Azure App Service extension in VS Code.