FROM node

WORKDIR /app

EXPOSE 1234
EXPOSE 34355

VOLUME [ "/app" ]

ENTRYPOINT [ "npm" ]
CMD ["start"]
