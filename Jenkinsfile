pipeline {

agent any

environment {
    DOCKER_IMAGE = "frekypriyanka001/ecommerce"
}

stages {

stage('Clone Repository') {
    steps {
        git credentialsId: 'github-cred', url: 'https://github.com/riyamaruthachalam54-web/E-COMMERCE-DEVOPS.git'
    }
}

stage('Build Docker Image') {
    steps {
        sh 'docker build -t $DOCKER_IMAGE .'
    }
}

stage('Login to DockerHub') {
    steps {
        withCredentials([string(credentialsId: 'dockerhub-password', variable: 'PASS')]) {
            sh 'echo $PASS | docker login -u frekypriyanka001 --password-stdin'
        }
    }
}

stage('Push Docker Image') {
    steps {
        sh 'docker push $DOCKER_IMAGE'
    }
}

stage('Deploy Container') {
    steps {
        sh '''
        docker stop ecommerce || true
        docker rm ecommerce || true
        docker run -d -p 8081:80 --name ecommerce $DOCKER_IMAGE
        '''
    }
}

}

}