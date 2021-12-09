""" ******************** Ödev 1 ******************** """
import random

def random_number_generator(n,l) :
    numbers = []
    while  len(numbers) <= n-1:
        random_number=random.randrange(10**(l-1),10**l)
        if random_number not in numbers :
            numbers.append(random_number)
            yield random_number
generator=random_number_generator(9,3)

try:
    for gen in generator :
        print (gen)
except KeyboardInterrupt: 
    pass    
  
""" ******************** Ödev 2 ******************** """
def my_awesome_decorator(fun):
    def wrapped(*args):
        return fun(*args)
    return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    num=[] 
    for number in numbers:
        num.append(number+1)
    print(num)
    return not(all([True if number % 3 == 0 else False for number in num]))
    
print(mod_batch(2,5,8))
