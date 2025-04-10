// valida-api-gateway.js
const AWS = require('aws-sdk');

// Configura a região (as credenciais virão do ambiente ou ~/.aws/credentials)
AWS.config.update({ region: 'us-east-1' });

// Instancia o client da API Gateway v1 (REST APIs)
const apigateway = new AWS.APIGateway();

// ID da API REST (não funciona com HTTP API v2)
const apiId = '6qpxxk5574'; // Substitua pelo seu ID real

// Função principal de execução
(async () => {
  try {
    const params = { restApiId: apiId };
    const apiData = await apigateway.getRestApi(params).promise();

    console.log('✅ API Gateway encontrado!');
    console.log('ID:', apiData.id);
    console.log('Nome:', apiData.name);
  } catch (error) {
    console.error('❌ Erro ao buscar API Gateway:', error.message);
    process.exit(1);
  }
})();
