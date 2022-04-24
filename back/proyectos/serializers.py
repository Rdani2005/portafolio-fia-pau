# -------------- Libraries ---------------------------
from rest_framework.serializers import ModelSerializer
# -------------- own files ---------------------------
from .models import Proyecto
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# -------------------- Models --------------------------------
class ProyectoSerializer(ModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'