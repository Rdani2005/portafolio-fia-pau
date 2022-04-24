from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Proyecto
from .serializers import ProyectoSerializer
# Create your views here.


@api_view(['GET', 'POST'])
def getAddWorks(request):
    # Create the proyecto
    if request.method == 'POST':
        data = request.data
        proyecto = Proyecto.objects.create(
            title=data['title'],
            image=['image'],
            description=['description'],
            tipo_trabajo=['tipo_trabajo'],
        )
        serializer = ProyectoSerializer(proyecto, many=False)
        return Response(serializer.data)
    # Get the proyectos
    elif request.method == 'GET':
        proyectos = Proyecto.objects.all()
        serializer = ProyectoSerializer(proyectos, many=True)
        return Response(serializer.data)


# API to look for the proyecto, update or delete
@api_view(['GET', 'PUT', 'DELETE'])
def getDeleteUpdateJob(request, pk):
    # Get the blog information
    proyecto = Proyecto.objects.get(id=pk)
    # Get the proyecto 
    if request.method == 'GET':
        serializer = ProyectoSerializer(proyecto, many=False)
        return Response(serializer.data)
    # Update the proyecto
    if request.method == 'PUT':
        data = request.data
        serializer = ProyectoSerializer(instance=proyecto, data=data)
        # Save the updated proyecto
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    # Delete the proyecto
    if request.method == 'DELETE':
        proyecto.delete()
        return Response("BLOG DELETED")