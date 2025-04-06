import boto3
import yaml
import os
import sys

def carregar_arquivo_yaml(caminho):
    if not os.path.exists(caminho):
        print(f"❌ Arquivo de recursos não encontrado: {caminho}")
        sys.exit(1)
    with open(caminho, 'r') as f:
        return yaml.safe_load(f)

def api_gateway_exists(api_name: str) -> bool:
    client = boto3.client('apigateway')
    paginator = client.get_paginator('get_rest_apis')
    for page in paginator.paginate():
        for item in page['items']:
            if item['name'] == api_name:
                print(f"✅ API Gateway '{api_name}' encontrado com ID: {item['id']}")
                return True
    print(f"❌ API Gateway '{api_name}' não encontrado.")
    return False

if __name__ == "__main__":
    environment = os.getenv("ENVIRONMENT")
    if not environment:
        print("❌ Variável de ambiente ENVIRONMENT não definida.")
        sys.exit(1)

    caminho_yaml = f'../../infra/{environment}/infra_resources.yaml'
    recursos = carregar_arquivo_yaml(caminho_yaml)

    api_gateways = recursos.get('api_gateways', [])
    for api in api_gateways:
        nome = api.get('name')
        if nome:
            api_gateway_exists(nome)
