pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14.4.0') {
                    sh 'npm config ls'
                }
            }
        }
    }
}
