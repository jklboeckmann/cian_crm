# Generated by Django 3.1.7 on 2021-03-20 07:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('cian_producto', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('descripcion_corta', models.CharField(blank=True, max_length=300, null=True)),
                ('descripcion_larga', models.TextField(blank=True, null=True)),
                ('stock', models.IntegerField(blank=True, null=True)),
                ('vendedor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productos', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]