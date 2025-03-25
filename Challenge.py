# FizzBuzz
 
# Divisible by 3, return "Fizz"
# Divisible by 5, return "Buzz"
# Divisible by both, return "FizzBuzz"
# Else return the input

def fizzbuzz(input):
    return (("Fizz" if input % 3 == 0 else "") + ("Buzz" if input % 5 == 0 else "")) or input

print(fizzbuzz(15)) # FizzBuzz
print(fizzbuzz(5)) # Buzz
print(fizzbuzz(3)) # Fizz
print(fizzbuzz(4)) # 4