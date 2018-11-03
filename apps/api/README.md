API
===

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

## Development
### Run

#### Run Dev Mode
```bash
# start using nx setup
ng serve api
# start using nodemon
npm run api:start:dev
```

### Build
> build for production env 
```bash
NODE_ENV=production ng build api
```

### Test
> coverage will be generate in coverage/apps/api
```bash
# unit tests
ng test api
```


### Generate
> scaffolding nest artifacts <br/>

```bash
# check of nest installed
nest info

# scaffold project module
nest generate module hero --dry-run
nest generate controller hero --dry-run
nest generate service project hero --dry-run
nest generate class hero --dry-run

# scaffold core module
nest g module core --dry-run
nest g guard auth core --dry-run
nest g exception auth --dry-run
```

### Test
> coverage will be generate in coverage/apps/api
```bash
# unit tests
ng test api
```


### Reference
* Awesome Nest
  * https://github.com/juliandavidmr/awesome-nest
* NestJS Samples
  * https://github.com/nestjs/nest/tree/master/sample
* TypeORL Samples
  * https://github.com/typeorm/typeorm/tree/master/sample
