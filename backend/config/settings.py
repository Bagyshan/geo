"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 5.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
from decouple import config
import os
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG')

ALLOWED_HOSTS = config('ALLOWED_HOSTS').split()


# Application definition

INSTALLED_APPS = [
    'modeltranslation',
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # libs
    'rest_framework',
    'drf_yasg',
    'ckeditor',
    'tinymce',
    'corsheaders',
    'leaflet',
    'djgeojson',
    'storages',
    'django_echarts',

    # apps
    'home',
    'news',
    'upload_image',
    'maps',
    'services',
    'comments',
    'gp',
    'aboutcompany',
    'employees',
    'achievements',
    'charts',
    'investors',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'libraries': {  # Добавьте эту строку, если ее нет
                'echarts': 'django_echarts.templatetags.echarts',
            },
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME':config('DB_NAME'),
        'USER':config('DB_USER'),
        'PASSWORD':config('DB_PASS'),
        'HOST':config('DB_HOST'),
        'PORT':config('DB_PORT')
    }
}


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME':config('DB_NAME'),
#         'USER':config('DB_USER'),
#         'PASSWORD':config('DB_PASS'),
#         'HOST':config('DB_HOST'),
#         'PORT':config('DB_PORT')
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

gettext = lambda s: s
LANGUAGES = (
    ('ru', gettext('Russia')),
    ('en', gettext('English')),
    ('ky', gettext('Kyrgyz')),
)

LOCALE_PATHS = [
    os.path.join(BASE_DIR, 'locale'),
]

MODELTRANSLATION_DEFAULT_LANGUAGE = 'ru'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# TEMPLATE_DIRS = (os.path.join(BASE_DIR,  'templates'),)

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_PORT = config('EMAIL_PORT', cast=int)
EMAIL_USE_TLS = config("EMAIL_USE_TLS", cast=bool)
EMAIL_PORT_SSL = config("EMAIL_PORT_SSL", cast=bool)
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')



REDIS_HOST = 'redis'
REDIS_PORT = '6379'

CELERY_BROKER_URL = 'redis://' + REDIS_HOST + ':' + REDIS_PORT
CELERY_RESULT_BACKEND = 'redis://' + REDIS_HOST + ':' + REDIS_PORT

STATIC_URL = '/api/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'api/static')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


CKEDITOR_UPLOAD_PATH = 'uploads/'


SWAGGER_SETTINGS = {
   'SECURITY_DEFINITIONS': {
      'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
      }
   }

}

DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880

TINYMCE_DEFAULT_CONFIG = {
    'height': 800,
    'width': 800,
    'browser_spellcheck': True,
    'menubar': True,
    'plugins': 'advlist,autolink,lists,link,image,charmap,preview,anchor,searchreplace,visualblocks,code,fullscreen,insertdatetime,media,table,code,help,wordcount',
    'toolbar': 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image | table',
    'image_advtab': True,
    'fontsize_formats': '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
    'style_formats': [
        {'title': '8pt', 'inline': 'span', 'styles': {'font-size': '8pt'}},
        {'title': '10pt', 'inline': 'span', 'styles': {'font-size': '10pt'}},
        {'title': '12pt', 'inline': 'span', 'styles': {'font-size': '12pt'}},
        {'title': '14pt', 'inline': 'span', 'styles': {'font-size': '14pt'}},
        {'title': '18pt', 'inline': 'span', 'styles': {'font-size': '18pt'}},
        {'title': '24pt', 'inline': 'span', 'styles': {'font-size': '24pt'}},
        {'title': '36pt', 'inline': 'span', 'styles': {'font-size': '36pt'}},
    ],
    'images_upload_url': '/upload_image/upload_image/',
    'relative_urls': False,
    'remove_script_host': False,
}



# JAZZMIN_SETTINGS = {
#     "site_title": "KyrgyzGeologia",
#     "site_header": "KyrgyzGeologia",
#     # "site_logo": "images/logo.png",  # Путь к вашему логотипу
#     "site_logo_classes": "img-circle",
#     "welcome_sign": "Добро пожаловать в KyrgyzGeologia",
#     "show_sidebar": True,
#     "theme": "cyborg",
#     "navigation_expanded": True,
#     "hide_apps": ["social_django", "auth"],
#     "usermenu_links": [
#         {
#             "name": "Помощь",
#             "url": "https://www.google.ru/",
#             "new_window": True
#         },
#         {
#             "model": "auth.user"
#         }
#     ],
#     "topmenu_links": [
#         # Ссылки, отображаемые в верхнем меню
#         {"name": "Домой", "url": "admin:index",
#          "permissions": ["auth.view_user"]},
#         {"name": "Поддержка", "url": "https://www.google.ru/",
#          "new_window": True},
#     ],
#     "show_ui_builder": True,
#     "changeform_format": "horizontal_tabs",
#     # Используйте горизонтальные вкладки на страницах редактирования
#     "changeform_format_overrides": {"auth.user": "collapsible",
#                                     "auth.group": "vertical_tabs"},
#     "show_icons": True,  # Показывать иконки в меню
#     "default_theme": "cerulean",  # Используйте тему Cerulean из Bootswatch
#     "related_modal_active": True,
#     # Включить модальные окна для связанных объектов
# }


JAZZMIN_SETTINGS = {
    "site_title": "Hackaton Projects",
    "welcome_sign": "Добро пожаловать!",
    "site_header": "Blow",
    "site_brand": "KyrgyzGeology",
    "copyright": "ChocoPy31",
    "hide_apps": ["auth", "admin"]
}


JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-success",
    "accent": "accent-teal",
    "navbar": "navbar-dark",
    "no_navbar_border": False,
    "navbar_fixed": False,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": False,
    "sidebar": "sidebar-dark-info",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": False,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "cyborg",
    "dark_mode_theme": None,
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
}


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'main_format': {
            'format': '{asctime} - {levelname} - {module} - {filename} - {message}',
            'style': '{',
        }
    },
    'handler': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatters': 'main_format',  # Путь к файлу для логов запросов
        },
    },
    'logger': {
        'main': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}




CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000", "http://*", "https://*", "http://localhost:*", "https://localhost:*"
]

CORS_ALLOW_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']

CORS_ALLOW_HEADERS = [
    'Accept',
    'Accept-Encoding',
    'Authorization',
    'Content-Type',
    'DNT',
    'Origin',
    'User-Agent',
    'X-CSRFToken',
    'X-Requested-With',
]


CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True


LEAFLET_CONFIG = {
    'DEFAULT_CENTER': (41.2044, 74.7661),  # Координаты Кыргызстана
    'DEFAULT_ZOOM': 7,
    'MIN_ZOOM': 3,
    'MAX_ZOOM': 18,
    'TILES': 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}



AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')
AWS_S3_SIGNATURE_NAME = config('AWS_S3_SIGNATURE_NAME')
AWS_S3_REGION_NAME = config('AWS_S3_REGION_NAME')
AWS_S3_FILE_OVERWRITE = config('AWS_S3_FILE_OVERWRITE', cast=bool)
AWS_DEFAULT_ACL = config('AWS_DEFAULT_ACL')
AWS_S3_VERIFY = config('AWS_S3_VERIFY', cast=bool)
DEFAULT_FILE_STORAGE = config('DEFAULT_FILE_STORAGE')

MEDIA_URL = f'https://{AWS_STORAGE_BUCKET_NAME}.s3.{AWS_S3_REGION_NAME}.amazonaws.com/'