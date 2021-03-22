from productos.models import Producto
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ProductoSerializer,DetallePedidoSerializer,PedidoSerializer
from productos.models import DetallePedido, Pedido
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import JsonResponse

class ProductoViewSet(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)

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
        pedidos = self.request.user.pedidos.filter(pagado=False)
        return pedidos

    def create(self, request, *args, **kwargs):
        pedido = Pedido.objects.filter(pagado = False)
        if pedido:
            pedido = pedido[0]
        else:
            pedido = Pedido.objects.create(comprador=self.request.user)
        
        producto = Producto.objects.filter(cian_producto = request.data['cian_producto'])[0]
        detalle =  DetallePedido.objects.filter(cian_pedido=pedido, cian_producto=producto)
        current_pedido = Pedido.objects.filter(pagado = False)
        if detalle:
            current_detalle = detalle[0]
            detalle.update(cantidad=current_detalle.cantidad+1)
            current_pedido.update(total=current_pedido[0].total+producto.precio)
        else:
            current_pedido.update(total=current_pedido[0].total+producto.precio)
            DetallePedido.objects.create(cian_pedido=pedido, cian_producto=producto, cantidad=1)

        pedido = PedidoSerializer(pedido)
        return Response(pedido.data, status=status.HTTP_201_CREATED)


class DetallePedidoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = DetallePedidoSerializer
    def get_queryset(self):
        return DetallePedido.objects.filter()
    
    def destroy(self, request, *args, **kwargs):
        print(self.get_object().cian_pedido)
        pedido = DetallePedidoSerializer(self.get_object())
        return Response(pedido.data, status=status.HTTP_200_OK)
    
        
    

