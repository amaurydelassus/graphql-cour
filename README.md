# Cyrill62 repository for GraphQL examples 
# TP GraphQL Mara, Luc et Amaury 

## TaskManager

### Commande docker :

Postgres : docker run -d --rm --name pg11 -p 5432:5432 -e POSTGRES_USER=adelassus -e POSTGRES_HOST_AUTH_METHOD=trust -v pgdata11:/var/lib/postgresql/data postgres:11
Redis : docker run -d --rm --name redis5 -p 6379:6379 redis:5

### With Node.js / TypeScript / Prisma

Enter the directory `task-manager/backend-prisma/` :
- yarn
- yarn migrate
- yarn generate
- yarn start

In new terminal, enter the directory `task-manager/frontend-gatsby/` :
- yarn
- yarn start

# DONE:
- server back and front
- call by appolo and client
[![Image](https://i.goopics.net/lrb265.png)](https://goopics.net/i/lrb265)
- create user account in database by frontend (with GraphQL) but no use bcrypt
[![Image](https://i.goopics.net/cafh2r.png)](https://goopics.net/i/cafh2r)
- add Login Resolver with bcrypt
- use bcrypt for sign up
- use bcrypt for sign in

# DO:


# TO DO :
- create task with front
- assign task
- comment task
- replay comment
- change the status of a task
- add subscription for :
  - assing task
  - comment task
  - replay comment task
  - finsh task
  - task is deadline nearing
- task is reading or not reding by user