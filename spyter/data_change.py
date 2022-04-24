import time


now = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
print(now)
with open("./title.csv","r",encoding="UTF-8")as fp:
    temp = fp.readline().split()[1]
print(temp)
with open("data_change.txt","a+",encoding="UTF-8")as fp:
    # fp.write("日期"+"\t")
    # fp.write("时间"+"\t")
    # fp.write("现有确诊"+"\n")
    fp.write(now+"\t")
    fp.write(temp+"\n")