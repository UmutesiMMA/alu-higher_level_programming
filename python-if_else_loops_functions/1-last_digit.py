#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
lastDigit = number % 10
result = f"Last digit of {number} is {lastDigit} and is "
if lastDigit > 5:
    result += "greater than 5"
elif lastDigit < 6 and lastDigit !=0 :
    result += "less than 6 and not 0"
else:
    result += "0"
print(result)
