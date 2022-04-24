from django.db import models
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename): 
    return 'photos/{filename}'.format(filename=filename)

def upload_file(instance, filename):
    return 'files/{filename}'.format(filename=filename)

class Proyecto(models.Model):

    TECNICAS = 'TPYM'
    ASISTIDO = 'DAC'
    DIBUJO = 'DA'

    CHOICES_TYPE = [
        (TECNICAS, 'Tecnicas de presentación y modelos'),
        (ASISTIDO, 'Dibujo Arquitectónico Asistido por Computadora'),
        (DIBUJO, 'Dibujo Arquitectónico'),
    ]

    title = models.CharField(max_length=55)
    image = models.ImageField(_("Image"), upload_to=upload_to, default="posts/default.jpg")
    description = models.TextField()
    tipo_trabajo = models.CharField(max_length=5, choices=CHOICES_TYPE, default=TECNICAS)
    archivo=models.FileField(upload_to=upload_file)


    def is_upperclass(self):
        return self.tipo_trabajo in {self.TECNICAS, self.ASISTIDO}