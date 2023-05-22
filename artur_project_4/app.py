

from rec_using_knn import model_prediction


# 1. import Flask
from flask import Flask

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

#3. Define what to do when a user hits the index rssssoute
@app.route("/")
def home():

    print("Server received request for 'Home' page...", flush = True)

    x = "song" # input from javascript
    returned_songs = model_prediction(x)

    return "Welcome to my 'Home' page!"


# # 4. Define what to do when a user hits the /about route
# @app.route("/about")

# def about():
#     print("Server received request for 'About' page...", flush = True)
#     return "Welcome to my 'About' page!"


#how run the app

if __name__ == "__main__":

    app.run(debug=True)
