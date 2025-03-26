# Generate a Range of Integers

# Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max) 

def generateRange(min, max, step):
    return list(range(min, max, step))

print(generateRange(1, 10, 1))
print(generateRange(1, 10, 2))
print(generateRange(1, 10, 5))