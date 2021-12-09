const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// TODO: remove commented
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.m = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send(`
<html lang="en">

<head>
  <style>
    body {padding: 2rem;}
    h1, h2, h3, p {
      font-family: Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;
    }
    h1, h2 { color: #1778F0;}
    .blue {background-color: #1778F0; color: #F1F2F6}
    h1 {font-size: 1.5rem;}
    h2 {font-size: 1.75rem; text-align: center; margin-bottom: 0;}
    h3 {font-size: 1.25; text-align: center; margin-top: 0;}
    p {font-size: 1rem;}
    hr {width: 200px; margin: 8px auto; display: block;}
    button {
      padding: .5rem;
      width: 85%;
      font-size: 1.25rem;
      border-radius: 0.8rem;
      margin: 0.8rem auto;
    }
    .flex {
      height: 68vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    div {width: 100%;}
  </style>
</head>

<body>
  <h1>facebook</h1>
  <div class="flex">
    <div>
      <h2>Download Facebook Messenger</h2>
      <hr/>
      <h3>Pre-release Build</h3>
    </div>
    <div>
      <p>Downloading an app outside the Play Store is a bit different.</p>
      <p>
        Once you download the app installer, you will have to go to your
        downloads to run it. Then the app will appear on your home screen,
        ready to use!
      </p>
    </div>
    <div>
      <button class="blue">Download for Android</button>
    </div>
  </div>
</body>
</html>
  `);
  });
});
