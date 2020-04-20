import cv2
import os

img = cv2.imread("elite4.png", cv2.IMREAD_UNCHANGED)

names = [
    "lorelei",
    "bruno",
    "agatha",
    "lance",
    "will",
    "koga",
    "bruno",
    "karen",
    "sidney",
    "phoebe",
    "glacia",
    "drake",
    "aaron",
    "bertha",
    "flint",
    "lucian",
    "shauntal",
    "marshal",
    "grimsley",
    "caitlin",
    "malva",
    "siebold",
    "wikstorm",
    "drasna",
    "hala",
    "olivia",
    "acerola",
    "kahili",
    "molayne"
]

os.mkdir("result")

count = 0
for y in range(8):
    for x in range(4):
        start_x = 4*(x+1) + 60*x
        end_x = start_x + 60

        start_y = 4*(y+1) + 60*y
        end_y = start_y + 60
        
        name = names[count]
        tile = img[start_y:end_y, start_x:end_x]

        cv2.imwrite("./result/{}.png".format(name), tile)
        
        count += 1
        if count >= 29:
            break
