pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS14') {
                    sh 'npm config ls'
		    sh 'npm config set strict-ssl false'
		    sh 'npm config set registry http://registry.npmjs.org/'
		    sleep( time: 10, unit: 'SECONDS' )
		    sh 'npm config ls'
		    sh 'npm install'
                }
            }
        }
    }
}
