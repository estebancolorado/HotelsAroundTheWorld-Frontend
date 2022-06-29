@Library('ceiba-jenkins-library') _
pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    	buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK14_Centos' //Verisión preinstalada en la Configuración del Master
  }
/*	Versiones disponibles
      JDK8_Mac
      JDK6_Centos
      JDK7_Centos
      JDK8_Centos
      JDK10_Centos
      JDK11_Centos
      JDK13_Centos
      JDK14_Centos
*/

  //Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
		checkout scm
      }
    }

   stage('clean') {
      steps{
	sh 'npm cache clean --force'

      }
    }

    stage('NPM Install') {
      steps {
        echo "------------>Installing<------------"
        sh 'npm install --force'
      }
    }

    stage('Unit Test') {
      steps {
        echo "------------>Testing<------------"
        sh 'npm run test -- --watch=false --browsers ChromeHeadless --code-coverage'
      }
    }

    stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
	  sh 'npm run e2e'
      }
    }

	stage('Static Code Analysis') {
      steps{
        echo '------------>Análisis de código estático<------------'
               sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:HotelsAroundTheWorld.frontend-esteban.colorado',
               sonarName:'"HotelsAroundTheWorld-Frontend(esteban.colorado)"',
               sonarPathProperties:'./sonar-project.properties')
      }
    }
 	stage('Build') {
   	  steps {
        echo "------------>Building<------------"
        sh 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'

    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'esteban.colorado@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
