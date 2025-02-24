from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User
        fields = ['username','email','password']

    def create(self, validated_data):
        user = User(
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task 
        fields = '__all__'  
