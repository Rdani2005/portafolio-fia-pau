# ----------------- Libraries ----------------------
from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
# My own files
from .models import Proyecto
from .serializers import ProyectoSerializer
# ----------------- Views Classes --------------------------------
# Display all objects on the databases
class ProyectoList(generics.ListAPIView):
    serializer_class = ProyectoSerializer
    queryset = Proyecto.objects.all()
# Display the object details on an API request
class ProyectoDetail(generics.RetrieveAPIView):
    serializer_class = ProyectoSerializer
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Proyecto, slug=item)

# Create a Proyecto object from API view
class CreateProyecto(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = ProyectoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Admin details
class AdminProyectoDetail(generics.RetrieveAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer
# We need to edit the proyect, right?
class EditProyecto(generics.UpdateAPIView):
    serializer_class = ProyectoSerializer
    queryset = Proyecto.objects.all()
# Delete the proyect
class DeleteProyecto(generics.RetrieveDestroyAPIView):
    serializer_class = ProyectoSerializer
    queryset = Proyecto.objects.all()