# Node with only TypeScript example


## Do It Yourself 

Must have: 
* node
* yarn 
* tsc

Make sure you have all

```console
  node -v
  yarn -v
  tsc -v
```

1. Open empty folder with console or terminal in your desktop 

```console
  yarn init -y
```

2. Intsall necessary dev dependencies 

```console
  yarn add -D @types/node ts-node typescript
```

3. Create tsconfig.json file

```console
  tsc --init
```

4. You're ready to install nodemon 

```console
  yarn add -D nodemon
```
In your package.json add script to start

```json
"scripts": {
    "start": "nodemon index.ts"
    
  },
```
5. Finally run server with 
```console
  yarn start
```
## Read More

Read more click [here](https://blog.logrocket.com/typescript-with-node-js-and-express/)
