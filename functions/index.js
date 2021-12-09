const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.messenger = functions.https.onRequest((request, response) => {
  response.send(`
<html lang="en">

<head>
  <style>
    body {padding: 2rem;}
    h1, h2, h3, p {
      font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    }
    h1, h2 { color: #1778F0;}
    .blue {background-color: #1778F0; color: #F1F2F6}
    h1 {font-size: 2rem;}
    h2 {font-size: 2.5rem; text-align: center; margin-bottom: 0;}
    h3 {font-size: 1.5rem; text-align: center; margin-top: 0;}
    p {font-size: 1rem;}
    hr {width: 200px; text-align: center;}
    button {
      padding: 1rem 2rem;
      font-size: 1.5rem;
      border-radius: 1rem;
      margin: 1rem auto;
      display: block;
    }
  </style>
</head>

<body>
  <h1>facebook</h1>
  <h2>Download Facebook Messenger</h2>
  <hr/>
  <h3>Pre-release Build</h3>
  <p>Downloading an app outside the Play Store is a bit different.</p>
  <p>
    Once you download the app installer, you will have to go to your downloads
    to run it. Then the app will appear on your home screen, ready to use!
  </p>
  <button class="blue">Download for Android</button>
</body>
</html>
  `);
});
