import datetime
from django.utils.http import http_date

class CacheControlMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if response.status_code == 200:
            if request.path.startswith('/api/static/'):
                expires = datetime.datetime.now() + datetime.timedelta(days=365)
                response['Cache-Control'] = 'public, max-age=31536000'
            else:
                expires = datetime.datetime.now() + datetime.timedelta(minutes=30)
                response['Cache-Control'] = 'public, max-age=1800'
                
            response['Expires'] = http_date(expires.timestamp())
        return response