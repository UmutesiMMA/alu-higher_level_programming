#!/usr/bin/python3
""" mmodule to open file and append to it"""


def write_file(filename="", text=""):
    """function to define a counter
    and it will write text to file
    """

    with open(filename, 'w+') as f:
        f.write(text)

    return len(text)
