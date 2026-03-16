#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    newList = []
    for item in my_list:
        if item % 2 == 0:
            newList.append(True)
        else:
            newList.append(False)

    return newList
