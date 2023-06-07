import os
from dotenv import load_dotenv
load_dotenv()

from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from flask_bcrypt import Bcrypt



from flask import Flask, request
from flask_migrate import Migrate
from models import db, Investor, Company, Message

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///development.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
# print(os.getenv('JWT_SECRET_KEY'))
migrate = Migrate(app, db)
db.init_app(app)

jwt = JWTManager(app)
bcrypt = Bcrypt(app)

app.secret_key = os.getenv("PASSWORD_SECRET_KEY")


#! INVESTOR ROUTES

@app.post('/investors')
def add_investor():
    try:
        data = request.json
        password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        investor = Investor(
            name=data['name'],
            username=data['username'],
            email=data['email'],
            password=password_hash,
            profile_pic=data['profile_pic']
        )

        investors = Investor.query.all()
        for inv in investors:
            if inv.username == investor.username:
                pass
        db.session.add(investor)
        db.session.commit()
        return investor.to_dict(), 201

    except:
        return {'Error': 'That username is taken. Username must be unique.'}, 401

@app.post('/login_investors')
def login_investors():
    data = request.json
    investor = Investor.query.where(Investor.username == data['username']).first()
    print(investor)
    if investor and bcrypt.check_password_hash(investor.password, data['password']):
          token = create_access_token(identity=investor.id)
          return {
                "investor" : investor.to_dict(),
                "token" : token
          }, 201
    else: 
          return {"message" : "Invalid username or password"}, 401
    
@app.get('/check_token_investor')
@jwt_required()
def check_token_investor():
    id = get_jwt_identity()
    investor = Investor.query.where(Investor.id == id).first()
    if investor:
        return {"investor": investor.to_dict()}, 200
    else:
        return {'Error': 'Unauthorized'}, 401


#! COMPANY ROUTES

@app.get('/companies')
def get_companies():
    # try:
        companies = Company.query.all()
        return [company.to_dict() for company in companies], 200
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.get('/companies/<int:id>')
def get_company_by_id(id):
      company = Company.query.get(id)
      return company.to_dict(), 200

@app.post('/companies')
def add_company():
    try:
        data = request.json
        password_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        company = Company(
            name=data['name'],
            email=data['email'],
            password=password_hash,
            worth=data['worth'],
            pic1=data['pic1']
            # profile_pic=data['profile_pic']
            # pic2=data['pic2']
            # pic3=data['pic3']
            # pic4=data['pic4']
            # pic5=data['pic5']
        )

        companies = Company.query.all()
        for com in companies:
            if com.name == company.name:
                pass

        db.session.add(company)
        db.session.commit()
        return company.to_dict(), 201

    except:
            return {'Error': 'That company name is taken. Company name must be unique.'}, 401

@app.post('/login_companies')
def login_companies():
    data = request.json
    company = Company.query.where(Company.name == data['name']).first()
    print(company)
    if company and bcrypt.check_password_hash(company.password, data['password']):
        token = create_access_token(identity=company.id)
        return {
                "company" : company.to_dict(),
                "token_company" : token
          }, 201
    else: 
          return {"message" : "Invalid company name or password"}, 401
    
@app.get('/check_token_company')
@jwt_required()
def check_token_company():
    id = get_jwt_identity()
    company = Company.query.where(Company.id == id).first()
    if company:
        return {"company": company.to_dict()}, 200
    else:
        return {'Error': 'Unauthorized'}, 401
    

#! MESSAGE ROUTES

@app.get('/messages')
def get_messages():
    # try:
        messages = Message.query.all()
        return [message.to_dict() for message in messages], 200
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.post('/messages')
def post_messages():
    # try:
        data = request.json
        new_message = Message(
             text= data["text"], 
             sent_by_user=data["sent_by_user"], 
             investor_id=data["investor_id"],
             company_id=data["company_id"]
             )
        db.session.add(new_message)
        db.session.commit()
        return new_message.to_dict(), 200
    # except:
    #     return {'Error': '404: Request not found'}, 404

@app.get('/investors/<int:id>/messages')
def get_investors_messages(id):
      messages = Message.query.filter_by(investor_id = id).group_by(Message.company_id).all()
    #   messages = Message.query.filter_by(investor_id = id).all()
    #   import ipdb; ipdb.set_trace()
      return [message.to_dict() for message in messages], 200

@app.get('/messages/<int:id>/<int:company_id>')
def get_specific_company_msgs(id, company_id):
     messages = Message.query.where(Message.investor_id == id, Message.company_id == company_id).order_by(Message.created_at.desc()).all()
    #  print(messages)
     return [message.to_dict() for message in messages], 200


@app.get('/companies/<int:id>/messages')
def get_companies_messages(id):
      messages = Message.query.filter_by(company_id = id).group_by(Message.investor_id).all()
    #   messages = Message.query.filter_by(investor_id = id).all()
    #   import ipdb; ipdb.set_trace()
      return [message.to_dict() for message in messages], 200


if __name__ == '__main__':
    app.run(port=3001, debug=True)
    















# session['investor_id'] = investor.id
    # except ValueError:
    #     return {'Error': '400: Invalid input'}, 400
    # except:
    #     return {'Error': '404: Request not found'}, 404



     #     session['investor_id'] = investor.id
    # return investor.to_dict(), 201
    # else:
    #     return {'Message': "Invalid username or password"}, 401


# session['company_id'] = company.id
    # except ValueError:
    #     return {'Error': '400: Invalid input'}, 400
    # except:
    #     return {'Error': '404: Request not found'}, 404