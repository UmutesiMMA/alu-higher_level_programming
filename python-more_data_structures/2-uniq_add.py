#!/usr/bin/python3
def uniq_add(my_list=[]):
    new_set = set(my_list)
    uniq_values  = [*new_set]
    sum = 0
    for item in uniq_values:
        sum+= item
    return sum
