# next-sandbox
Next.js sandbox for learning, testing, building new things with a google app engine deployment.

WIP 

Public deployment on https://nextjs-sandbox-227900.appspot.com/

Can be used as boilerplate for deploying your own Next.js project on google app engine.
Set up a project on GCP and ensure you have the command line tools installed then:
-gcloud projects list 
-gcloud config set project PROJECT_NAME
-git clone https://github.com/econdie/next-sandbox.git
-cd into repo
-npm install
-npm run build
-npm run start (verify it runs in localhost as expected)
-gcloud app deploy app.yaml --version 1
