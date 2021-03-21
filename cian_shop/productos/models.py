from django.db import models
from django.contrib.auth.models import User

class Producto(models.Model):
    cian_producto = models.AutoField(primary_key=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.CharField(max_length=300, blank=True, null=True)
    stock = models.IntegerField(blank=True, null=True)
    vendedor = models.ForeignKey(
        User, related_name="productos", on_delete=models.CASCADE, null=True)

class Pedido(models.Model):
    cian_pedido = models.AutoField(primary_key=True)
    fecha=models.DateField(auto_now_add=True)
    pagado = models.BooleanField (default=False)
    comprador = models.ForeignKey(
        User, related_name="pedidos",on_delete=models.CASCADE, null=True)

class DetallePedido(models.Model):
    cian_detpedido = models.AutoField(primary_key=True)
    cian_pedido = models.ForeignKey(Pedido,related_name="detalles", on_delete=models.CASCADE, null=True)
    cian_producto = models.ForeignKey(Producto,related_name="compras", on_delete=models.CASCADE, null=True)
    