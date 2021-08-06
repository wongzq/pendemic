@ECHO OFF

IF "%1"=="pendemic" (
  CALL ./script docker nginx
  CALL ./script docker next
  CALL ./script scp docker-compose
  CALL ./script scp sql
)

IF "%1"=="docker" (
  IF "%2"=="next" (
    CALL docker build -f Dockerfile.next -t wongzq/pendemic-next .
    CALL docker push wongzq/pendemic-next
  )
  IF "%2"=="nginx" (
    CALL docker build -f Dockerfile.nginx -t wongzq/pendemic-nginx .
    CALL docker push wongzq/pendemic-nginx
  )
)

IF "%1"=="scp" (
  IF "%2"=="docker-compose" (
    CALL scp docker-compose.yml root@vultr.wongzq.com:/home/wongzq/pendemic/docker-compose.yml
  )
  IF "%2"=="sql" (
    CALL scp -r database/sql root@vultr.wongzq.com:/home/wongzq/pendemic/data
  )
  IF "%2"=="sqldump" (
    CALL scp -r root@vultr.wongzq.com:/home/wongzq/pendemic/data/sqldump database
  )
)

IF "%1"=="sequelize" (
  CALL .\app\node_modules\.bin\sequelize-auto -h "pendemic.wongzq.com" -d pendemic -u root -x -p 3306  --e mysql -o "./app/backend/models/mysql" -l ts
)