# Quarter of the year
 
# Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
 
# For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

def quarterOf(month):
    if month > 9:
        return 4
    elif month > 6:
        return 3
    elif month > 3:
        return 2
    return 1

print(quarterOf(3)) # 1
print(quarterOf(8)) # 3
print(quarterOf(11)) # 4