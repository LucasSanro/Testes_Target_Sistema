# 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

# IMPORTANTE:
# Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

import time
nterms = int(input("Valor procurado: "))


n1, n2 = 0, 1
count = 0
i=nterms
j=nterms

if nterms <= 0:
   print("Por favor use valores positivos acima de 0")

elif nterms == 1:
   print("Sequência de Fibonacci até",nterms,":")
   print(n1)

else:
   print("Calculando.....")
   time.sleep(2)
   while j != n1:
      nth = n1 + n2
      n1 = n2
      n2 = nth
      count += 1
      if(n1==j):
        print("O numero "+ str(i) +" pertence a sequência")
        break
      elif n1>j:
        print("O numero "+ str(i) +" NÂO pertence a sequência")
        break
time.sleep(2)
print("FIM DA EXECUÇÂO")
      

      

        