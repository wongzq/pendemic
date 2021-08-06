if [ $# -eq 0 ]
then
  echo Please provide database name
else
  mysqldump -u root -p --no-create-info $1 > /sqldump/$1.dump.sql
  echo /sqldump/$1.dump.sql
fi