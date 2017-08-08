#!groovy
pipeline {
    agent any
    stages {
        stage( 'pipeline confirm'){
            //执行确认
            steps{
                val=input message: 'input', parameters: [string(defaultValue: '', description: '', name: 'param1'),string(defaultValue: '', description: '', name: 'param2')]
                echo val['param1']
                echo val['param2']
            }

        }

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

        stage('Deploy') {
            steps {
                echo "Hello ${params.current_deploy_build_release}"
                echo 'Deploying....'
            }
        }
    }
}
