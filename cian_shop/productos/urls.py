from rest_framework import routers
from .api import *
from django.urls import include, re_path
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('api/productos', ProductoViewSet, 'productos')
router.register('api/nuestros-productos', ProductosListaViewSet, 'nuestros-productos')
router.register('api/carrito',PedidoViewSet,'carrito')
router.register('api/carrito/det', DetallePedidoViewSet, 'detallecarrito')
router.register('api/ventas', VentasViewSet, 'ventasProducto')

urlpatterns = [
    re_path(r"^", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)