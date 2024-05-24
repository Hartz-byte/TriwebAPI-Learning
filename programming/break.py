for i in range(10):
    print("inside loop before condition")
    if(i==5):
        print("inside if condition")
        break
    
    print("after if condition")
    print(i)
print("after loop")