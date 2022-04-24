# Generated by Django 4.0.4 on 2022-04-23 20:08

from django.db import migrations, models
import proyectos.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Proyecto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=55)),
                ('image', models.ImageField(default='posts/default.jpg', upload_to=proyectos.models.upload_to, verbose_name='Image')),
                ('description', models.TextField()),
                ('tipo_trabajo', models.CharField(choices=[('TPYM', 'Tecnicas de presentación y modelos'), ('DAC', 'Dibujo Arquitectónico Asistido por Computadora'), ('DA', 'Dibujo Arquitectónico')], default='TPYM', max_length=5)),
            ],
        ),
    ]
