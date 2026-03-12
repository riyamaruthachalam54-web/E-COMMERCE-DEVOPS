pipeline {

agent any

environment {
DOCKER_IMAGE = "frekypriyanka001/ecommerce"
}

stages {

stage('Clone Repo') {
steps {
git branch: 'main', url: 'https://github.com/riyamaruthachalam54-web/E-COMMERCE-DEVOPS.git'
}
}

stage('Build Docker Image') {
steps {
sh 'docker build -t $DOCKER_IMAGE .'
}
}

}
}