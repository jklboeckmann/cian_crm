# Generated by Django 3.1.7 on 2021-03-21 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0013_auto_20210321_0730'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(null=True, upload_to='product_images'),
        ),
    ]
