from flask import Flask, request
from flask_migrate import Migrate
from models import db, Investor, Company, Message

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///development.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)


#! INVESTOR ROUTES

@app.post('/investors')
def add_investor():
    # try:
        data = request.json
        # password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        investor = Investor(
            name=data['name'],
            username=data['username'],
            email=data['email'],
            password=data['password']
            # password=password_hash
            # profile_pic=data['profile_pic']
        )
        db.session.add(investor)
        db.session.commit()
        # session['investor_id'] = investor.id
        return investor.to_dict(), 201
    # except ValueError:
    #     return {'Error': '400: Invalid input'}, 400
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.post('/login_investors')
def login_investors():
    data = request.json
    investor = Investor.query.where(Investor.username == data['username']).first()
    # if investor and bcrypt.check_password_hash(investor.password, data['password']):
    #     session['investor_id'] = investor.id
    return investor.to_dict(), 201
    # else:
    #     return {'Message': "Invalid username or password"}, 401


#! COMPANY ROUTES

@app.get('/companies')
def get_companies():
    # try:
        companies = Company.query.all()
        return [company.to_dict() for company in companies], 200
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.post('/companies')
def add_company():
    # try:
        data = request.json
        # password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        company = Company(
            name=data['name'],
            email=data['email'],
            password=data['password']
            # password=password_hash
            # profile_pic=data['profile_pic']
            # pic1=data['pic1']
            # pic2=data['pic2']
            # pic3=data['pic3']
            # pic4=data['pic4']
            # pic5=data['pic5']
        )
        db.session.add(company)
        db.session.commit()
        # session['company_id'] = company.id
        return company.to_dict(), 201
    # except ValueError:
    #     return {'Error': '400: Invalid input'}, 400
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.post('/login_companies')
def login_companies():
    data = request.json
    company = Company.query.where(Company.name == data['name']).first()
    # if investor and bcrypt.check_password_hash(company.password, data['password']):
    #     session['company_id'] = company.id
    return company.to_dict(), 201
    # else:
    #     return {'Message': "Invalid username or password"}, 401
    


if __name__ == '__main__':
    app.run(port=3001, debug=True)
    