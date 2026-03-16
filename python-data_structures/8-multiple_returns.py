#!/usr/bin/python3
def multiple_returns(sentence):

    return len(sentence), None if not sentence.strip() else sentence[0]
