start = 1
end = (int(input("enter an end number ")))

i = start
j = 3

while i < end:
    print(i)
    i = i + j

    if(j == 3):
        j = -1
    else:
        j = 3
    