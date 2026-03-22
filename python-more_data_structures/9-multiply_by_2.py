#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new_a_dictionary = {}
    for k, y in a_dictionary.items():
        new_a_dictionary.update({k: y ** 2})
    return new_a_dictionary
