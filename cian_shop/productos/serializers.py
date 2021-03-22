from rest_framework import serializers
from productos.models import Producto
from productos.models import Pedido
from productos.models import DetallePedido

class ProductoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Producto 
    fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
  cian_producto = ProductoSerializer()
  class Meta:
    model = DetallePedido
    fields = ['cian_detpedido','cian_pedido','cian_producto','cantidad']

class PedidoSerializer(serializers.ModelSerializer):
  detalles = DetallePedidoSerializer(many=True, read_only=True)
  class Meta:
    model = Pedido
    fields = ['cian_pedido','fecha','pagado','comprador','total','detalles']
