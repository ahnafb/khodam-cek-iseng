from flask import (Flask, json, render_template, jsonify, request, redirect, url_for)
from pymongo import MongoClient
from dotenv import load_dotenv
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)