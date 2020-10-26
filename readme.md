#Meta movie portal
Meta movie portal is a react and nodejs expres app with sql database.
## Installation 

###Requirements

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/instal) to install dependencies.

```
#mac 
brew install yarn
#windows
???
#linux Debian / Ubuntu
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn


```
Install any RDBMS of choice and be sure to create a user with ALL PRIVILEGES 

Supply the info on `.env` file
```
cp .env.example .env
```  
Supply required info
also need to copy second `.env` file for the client

```
cd movie-client/
cp .env.example .env

```

Go back to the project root and install dependencies

```
cd ..
pwd  
# You should be in root ->./meta-movie-portal
# Use yarn to install
yarn
# Wait for the installer to finish

```

###Runnign the app
```
# Use 
yarn start:dev 
# to run the app. You should navigate on your browser to localhost:[the port you have set in the .env file]
```

