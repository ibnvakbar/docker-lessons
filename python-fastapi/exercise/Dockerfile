# base image
FROM python:3.9-slim

# set working directory
WORKDIR /app

# copy requirements.txt to docker container
COPY requirements.txt ./

# install dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# copy source code to docker container
COPY . .

# expose port
EXPOSE 3000

# create dedicated user
RUN useradd -M appuser && chmod a+w /app
USER appuser


# run the container
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3000"]