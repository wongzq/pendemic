@ECHO OFF

IF "%1"=="docker" (
  IF "%2"=="pendemic" (
    CALL ./dockerbuild nginx
    CALL ./dockerbuild app
  )

  IF "%2"=="app" (
    CALL docker build -f Dockerfile.app -t wongzq/pendemic-app .
    CALL docker push wongzq/pendemic-app
  )

  IF "%2"=="nginx" (
    CALL docker build -f Dockerfile.nginx -t wongzq/pendemic-nginx .
    CALL docker push wongzq/pendemic-nginx
  )
)

IF "%1"=="scp" (
  CALL scp docker-compose.yml root@vultr.wongzq.com:/home/wongzq/pendemic
)