const AWS = require('aws-sdk');

// Mesmo setup do código funcional
AWS.config.update({ region: 'us-east-1' });
const apigateway = new AWS.APIGateway();

const apiId = '6qpxxk5574'; // Substitua com seu ID válido

describe('API Gateway', () => {
  test('Deve encontrar a API Gateway correta', async () => {
    const data = await apigateway.getRestApi({ restApiId: apiId }).promise();

    expect(data).toHaveProperty('id', apiId);
    expect(data).toHaveProperty('name');
    console.log('✅ Teste passou! Nome da API:', data.name);
  });
});
