from django.conf.urls import patterns, url
from authentication.views import AccountViewSet


user_register = {'post': 'create', 'get': 'list'}
urlpatterns = patterns(
     '',
    # ... URLs
    url(r'register', AccountViewSet.as_view(user_register), name='user_register'),
)