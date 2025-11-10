# set the base image for the react app
FROM node:20-alpine

# Create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# this is done to avoid running the app as root
# if the app is run as root , any vulnerabilities in the app can be exploited by gaining root access
# good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory
WORKDIR /app


# copy package.json and package-lock.json to the working directory
# this is done to avoid downloading dependencies every time the app is built
# if the packages have't changed docker will use the cached dependencies
COPY package*.json ./


# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to fix this we switch back to root user
USER root

# change the ownership of the /app directory to the app use
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership for the given file
RUN chown -R app:app .

# switch back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the app files to the working directory
COPY . .

# expose the 5173 port to tell Docker that container listens on specified network
EXPOSE 5173

# run the app
CMD ["npm", "run", "dev"]