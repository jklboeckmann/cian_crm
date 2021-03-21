# Generated by Django 3.1.7 on 2021-03-21 01:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('productos', '0004_auto_20210321_0026'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='compras',
            name='cian_producto',
        ),
        migrations.RemoveField(
            model_name='compras',
            name='comprador',
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('cian_pedido', models.AutoField(primary_key=True, serialize=False)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha', models.DateField(auto_now_add=True)),
                ('comprador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pedidos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DetallePedido',
            fields=[
                ('cian_detpedido', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(blank=True)),
                ('pagado', models.BooleanField(default=False)),
                ('cian_pedido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='detalles', to='productos.pedido')),
                ('cian_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compras', to='productos.producto')),
                ('comprador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='detallepedidos', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('cian_pedido', 'cian_detpedido')},
            },
        ),
    ]
