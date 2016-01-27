<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>EP Angular Material</title>
    <link rel="stylesheet" href="css/vendor.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/app.min.css">
</head>
<body ng-controller="AppController as vm" layout="column">
    <div layout="column" id="index" ui-view="index" flex ng-cloak></div>
    <script src="js/vendor.min.js" type="text/javascript"></script>
    <script src="js/app.min.js" type="text/javascript"></script>
</body>
</html>