from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from spyter.data_input import contents_input
from spyter.data_input import map_input
from spyter.data_input import title_input
from spyter.data_input import left1_input
from spyter.data_input import left3_input
from spyter.data_input import right1_input
from spyter.data_input import right2_input
from spyter.data_input import right3_input


app = Flask(__name__)

@app.route('/')
def index():
    title = title_input()
    contents = contents_input()
    return render_template("index.html",#进入主页
                           data1=title[0][1],data2=title[2][1],data3=title[4][1],data4=title[6][1],#今日新增数据
                           data11=title[1][1],data12=title[3][1],data13=title[5][1],data14=title[7][1],#昨日新增数据
                           contents=contents

                           )
@app.route('/map')
def map():
    df = map_input()
    res = []
    for i in df:
        res.append({"name": i[0], "value": i[1]})
    return jsonify({"data":res})
@app.route('/left1')
def left1():
    df = left1_input()
    city = []
    data1 = []
    data2 = []
    for i in df[:8]:
        city.append(i[0])
        data1.append(i[1])
        data2.append(i[2])
    return jsonify({"city":city[::-1],"data1":data2[::-1],"data2":data1[::-1]})
@app.route('/left3')
def left3():
    df = left3_input()
    return jsonify({"data": df})
@app.route('/right1')
def right1():
    df = right1_input()
    data = []
    indicator = []
    for i in df:
        data.append({"name":i[0],"value":list(i[1:])})
    indicator.append({"name":"新增病例","max":max([i[1]] for i in df)[0]})
    indicator.append({"name":"现有病例","max":max([i[2]] for i in df)[0]})
    indicator.append({"name":"累计病例","max":max([i[3]] for i in df)[0]})
    indicator.append({"name":"累计死亡","max":max([i[4]] for i in df)[0]})
    indicator.append({"name":"累计治愈","max":max([i[5]] for i in df)[0]})
    return jsonify({"data":data,"indicator":indicator})
@app.route('/right2')
def right2():
    df = right2_input()
    return jsonify({"data":df})
@app.route('/right3')
def right3():
    df = right3_input()
    data1 = []
    data2 = []
    for i in df:
        data1.append(i[0].split(" ")[0])
        data2.append(i[1].replace(",",""))
    return jsonify({"data1":data1,"data2":data2})
if __name__ == '__main__':
    app.run()