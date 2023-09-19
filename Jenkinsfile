pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS14') {
                    sh 'npm config ls'
                }
            }
        }
    }
}
