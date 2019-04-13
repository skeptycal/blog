#!/usr/bin/env python3
# -*- encoding: utf-8 -*-
"""flaskblog.py - simple app to test flask functionality"""

import os

import Flask

app = Flask(__name__)

resource_path = os.path.join(app.root_path, 'enltk_data')


@app.route("/")
def hello():
    """[hello - test route]

    Returns:
        [contents_html] -- [index.html test page]
    """
    filename: str = "index.html"
    with open(filename, "r") as file:
        contents_html: str = file.read()
        print(contents_html)
    return contents_html


@app.route("/about")
def about():
    """[about - test route]

    Returns:
        [about] -- [about test page]
    """
    return "About Page"


if __name__ == '__main__':
    app.run(debug=True)
