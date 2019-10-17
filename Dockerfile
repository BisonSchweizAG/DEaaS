FROM repo.bison-group.com:5000/openjdk:11-jre-slim

ARG JAR_FILE
VOLUME /tmp
ADD server/build/libs/${JAR_FILE} /app.jar
ENV JAVA_OPTS="-Xms256m -Xmx1536m -XX:+UseG1GC -XX:+UseStringDeduplication"
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar --spring.config.location=classpath:/application.properties,classpath:/prod/application.properties
