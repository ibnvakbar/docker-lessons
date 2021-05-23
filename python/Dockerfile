FROM python:3.7

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt

EXPOSE 8000
COPY ./src ./src

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]