from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/')
def index():
    return render_template('index.html')  # Renders the HTML template from the 'templates' folder

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, ssl_context='adhoc') # Enables debugging, so errors are printed in the console
