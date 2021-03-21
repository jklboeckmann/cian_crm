from rest_framework import routers
from .api import ProductoViewSet, ProductosListaViewSet,DetallePedidoViewSet, PedidoViewSet
from django.urls import include, re_path

router = routers.DefaultRouter()
router.register('api/productos', ProductoViewSet, 'productos')
router.register('api/nuestros-productos', ProductosListaViewSet, 'nuestros-productos')
router.register('api/carrito',PedidoViewSet,'carrito')
router.register('api/detallecarrito', DetallePedidoViewSet, 'detallecarrito')

urlpatterns = [
    re_path(r"^", include(router.urls)),
]