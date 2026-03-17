#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    new_matrix = []
    for i in range (len(matrix)):
        for j in range (len(matrix[0])):
            new_matrix.append (matrix[i][j] **2)

    return (new_matrix)

print(square_matrix_simple([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))



numbers = [[2,3,4],[5,6,7],[8,9,10]]

