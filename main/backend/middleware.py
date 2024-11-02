import hashlib
import hmac
import urllib
from urllib.parse import unquote

from django.http import JsonResponse
from django.utils.deprecation import MiddlewareMixin
from .config import token


class AuthorizationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        try:
            auth_header = request.headers['Authorization']
            if not auth_header or not self.is_authorized(auth_header):
                return JsonResponse({'error': 'Unauthorized'}, status=401)
        except KeyError:
            return JsonResponse({'error': 'Unauthorized'}, status=401)

    def is_authorized(self, init_data, token=token, c_str="WebAppData"):
        parsed_data = urllib.parse.parse_qs(init_data)

        hash = parsed_data['hash'][0]
        init_data = sorted([chunk.split("=")
                            for chunk in unquote(init_data).split("&")
                            if chunk[:len("hash=")] != "hash="],
                           key=lambda x: x[0])
        init_data = "\n".join([f"{rec[0]}={rec[1]}" for rec in init_data])

        secret_key = hmac.new(c_str.encode(), token.encode(),
                              hashlib.sha256).digest()
        data_check = hmac.new(secret_key, init_data.encode(),
                              hashlib.sha256)
        return data_check.hexdigest() == hash
