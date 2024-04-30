FROM python:3.12.3
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "-m", "flask", "--app", "src/app.py", "--debug", "run", "--host=0.0.0.0"]