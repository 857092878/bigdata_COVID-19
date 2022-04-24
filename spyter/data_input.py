import string

import pandas as pd
import numpy as np
from jieba.analyse import extract_tags
def contents_input():
    """
    播报数据
    :return:
    """
    contents = pd.read_csv("../spyter/contents.csv")
    contents = contents.dropna(axis=0,how="any")
    input = []
    for i in contents.index:
        input.append(str(contents["日期"][i])+" "+str(contents["时间"][i])+" "+str(contents["内容"][i]))
    return input
def map_input():
    """
    地图数据
    :return:
    """
    df = pd.read_csv("../spyter/data.csv")
    df.fillna(0,inplace=True)
    input = []
    for i in zip(df["地区"],df["现有"]):
        input.append(i)
    return input
def title_input():
    """
    标题数据
    :return:
    """
    with open("../spyter/title.csv","r",encoding="UTF-8")as fp:
        temp = fp.readlines()
    input = []
    for i in temp:
        input.append(i.strip("\n").split("\t"))
    return input
def left1_input():
    """
    新增本土和现有确诊城市数据
    :return:
    """
    df = pd.read_csv("../spyter/increase.csv")
    df = df.drop("省市",axis=1)
    input = []
    for i in zip(df["地区"],df["新增本土"],df["现有病例"]):
        input.append(i)
    return input
def left3_input():
    """
    累计确诊数据
    :return:
    """
    df = pd.read_csv("../spyter/data.csv")
    df = df.loc[:,["地区","累计"]]
    df = df.rename(columns={"地区": "name", "累计": "value"})
    input = df.to_dict(orient="records")
    return input

def right1_input():
    """
    各地区数据
    :return:
    """
    df1 = pd.read_csv("../spyter/data.csv")
    df2 = pd.read_csv("../spyter/area.csv")
    df = pd.merge(df1,df2,on="地区")
    df = df.drop("地区",axis=1)
    df = df.groupby("区域").sum()
    input = []
    for i in zip(df.index,df["新增"],df["现有"],df["累计"],df["治愈"],df["死亡"]):
        input.append(i)
    return input
def right2_input():
    """
    累计死亡数据
    :return:
    """
    df = pd.read_csv("../spyter/data.csv")
    df = df.loc[:,["地区","死亡"]]
    df = df.sort_values("死亡",ascending=False)
    df = df.rename(columns={"地区":"name","死亡":"value"})[:5]
    input = df.to_dict(orient="records")
    return input
def right3_input():
    """
    全国疫情新增趋势
    :return:
    """
    with open("../spyter/data_change.txt","r",encoding="UTF-8")as fp:
        data = fp.readlines()
    input = []
    for i in data[1:]:
        # print(i)
        input.append(i.replace("\n","").split("\t"))
    return input
if __name__ == '__main__':
    contents_input()
    map_input()
    title_input()
    left1_input()
    left3_input()
    right1_input()
    right2_input()
    right3_input()

