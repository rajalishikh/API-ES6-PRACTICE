first_user=int(input('Please gibe me the first number : '))
second_user=int(input('Please gibe me the second number : '))
third_user=int(input('Please gibe me the Third number : '))

if(first_user > second_user  and first_user > third_user):
    print('the biggest number is : ',first_user)
elif(second_user> first_user and second_user > third_user ):
    print('Biggest number is ',second_user)
else:
    print('Biggest number is :',third_user)
