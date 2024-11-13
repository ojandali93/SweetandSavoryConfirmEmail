<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f3f4f6;
            color: #333;
        }
        .container {
            text-align: center;
            padding: 20px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            color: #10b981;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            color: #6b7280;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #10b981;
            color: #ffffff;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Email Confirmed!</h1>
        <p>Your email has been successfully confirmed.</p>
        <p>You can now open the <strong>Sweet and Savory</strong> app, log in, and access your account.</p>
        <a href="sweetandsavory://login" class="button">Open Sweet and Savory App</a>
    </div>
</body>
</html>
