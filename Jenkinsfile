pipeline {
    agent any

    
    tools {
        nodejs 'node-latest'   // <--- Hna fin kan l-ghalat, bdlna 'NodeJS' b 'node-latest'
    }

    stages {
        stage('Installation') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
    
    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}