FROM python:3.7

WORKDIR /app

COPY requirements.txt ./
RUN RUN pip install --upgrade pip && \
    pip install -r requirements.txt

EXPOSE 3000
COPY ./src ./src

RUN useradd -M appuser
RUN chmod a+w /app
USER appuser

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "3000"]
