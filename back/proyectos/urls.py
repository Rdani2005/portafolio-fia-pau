# ------------------------ Libraries -------------------------
from django.urls import path
# ---------------------- Own Files -----------------------------
from .views import ProyectoList, ProyectoDetail, CreateProyecto, AdminProyectoDetail, EditProyecto, DeleteProyecto

# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------ URLs ------------------------------------------------
# getDeleteUpdateBlog
# urls
urlpatterns = [
   path('api/', ProyectoList.as_view(), name="lista-trabajos"),
   path('api/proyecto/<str:pk>/', ProyectoDetail.as_view(), name="proyect"),
   path('api/create', CreateProyecto.as_view(), name="create"),
   path('api/edit/<int:id>', EditProyecto.as_view(), name="Edit proyect"),
   path('api/edit/postdetil/<int:id>', AdminProyectoDetail.as_view, name="Postdetail edit"), 
   path('api/delete/<int:id>', DeleteProyecto.as_view(), name="Delete proyect")

   
]

