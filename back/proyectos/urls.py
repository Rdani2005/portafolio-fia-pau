# ------------------------ Libraries -------------------------
from django.urls import path
# ---------------------- Own Files -----------------------------
from . import views
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------ URLs ------------------------------------------------
# getDeleteUpdateBlog
# urls
urlpatterns = [
   path('api/', views.getAddWorks, name="varios trabajos"),
   # Get, Delete, and Update Blog
   path('api/blog/<str:pk>/', views.getDeleteUpdateJob, name="Trabajo especifico"),
]