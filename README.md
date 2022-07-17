### Create migration

- yarn typeorm migration:create src/database/migrations/CreateCategory 
- yarn typeorm migration:create src/database/migrations/CreateSpecifications
- yarn typeorm migration:create src/database/migrations/CreateUsers
- yarn typeorm migration:create src/database/migrations/AlterUserDeleteUsername

### Run migration

- yarn migration:run

### Revert migration

- yarn migration:revert