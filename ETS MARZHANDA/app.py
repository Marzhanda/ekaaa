from flask import Flask, render_template

app = Flask(_name_)

@app.route('/')
def home():
    return render_template('eka dan husni.html')

if _name_ == '_main_':
    app.run(debug=True)