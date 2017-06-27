#!/usr/bin/python

import sys

def main():

    events = [event.rstrip("\n") for event in open("events - Sheet1.tsv","r")] #sys.argv[1]

    for event in events:
        #print(event)
        data = event.split("\t")
        print("<a href=" + str(data[1]).replace(' ', '').replace('/', '&') + ".html" + ">" + str(data[1]) + "</a><br>")



if __name__ == "__main__": main()