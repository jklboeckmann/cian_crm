from rest_framework import serializers
from productos.models import Producto
from productos.models import Pedido
from productos.models import DetallePedido

class ProductoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Producto 
    fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pedido
    fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
  class Meta:
    model = DetallePedido
    fields = '__all__'