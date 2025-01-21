from flask import Flask, request

app = Flask(__name__)


@app.route("/message", methods=["POST"])
def handle_message():
    # Get the data from the request
    data = request.get_json()

    # Process the message data here
    # For now just return the received data
    return {"status": "Server received", "data": data}


if __name__ == "__main__":
    app.run(host="localhost", port=3000, debug=True)
