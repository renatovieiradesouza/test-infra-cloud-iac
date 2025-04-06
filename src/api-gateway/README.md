# 🧪 Testes de Infraestrutura AWS com Python

Este projeto contém scripts para validar recursos da AWS, como API Gateway e Lambda, usando `boto3` e configurações centralizadas em YAML.

---

## ✅ Requisitos

- Python 3.8+
- AWS CLI configurado (`aws configure`)
- Acesso aos recursos da AWS que serão testados

---

## 📦 Setup do Ambiente de Desenvolvimento

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

python3 -m venv venv
source venv/bin/activate  # Linux/macOS
# ou no Windows:
# venv\Scripts\activate

pip install -r requirements.txt
```

# 🚀 Executando os testes

Requisito: Preencher recursos a serem validados no yaml de configuração.

```bash
python verifica_api_gateway.py
```

# 🧩 Estrutura futura

A estrutura do YAML pode ser expandida para testar:  

- Lambdas
- S3 buckets
- DynamoDB
- SQS/SNS
- VPC/Subnets