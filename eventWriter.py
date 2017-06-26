#!/usr/bin/python

import sys

def main():

    events = [event.rstrip("\n") for event in open("events - Sheet1.tsv","r")] #sys.argv[1]

    for event in events:
        #print(event)
        data = event.split("\t")
        #print(data)
        htmlCode = (open("template.html","r")).read()
        htmlCode = htmlCode.replace("EVENTNUMBER",str(data[0]))
        htmlCode = htmlCode.replace("TITLE",str(data[1]))
        htmlCode = htmlCode.replace("DESCRIPTION",str(data[2]))
        htmlCode = htmlCode.replace("CONTACTS",str(data[3]))
        filename = str(data[1]).replace(' ', '').replace('/', '&') + ".html"
        print(filename)
        (open(filename,"w")).write(htmlCode)



if __name__ == "__main__": main()