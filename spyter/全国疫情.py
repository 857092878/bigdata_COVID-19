from selenium import webdriver
from selenium.webdriver import ChromeOptions
from time import sleep
from selenium.webdriver.chrome.options import Options
import warnings
warnings.filterwarnings('ignore')#忽略警告
import requests
from lxml import etree
def spyter():
    #网址
    url = "https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner"
    #无头浏览器
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    #规避操作
    option = ChromeOptions()
    option.add_experimental_option('excludeSwitches', ['enable-automation'])
    web = webdriver.Chrome(executable_path="./chromedriver.exe",options=option,chrome_options=chrome_options)
    #开始操作
    web.get(url=url)
    now_ill = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[1]/div[2]').text
    y_ill = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[2]/div[1]/div[3]').text
    now_ill_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[1]/div[2]').text
    y_ill_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[1]/div[3]').text
    now_curl_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[3]/div[2]').text
    y_curl_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[3]/div[3]').text
    now_dead_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[4]/div[2]').text
    y_dead_total = web.find_element_by_xpath('//*[@id="ptab-0"]/div[1]/div[3]/div[4]/div[3]').text
    with open("./title.csv","w",encoding="UTF-8")as fp:
        fp.write("现有确诊" + "\t"+now_ill + "\n")
        fp.write("现有确诊昨日增加" + "\t"+y_ill + "\n")
        fp.write("累计确诊" + "\t" + now_ill_total + "\n")
        fp.write("累计确诊昨日增加" + "\t" + y_ill_total + "\n")
        fp.write("累计治愈" + "\t" + now_curl_total + "\n")
        fp.write("累计治愈昨日增加" + "\t" + y_curl_total + "\n")
        fp.write("累计死亡" + "\t" + now_dead_total + "\n")
        fp.write("累计死亡昨日增加" +"\t" + y_dead_total + "\n")

    web.find_element_by_xpath('//*[@id="ptab-0"]/div[2]/div[2]/div[3]/div').click()
    a_list = web.find_elements_by_xpath('//*[@id="ptab-0"]/div[2]/div[2]/div[2]/a')
    with open("./increase.csv","w",encoding="UTF-8")as fp:
        fp.write("地区"+","+"省市"+","+"新增本土"+","+"现有病例"+"\n")
    with open("./increase.csv", "a+", encoding="UTF-8") as fp:
        for a in a_list:
            fp.write(a.find_element_by_xpath("./div/div[1]/div/span[1]").text+",")
            fp.write(a.find_element_by_xpath("./div/div[1]/div/span[2]").text+",")
            fp.write(a.find_element_by_xpath("./div/div[2]").text+",")
            fp.write(a.find_element_by_xpath("./div/div[3]").text+"\n")

    web.find_element_by_xpath('//*[@id="nationTable"]/div').click()
    columns = web.find_element_by_xpath('//*[@id="nationTable"]/table/thead/tr').text
    columns = str(columns).replace("\n",",")
    tr_list = web.find_elements_by_xpath('//*[@id="nationTable"]/table/tbody/tr')
    with open("./data.csv","w",encoding="UTF-8")as fp:
        fp.write(columns + "\n")
    with open("./data.csv", "a+",encoding="UTF-8") as fp:
        for tr in tr_list[1:]:
            temp = str(tr.text).replace("\n",",").replace("\t",",").replace(" ",",")
            fp.write(temp + "\n")

    web.find_element_by_xpath('//*[@id="ptab-1"]/div[3]/div[11]').click()
    div_list = web.find_elements_by_xpath('//*[@id="ptab-1"]/div[3]/div')


    with open("./contents.csv", "w", encoding="UTF-8") as fp:
        fp.write("日期"+",")
        fp.write("时间"+",")
        fp.write("内容"+"\n")
    with open("./contents.csv", "a+", encoding="UTF-8") as fp:
        for div in div_list:
            fp.write(str(div.text).replace("\t",",").replace("\n",",").replace("  ",",")+"\n")
def news():
    url = "https://www.sogou.com/sogou?interation=1728053249&pid=sogou-wsse-c7dec8e09376bf8e&query=%E5%85%A8%E5%9B%BD%E7%96%AB%E6%83%85%E4%BB%8A%E6%97%A5%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF&tsn=1&interV=G0%2BLJUPQjb0ExPt7yetGxKR7zOMTMkjYKKIPjflBz%2BcGwOVFj%2BlGmVzZEUWKJDSFL34ElKJSye97yetGxKR7zOMTG0%2BLJUPQjb0ExPt7yetGxKR7zOMTMkjYKKIPjflBz%2BcGwOVFj%2BlGmVzZEUWKJDSFL34ElKJSye97yetGxKR7zOMTkKIOkrELjboJmLkElbYTkKIKmbELjbkRmLkElbkTkKIOkrELjboJmLkElbYTkKIKmbELjbkRmLkElbkTkKIRmLkEk78TkKILkY%3D%3D_93460682&page={}&ie=utf8"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.9 Safari/537.36"
    }
    with open("./news.txt", "w", encoding="UTF-8") as fp:
        for i in range(1,10):
            response = requests.get(url=url.format(i),headers=headers).text
            tree = etree.HTML(response)
            contents_list = tree.xpath('//*[@id="main"]/div[3]/div//text()')
            for content in contents_list:
                fp.write(content)
if __name__ == '__main__':
    spyter()
    # news()