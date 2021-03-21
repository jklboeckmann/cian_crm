# cian_crm

REQUIREMENTS
    python 3.8 o superior
    node 12.18.3 o superior
    
INSTALL BACKEND
cd /
pip install requirements.txt

INSTALL FRONTEND
cd /
npm install

CONFIGURE AND INSTALL BD
cd /cian_shop/cian_shop/setings.py
    DATABASES = {....

cd cian_shop/manage.py
    python manage.py makemigrations
    python manage.py migrate

RUN
    cd cian_shop/manage.py
    python manage.py runserver