print("Enter height of 1st person")
person1 = int(input())

print("Enter height of 2nd person")
person2 = int(input())

if(person1 == person2):
    print("Both are equal")

elif(person1 > person2):
    print("Person 1 is taller")

else:
    print("Person 2 is taller")