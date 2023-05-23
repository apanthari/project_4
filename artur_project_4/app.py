<<<<<<< HEAD
from rec_using_knn import model_prediction


# 1. import Flask
from flask import Flask, jsonify, render_template

=======
# 1. import Flask
from flask import Flask
>>>>>>> Artur

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

<<<<<<< HEAD
#3. Define what to do when a user hits the index rssssoute
@app.route("/")
def home():

    return render_template("index.html")

    # print("Server received request for 'Home' page...", flush = True)

    # x = "song" # input from javascript
    # returned_songs = model_prediction(x)

    # return "Welcome to my 'Home' page!"
# example: /predict/let it go

@app.route("/predict/<song>")
def predict(song):
    return jsonify(model_prediction(song))
# # 4. Define what to do when a user hits the /about route
# @app.route("/about")

# def about():
#     print("Server received request for 'About' page...", flush = True)
#     return "Welcome to my 'About' page!"


#how run the app

if __name__ == "__main__":

    app.run(debug=True)

=======

# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"


if __name__ == "__main__":
    app.run(debug=True)
>>>>>>> Artur
