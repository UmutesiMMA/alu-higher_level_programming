#!/usr/bin/python3
""" a func to append text to filename provided"""


def append_write(filename="", text=""):
    """a new definition to append text to filename
    and return num of text
    """

    with open(filename, 'a') as f:
        f.write(text)

    return len(text)
