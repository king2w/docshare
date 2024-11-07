const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mock reCAPTCHA</title>
            <style>
                body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; font-family: Arial, sans-serif; }
                .recaptcha-container { display: flex; align-items: center; border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9; width: 300px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative; }
                .recaptcha-checkbox { width: 18px; height: 18px; border: 2px solid #ddd; background-color: #fff; margin-right: 10px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: background-color 0.3s ease, border-color 0.3s ease; position: relative; }
                .recaptcha-checkbox.checked { background-color: #4285f4; border-color: #4285f4; }
                .recaptcha-checkbox::after { content: '✓'; color: #fff; font-size: 14px; opacity: 0; transform: scale(0); transition: opacity 0.3s ease, transform 0.3s ease; }
                .recaptcha-checkbox.checked::after { opacity: 1; transform: scale(1); }
                .recaptcha-text { font-size: 14px; color: #555; }
                .recaptcha-logo { margin-left: auto; font-size: 12px; color: #777; display: flex; align-items: center; }
                .recaptcha-logo img { width: 18px; height: 18px; margin-right: 5px; }
                .tooltip { display: none; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background-color: #333; color: #fff; padding: 5px 10px; border-radius: 3px; font-size: 12px; white-space: nowrap; margin-bottom: 10px; }
                .recaptcha-container:hover .tooltip { display: block; }
            </style>
        </head>
        <body>
            <div class="recaptcha-container">
                <div class="tooltip">Click to verify</div>
                <div class="recaptcha-checkbox" onclick="toggleCheck(this)"></div>
                <div class="recaptcha-text">I'm not a robot</div>
                <div class="recaptcha-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Recaptcha_logo.svg/120px-Recaptcha_logo.svg.png" alt="reCAPTCHA logo">
                    reCAPTCHA
                </div>
            </div>
            <script>
                function toggleCheck(element) {
                    element.classList.toggle('checked');
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
