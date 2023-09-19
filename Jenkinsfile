pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Nodejs18') {
                    sh 'npm config ls'
                }
            }
        }
    }
}
