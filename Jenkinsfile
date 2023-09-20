pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS14') {
                    sh 'npm config ls'
		    sh 'npm config set strict-ssl false'
		    sh 'npm install'
                }
            }
        }
    }
}
