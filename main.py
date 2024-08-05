from flask import *
import os
template_path = os.path.join(os.getcwd(), "templates")
static_path = os.path.join(os.getcwd(), "static")

app = Flask(__name__, template_folder=template_path, static_folder=static_path)

@app.route("/")
@app.route("/home")
def home():
   return render_template("home.html")

@app.route("/login")
def login():
   return render_template("Loginindex.html")

@app.route("/tragoi")
def tragoi():
   return render_template("tragoi.html")

@app.route("/drinks")
def drinks():
   return render_template("drinks.html")
if __name__ == "__main__":
    app.run(debug=True)