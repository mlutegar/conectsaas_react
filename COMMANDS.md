Para puxar as alterações do repositório remoto, use o comando:
```bash
git pull
```

Para adicionar as alterações ao commit, use o comando:
```bash
git add .
```

Para realizar o commit, use o comando:
```bash
git commit -m "feat: corrigindo mobile"
```

Para enviar as alterações para o repositório remoto, use o comando:
```bash
git push 
```

Para rodar o projeto, use o comando:
```bash
npm run start-windows
```

Para criar build do projeto, use o comando:
```bash
npm run build
```

Para abrir a pasta de build no explorador de arquivos, use o comando:
```bash
explorer build
```

Para abrir o projeto no explorador de arquivos, use o comando:
```bash
explorer .
```

Verificar as portas que estão sendo utilizadas:
```bash
netstat -ano | findstr :3000
```

Para finalizar a porta:
```bash
taskkill /F /PID 26920
```