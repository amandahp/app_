from data_base_connection import connect_to_db
from flask import Flask, request, json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)


@app.route("/", methods=['POST', 'GET'])
@cross_origin()
def started_data_user():
    myconn = connect_to_db()
    cur = myconn.cursor()
    if request.method == "POST":
        obj = request.get_json()
        name = obj['name']
        email = obj['email']
        password = obj['password']
        sql = "insert into User(name, email, password) values (%s, %s, %s);" # noqa
        val = (f"{name}", f"{email}", f"{password}")
        cur.execute(sql, val)
        try:
            myconn.commit()
        except Exception:
            myconn.rollback()
            print(cur.rowcount, "record inserted!")
        return "Success Post"
    if request.method == "GET":
        try:
            cur.execute("select * from User")
            result = cur.fetchall()
            res = [''.join(i) for i in result]
        except Exception:
            myconn.rollback()
        myconn.close()
        return json.dumps(res)


if __name__ == '__main__':
    app.run()


started_data_user()
