pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Nodejs18') {
                    sh 'npm config ls'
		    sh 'npm config set strict-ssl false'
		    sh 'npm config set registry http://registry.npmjs.org/'
		    sh 'node test.js'
                }
            }
        }
    }
}
