from flask import *
import os
template_path = os.path.join(os.getcwd(), "templates")
static_path = os.path.join(os.getcwd(), "static")

app = Flask(__name__, template_folder=template_path, static_folder=static_path)

@app.route("/")
@app.route("/home")
def home():
   return render_template("managerDashboard.html")

if __name__ == "__main__":
    app.run(debug=True)