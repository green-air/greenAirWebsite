import json

import requests
from flask import jsonify

input_postcode = input("Please enter your postcode: ").replace(' ', '').upper()


def getAirQual(postcode):
    # input_postcode = input("Please enter your postcode: ").replace(' ','').upper()
    print(input_postcode)

    endpoint1 = f'https://api.postcodes.io/postcodes/{input_postcode}'

    response1 = requests.get(endpoint1)

    data = response1.json()

    # print("Result:")
    # print(data['result'])
    long = data['result']['longitude']
    lat = data['result']['latitude']

    # print(f"Longitude: {long}")
    # print(f"Latitude: {lat}")



    endpoint2 = "https://air-quality.p.rapidapi.com/forecast/airquality"

    querystring = {"lat":lat,"lon":long,"hours":"72"}

    headers = {
            "X-RapidAPI-Key": "8987017ad2msh1ed6cf9be42e16bp135d26jsnafe82dd68e11",
            "X-RapidAPI-Host": "air-quality.p.rapidapi.com"
    }

    response2 = requests.request("GET", endpoint2, headers=headers, params=querystring)

    return response2.json()


# print("Air Quality Index for this location: " + str(getAirQual(input_postcode)))
print(getAirQual(input_postcode))
