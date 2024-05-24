print("1st num")
n1 = int(input())

print("2nd num")
n2 = int(input())

print("3rd num")
n3 = int(input())

if(n1 == n2 and n1 == n3):
    print("All are equal")

elif(n1 > n2 and n1 > n3):
    print("n1 is greater")

elif(n2 > n1 and n2 > n3):
    print("n2 is greater")

else:
    print("n3 is greater")