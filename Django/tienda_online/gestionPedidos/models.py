from django.db import models

class Clientes(models.Model):
    nombre=models.CharField(max_length=30)

    direccion=models.CharField(max_length=50, verbose_name="Tu direccion")

    email=models.EmailField(blank=True, null=True)
    tfno=models.CharField(max_length=10)
    def __str__(self):
        return f"{self.nombre} - {self.direccion} - {self.email}"
    

class Articulos(models.Model):
    nombre=models.CharField(max_length=30)
    seccion=models.CharField(max_length=20)
    precio=models.IntegerField()

    def __str__(self):
        return f"{self.nombre} - {self.seccion} - {self.precio}"


class Pedidos(models.Model):
    numero=models.IntegerField()
    fecha=models.DateField()
    entregado=models.BooleanField()
    def __str__(self):
        return f"{self.numero} - {self.fecha} - {self.entregado}"
