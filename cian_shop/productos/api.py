from productos.models import Producto
from rest_framework import viewsets, permissions
from .serializers import ProductoSerializer,DetallePedidoSerializer,PedidoSerializer
from productos.models import DetallePedido

class ProductoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProductoSerializer

    def get_queryset(self):
        return self.request.user.productos.all()

    def perform_create(self, serializer):
        serializer.save(vendedor=self.request.user)
        
class ProductosListaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProductoSerializer

    def get_queryset(self):
        return self.request.productos.all()

class PedidoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PedidoSerializer
    
    def get_queryset(self):
        return self.request.user.pedidos.all()

    def perform_create(self, serializer):
        serializer.save(comprador=self.request.user)

class DetallePedidoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = DetallePedidoSerializer
    def get_queryset(self):
        return DetallePedido.objects.filter()
    

