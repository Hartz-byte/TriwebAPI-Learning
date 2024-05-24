start = 1
gap = 3
noofoccurance = (int(input("enter an end number of occurrence ")))
val = start

i = 1

while i < noofoccurance:
    print(val)  
    # print(val, end=" ")   for same line print
    
    val += gap

    if(gap == 3):
        gap = -1
    else:
        gap = 3
    
    i = i + 1