@ECHO OFF

IF "%1"=="scp" (
  IF "%2"=="sql" (
    CALL scp -r database/sql root@vultr.wongzq.com:/home/wongzq/pendemic/data
  )
  IF "%2"=="dump" (
    CALL scp -r root@vultr.wongzq.com:/home/wongzq/pendemic/data/dump database
  )
)

IF "%1"=="sequelize" (
  CALL .\app\node_modules\.bin\sequelize-auto -h "pendemic.wongzq.com" -d pendemic -u root -x -p 3306  --e mysql -o "./app/backend/models/mysql" -l ts
)