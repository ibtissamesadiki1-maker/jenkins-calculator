pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
    }
}
pipeline {
    agent any     
    tools {
        nodejs 'node'
    }