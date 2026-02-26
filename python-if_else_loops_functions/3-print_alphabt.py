#!/usr/bin/python3
for ltr in range(ord('a'), ord('z')+1):
     if chr(ltr) != 'q'  and chr(ltr) != 'e' :
         print('{}'.format(chr(ltr)), end='')
