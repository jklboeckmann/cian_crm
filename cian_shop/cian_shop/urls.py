from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('web.urls')),
    path('', include('productos.urls')),
    path('', include('accounts.urls'))
]
