FROM java:8
RUN mkdir -p /app
COPY target/*.jar /app/
USER nobody
CMD ["/bin/sh", "-c", "java ${JAVA_OPTS} -jar /app/*.jar ${APP_OPTS}"]
