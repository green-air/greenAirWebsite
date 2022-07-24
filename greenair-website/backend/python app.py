import json

from flask import Flask, jsonify, request
# from APIs.db_utils import xxx
from API_Call import getAirQual, input_postcode

app = Flask(__name__)


# GETTING INFORMATION ABOUT AIR QUALITY


@app.route('/', methods=['POST'])
def get_res():
    return jsonify(getAirQual(input_postcode))


if __name__ == '__main__':
    app.run(debug=True, port=5001)
