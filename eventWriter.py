#!/usr/bin/python

import sys

def main():

    events = [event.rstrip("\n") for event in open("events - Sheet1.tsv","r")] #sys.argv[1]

    for event in events:
        #print(event)
        data = event.split("\t")
        #print(data)
        html = (open("template.html","r")).read()
        html = html.replace("EVENTNUMBER",str(data[0]))
        html = html.replace("TITLE",str(data[1]))
        html = html.replace("DESCRIPTION",str(data[2]))
        html = html.replace("CONTACTS",str(data[3]))

        filename = "events/" + str(data[1]).replace(' ', '').replace('/', '&').replace('#','') + ".html"

        print(filename)
        (open(filename,"w")).write(html)



if __name__ == "__main__": main()