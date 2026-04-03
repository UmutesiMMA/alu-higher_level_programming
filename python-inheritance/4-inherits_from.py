#!/usr/bin/python3
"""
This will check if the object is an instance of a class direct or indirect
"""


def inherits_from(obj, a_class):
    """ we have to specify whether the obj inserted
    in an instance on a class inseted

    args:
    obj
    a_class

    returns:
    true if is an instance
    false if it is not
    """

    if type(obj) == a_class:
        return False
    return isinstance(obj, a_class)
