#!/usr/bin/python

import sys, random

def main():

    events = [event.rstrip("\n") for event in open("events - Sheet1.tsv","r")] #sys.argv[1]

    for event in events:
        #print(event)
        data = event.split("\t")
        num = random.randint(1,3)

        url = "events/" + str(data[1]).replace(' ', '').replace('/', '&').replace('#','') + ".html"

        print("<button onclick="+'"'+"location.href = '" + url + "';" + '" class="eventButton eventButton--'+ str(num) + '">' + str(data[1]) + "</button>")



if __name__ == "__main__": main()