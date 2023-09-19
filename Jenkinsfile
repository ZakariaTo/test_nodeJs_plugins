pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 18.17.1') {
                    sh 'npm config ls'
                }
            }
        }
    }
}
