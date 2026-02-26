#!/usr/bin/python3
for num in range(100):
    print("{num:02d}".format(num=num),end=',  '[:-1]*(num<99))
