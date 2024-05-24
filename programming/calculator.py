# import os

def addition(num1, num2):
    print("addition of two numbers")

    sum = num1 + num2
    return sum
    # print("sum = ", sum)

def subtraction(num1, num2):
    print("subtraction of two numbers")

    subtract = num1 - num2
    return subtract
    # print("subtraction = ", subtract)

def multiplication(num1, num2):
    print("multiplication of two numbers")

    multi = num1 * num2
    return multi
    # print("multiplication = ", multi)

def division(num1, num2):
    print("division of two numbers")

    div = num1 / num2
    return div
    # print("division = ", div)

while 1:
    # os.system("cls")
    print("enter 1 for addition")
    print("enter 2 for subtraction")
    print("enter 3 for multiplication")
    print("enter 4 for division")
    print("enter 0 to exit")

    useChoice = int(input("enter your choice: "))

    if(useChoice == 0):
        break

    num1 = int(input("enter first num "))
    num2 = int(input("enter second num "))

    result = 0

    if(useChoice == 1):
        result = addition(num1, num2)
    elif(useChoice == 2):
        result = subtraction(num1, num2)
    elif(useChoice == 3):
        result = multiplication(num1, num2)
    elif(useChoice == 4):
        result = division(num1, num2)
    else:
        print("wrong choice")

    print("result is ", result)