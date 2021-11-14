<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <!-- Add references to the Azure Maps Map control JavaScript and CSS files. -->
    <link rel="stylesheet" href="https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.css" type="text/css">
    <script src="https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.js"></script>
    <script type="text/javascript">
      //Create an instance of the map control and set some options.
      function InitMap()
      {
          var map = new atlas.Map('maps', {
              center: [-122.33, 47.6],
              zoom: 12,
              language: 'en-US',
              authOptions: {
                  authType: 'subscriptionKey',
                  subscriptionKey: '4d5cfbe1-b757-4b24-b2a4-82fe03cb5a5c'
              }
          });
      }
  </script>

  <style>
      html, body {
          margin: 0;
      }

      .maps {
          height: 100rm;
          width: 100rm;
      }
  </style>
    <title>Quick Car Rent</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>