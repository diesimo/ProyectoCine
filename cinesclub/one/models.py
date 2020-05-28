from django.db import models

class Cliente(models.Model):
    nombre=models.CharField(max_length=10)
    apellido=models.CharField(max_length=10)
    birthday=models.DateField()


    def __str__(self):
        return self.nombre