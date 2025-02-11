Para adicionar as alterações ao commit, use o comando:
```bash
git add .
```

Para realizar o commit, use o comando:
```bash
git commit -m "fix: adicionando redes sociais ao menu"
```

Para enviar as alterações para o repositório remoto, use o comando:
```bash
git push 
```

Para rodar o projeto, use o comando:
```bash
npm run start-windows
```

Verificar as portas que estão sendo utilizadas:
```bash
netstat -ano | findstr :3000
```

Para finalizar a porta:
```bash
taskkill /F /PID 26920
```