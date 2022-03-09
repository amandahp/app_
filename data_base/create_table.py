import mariadb
import os
from dotenv import load_dotenv

load_dotenv()

myconn = mariadb.connect(host=os.getenv("host"), user=os.getenv("user"), passwd=os.getenv("passwd"), database="App") # noqa

cur = myconn.cursor()

try:
    #dbs = cur.execute("create table User(name varchar(100) not null, email varchar(100) not null, password varchar(100) not null)") # noqa
    tbls = cur.execute("show full tables;")
    clmns = cur.execute("show columns from User;")
except Exception:
    myconn.rollback()

for x in cur:
    print(x)

myconn.close()
