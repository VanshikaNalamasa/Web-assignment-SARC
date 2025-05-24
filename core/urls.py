from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from events.views import EventViewSet

# DRF router for viewsets
router = routers.DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),               # Registers DRF router
    path('api/events/', include('events.urls')),      # Optional: your manual event URLs
]
