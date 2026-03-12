pipeline {

agent any

environment {
DOCKER_IMAGE = "frekypriyanka001/ecommerce"
}

stages {

stage('Clone Repo') {
steps {
git 'https://github.com/riyamaruthachalam54-web/E-COMMERCE-DEVOPS.git'
}
}

stage('Build Docker Image') {
steps {
bat 'docker build -t %DOCKER_IMAGE% .'
}
}

stage('Login DockerHub') {
steps {
withCredentials([string(credentialsId: 'dockerhub-password', variable: 'PASS')]) {
bat 'echo %PASS% | docker login -u frekypriyanka001 --password-stdin'
}
}
}

stage('Push Image') {
steps {
bat 'docker push %DOCKER_IMAGE%'
}
}

stage('Deploy Container') {
steps {
bat '''
docker stop ecommerce || exit 0
docker rm ecommerce || exit 0
docker run -d -p 8081:80 --name ecommerce %DOCKER_IMAGE%
'''
}
}

}

}