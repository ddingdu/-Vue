from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.decorators import api_view, permission_classes

from .serializers import UserSerializer

# Create your views here.

# 유저 정보 조회
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def userinfo(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


def ProfileView(request, username):
    User = get_user_model()
    user = User.objects.get(username=username)  # 현재 사용자
    profile = {
        'name': user.username,
        'email': user.email,
        # 필요한 프로필 정보를 추가하세요
    }
    return JsonResponse(profile)